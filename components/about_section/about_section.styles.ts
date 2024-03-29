import classNames from "classnames";
import { IProps } from "./about_section.interface";
import { layoutStyles } from "../layout";

export const container = layoutStyles.sectionContainer;
export const title = layoutStyles.sectionTitle;

export const linksContainer = (props: IProps) =>
  classNames(
    "flex",
    "justify-center",
    "border-b-2",
    "border-neu-300/60 dark:border-neu-600/60"
  );

export const contentContainer = (props: IProps) =>
  classNames("space-y-6", "mt-5");

export const idGroup = (props: IProps) => classNames();

export const idGroupTitle = (props: IProps) =>
  classNames("text-lg", "font-bold", "capitalize", "mb-2");

export const structureContainer = (props: IProps) => classNames("space-y-1");
