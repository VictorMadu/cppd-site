import classNames from "classnames";
import { IProps } from "./controls.interface";

export const container = (props: IProps, otherNames?: string) =>
  classNames("flex", "justify-between", "px-[4%]", "", "", otherNames);

export const icon = (props: IProps, otherNames?: string) =>
  classNames("shadow-xl", "p-3", "bg-white", "rounded-full", "text-pri-900");
