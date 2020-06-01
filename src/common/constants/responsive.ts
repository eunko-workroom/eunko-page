export const SIZE = {
  MOBILE: "320px",
  TABLET: "600px",
  DESKTOP: "1024px",
};

export const MEDIA_QUERY = {
  EXCEPT_DESKTOP: `(min-width: ${SIZE.MOBILE}) and (max-width: ${SIZE.DESKTOP})`,
  EXCEPT_MOBILE: `(min-width: ${SIZE.TABLET})`,
  ONLY_MOBILE: `(min-width: 0) and (max-width: ${SIZE.TABLET})`,
  TABLET: `(min-width: ${SIZE.TABLET})`,
  ONLY_TABLET: `(min-width: ${SIZE.TABLET}) and (max-width: ${SIZE.DESKTOP})`,
  DESKTOP: `(min-width: ${SIZE.DESKTOP})`,
};
