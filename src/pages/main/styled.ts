import styled, { keyframes } from "styled-components";
import { MEDIA_QUERY } from "../../common/constants/responsive";

const FadeIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
`;

export const Text = styled.div`
  margin: 0 16px 0 0;
  font-size: 17px;
`;

export const Title = styled(Text)`
  margin-bottom: 16px;
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;

  @media ${MEDIA_QUERY.EXCEPT_DESKTOP} {
    padding-right: 16px;
  }
`;

export const MainWrapper = styled.div`
  flex: 1;
`;

export const ImageWrapper = styled.div`
  margin-top: 8px;
  width: 550px;
  padding-right: 100px;
`;

export const Image = styled.img`
  object-fit: cover;

  animation-name: ${FadeIn};
  animation-duration: 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  width: 100%;
`;
