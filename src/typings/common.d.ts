declare namespace Common {
  type Image = IImageWithDescription | IOnlyImage;
  type MenuType = "Photography" | "Editorial" | "More";

  interface IOnlyImage {
    type: "nonDescriptionImage";
    id: string;
    title: string;

    src: string;
  }

  interface IImageWithDescription {
    type: "image";
    id: string;
    src: string;
    title: string;
    subTitle: string;
    date: string;
    size: string;
    feature: string;
  }

  interface ISubMenu {
    id: string;
    category: string;
    menuTitle: string;
    images: Image[];
  }

  type TabContent = Record<MenuType, ISubMenu[]>;

  interface ISortByCategory {
    category: string;
    menus: ISubMenu[];
  }
}
