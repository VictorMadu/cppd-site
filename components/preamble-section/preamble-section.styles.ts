import classNames from "classnames";
import { IProps } from "./preamble-section.interface";

export const textContainer = (props: IProps) => classNames();

export const authorDescContainer = (props: IProps) =>
  classNames("mt-3", "ml-auto", "w-[fit-content]");
export const authorName = (props: IProps) =>
  classNames(
    "font-semibold",
    "text-base",
    "leading-8",
    "text-neu-900/90 dark:text-neu-50/90"
  );

export const authorPosition = (props: IProps) =>
  classNames("text-pri-700 dark:text-pri-200");

export const authorDate = (props: IProps) =>
  classNames(
    "text-sm",
    "text-slate-700/90 dark:text-slate-200/90",
    "leading-3"
  );
