import React from "react";
import PageTemplate from "../../common/components/pageTemplate";
import {
  SubMenu,
  Category,
  SubMenuItem,
} from "../../common/components/subMenu";
import { useSelectedMenuState } from "../../common/hooks/usePageState";

export default function Editorial({ menu }: { menu: Common.ISubMenu[] }) {
  const {
    sortByCategory,
    selectedMenu,
    setSelectedMenuId,
    handleBackButtonClick,
    selectNextMenu,
    selectPrevMenu,
  } = useSelectedMenuState(menu);
  return (
    <PageTemplate
      menu={selectedMenu !== undefined ? [selectedMenu] : undefined}
      selectNextMenu={selectNextMenu}
      selectPrevMenu={selectPrevMenu}
      handleBackButtonClick={handleBackButtonClick}
    >
      <SubMenu>
        {sortByCategory.map((category) => (
          <Category>
            {category.menus.map((image) => (
              <SubMenuItem
                title={image.menuTitle}
                id={image.id}
                selected={image.id === selectedMenu?.id}
                handleClick={setSelectedMenuId}
              />
            ))}
          </Category>
        ))}
      </SubMenu>
    </PageTemplate>
  );
}
