import classNames from "classnames";

export const carousel = (props: unknown, otherNames?: string) => ({
  width: classNames("w-full", otherNames),
  height: classNames(
    "h-[25rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem]",
    otherNames
  ),
  margin: classNames("mx-[2%] mt-4"),
});

export const carouselImg = (props: unknown, otherNames?: string) => ({
  width: classNames("w-full"),
  height: classNames("h-full"),
});
