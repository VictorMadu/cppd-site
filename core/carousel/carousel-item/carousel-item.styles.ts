import classNames from "classnames";
import { IProps } from "./carousel-item.interface";

export const container = (props: IProps, otherNames?: string) =>
  classNames(
    "absolute",
    "top-0",
    "left-0",
    "w-full",
    "h-full",
    "transition-opacity",
    "duration-[3000ms]",
    props.className
  );
