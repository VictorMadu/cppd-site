import classNames from "classnames";
import { IProps } from "./controls.interface";

export const container = (props: IProps, otherNames?: string) =>
  classNames("flex", "justify-between", "px-[4%]", "", "", otherNames);

export const icon = (props: IProps, otherNames?: string) =>
  classNames(
    "shadow",
    "shadow-neu-50/40",
    "p-2.5",
    "bg-neu-50 dark:bg-neu-800 hover:bg-neu-200 dark:hover:bg-neu-900",
    "transition-all",
    "rounded-full",
    "text-pri-900 dark:text-pri-50",
    "w-5",
    "h-5",
    "cursor-pointer"
  );
