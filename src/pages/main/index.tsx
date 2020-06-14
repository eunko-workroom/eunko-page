import React from "react";
import {
  Wrapper,
  MainWrapper,
  ImageWrapper,
  Image,
  Text,
  Title,
} from "./styled";
import useIsMobile from "../../common/hooks/useIsMobile";

export default function Main({ images }: { images: Common.Image[][] }) {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <MainWrapper>
        <Title>
          a photographer and designer based in Seoul. Republic of Korea
        </Title>
        <Text>eunko.workroom@gmail.com</Text>
        <a href="https://www.instagram.com/eunko_" target="_blank">
          <Text>instagram @eunko_</Text>
        </a>
      </MainWrapper>
      {isMobile && (
        <ImageWrapper>
          <Image alt="main" />
        </ImageWrapper>
      )}
    </Wrapper>
  );
}
