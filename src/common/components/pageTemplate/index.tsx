import React from "react";
import { Wrapper, Main, ImageWrapper, BackButton } from "./styled";
import Image from "../image";
import useIsMobile from "../../hooks/useIsMobile";

interface IProps {
  menu?: Common.ISubMenu[];
  startLastIndex?: boolean;
  visibleBackButton?: boolean;
  selectNextMenu?(): void;
  selectPrevMenu?(): void;
  handleBackButtonClick?(): void;
}
const PageTemplate: React.FC<React.PropsWithChildren<IProps>> = ({
  menu,
  startLastIndex = false,
  visibleBackButton = true,
  handleBackButtonClick,
  selectNextMenu,
  selectPrevMenu,
  children,
}) => {
  const isMobile = useIsMobile();
  const isShowBackButton =
    isMobile && Boolean(menu?.length) && visibleBackButton;
  const isMainImagePanel = Boolean(menu?.length);
  return (
    <Wrapper>
      {isShowBackButton && <BackButton onClick={handleBackButtonClick} />}
      {<Main>{!menu?.length && children}</Main>}
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
