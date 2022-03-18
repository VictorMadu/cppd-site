import classNames from "classnames";
import { IProps } from "./circle_container.interface";

export const container = (props: IProps) =>
  classNames(
    "absolute",
    "bottom-8",
    "left-0",
    "w-full",
    "flex",
    "justify-center",
    "gap-x-5",
    "z-20"
  );
