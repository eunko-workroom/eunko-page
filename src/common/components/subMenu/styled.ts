import styled from "styled-components";

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Category = styled.div`
  margin-bottom: 16px;
`;

export const SubMenuItemWrapper = styled.div<{ selected?: boolean }>`
  font-size: 15px;
  line-height: 1.35;
  letter-spacing: 0.65px;
  color: grey;
  cursor: pointer;
`;
