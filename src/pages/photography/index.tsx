import React from "react";
import PageTemplate from "../../common/components/pageTemplate";
import {
  SubMenu,
  Category,
  SubMenuItem,
} from "../../common/components/subMenu";
import usePageState from "../../common/hooks/usePageState";

export default function Photography({ images }: { images: Common.Image[][] }) {
  const {
    selectedImage,
    handleBackButtonClick,
    hideNextButton,
    handleNextButtonClick,
    hidePrevButton,
    handlePrevButtonClick,
    setSelectedImageId,
  } = usePageState(images);
  return (
    <PageTemplate
      selectedImages={selectedImage ? [selectedImage] : []}
      handleBackButtonClick={handleBackButtonClick}
      handleNextButtonClick={
        !hideNextButton ? handleNextButtonClick : undefined
      }
      handlePrevButtonClick={
        !hidePrevButton ? handlePrevButtonClick : undefined
      }
    >
      <SubMenu>
        {images.map((category) => (
          <Category>
            {category.map((image) => (
              <SubMenuItem
                title={image.menuTitle}
                id={image.id}
                selected={
                  Boolean(selectedImage) && image.id === selectedImage?.id
                }
                handleClick={setSelectedImageId}
              />
            ))}
          </Category>
        ))}
      </SubMenu>
    </PageTemplate>
  );
}
