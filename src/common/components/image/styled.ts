import styled, { keyframes } from "styled-components";
const FadeIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  animation-name: ${FadeIn};
  animation-duration: 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 16px 0;
  animation-name: ${FadeIn};
  animation-duration: 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

export const LeftButtonWrapper = styled.div`
  position: absolute;
  top: -10px;
  right: 36px;
  font-size: 35px;
  cursor: pointer;
`;
export const RightButtonWrapper = styled.div`
  position: absolute;
  top: -10px;
  right: 0;
  font-size: 35px;
  cursor: pointer;
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  font-size: 17px;
`;

export const ImageInfo = styled.div`
  display: flex;
`;

export const Left = styled.div`
  text-align: left;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  font-size: 15px;
  color: #c4c4c4;
`;

export const SubTitle = styled(Text)``;

export const Date = styled(Text)``;

export const Size = styled(Text)``;
export const Feature = styled(Text)``;
