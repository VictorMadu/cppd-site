import { ClassNameGenerator as CNG } from "../../../../utils";
import { IProps } from "./dropdown.interface";

export const container = (props: IProps) =>
  new CNG()
    .values(
      "top-full",
      "right-3",
      "mt-2",
      "bg-neu-50 dark:bg-neu-900",
      "rounded",
      "overflow-hidden",
      "[--shadow:0px_0px_10px_4px_rgba(0,0,0,0.2)] dark:[--shadow:0px_0px_10px_4px_rgba(255,255,255,0.05)] [box-shadow:var(--shadow)]",
      "z-50",
      "absolute",
      "cursor-pointer",
      props.show ? "absolute" : "hidden"
    )
    .generate([]);

export const listItem = (props: IProps & { isActive: boolean }) =>
  new CNG()
    .values(
      "px-5",
      "py-2",
      "flex",
      "gap-x-2",
      "w-full",
      "items-center",
      "transition-all",
      "hover:bg-neu-200 focus:bg-neu-200 dark:hover:bg-neu-800 dark:focus:bg-neu-800",
      props.isActive ? "text-pri-700 dark:text-pri-200" : "",
      props.isActive ? "font-semibold" : ""
    )
    .generate([]);

export const icon = (props: IProps & { isActive: boolean }) =>
  new CNG()
    .values(
      "text-neu-700/70 dark:text-neu-200/70",
      props.isActive ? "text-pri-700/80 dark:text-pri-200/80" : ""
    )
    .generate([]);
