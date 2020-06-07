import React from "react";
import PageTemplate from "../../common/components/pageTemplate";
import { Text, Title } from "./styled";

export default function Main({ images }: { images: Common.Image[][] }) {
  return (
    <PageTemplate visibleBackButton={false} menu={[]}>
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
