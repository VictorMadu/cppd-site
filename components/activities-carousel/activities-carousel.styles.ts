import classNames from "classnames";
import { ClassNameGenerator as CNG } from "../../utils";
import { IProps } from "./activities-carousel.interface";

export const container = (props: IProps) =>
  new CNG()
    .values("max-w-[60rem]", "mx-auto", "mt-4", "shadow", "shadow-pri-400/10")
    .generate([]);

export const carousel = (props: unknown, otherNames?: string) => ({
  width: classNames("w-full", otherNames),
  height: classNames(
    "h-[25rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem]",
    otherNames
  ),
  margin: classNames("mt-1"),
});

export const carouselImg = (props: unknown) => ({
  width: classNames("w-full"),
  height: classNames("h-full"),
});

export const carouselTextContainer = (props: unknown) => classNames("relative");

// WARNING: Repeating 'duration-[2400ms]'. Make it dry
// TODO: Transition in from right when props.show is changed to true
// Transition out from left when props.show is changed to false
export const carouselTextGroup = (props: { show: boolean }) =>
  classNames(
    "transition-all",
    "duration-[2400ms]",
    {},
    "px-[2%]",
    "text-justify"
  );

export const carouselText = (props: unknown) => classNames("basis-full");

export const overlayImg = (props: unknown) =>
  classNames("absolute", "top-0", "left-0", "h-full", "w-full", "bg-black/50");
