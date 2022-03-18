import classNames from "classnames";
import { IProps } from "./controls.interface";

export const container = (props: IProps, otherNames?: string) =>
  classNames("flex", "justify-between", "px-[4%]", "", "", otherNames);

export const icon = (props: IProps, otherNames?: string) =>
  classNames(
    "shadow-xl",
    "p-2.5",
    "bg-white",
    "rounded-full",
    "text-pri-900",
    "w-5",
    "h-5",
    "cursor-pointer"
  );
