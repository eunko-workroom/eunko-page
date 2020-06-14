import React from "react";

import { Section, Text, Input, Left, Right } from "./styled";

import useCertification from "../../common/hooks/useCertification";
import { useUploadToS3 } from "../../common/hooks/useS3";

export default function UploadMainImage() {
  useCertification();
  const uploadFile = useUploadToS3();

  const [image, setImage] = React.useState<File | null>(null);
  const imageInputRef = React.useRef<HTMLInputElement>(null);

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
      await uploadFile({
        Body: image,
        Key: `main.${image.type.split("/")[1]}`,
        ContentType: image.type,
        Bucket: "eunko.workroom",
        ContentEncoding: "utf-8",
      });

      alert("업로드 완료");

      if (imageInputRef.current) {
        imageInputRef.current.value = "";
      }
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <>
      <Section>
        <h1>Main Image 추가</h1>
      </Section>
      <Section>
        <Left>
          <Text>이미지</Text>
          <button onClick={handleAddImage}>추가하기</button>
        </Left>
        <Right>
          <Input
            type="file"
            accept="image/*"
            onChange={handleChangeImage}
            ref={imageInputRef}
          />
        </Right>
      </Section>
    </>
  );
}
