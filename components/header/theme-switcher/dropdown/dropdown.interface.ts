import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IProps {
  show: boolean;
  onClick: (selectedIndex: number) => void;
  activeIndex: number;
  themes: { text: string; icon: IconDefinition }[];
}
