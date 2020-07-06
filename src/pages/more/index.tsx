import React from "react";
import PageTemplate from "../../common/components/pageTemplate";

export default function More({ menu }: { menu: Common.ISubMenu[] }) {
  const reversedMenu = [...menu].reverse();
  return (
    <PageTemplate menu={reversedMenu}>
      <div />
    </PageTemplate>
  );
}
