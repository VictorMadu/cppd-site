import classNames from "classnames";
import { IProps } from "./text_and_list.interface";

export const container = (props: IProps) => classNames("");

export const itemsContainer = (props: IProps) => classNames("px-[4%]");

export const item = (props: IProps) =>
  classNames(
    "before:content-['']",
    "before:w-2",
    "before:h-2",
    "before:bg-pri-900",
    "before:inline-block",
    "before:rounded-full",
    "before:mr-4",
    "mt-5",
    "first-letter:capitalize",
    "text-justify"
  );
