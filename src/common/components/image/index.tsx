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

interface IProps {
  image: Common.Image;
  handleNext?(): void;
  handlePrev?(): void;
}

const ImageController: React.FC<IProps> = ({
  image,
  handleNext,
  handlePrev,
}) => {
  return (
    <Wrapper>
      <Image />
      <Content>
        <ButtonWrapper>
          {handlePrev && <LeftButton onClick={handlePrev}></LeftButton>}
          {handleNext && <RightButton onClick={handleNext}></RightButton>}
        </ButtonWrapper>
        <Title>{image.title}</Title>
        {image.type === "image" && (
          <>
            <SubTitle>{image.subTitle}</SubTitle>
            <Date>{image.date}</Date>
            <Size>{image.size}</Size>
            <Feature>{image.feature}</Feature>
          </>
        )}
      </Content>
    </Wrapper>
  );
};

export default ImageController;
