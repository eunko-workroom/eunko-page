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
          여기서 서브메뉴를 생성할 수 있습니다 <br /> 각각의 인풋에 해당하는
          값을 넣어주신후 맨 마지막에 서브메뉴 생성하기 버튼을 누르면 서브메뉴가
          생성됩니다.
          <br />
          그리고 서브메뉴에 들어가는 각각의 이미지는 아래의 이미지 추가 버튼을
          통해서 추가할 수 있습니다. 이미지 값을 다 채우신 뒤에 추가 버튼을
          누르면 만들려고 하는 서브메뉴에 이미지가 추가가 됩니다. 필요하신 만큼
          추가하시면 됩니다.
          <br /> (이미지를 추가하시고 마지막에 서브메뉴 생성하기 버튼을
          누르셔야됩니다.)
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
      <hr />
      <Section>
        <button onClick={handleDoneButtonClick}>서브메뉴 생성하기</button>
      </Section>
    </>
  );
}
