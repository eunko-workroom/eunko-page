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
  images?: Common.Image[];
  handleNext?(): void;
  handlePrev?(): void;
}

const ImageController: React.FC<IProps> = ({
  images,
  handleNext,
  handlePrev,
}) => {
  return (
    <>
      {(images || []).map((image) => (
        <Wrapper>
          <Image />
          <Content>
            <ButtonWrapper>
              {handlePrev && <LeftButton onClick={handlePrev}></LeftButton>}
              {handleNext && <RightButton onClick={handleNext}></RightButton>}
            </ButtonWrapper>
            <Title>2018. Draw Seoul. Sharing Seminar</Title>
            <SubTitle>Seoul Metropolitan Government (Book)</SubTitle>
            <Date>2018.06</Date>
            <Size>150X195mm</Size>
            <Feature>320page+Perfect Binding</Feature>
          </Content>
        </Wrapper>
      ))}
    </>
  );
};

export default ImageController;
