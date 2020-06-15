import React from "react";

import { safeStringifyJSON } from "../../../common/components/helpers/safeJSON";
import { bucketUrl } from "../../../common/constants/s3";
import { IHookProps } from "./";

export default function useHandlers(props: IHookProps) {
  const {
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
  } = props;

  const handleChangeMenu = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMenu(e.target.value);
    },
    [setMenu]
  );

  const handleChangeCategory = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCategory(e.target.value);
    },
    [setCategory]
  );

  const handleChangeSubMenuName = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSubMenuName(e.target.value);
    },
    [setSubMenuName]
  );

  const handleChangeSubMenuId = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const id = e.target.value;
      if (
        selectedMenuData.findIndex(
          (target) => target.id === `${menu}_${id}`
        ) !== -1
      ) {
        alert("이미 있는 아이디에요 !");
      } else {
        setSubMenuId(id);
      }
    },
    [menu, selectedMenuData, setSubMenuId]
  );

  const handleChangeImageId = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const id = e.target.value;

      if (
        images.findIndex(
          (target) => target.id === `${menu}_${subMenuId}_${id}`
        ) !== -1
      ) {
        alert("이미 있는 아이디에요 !");
      } else {
        setImageId(id);
      }
    },
    [images, menu, setImageId, subMenuId]
  );

  const handleChangeImageTitle = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageTitle(e.target.value);
    },
    [setImageTitle]
  );

  const handleChangeImageSubTitle = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageSubTitle(e.target.value);
    },
    [setImageSubTitle]
  );

  const handleChangeImageDate = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageDate(e.target.value);
    },
    [setImageDate]
  );

  const handleChangeImageSize = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageSize(e.target.value);
    },
    [setImageSize]
  );

  const handleChangeImageFeature = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageFeature(e.target.value);
    },
    [setImageFeature]
  );

  const handleChangeImage = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setImage(e.target.files![0]);
    },
    [setImage]
  );

  const handleAddImage = React.useCallback(async () => {
    try {
      if (!image) {
        return;
      }

      const uploadedImage = await uploadFile({
        Body: image,
        Key: `${menu}_${subMenuId}_${imageId}.${image.type.split("/")[1]}`,
        ContentType: image.type,
        Bucket: "eunko.workroom",
        ContentEncoding: "utf-8",
      });
      setImages([
        ...images,
        {
          id: `${menu}_${subMenuId}_${imageId}`,
          src: `${bucketUrl}${uploadedImage.Key}`,
          title: encodeURIComponent(imageTitle),
          subTitle: imageSubTitle
            ? encodeURIComponent(imageSubTitle)
            : undefined,
          date: imageDate ? encodeURIComponent(imageDate) : undefined,
          size: imageSize ? encodeURIComponent(imageSize) : undefined,
          feature: imageFeature ? encodeURIComponent(imageFeature) : undefined,
        },
      ]);
      alert("이미지 업로드 완료");

      setImageId("");
      setImageTitle("");
      setImageDate("");
      setImageFeature("");
      setImageSize("");
      setImageSubTitle("");
      if (imageInputRef.current) {
        imageInputRef.current.value = "";
      }
    } catch (err) {
      console.error(err);
    }
  }, [
    image,
    imageDate,
    imageFeature,
    imageId,
    imageInputRef,
    imageSize,
    imageSubTitle,
    imageTitle,
    images,
    menu,
    setImageDate,
    setImageFeature,
    setImageId,
    setImageSize,
    setImageSubTitle,
    setImageTitle,
    setImages,
    subMenuId,
    uploadFile,
  ]);

  const handleDoneButtonClick = React.useCallback(async () => {
    if (!subMenuId || !category || !subMenuName || !images.length) {
      alert("모든 데이터를 채워주세요");
      return;
    }
    const uploadBody = {
      ...contents,
      [menu]: [
        ...contents[menu as Common.MenuType],
        {
          id: `${menu}_${subMenuId}`,
          category: encodeURIComponent(category),
          menuTitle: encodeURIComponent(subMenuName),
          images: images,
        },
      ],
    };
    const stringData = safeStringifyJSON(uploadBody);

    try {
      await uploadFile({
        Body: new Blob([stringData], { type: "application/json" }),
        Key: "project.json",
        Bucket: "eunko.workroom",
        ContentType: "application/json; charset=UTF-8",
        ContentEncoding: "utf-8",
      });

      alert("서브메뉴 업로드 완료");
    } catch (err) {
      console.error(err);
    }
  }, [category, contents, images, menu, subMenuId, subMenuName, uploadFile]);

  return {
    handleChangeMenu,
    handleChangeCategory,
    handleChangeSubMenuName,
    handleChangeSubMenuId,
    handleChangeImageId,
    handleChangeImageTitle,
    handleChangeImageSubTitle,
    handleChangeImageDate,
    handleChangeImageSize,
    handleChangeImageFeature,
    handleChangeImage,
    handleAddImage,
    handleDoneButtonClick,
  };
}
