import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const LeftButton = styled(Image).attrs({
  src:
    "https://s3.ap-northeast-2.amazonaws.com/eunko.workroom/next_arrow_image.png",
})`
  height: 100%;
`;

export const RightButton = styled(Image).attrs({
  src:
    "https://s3.ap-northeast-2.amazonaws.com/eunko.workroom/next_arrow_image.png",
})`
  height: 100%;
  transform: scaleX(-1);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 16px 0;
`;

export const LeftButtonWrapper = styled.div`
  width: 16px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 32px;
`;
export const RightButtonWrapper = styled.div`
  width: 16px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 0;
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
