import styled, { css } from "styled-components";
import { MEDIA_QUERY } from "../../constants/responsive";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  margin-bottom: 4px;
  padding: 16px;
  display: flex;
`;
export const Main = styled.div<{ margin?: number }>`
  flex: 1;
  ${(props) =>
    props.margin &&
    css`
      @media ${MEDIA_QUERY.DESKTOP} {
        margin-left: ${props.margin}px;
      }
    `}
`;

export const Logo = styled.h1`
  font-size: 17px;
  margin-right: 12px;
`;

export const MenuItem = styled.span<{ selected?: boolean }>`
  ${(props) =>
    props.selected &&
    css`
      color: black;
    `}
  cursor: pointer;
`;

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  margin-left: 16px;
  font-size: 17px;
  line-height: 1.35;
  color: #c4c4c4;

  & > ${MenuItem} + ${MenuItem} {
    &::before {
      content: "/";
      color: #c4c4c4;
      margin: 0 4px;
    }
  }
`;
