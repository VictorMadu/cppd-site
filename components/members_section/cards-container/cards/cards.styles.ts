import { ClassNameGenerator as CNG } from "../../../../utils";
import { IProps } from "./cards.interface";

export const container = (props: IProps) =>
  new CNG().values("flex", "flex-col", "gap-y-4").generate([]);

export const card = (props: IProps) =>
  new CNG()
    .values("w-full", "shadow-xl", "rounded-lg", "px-[5%]", "py-6", "bg-white")
    .generate([]);

export const imgContainer = (props: IProps) =>
  new CNG()
    .values(
      "relative",
      "w-full",
      "max-w-[15rem]",
      "aspect-square",
      "border-2",
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
  new CNG().values("font-bold", "whitespace-pre", "mb-4").generate([]);

export const descContainer = (props: IProps) =>
  new CNG().values("flex", "flex-col", "gap-y-1", "float-left").generate([]);
