import classNames from "classnames";
import { layoutStyles } from "../layout";
import { IProps } from "./research_areas_section.interface";

export const container = layoutStyles.sectionContainer;
export const title = layoutStyles.sectionTitle;

// export const listContaine

export const listItemItem = (props: IProps) =>
  classNames(
    "before:content-['']",
    "before:w-2",
    "before:h-2",
    "before:bg-pri-900",
    "before:inline-block",
    "before:rounded-full",
    "before:mr-4",
    "text-lg",
    "font-bold",
    "capitalize",
    "text-left",
    "flex",
    "items-center",
    "mt-5",
    "leading-6",
    "mb-1"
  );
