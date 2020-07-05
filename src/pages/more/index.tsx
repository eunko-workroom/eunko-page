import React from "react";
import PageTemplate from "../../common/components/pageTemplate";

export default function More({ menu }: { menu: Common.ISubMenu[] }) {
  return (
    <PageTemplate menu={menu.reverse()}>
      <div />
    </PageTemplate>
  );
}
