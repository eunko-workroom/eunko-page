import React from "react";

import { Section, Text, Input, Left, Right } from "./styled";
import { useUploadImage } from "../../common/hooks/useS3";

export default function UploadFile({
  contents,
}: {
  contents: Common.TabContent;
}) {
  const uploadFile = useUploadImage();
  const [menu, setMenu] = React.useState<string>("Photography");
  const handleChangeMenu = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMenu(e.target.value);
    },
    []
  );
  const selectedMenuData = React.useMemo(
    () => contents[menu as Common.MenuType],
    [contents, menu]
  );

  const [category, setCategory] = React.useState<string>("");
  const handleChangeCategory = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCategory(e.target.value);
    },
    []
  );

  const [subMenuName, setSubMenuName] = React.useState<string>("");
  const handleChangeSubMenuName = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSubMenuName(e.target.value);
    },
    []
  );

  const [subMenuId, setSubMenuId] = React.useState<string>("");
  const handleChangeSubMenuId = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const id = e.target.value;

      if (selectedMenuData.findIndex((target) => target.id === id) !== -1) {
        alert("이미 있는 아이디에요 !");
      } else {
        setSubMenuId(id);
      }
    },
    [selectedMenuData]
  );

  const [images, setImages] = React.useState<Common.Image[]>([]);

  const [imageId, setImageId] = React.useState<string>("");
  const handleChangeImageId = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const id = e.target.value;

      if (images.findIndex((target) => target.id === id) !== -1) {
        alert("이미 있는 아이디에요 !");
      } else {
        setImageId(id);
      }
    },
    [images]
  );

  const [imageTitle, setImageTitle] = React.useState<string>("");
  const handleChangeImageTitle = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageTitle(e.target.value);
    },
    []
  );

  const [imageSubTitle, setImageSubTitle] = React.useState<string>("");
  const handleChangeImageSubTitle = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageSubTitle(e.target.value);
    },
    []
  );

  const [imageDate, setImageDate] = React.useState<string>("");
  const handleChangeImageDate = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageDate(e.target.value);
    },
    []
  );

  const [imageSize, setImageSize] = React.useState<string>("");
  const handleChangeImageSize = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageSize(e.target.value);
    },
    []
  );

  const [imageFeature, setImageFeature] = React.useState<string>("");
  const handleChangeImageFeature = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageFeature(e.target.value);
    },
    []
  );

  const [image, setImage] = React.useState<File | null>(null);
  const handleChangeImage = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImage(e.target.files![0]);
    },
    []
  );

  const handleAddImage = React.useCallback(async () => {
    if (image) {
      const uploadedImage = await uploadFile(
        image,
        image.name,
        image.type,
        imageId
      );
      console.log(uploadedImage);
      setImages([
        ...images,
        {
          type: "image",
          id: imageId,
          src: uploadedImage as string,
          title: imageTitle,
          subTitle: imageSubTitle,
          date: imageDate,
          size: imageSize,
          feature: imageFeature,
        },
      ]);
    }
  }, [
    image,
    imageDate,
    imageFeature,
    imageId,
    imageSize,
    imageSubTitle,
    imageTitle,
    images,
    uploadFile,
  ]);

  return (
    <>
      <Section>
        <Left>
          <Text>속하는 메뉴 이름</Text>
          <Text>속하는 카테고리 이름</Text>
          <Text>서브 메뉴의 이름</Text>
          <Text>서브 메뉴 아이디</Text>
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
          <Input
            type="text"
            placeholder="기존에 있던 카테고리이거나 새로운 카테고리를
            추가해주세요"
            onChange={handleChangeCategory}
            value={category}
          />
          <Input
            type="text"
            onChange={handleChangeSubMenuName}
            value={subMenuName}
          />
          <Input
            type="text"
            placeholder="다른 카테고리와 겹치지 않도록 해주세요"
            value={subMenuId}
            onChange={handleChangeSubMenuId}
          />
        </Right>
      </Section>

      <Section>
        <h1>Image 추가</h1>
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
          <button onClick={handleAddImage}>추가하기</button>
        </Left>
        <Right>
          <Input
            type="text"
            placeholder="이미 입력한 이미지 아이디와 겹치지 않도록 해주세요"
            value={imageId}
            onChange={handleChangeImageId}
          />
          <Input
            type="text"
            onChange={handleChangeImageTitle}
            value={imageTitle}
          />
          <Input
            type="text"
            onChange={handleChangeImageSubTitle}
            value={imageSubTitle}
          />
          <Input
            type="text"
            onChange={handleChangeImageDate}
            value={imageDate}
          />
          <Input
            type="text"
            onChange={handleChangeImageSize}
            value={imageSize}
          />

          <Input
            type="text"
            onChange={handleChangeImageFeature}
            value={imageFeature}
          />

          <Input type="file" accept="image/*" onChange={handleChangeImage} />
        </Right>
      </Section>
      <Section>
        <button>완료</button>
      </Section>
    </>
  );
}
