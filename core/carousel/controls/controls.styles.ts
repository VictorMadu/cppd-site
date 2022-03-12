import classNames from "classnames";
import { IProps } from "./controls.interface";

export const container = (props: IProps, otherNames?: string) =>
  classNames("flex", "justify-between", "px-[4%]", "", "", otherNames);

export const icon = (props: IProps, otherNames?: string) =>
  classNames("text-slate-50", "shadow-lg");
