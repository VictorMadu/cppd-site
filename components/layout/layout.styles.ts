import classNames from "classnames";
import { IProps } from "./layout.interface";

export const container = (props: IProps) => classNames("");

export const sectionContainer = (props: IProps) =>
  classNames(
    "mt-14",
    "px-[4%]",
    "text-justify",
    "tracking-tight",
    props.width === "2"
      ? "max-w-[64rem]"
      : props.width === "1"
      ? "max-w-[56rem]"
      : "max-w-[42rem]",
    "mx-auto"
  );

export const sectionTitle = (props: IProps) =>
  classNames(
    "text-2xl",
    "text-center",
    "font-bold",
    "text-pri-700",
    "capitalize",
    "mb-8"
  );
