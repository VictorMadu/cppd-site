import { ClassNameGenerator as CNG } from "../../utils";
import { IProps } from "./members_section.interface";

export const buttonContainer = (props: IProps) =>
  new CNG()
    .values(
      "mb-8",
      "flex",
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
      "mb-0.5",
      "mx-1",
      "first:ml-auto",
      "last:mr-auto",
      props.isActive
        ? "text-pri-600 dark:text-pri-300"
        : "text-neu-800/90 dark:text-neu-100/90",
      "focus:text-pri-400 dark:focus:text-pri-300 focus:outline-none",
      !props.isActive ? "hover:text-pri-400 dark:hover:text-pri-300" : ""
    )
    .generate([]);
