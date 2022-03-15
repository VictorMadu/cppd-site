import classNames from "classnames";
import {
  sectionContainer,
  sectionTitle,
  sectionParagraph,
} from "../layout/layout.styles";
import { IProps } from "./preamble-section.interface";

export { sectionContainer as container };
export { sectionTitle as title };
export { sectionParagraph as paragraph };

export const textContainer = (props: IProps) => classNames();

export const authorDescContainer = (props: IProps) =>
  classNames("mt-4", "ml-auto", "w-[fit-content]");
export const authorName = (props: IProps) =>
  classNames("font-semibold", "text-lg", "leading-7");

export const authorPosition = (props: IProps) => classNames("text-pri-900");

export const authorDate = (props: IProps) =>
  classNames("text-sm", "text-slate-900/75", "leading-3");
