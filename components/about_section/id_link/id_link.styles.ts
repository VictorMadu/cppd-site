import classNames from "classnames";
import { IProps } from "./id_link.interface";

export const container = (props: IProps) => classNames();

export const link = (props: IProps) =>
  classNames(
    "inline-block",
    "px-3",
    "py-2",
    "font-bold",
    "uppercase",
    "text-base",
    "text-slate-900/60 hover:text-pri-900/80 focus:text-pri-900/80"
  );
