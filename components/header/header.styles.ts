import classNames from "classnames";
import { IProps } from "./header.interface";

export const container = (props: IProps) =>
  classNames(
    "bg-white",
    "space-y-2",
    "shadow",
    "divide-y",
    "divide-slate-300/60",
    "top-0",
    "transition-all",
    "duration-lg"
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
    "py-2"
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
    "text-pri-700"
  );

export const shortName = (props: IProps) =>
  classNames(
    "text-pri-700 lg:text-zinc-900 lg:text-opacity-80 text-2xl lg:text-lg xl:text-xl 2xl:text-3xl lg:italic"
  );

export const navItems = (props: IProps) =>
  classNames(
    "bg-white",
    "text-sm",
    "font-bold",
    "text-slate-900/80",
    "tracking-wide",
    "uppercase",
    "flex",
    "justify-center",
    "items-center ",
    "overflow-x-auto"
  );

export const navItem = (props: IProps) =>
  classNames(
    "px-3",
    "pt-3",
    "pb-2",
    "rounded",
    "border-b-4",
    "border-b-transparent",
    "hover:border-b-pri-400",
    "hover:text-pri-900",
    "focus:border-b-pri-400",
    "focus:text-pri-900",
    "cursor-pointer"
  );
