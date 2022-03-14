import classNames from "classnames";
import { IProps } from "./nav_container.interface";

export const container = (props: IProps) =>
  classNames(
    "bg-white",
    "text-sm md:text-base lg:text-lg",
    "font-bold",
    "tracking-wider",
    "uppercase",
    "flex ",
    "justify-center",
    "items-center ",
    "overflow-x-auto"
  );

export const logoContainer = (props: IProps) =>
  classNames(
    "flex",
    "justify-center",
    "items-center ",
    "gap-x-2 lg:gap-x-8 2xl:gap-x-24",
    "font-bold",
    "2xl:text-5xl",
    "px-[2%]",
    "py-3"
  );

export const imgStyles = (props: IProps) => ({
  width: classNames("w-12"),
  height: classNames("h-12"),
});

export const fullName = (props: IProps) =>
  classNames(
    "uppercase",
    "hidden lg:inline",
    "text-2xl xl:text-3xl 2xl:text-4xl",
    "text-violet-700"
  );

export const shortName = (props: IProps) =>
  classNames(
    "text-violet-700 lg:text-zinc-900 lg:text-opacity-80 text-2xl lg:text-lg xl:text-xl 2xl:text-3xl lg:italic"
  );

export const item = (props: IProps) =>
  classNames(
    "px-3",
    "pt-4",
    "pb-3",
    "rounded",
    "border-b-4",
    "border-b-transparent",
    "hover:border-b-violet-400",
    "cursor-pointer"
  );
