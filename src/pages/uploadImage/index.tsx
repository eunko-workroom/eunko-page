import React from "react";

import { Section, Text, Input, Left, Right } from "./styled";

import { useUploadToS3 } from "../../common/hooks/useS3";
import { safeStringifyJSON } from "../../common/components/helpers/safeJSON";
import useCertification from "../../common/hooks/useCertification";
import { bucketName, bucketUrl } from "../../common/constants/s3";

export default function DeleteFile({
  contents,
}: {
  contents: Common.TabContent;
}) {
  const uploadFile = useUploadToS3();

  const [menu, setMenu] = React.useState<string>("Photography");
  const handleChangeMenu = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMenu(e.target.value);
    },
    [setMenu]
  );

  const [selectedId, setSelectedMenuId] = React.useState<string>("");

  const handleChangeSelectedId = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedMenuId(e.target.value);
    },
    []
  );

  const selectedMenuData = React.useMemo(
    () => contents[menu as Common.MenuType],
    [contents, menu]
  );

  const imageInputRef = React.useRef<HTMLInputElement>(null);
  const [image, setImage] = React.useState<File | null>(null);
  const [imageId, setImageId] = React.useState<string>("");
  const [imageTitle, setImageTitle] = React.useState<string>("");
  const [imageSubTitle, setImageSubTitle] = React.useState<string>("");
  const [imageDate, setImageDate] = React.useState<string>("");
  const [imageSize, setImageSize] = React.useState<string>("");
  const [imageFeature, setImageFeature] = React.useState<string>("");

  const handleChangeImage = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImage(e.target.files![0]);
    },
    [setImage]
  );

  const handleChangeImageId = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const id = e.target.value;
      const selectedSubMenu = selectedMenuData.find(
        (subMenu) => subMenu.id === selectedId
      );

      if (!selectedSubMenu) {
        return;
      }

      if (
        selectedSubMenu.images.findIndex(
          (target) => target.id === `${menu}_${selectedId}_${id}`
        ) !== -1
      ) {
        alert("이미 있는 아이디에요 !");
      } else {
        setImageId(id);
      }
    },
    [menu, selectedId, selectedMenuData]
  );

  const handleChangeImageTitle = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageTitle(e.target.value);
    },
    [setImageTitle]
  );

  const handleChangeImageSubTitle = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageSubTitle(e.target.value);
    },
    [setImageSubTitle]
  );

  const handleChangeImageDate = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageDate(e.target.value);
    },
    [setImageDate]
  );

  const handleChangeImageSize = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageSize(e.target.value);
    },
    [setImageSize]
  );

  const handleChangeImageFeature = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageFeature(e.target.value);
    },
    [setImageFeature]
  );

  const handleSubmit = React.useCallback(async () => {
    const selectedSubMenu = selectedMenuData.find(
      (subMenu) => subMenu.id === selectedId
    );

    if (!selectedSubMenu || !image) {
      alert("올바른 서브메뉴/이미지를 선택해주세요");
      return;
    }

    try {
      const uploadedImage = await uploadFile({
        Body: image,
        Key: `${menu}_${selectedId}_${imageId}.${image.type.split("/")[1]}`,
        ContentType: image.type,
        Bucket: "eunko.workroom",
        ContentEncoding: "utf-8",
      });

      const uploadBody = {
        ...contents,
        [menu as Common.MenuType]: selectedMenuData.map((subMenu) => {
          if (subMenu.id === selectedId) {
            return {
              ...subMenu,
              images: [
                ...subMenu.images,
                {
                  id: `${menu}_${selectedId}_${imageId}`,
                  src: `${bucketUrl}${uploadedImage.Key}`,
                  title: encodeURIComponent(imageTitle),
                  subTitle: imageSubTitle
                    ? encodeURIComponent(imageSubTitle)
                    : undefined,
                  date: imageDate ? encodeURIComponent(imageDate) : undefined,
                  size: imageSize ? encodeURIComponent(imageSize) : undefined,
                  feature: imageFeature
                    ? encodeURIComponent(imageFeature)
                    : undefined,
                },
              ],
            };
          } else {
            return subMenu;
          }
        }),
      };
      const stringData = safeStringifyJSON(uploadBody);

      await uploadFile({
        Body: new Blob([stringData], { type: "application/json" }),
        Key: "project.json",
        Bucket: bucketName,
        ContentType: "application/json; charset=UTF-8",
        ContentEncoding: "utf-8",
      });

      alert("업로드 완료");
    } catch (err) {
      console.error(err);
    }
  }, [
    contents,
    image,
    imageDate,
    imageFeature,
    imageId,
    imageSize,
    imageSubTitle,
    imageTitle,
    menu,
    selectedId,
    selectedMenuData,
    uploadFile,
  ]);

  useCertification();

  return (
    <>
      <Section>
        <Text>
          여기서 서브메뉴에 이미지를 추가할 수 있습니다.. <br /> 드롭다운에
          표시되어 있는 서브메뉴 아이디 중에서 하나를 선택하고, 이미지를
          추가하면 됩니다..
        </Text>
      </Section>
      <Section>
        <Left>
          <Text>속하는 메뉴 이름</Text>
          <Text>추가하고싶은 싶은 카테고리</Text>
        </Left>
        <Right>
          <div style={{ display: "flex" }}>
            <div>
              <Input
                type="radio"
                id="Photography"
                value="Photography"
                name="Photography"
                checked={menu === "Photography"}
                onChange={handleChangeMenu}
              />
              <label>Photography</label>
            </div>
            <div>
              <Input
                type="radio"
                id="Editorial"
                value="Editorial"
                name="Editorial"
                checked={menu === "Editorial"}
                onChange={handleChangeMenu}
              />
              <label>Editorial</label>
            </div>
            <div>
              <Input
                type="radio"
                id="More"
                value="More"
                name="More"
                checked={menu === "More"}
                onChange={handleChangeMenu}
              />
              <label>More</label>
            </div>
          </div>
          <select name="select-submenu-id" onChange={handleChangeSelectedId}>
            <option value="">선택해주세요</option>
            {selectedMenuData.map((subMenu) => (
              <option value={subMenu.id}>{`${decodeURIComponent(
                subMenu.menuTitle
              )}(${subMenu.id})`}</option>
            ))}
          </select>
        </Right>
      </Section>

      <Section>
        <Left>
          <Text>이미지 아이디</Text>
          <Text>이미지 이름</Text>
          <Text>이미지 보조 이름</Text>
          <Text>날짜</Text>
          <Text>사이즈</Text>
          <Text>피쳐</Text>
          <Text>이미지</Text>
        </Left>
        <Right>
          <input
            type="text"
            placeholder="이미 입력한 이미지 아이디와 겹치지 않도록 해주세요(영어나 숫자만 띄어쓰기 특수문자 제외 !)"
            value={imageId}
            onChange={handleChangeImageId}
          />
          <input
            type="text"
            onChange={handleChangeImageTitle}
            value={imageTitle}
          />
          <input
            type="text"
            onChange={handleChangeImageSubTitle}
            value={imageSubTitle}
          />
          <input
            type="text"
            onChange={handleChangeImageDate}
            value={imageDate}
          />
          <input
            type="text"
            onChange={handleChangeImageSize}
            value={imageSize}
          />

          <input
            type="text"
            onChange={handleChangeImageFeature}
            value={imageFeature}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleChangeImage}
            ref={imageInputRef}
          />
        </Right>
      </Section>

      <hr />
      <Section>
        <button onClick={handleSubmit}>업로드</button>
      </Section>
    </>
  );
}
