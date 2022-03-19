import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IProps {}

export type IThemes = {
  text: "Light" | "Dark" | "System";
  icon: IconDefinition;
}[];
