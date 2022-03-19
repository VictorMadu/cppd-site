import classNames from "classnames";
import { IProps } from "./preamble-section.interface";

export const textContainer = (props: IProps) => classNames();

export const authorDescContainer = (props: IProps) =>
  classNames("mt-3", "ml-auto", "w-[fit-content]");
export const authorName = (props: IProps) =>
  classNames("font-semibold", "text-lg", "leading-8");

export const authorPosition = (props: IProps) => classNames("text-pri-700");

export const authorDate = (props: IProps) =>
  classNames("text-sm", "text-slate-900/75", "leading-3");
