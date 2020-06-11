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
    selectNextMenu,
    selectPrevMenu,
    startLastIndex,
  } = useSelectedMenuState(menu);
  return (
    <PageTemplate
      menu={selectedMenu !== undefined ? [selectedMenu] : undefined}
      startLastIndex={startLastIndex}
      selectNextMenu={selectNextMenu}
      selectPrevMenu={selectPrevMenu}
      handleBackButtonClick={handleBackButtonClick}
    >
      <SubMenu>
        {sortByCategory.map((category) => (
          <Category key={category.category}>
            {category.menus.map((menu) => (
              <SubMenuItem
                key={menu.id}
                title={decodeURIComponent(menu.menuTitle)}
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
