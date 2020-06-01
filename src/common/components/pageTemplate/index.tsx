import React from "react";
import { Wrapper, Main, ImageWrapper, BackButton } from "./styled";
import Image from "../image";
import useIsMobile from "../../hooks/useIsMobile";

interface IProps {
  selectedImages: Common.Image[];
  visibleNextButton: boolean;
  visiblePrevButton: boolean;
  visibleBackButton?: boolean;
  handleBackButtonClick(): void;
  handleNextImageClick?(): void;
  handlePrevImageClick?(): void;
}
const PageTemplate: React.FC<React.PropsWithChildren<IProps>> = ({
  selectedImages,
  visibleNextButton,
  visiblePrevButton,
  visibleBackButton = true,
  handleBackButtonClick,
  handleNextImageClick,
  handlePrevImageClick,
  children,
}) => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      {isMobile && Boolean(selectedImages.length) && visibleBackButton && (
        <BackButton onClick={handleBackButtonClick} />
      )}
      {(!isMobile || Boolean(selectedImages.length)) && <Main>{children}</Main>}
      {Boolean(selectedImages.length) && (
        <ImageWrapper>
          <Image
            images={selectedImages}
            handleNext={visibleNextButton ? handleNextImageClick : undefined}
            handlePrev={visiblePrevButton ? handlePrevImageClick : undefined}
          />
        </ImageWrapper>
      )}
    </Wrapper>
  );
};

export default PageTemplate;
