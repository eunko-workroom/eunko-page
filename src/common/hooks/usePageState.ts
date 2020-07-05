import React from "react";

export function useSelectedMenuState() {
  const [menu, setMenu] = React.useState<Common.ISubMenu[]>([]);
  const [selectedMenuId, setSelectedMenuId] = React.useState<string>("");
  const [startLastIndex, setStartLastIndex] = React.useState(false);

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

  const selectedMenuIndex = React.useMemo(
    () => menu.findIndex((target) => target.id === selectedMenuId),
    [menu, selectedMenuId]
  );
  const selectedMenu: Common.ISubMenu | undefined = menu[selectedMenuIndex];

  const selectNextMenu = React.useCallback(() => {
    if (menu[selectedMenuIndex + 1]) {
      setSelectedMenuId(menu[selectedMenuIndex + 1].id);
    }
  }, [menu, selectedMenuIndex]);
  const selectPrevMenu = React.useCallback(() => {
    if (menu[selectedMenuIndex - 1]) {
      setSelectedMenuId(menu[selectedMenuIndex - 1].id);
      setStartLastIndex(true);
    }
  }, [menu, selectedMenuIndex]);

  React.useEffect(() => {
    setStartLastIndex(false);
  }, [selectedMenuId]);

  return {
    selectedMenuId,
    sortByCategory,
    selectedMenu,
    setMenu,
    setSelectedMenuId,
    selectNextMenu,
    selectPrevMenu,
    startLastIndex,
  };
}

export function useSelectedImageState({
  selectedMenu,
  startLastIndex,
  selectNextMenu,
  selectPrevMenu,
}: {
  selectedMenu: Common.ISubMenu;
  startLastIndex: boolean;
  selectNextMenu?(): void;
  selectPrevMenu?(): void;
}) {
  const defaultSelectedImage = startLastIndex
    ? selectedMenu.images[selectedMenu.images.length - 1].id
    : selectedMenu.images[0].id;
  const [selectedImageId, setSelectedImageId] = React.useState<string>(
    defaultSelectedImage
  );
  const selectedImageIndex = React.useMemo(
    () =>
      selectedMenu.images.findIndex((target) => target.id === selectedImageId),
    [selectedImageId, selectedMenu.images]
  );
  const selectedImage: Common.Image | undefined =
    selectedMenu.images[selectedImageIndex];

  const hideNextButton = selectedImageIndex >= selectedMenu.images.length - 1;
  const hidePrevButton = selectedImageIndex <= 0;

  const handleNextButtonClick = React.useCallback(() => {
    if (!selectedImage) {
      return;
    }
    if (hideNextButton) {
      selectNextMenu?.();
    } else {
      const nextImage = selectedMenu.images[selectedImageIndex + 1];
      setSelectedImageId(nextImage.id);
    }
  }, [
    hideNextButton,
    selectNextMenu,
    selectedImage,
    selectedImageIndex,
    selectedMenu,
  ]);
  const handlePrevButtonClick = React.useCallback(() => {
    if (!selectedImage) {
      return;
    }
    if (hidePrevButton) {
      selectPrevMenu?.();
    } else {
      const prevImage = selectedMenu.images[selectedImageIndex - 1];
      setSelectedImageId(prevImage.id);
    }
  }, [
    hidePrevButton,
    selectPrevMenu,
    selectedImage,
    selectedImageIndex,
    selectedMenu,
  ]);

  return {
    selectedImage,
    handleNextButtonClick,
    handlePrevButtonClick,
    setSelectedImageId,
  };
}
