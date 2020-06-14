declare namespace Common {
  type Image = IImageWithDescription;
  type MenuType = "Photography" | "Editorial" | "More";

  interface IImageWithDescription {
    id: string;
    src: string;
    title: string;
    subTitle?: string;
    date?: string;
    size?: string;
    feature?: string;
  }

  interface ISubMenu {
    id: string;
    category: string;
    menuTitle: string;
    images: Image[];
  }

  type TabContent = Record<MenuType, ISubMenu[]> & { Main: string };

  interface ISortByCategory {
    category: string;
    menus: ISubMenu[];
  }
}
