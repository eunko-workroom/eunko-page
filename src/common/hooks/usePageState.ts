import React from "react";

export function useSelectedMenuState(menu: Common.ISubMenu[]) {
  const [selectedMenuId, setSelectedMenuId] = React.useState<string>("");

  const sortByCategory = menu.reduce((result, current) => {
    const sameCategory = result.find(
      (target) => target.category === current.category
    );

    if (sameCategory) {
      sameCategory.menus.push(current);
    } else {
      result.push({ category: current.category, menus: [current] });
    }

    return result;
  }, [] as Common.ISortByCategory[]);

  const handleBackButtonClick = React.useCallback(() => {
    setSelectedMenuId("");
  }, []);

  const selectedMenu =
    selectedMenuId !== undefined
      ? menu.find((target) => target.id === selectedMenuId)
      : undefined;

  return {
    selectedMenuId,
    sortByCategory,
    selectedMenu,
    setSelectedMenuId,
    handleBackButtonClick,
  };
}

export function useSelectedImageState(selectedMenu: Common.ISubMenu) {
  const [selectedImageId, setSelectedImageId] = React.useState<string>(
    selectedMenu.images[0] ? selectedMenu.images[0].id : ""
  );
  const selectedImageIndex = React.useMemo(
    () =>
      selectedMenu.images.findIndex((target) => target.id === selectedImageId),
    [selectedImageId, selectedMenu.images]
  );
  const selectedImage =
    selectedImageIndex >= 0
      ? selectedMenu.images[selectedImageIndex]
      : undefined;

  const handleNextButtonClick = React.useCallback(() => {
    if (selectedImageIndex >= 0) {
      const nextImage = selectedMenu?.images[selectedImageIndex + 1];
      setSelectedImageId(nextImage.id);
    }
  }, [selectedImageIndex, selectedMenu]);
  const handlePrevButtonClick = React.useCallback(() => {
    if (selectedImageIndex >= 0) {
      const prevImage = selectedMenu?.images[selectedImageIndex - 1];
      setSelectedImageId(prevImage.id);
    }
  }, [selectedImageIndex, selectedMenu]);

  const hideNextButton = selectedImageIndex >= selectedMenu.images.length - 1;
  const hidePrevButton = selectedImageIndex <= 0;

  return {
    selectedImage,
    handleNextButtonClick,
    handlePrevButtonClick,
    hideNextButton,
    hidePrevButton,
    setSelectedImageId,
  };
}
