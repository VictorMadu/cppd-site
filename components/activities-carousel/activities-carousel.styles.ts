import classNames from "classnames";

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
  classNames("transition-all", "duration-[2400ms]", {});

export const carouselText = (props: unknown) => classNames();
