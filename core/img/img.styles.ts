import classNames from "classnames";
import { IProps } from "./img.interface";

export const container = (props: IProps, ...otherNames: string[]) =>
  classNames(
    "relative",
    props?.imgStyles?.width ?? "fit-content",
    props?.imgStyles?.height ?? "fit-content"
  );

export const img = (props: IProps, ...otherNames: string[]) =>
  classNames("object-cover");
