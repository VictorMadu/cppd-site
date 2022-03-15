import classNames from "classnames";
import { IProps } from "./layout.interface";

export const container = (props: IProps) => classNames("");

export const sectionContainer = (props: IProps) =>
  classNames("mt-12", "px-[4%]", "text-justify", "tracking-tight");

export const sectionTitle = (props: IProps) =>
  classNames("text-3xl", "font-bold", "text-pri-900/90", "capitalize", "mb-2");

export const sectionParagraph = (props: IProps) =>
  classNames("first-letter:ml-4", "mb-2", "leading-8");
