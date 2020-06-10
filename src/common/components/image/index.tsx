import React from "react";
import {
  Wrapper,
  Image,
  Content,
  LeftButtonWrapper,
  RightButtonWrapper,
  LeftButton,
  RightButton,
  Title,
  SubTitle,
  Date,
  Size,
  Feature,
  ImageInfo,
  Left,
  Right,
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
      <Image src={selectedImage.src} alt={selectedImage.title} />
      <Content>
        {!hidePrevButton && (
          <LeftButtonWrapper onClick={handlePrevButtonClick}>
            <LeftButton />
          </LeftButtonWrapper>
        )}
        {!hideNextButton && (
          <RightButtonWrapper onClick={handleNextButtonClick}>
            <RightButton />
          </RightButtonWrapper>
        )}
        <Title>{decodeURIComponent(selectedImage.title)}</Title>
        {selectedImage.type === "image" && (
          <>
            <SubTitle>{decodeURIComponent(selectedImage.subTitle)}</SubTitle>
            <ImageInfo>
              <Left>
                <Date>Date</Date>
                <Size>Size</Size>
                <Feature>Feature</Feature>
              </Left>
              <Right>
                <Date>{decodeURIComponent(selectedImage.date)}</Date>
                <Size>{decodeURIComponent(selectedImage.size)}</Size>
                <Feature>{decodeURIComponent(selectedImage.feature)}</Feature>
              </Right>
            </ImageInfo>
          </>
        )}
      </Content>
    </Wrapper>
  );
};

export default ImageController;
