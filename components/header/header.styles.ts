import classNames from "classnames";
import { IProps } from "./header.interface";

export const container = (props: IProps) =>
  classNames(
    "bg-neu-50 dark:bg-neu-900",
    "space-y-2",
    "shadow",
    "divide-y",
    "divide-neu-300/60 dark:divide-neu-600/60",
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
    "py-2",
    "grow"
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
    "text-pri-700 dark:text-pri-200"
  );

export const shortName = (props: IProps) =>
  classNames(
    "text-pri-700 dark:text-pri-200 lg:text-neu-800/90 dark:lg:text-neu-100/90",
    "text-2xl lg:text-lg xl:text-xl 2xl:text-3xl",
    "lg:italic"
  );

export const navItems = (props: IProps) =>
  classNames(
    "bg-neu-50 dark:bg-neu-900",
    "text-sm",
    "font-semibold",
    "text-neu-900/90 dark:text-neu-50/90",
    "tracking-wide",
    "uppercase",
    "flex",
    "justify-center",
    "items-center ",
    "overflow-x-auto",
    "h-scrollbar"
  );

export const navItem = (props: { isActive: boolean }) =>
  classNames(
    "px-3",
    "pt-3",
    "pb-2",
    "whitespace-pre",
    "rounded-sm",
    "border-b-2",
    "border-b-transparent",
    props.isActive ? "text-pri-700 dark:text-pri-200" : "",
    props.isActive ? "font-bold" : "",
    props.isActive ? "border-b-pri-700 dark:border-b-pri-200" : "",
    "hover:text-pri-700 dark:hover:text-pri-200",
    "focus:text-pri-700 dark:focus:text-pri-200",
    "cursor-pointer"
  );
