import React from "react";

export function useSelectedMenuState(menu: Common.ISubMenu[]) {
  const [selectedMenuId, setSelectedMenuId] = React.useState<
    number | undefined
  >(undefined);

  const sortByCategory = menu.reduce((result, current) => {
    const lastCategoryMenu = result[result.length - 1] || [];
    const lastCategory = lastCategoryMenu[0] && lastCategoryMenu[0].category;
    if (current.category === lastCategory) {
      lastCategoryMenu.push(current);
    } else {
      result.push([current]);
    }

    return result;
  }, [] as Common.ISubMenu[][]);

  const handleBackButtonClick = React.useCallback(() => {
    setSelectedMenuId(undefined);
  }, []);

  const selectedMenu =
    selectedMenuId !== undefined ? menu[selectedMenuId] : undefined;

  return {
    selectedMenuId,
    sortByCategory,
    selectedMenu,
    setSelectedMenuId,
    handleBackButtonClick,
  };
}

export function useSelectedImageState(selectedMenu?: Common.ISubMenu) {
  const [selectedImageId, setSelectedImageId] = React.useState<number>(0);

  const selectedImage = selectedMenu
    ? selectedMenu.images[selectedImageId]
    : undefined;

  const handleNextButtonClick = React.useCallback(() => {
    if (selectedImageId !== undefined) {
      const nextImage = selectedMenu?.images[selectedImageId + 1];
      setSelectedImageId(nextImage?.id || 0);
    }
  }, [selectedImageId, selectedMenu]);
  const handlePrevButtonClick = React.useCallback(() => {
    if (selectedImageId !== undefined) {
      const prevImage = selectedMenu?.images[selectedImageId - 1];
      setSelectedImageId(prevImage?.id || 0);
    }
  }, [selectedImageId, selectedMenu]);

  const hideNextButton =
    selectedImageId !== undefined && selectedMenu !== undefined
      ? selectedImageId >= selectedMenu?.images.length - 1
      : false;
  const hidePrevButton =
    selectedImageId !== undefined ? selectedImageId <= 0 : false;

  return {
    selectedImage,
    handleNextButtonClick,
    handlePrevButtonClick,
    hideNextButton,
    hidePrevButton,
    setSelectedImageId,
  };
}
