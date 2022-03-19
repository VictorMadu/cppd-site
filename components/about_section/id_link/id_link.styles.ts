import classNames from "classnames";
import { IProps } from "./id_link.interface";

export const container = (props: IProps) => classNames();

export const link = (props: IProps) =>
  classNames(
    "inline-block",
    "px-3",
    "pb-1",
    "font-semibold",
    "uppercase",
    "text-base",
    "hover:text-pri-400 dark:hover:text-pri-300 focus:text-pri-400 dark:focus:text-pri-300"
  );
