import classNames from "classnames";
import {
  sectionContainer,
  sectionTitle,
  sectionParagraph,
} from "../layout/layout.styles";
import { IProps } from "./activities-and-efforts-section.interface";

export { sectionContainer as container };
export { sectionTitle as title };
export { sectionParagraph as paragraph };

export const headingDesc = (props: IProps) => classNames("mb-1");
