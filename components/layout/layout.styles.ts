import classNames from "classnames";
import { IProps } from "./layout.interface";

export const container = (props: IProps) => classNames("");

export const sectionContainer = (props: IProps) =>
  classNames("mt-14", "px-[4%]", "text-justify", "tracking-tight");

export const sectionTitle = (props: IProps) =>
  classNames(
    "text-2xl",
    "text-center",
    "font-bold",
    "text-pri-900/90",
    "capitalize",
    "mb-2"
  );

export const sectionParagraph = (props: unknown) =>
  classNames("first-letter:ml-4", "mb-2", "leading-8", "[hyphens:manual]");
