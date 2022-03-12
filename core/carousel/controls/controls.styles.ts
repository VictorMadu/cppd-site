import classNames from "classnames";
import { IProps } from "./controls.interface";

export const container = (props: IProps, otherNames?: string) =>
  classNames("flex", "justify-between", otherNames);
