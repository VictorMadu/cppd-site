import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IProps {}

export type IThemesAndIcons = {
  text: ITheme;
  icon: IconDefinition;
}[];

export type ITheme = "light" | "dark" | "system";
