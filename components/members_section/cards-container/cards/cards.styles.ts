import { ClassNameGenerator as CNG } from "../../../../utils";
import { IProps } from "./cards.interface";

export const container = (props: IProps) =>
  new CNG().values("flex", "flex-col", "gap-y-4").generate([]);

export const card = (props: IProps) =>
  new CNG()
    .values(
      "w-full",
      "max-w-[20rem]",
      "sm:max-w-full",
      "shadow-2xl sm:shadow-xl",
      "rounded-lg",
      "px-[5%]",
      "py-6",
      "mx-auto",
      "bg-neu-50/90 dark:bg-neu-900/90"
    )
    .generate([]);

export const imgContainer = (props: IProps) =>
  new CNG()
    .values(
      "relative",
      "w-full",
      "sm:max-w-[15rem]",
      "aspect-square",
      "border-2",
      "border-neu-300 dark:border-neu-600",
      "rounded-lg",
      "overflow-hidden",
      "float-left",
      "mr-[5%]",
      "mb-1"
    )
    .generate([]);

export const img = (props: IProps) =>
  new CNG().values("object-cover").generate([]);

export const name = (props: IProps) =>
  new CNG().values("font-bold", "mb-4").generate([]);

export const descContainer = (props: IProps) =>
  new CNG().values("flex", "flex-col", "gap-y-1", "float-left").generate([]);
