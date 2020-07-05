// javascript
import React from "react";

interface IContextValue {
  selectedMenuId: string;
  sortByCategory: Common.ISortByCategory[];
  selectedMenu: Common.ISubMenu;
  setMenu(menu: Common.ISubMenu[]): void;
  setSelectedMenuId(id: string): void;
  selectNextMenu(): void;
  selectPrevMenu(): void;
  startLastIndex: boolean;
}
const initialValue: IContextValue = {
  selectedMenuId: "",
  sortByCategory: [],
  selectedMenu: { category: "", id: "", images: [], menuTitle: "" },
  setMenu: () => {},
  setSelectedMenuId: () => {},
  selectNextMenu: () => {},
  selectPrevMenu: () => {},
  startLastIndex: false,
};

const SelectedMenuContext = React.createContext<IContextValue>(initialValue);

export default SelectedMenuContext;
