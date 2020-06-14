import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants/responsive";

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;

  @media ${MEDIA_QUERY.EXCEPT_DESKTOP} {
    padding: 0 16px;
  }
`;

export const Main = styled.div`
  flex: 1;
`;

export const BackButton = styled.img.attrs({
  src:
    "https://s3.ap-northeast-2.amazonaws.com/eunko.workroom/next_arrow_image.png",
})`
  width: 24px;
  position: absolute;
  top: 8px;
  left: 24px;
  z-index: 10;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  @media ${MEDIA_QUERY.DESKTOP} {
    width: 600px;
    padding-right: 100px;
  }
`;
