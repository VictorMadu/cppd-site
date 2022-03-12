import classNames from "classnames";
import { IProps } from "./carousel.interface";

export const container = (props: IProps, ...otherNames: string[]) =>
  classNames(
    "relative",
    props.styleClassNames.height,
    props.styleClassNames.padding,
    props.styleClassNames.margin
  );

export const controlContainer = (props: IProps, otherNames?: string) =>
  classNames(
    "absolute",
    "top-1/2",
    "-translate-y-1/2",
    "w-full",
    "left-0",
    "z-30",
    otherNames
  );

export const listContainer = (props: IProps, otherNames?: string) =>
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
