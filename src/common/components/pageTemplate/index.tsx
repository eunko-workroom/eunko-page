import React from "react";
import { Wrapper, Main, ImageWrapper, BackButton } from "./styled";
import Image from "../image";
import useIsMobile from "../../hooks/useIsMobile";

interface IProps {
  menu?: Common.ISubMenu[];
  visibleBackButton?: boolean;
  handleBackButtonClick?(): void;
}
const PageTemplate: React.FC<React.PropsWithChildren<IProps>> = ({
  menu,
  visibleBackButton = true,
  handleBackButtonClick,
  children,
}) => {
  const isMobile = useIsMobile();
  const isShowBackButton =
    isMobile && Boolean(menu?.length) && visibleBackButton;
  const isMainPanel = !isMobile || !menu?.length;
  const isMainImagePanel = Boolean(menu?.length);
  return (
    <Wrapper>
      {isShowBackButton && <BackButton onClick={handleBackButtonClick} />}
      {isMainPanel && <Main>{children}</Main>}
      {isMainImagePanel && (
        <ImageWrapper>
          {(menu || []).map((menu) => (
            <Image menu={menu} />
          ))}
        </ImageWrapper>
      )}
    </Wrapper>
  );
};

export default PageTemplate;
