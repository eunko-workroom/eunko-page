import React from "react";

import { Section, Text, Input, Left, Right } from "./styled";

import { useUploadToS3, useDeleteS3File } from "../../common/hooks/useS3";
import { safeStringifyJSON } from "../../common/components/helpers/safeJSON";
import useCertification from "../../common/hooks/useCertification";
import { bucketName, bucketUrl } from "../../common/constants/.s3";

export default function DeleteFile({
  contents,
}: {
  contents: Common.TabContent;
}) {
  const uploadFile = useUploadToS3();
  const deleteFile = useDeleteS3File();
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

  const handleSubmit = React.useCallback(async () => {
    if (
      window.confirm(
        "선택한 서브메뉴안에 있는 이미지까지 전체 삭제됩니다. 삭제하시겠습니까?"
      )
    ) {
      const selectedSubMenu = selectedMenuData.find(
        (subMenu) => subMenu.id === selectedId
      );

      if (!selectedSubMenu) {
        alert("올바른 서브메뉴를 선택해주세요");
        return;
      }

      try {
        await selectedSubMenu.images.forEach(
          async (image) =>
            await deleteFile({
              Bucket: bucketName,
              Key: image.src.replace(bucketUrl, ""),
            })
        );

        const uploadBody = {
          ...contents,
          [menu as Common.MenuType]: selectedMenuData.filter(
            (subMenu) => subMenu.id !== selectedId
          ),
        };
        const stringData = safeStringifyJSON(uploadBody);

        await uploadFile({
          Body: new Blob([stringData], { type: "application/json" }),
          Key: "project.json",
          Bucket: bucketName,
          ContentType: "application/json; charset=UTF-8",
          ContentEncoding: "utf-8",
        });

        alert("삭제완료");
      } catch (err) {
        console.error(err);
      }
    }
  }, [contents, deleteFile, menu, selectedId, selectedMenuData, uploadFile]);

  useCertification();

  return (
    <>
      <Section>
        <Text>
          여기서 서브메뉴를 삭제할 수 있습니다. <br /> 드롭다운에 표시되어 있는
          서브메뉴 아이디 중에서 하나를 클릭하면 지워집니다.
        </Text>
      </Section>
      <Section>
        <Left>
          <Text>속하는 메뉴 이름</Text>
          <Text>삭제하고 싶은 카테고리</Text>
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
              <option
                value={subMenu.id}
              >{`${subMenu.menuTitle}(${subMenu.id})`}</option>
            ))}
          </select>
        </Right>
      </Section>

      <hr />
      <Section>
        <button onClick={handleSubmit}>삭제</button>
      </Section>
    </>
  );
}
