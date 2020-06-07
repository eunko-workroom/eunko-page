import React from "react";
import {
  Wrapper,
  Image,
  Content,
  ButtonWrapper,
  LeftButton,
  RightButton,
  Title,
  SubTitle,
  Date,
  Size,
  Feature,
} from "./styled";
import { useSelectedImageState } from "../../hooks/usePageState";

interface IProps {
  menu: Common.ISubMenu;
}

const ImageController: React.FC<IProps> = ({ menu }) => {
  const {
    handlePrevButtonClick,
    handleNextButtonClick,
    hideNextButton,
    hidePrevButton,
    selectedImage,
  } = useSelectedImageState(menu);
  if (!selectedImage) {
    return null;
  }

  return (
    <Wrapper>
      <Image />
      <Content>
        <ButtonWrapper>
          {!hidePrevButton && (
            <LeftButton onClick={handlePrevButtonClick}></LeftButton>
          )}
          {!hideNextButton && (
            <RightButton onClick={handleNextButtonClick}></RightButton>
          )}
        </ButtonWrapper>
        <Title>{selectedImage.title}</Title>
        {selectedImage.type === "image" && (
          <>
            <SubTitle>{selectedImage.subTitle}</SubTitle>
            <Date>{selectedImage.date}</Date>
            <Size>{selectedImage.size}</Size>
            <Feature>{selectedImage.feature}</Feature>
          </>
        )}
      </Content>
    </Wrapper>
  );
};

export default ImageController;
