import classNames from "classnames";
import { IProps } from "./img.interface";

export const container = (props: IProps, ...otherNames: string[]) =>
  classNames(
    "relative",
    props?.imgStyles?.width ?? "w-full",
    props?.imgStyles?.height ?? "h-full",
    props.imgStyles?.cursor
  );

export const img = (props: IProps, ...otherNames: string[]) =>
  classNames("object-cover");
