import React from "react";

export default function usePageState(images: Common.Image[][]) {
  const [selectedImageId, setSelectedImageId] = React.useState<
    number | undefined
  >(undefined);
  const imageArray = React.useMemo(
    () => images.reduce((result, current) => result.concat(current), []),
    [images]
  );
  const selectedImageIndex = React.useMemo(
    () => imageArray.findIndex((image) => image.id === selectedImageId),
    [imageArray, selectedImageId]
  );
  const selectedImage = imageArray[selectedImageIndex];

  const handleBackButtonClick = React.useCallback(() => {
    setSelectedImageId(undefined);
  }, []);
  const handleNextButtonClick = React.useCallback(() => {
    if (selectedImageIndex !== undefined) {
      const nextImage = imageArray[selectedImageIndex + 1];
      setSelectedImageId(nextImage.id);
    }
  }, [imageArray, selectedImageIndex]);
  const handlePrevButtonClick = React.useCallback(() => {
    if (selectedImageIndex !== undefined) {
      const prevImage = imageArray[selectedImageIndex - 1];
      setSelectedImageId(prevImage.id);
    }
  }, [imageArray, selectedImageIndex]);

  const hideNextButton = selectedImageIndex >= imageArray.length - 1;
  const hidePrevButton = selectedImageIndex <= 0;

  return {
    imageArray,
    selectedImage,
    handleBackButtonClick,
    handleNextButtonClick,
    handlePrevButtonClick,
    hideNextButton,
    hidePrevButton,
    setSelectedImageId,
  };
}
