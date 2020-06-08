import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const Left = styled.div`
  text-align: left;
  margin-right: 16px;
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 8px;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 8px;
  }
`;

export const Text = styled.span`
  font-size: 15px;
  color: black;
`;

export const Input = styled.input``;
