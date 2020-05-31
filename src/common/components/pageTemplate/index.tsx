import React from "react";
import { Wrapper, Main, ImageWrapper } from "./styled";
import Image from "../image";

interface IProps {
  selectedImages: Common.Image[];
  visibleNextButton: boolean;
  visiblePrevButton: boolean;
  handleNextImage?(): void;
  handlePrevImage?(): void;
}
const PageTemplate: React.FC<React.PropsWithChildren<IProps>> = ({
  selectedImages,
  visibleNextButton,
  visiblePrevButton,
  handleNextImage,
  handlePrevImage,
  children,
}) => {
  return (
    <Wrapper>
      <Main>{children}</Main>
      <ImageWrapper>
        <Image
          images={selectedImages}
          handleNext={visibleNextButton ? handleNextImage : undefined}
          handlePrev={visiblePrevButton ? handlePrevImage : undefined}
        />
      </ImageWrapper>
    </Wrapper>
  );
};

export default PageTemplate;
