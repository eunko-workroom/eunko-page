import React from "react";
import { Wrapper, Main, ImageWrapper, BackButton } from "./styled";
import Image from "../image";
import useIsMobile from "../../hooks/useIsMobile";

interface IProps {
  selectedImages: Common.Image[];
  visibleBackButton?: boolean;
  handleBackButtonClick?(): void;
  handleNextButtonClick?(): void;
  handlePrevButtonClick?(): void;
}
const PageTemplate: React.FC<React.PropsWithChildren<IProps>> = ({
  selectedImages,
  visibleBackButton = true,
  handleBackButtonClick,
  handleNextButtonClick,
  handlePrevButtonClick,
  children,
}) => {
  const isMobile = useIsMobile();
  const isShowBackButton =
    isMobile && Boolean(selectedImages.length) && visibleBackButton;
  const isMainPanel = !isMobile || !selectedImages.length;
  const isMainImagePanel = Boolean(selectedImages.length);
  return (
    <Wrapper>
      {isShowBackButton && <BackButton onClick={handleBackButtonClick} />}
      {isMainPanel && <Main>{children}</Main>}
      {isMainImagePanel && (
        <ImageWrapper>
          {(selectedImages || []).map((image) => (
            <Image
              image={image}
              handleNext={handleNextButtonClick}
              handlePrev={handlePrevButtonClick}
            />
          ))}
        </ImageWrapper>
      )}
    </Wrapper>
  );
};

export default PageTemplate;
