import styled, { css } from "styled-components";

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Category = styled.div``;

export const SubMenuItemWrapper = styled.div<{ selected?: boolean }>`
  font-size: 15px;

  color: #c4c4c4;
  cursor: pointer;
  margin-bottom: 2px;

  ${(props) =>
    props.selected &&
    css`
      color: black;
    `}

  &:hover {
    color: black;
  }
  transition: color 0.2s linear;
`;
