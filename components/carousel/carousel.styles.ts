import classNames from "classnames";
import { IProps } from "./carousel.interface";

export const container = (props: IProps, otherNames?: string) =>
  classNames("relative", "m-1", otherNames);

export const imgLists = (props: IProps, otherNames?: string) =>
  classNames(
    "relative",
    "w-full",
    "h-[25rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem]",
    otherNames
  );

export const cppdCarousel = {
  width: (props: IProps, otherNames?: string) =>
    classNames("w-full", otherNames),
  height: (props: IProps, otherNames?: string) =>
    classNames("h-[25rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem]", otherNames),
};
