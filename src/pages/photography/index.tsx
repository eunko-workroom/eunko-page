import React from "react";
import PageTemplate from "../../common/components/pageTemplate";
import {
  SubMenu,
  Category,
  SubMenuItem,
} from "../../common/components/subMenu";
import { useSelectedMenuState } from "../../common/hooks/usePageState";

export default function Photography({ menu }: { menu: Common.ISubMenu[] }) {
  const {
    sortByCategory,
    selectedMenu,
    selectedMenuId,
    setSelectedMenuId,
    handleBackButtonClick,
  } = useSelectedMenuState(menu);
  return (
    <PageTemplate
      menu={selectedMenu !== undefined ? [selectedMenu] : undefined}
      handleBackButtonClick={handleBackButtonClick}
    >
      <SubMenu>
        {sortByCategory.map((category) => (
          <Category>
            {category.menus.map((menu) => (
              <SubMenuItem
                title={menu.menuTitle}
                id={menu.id}
                selected={menu.id === selectedMenuId}
                handleClick={setSelectedMenuId}
              />
            ))}
          </Category>
        ))}
      </SubMenu>
    </PageTemplate>
  );
}
