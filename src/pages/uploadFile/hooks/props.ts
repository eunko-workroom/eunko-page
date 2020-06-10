import React from "react";

import { useUploadToS3 } from "../../../common/hooks/useS3";

export default function useProps({
  contents,
}: {
  contents: Common.TabContent;
}) {
  const uploadFile = useUploadToS3();
  const [menu, setMenu] = React.useState<string>("Photography");

  const selectedMenuData = React.useMemo(
    () => contents[menu as Common.MenuType],
    [contents, menu]
  );

  const [category, setCategory] = React.useState<string>("");
  const [subMenuName, setSubMenuName] = React.useState<string>("");
  const [subMenuId, setSubMenuId] = React.useState<string>("");

  const [images, setImages] = React.useState<Common.Image[]>([]);

  const [imageId, setImageId] = React.useState<string>("");
  const [imageTitle, setImageTitle] = React.useState<string>("");
  const [imageSubTitle, setImageSubTitle] = React.useState<string>("");
  const [imageDate, setImageDate] = React.useState<string>("");
  const [imageSize, setImageSize] = React.useState<string>("");
  const [imageFeature, setImageFeature] = React.useState<string>("");
  const [image, setImage] = React.useState<File | null>(null);

  const imageInputRef = React.useRef<HTMLInputElement>(null);

  return {
    contents,
    uploadFile,
    menu,
    setMenu,
    selectedMenuData,
    category,
    setCategory,
    subMenuName,
    setSubMenuName,
    subMenuId,
    setSubMenuId,
    images,
    setImages,
    imageId,
    setImageId,
    imageTitle,
    setImageTitle,
    imageSubTitle,
    setImageSubTitle,
    imageDate,
    setImageDate,
    imageSize,
    setImageSize,
    imageFeature,
    setImageFeature,
    image,
    setImage,
    imageInputRef,
  };
}
