import { ClassNameGenerator as CNG } from "../../../utils";
import { IProps } from "./theme-switcher.interface";

export const container = (props: IProps) =>
  new CNG().values("pr-[4%] sm:pr-8", "relative").generate([]);

export const btn = (props: IProps) =>
  new CNG()
    .values(
      "rounded-full",
      "bg-neu-100 dark:bg-neu-800 hover:bg-neu-200 hover:dark:bg-neu-700 focus:bg-neu-200 focus:dark:bg-neu-700",
      "w-8",
      "h-8",
      "flex",
      "items-center",
      "justify-center",
      "text-neu-800/90 dark:text-neu-100/90",
      "transition-all"
    )
    .generate([]);
