import { ClassNameGenerator as CNG } from "../../utils";
import { IProps } from "./members_section.interface";

export const buttonContainer = (props: IProps) =>
  new CNG()
    .values(
      "mb-8",
      "flex",
      "justify-center",
      "overflow-x-auto",
      "w-full",
      "border-b-2",
      "border-neu-300/60 dark:border-neu-600/60",
      "h-scrollbar"
    )
    .generate([]);

export const button = (props: { isActive: boolean }) =>
  new CNG()
    .values(
      "text-sm",
      "uppercase",
      "font-semibold",
      "whitespace-pre",
      "px-3",
      "py-1.5",
      props.isActive
        ? "text-pri-600 dark:text-pri-300"
        : "text-neu-800/90 dark:text-neu-100/90",
      !props.isActive ? "hover:text-pri-400 dark:hover:text-pri-300" : ""
    )
    .generate([]);
