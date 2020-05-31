declare namespace Common {
  type Image = IImageWithDescription | IOnlyImage;
  type MenuType = "Photography" | "Editorial" | "More";

  interface IOnlyImage {
    type: "nonDescriptionImage";
    title: string;
    // menu에서 보이는 이름과 image title이 다른듯
    menuTitle: string;
    src: string;
  }

  interface IImageWithDescription {
    type: "image";
    src: string;
    title: string;
    subTitle: string;
    // menu에서 보이는 이름과 image title이 다른듯
    menuTitle: string;
    date: string;
    size: string;
    feature: string;
  }

  // 중간에 margin이 있어서 2차원 배열
  type TabContent = Record<MenuType, Image[][]>;
}
