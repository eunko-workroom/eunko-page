import React from "react";

import { Section, Text, Input, Left, Right } from "./styled";

import { useProps, useHandlers, useEffects } from "./hooks";

export default function UploadFile(props: { contents: Common.TabContent }) {
  const hookProps = useProps(props);
  const hookHandlers = useHandlers(hookProps);
  useEffects();

  const {
    menu,
    category,
    subMenuName,
    subMenuId,
    imageId,
    imageTitle,
    imageSubTitle,
    imageDate,
    imageSize,
    imageFeature,

    imageInputRef,
  } = hookProps;
  const {
    handleChangeMenu,
    handleChangeCategory,
    handleChangeSubMenuName,
    handleChangeSubMenuId,
    handleChangeImageId,
    handleChangeImageTitle,
    handleChangeImageSubTitle,
    handleChangeImageDate,
    handleChangeImageSize,
    handleChangeImageFeature,
    handleChangeImage,
    handleAddImage,
    handleDoneButtonClick,
  } = hookHandlers;
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
            placeholder="다른 서브메뉴들과 겹치지 않도록 해주세요(영어나 숫자만 띄어쓰기 특수문자 제외 !)"
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
            placeholder="이미 입력한 이미지 아이디와 겹치지 않도록 해주세요(영어나 숫자만 띄어쓰기 특수문자 제외 !)"
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

          <Input
            type="file"
            accept="image/*"
            onChange={handleChangeImage}
            ref={imageInputRef}
          />
        </Right>
      </Section>
      <Section>
        <button onClick={handleDoneButtonClick}>완료</button>
      </Section>
    </>
  );
}
