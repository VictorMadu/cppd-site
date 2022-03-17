import classNames from "classnames";
import { IProps } from "./about_section.interface";
import { layoutStyles } from "../layout";

export const container = layoutStyles.sectionContainer;
export const title = layoutStyles.sectionTitle;

export const linksContainer = (props: IProps) =>
  classNames("flex", "justify-center");

export const contentContainer = (props: IProps) =>
  classNames("space-y-6", "mt-4");

export const idGroup = (props: IProps) => classNames();

export const idGroupTitle = (props: IProps) =>
  classNames("text-lg", "font-bold", "capitalize", "mb-2");

export const structureContainer = (props: IProps) => classNames("space-y-1");
export const structureGroup = (props: IProps) => classNames();

export const structureTitle = (props: IProps) =>
  classNames(
    "before:content-['']",
    "before:w-2",
    "before:h-2",
    "before:bg-pri-900",
    "before:inline-block",
    "before:rounded-full",
    "before:mr-4",
    "font-bold",
    "text-left",
    "text-slate-900/80",
    "after:content-[':']",
    "after:inline-block",
    "after:mr-2"
  );
export const paragraph = layoutStyles.sectionParagraph;
