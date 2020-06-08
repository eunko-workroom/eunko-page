import React from "react";
import { SubMenu, Category, SubMenuItemWrapper } from "./styled";

export const SubMenuItem: React.FC<{
  title: string;
  id: string;
  selected: boolean;
  handleClick(id: string): void;
}> = ({ title, id, selected, handleClick }) => {
  const onClick = React.useCallback(() => {
    handleClick(id);
  }, [handleClick, id]);
  return (
    <SubMenuItemWrapper onClick={onClick} selected={selected}>
      {title}
    </SubMenuItemWrapper>
  );
};

export { SubMenu, Category };
