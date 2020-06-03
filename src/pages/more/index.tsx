import React from "react";
import PageTemplate from "../../common/components/pageTemplate";

import usePageState from "../../common/hooks/usePageState";

export default function More({ images }: { images: Common.Image[][] }) {
  const { imageArray } = usePageState(images);
  return (
    <PageTemplate visibleBackButton={false} selectedImages={imageArray}>
      <div />
    </PageTemplate>
  );
}
