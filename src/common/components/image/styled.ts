import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Image = styled.div`
  object-fit: cover;
  width: 100%;
  height: 500px;
  background-color: grey;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 16px 0;
`;

export const LeftButton = styled.div`
  width: 16px;
  height: 24px;
  background-color: grey;
`;
export const RightButton = styled.div`
  width: 16px;
  height: 24px;
  background-color: grey;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  & > ${LeftButton} + ${RightButton} {
    margin-left: 16px;
  }
`;

export const Title = styled.h1`
  font-weight: normal;
  margin-bottom: 16px;
`;

export const Text = styled.span`
  font-size: 15px;
  line-height: 1.35;
  letter-spacing: 0.65px;
  color: grey;
`;

export const SubTitle = styled(Text)``;

export const Date = styled(Text)``;

export const Size = styled(Text)``;
export const Feature = styled(Text)``;
