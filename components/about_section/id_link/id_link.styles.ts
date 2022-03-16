import classNames from "classnames";
import { IProps } from "./id_link.interface";

export const container = (props: IProps) => classNames();

export const link = (props: { active: boolean }) =>
  classNames(
    "inline-block",
    "px-3",
    "py-2",
    "font-semibold",
    "capitalize",
    props.active ? "text-pri-900" : "text-slate-900/90",
    props.active ? "underline" : null,
    props.active ? "decoration-pri-900/80" : null,
    props.active ? "decoration-2" : null
  );
