import React from "react";
import PageTemplate from "../../common/components/pageTemplate";
import { Text, Title } from "./styled";

import usePageState from "../../common/hooks/usePageState";

export default function Main({ images }: { images: Common.Image[][] }) {
  const { imageArray } = usePageState(images);
  return (
    <PageTemplate visibleBackButton={false} selectedImages={imageArray}>
      <Title>
        a photographer and designer based in Seoul. Republic of Korea
      </Title>
      <Text>eunko.workroom@gmail.com</Text>
      <a href="https://www.instagram.com/eunko_" target="_blank">
        <Text>instagram @eunko_</Text>
      </a>
    </PageTemplate>
  );
}
