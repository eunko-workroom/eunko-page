declare namespace Common {
  type Image = IImageWithDescription | IOnlyImage;
  type MenuType = "Photography" | "Editorial" | "More";

  interface IOnlyImage {
    type: "nonDescriptionImage";
    id: number;
    title: string;
    menuTitle: string;
    src: string;
  }

  interface IImageWithDescription {
    type: "image";
    id: number;
    src: string;
    title: string;
    subTitle: string;
    menuTitle: string;
    date: string;
    size: string;
    feature: string;
  }

  // 중간에 margin이 있어서 2차원 배열
  type TabContent = Record<MenuType, Image[][]>;
}
