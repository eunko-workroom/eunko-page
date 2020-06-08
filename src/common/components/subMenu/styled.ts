import styled, { css } from "styled-components";

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Category = styled.div`
  margin-bottom: 16px;
`;

export const SubMenuItemWrapper = styled.div<{ selected?: boolean }>`
  font-size: 15px;

  color: #c4c4c4;
  cursor: pointer;

  ${(props) =>
    props.selected &&
    css`
      color: black;
    `}
`;
