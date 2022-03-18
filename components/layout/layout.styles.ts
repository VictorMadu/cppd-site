import classNames from "classnames";
import { IProps } from "./layout.interface";

export const container = (props: IProps) => classNames("");

export const sectionContainer = (props: IProps) =>
  classNames(
    "mt-14",
    "px-[4%]",
    "text-justify",
    "tracking-tight",
    "max-w-[42rem]",
    "mx-auto",
    "max-w-[42rem]",
    "mx-auto"
  );

export const sectionTitle = (props: IProps) =>
  classNames(
    "text-2xl",
    "text-center",
    "font-bold",
    "text-pri-900/90",
    "capitalize",
    "mb-2"
  );
