import React from "react";

import { Section, Text, Input, Left, Right } from "./styled";

import { useProps, useHandlers } from "./hooks";

export default function UploadFile(props: { contents: Common.TabContent }) {
  const hookProps = useProps(props);
  const hookHandlers = useHandlers(hookProps);

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
        <Text>
          Sub Menu 추가
          <br />
          <br />
          <h3>하나의 서브메뉴 생성 흐름</h3>
          <br />
          1. 서브메뉴를 정의하는 값을 입력한다.
          <br />
          2. 이미지를 정의하는 값을 입력한다.
          <br />
          3. "이미지 추가" 버튼을 클릭한 후 "이미지 업로드 완료" 알림을 확인한다.
          <br />
          4. 추가하고자 하는 이미지 만큼 2 ~ 3 번을 반복한다.
          <br />
          5. "서브메뉴 생성" 버튼을 클릭한 후 "서브메뉴 업로드 완료" 알림을 확인한다.
          <br />
          6. 페이지 새로고침을 해준다. (중요)
        </Text>
      </Section>
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
      <hr />
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
          <button onClick={handleAddImage}>이미지 추가</button>
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
      <hr />
      <Section>
        <button onClick={handleDoneButtonClick}>서브메뉴 생성</button>
      </Section>
    </>
  );
}
