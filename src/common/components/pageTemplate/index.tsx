import React from "react";
import { Wrapper, Main, ImageWrapper } from "./styled";
import Image from "../image";
import useIsMobile from "../../hooks/useIsMobile";

interface IProps {
  menu?: Common.ISubMenu[];
  startLastIndex?: boolean;
  selectNextMenu?(): void;
  selectPrevMenu?(): void;
}
const PageTemplate: React.FC<React.PropsWithChildren<IProps>> = ({
  menu,
  startLastIndex = false,
  selectNextMenu,
  selectPrevMenu,
  children,
}) => {
  const isMobile = useIsMobile();

  const isMainPanel = !isMobile || !menu?.length;
  const isMainImagePanel = Boolean(menu?.length);
  return (
    <Wrapper>
      {isMainPanel && <Main>{children}</Main>}
      {isMainImagePanel && (
        <ImageWrapper>
          {(menu || []).map((menu) => (
            <Image
              key={menu.id}
              selectedMenu={menu}
              startLastIndex={startLastIndex}
              selectNextMenu={selectNextMenu}
              selectPrevMenu={selectPrevMenu}
            />
          ))}
        </ImageWrapper>
      )}
    </Wrapper>
  );
};

export default PageTemplate;
