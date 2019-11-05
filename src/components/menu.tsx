export interface MenuModel {
  en: string;
  path: string;
  exact: boolean;
  inverted?: boolean;
}

export const menuModel: { [key: string]: MenuModel } = {
  home: { en: "Home", path: "/", exact: true },
  blog: { en: "Archive", path: "/archive/", exact: false },
  projects: { en: "Projects", path: "/projects", exact: false },
  talks: { en: "Talks", path: "/talks", exact: true }
};
