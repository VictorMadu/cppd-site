import classNames from "classnames";
import { IProps } from "./circle.interface";

export const container = (props: IProps) =>
  classNames(
    "w-3",
    "h-3",
    "rounded-full",
    "shadow-2xl",
    "shadow-pri-900",
    "cursor-pointer",
    props.active ? "bg-pri-900" : "bg-white"
  );
