import classNames from "classnames";
import { arrayize, ClassNameGenerator as CNG } from "../../../../utils";
import { IList } from "./list.interface";

export const container = (props: IList["style"]) => classNames("my-5");
export const item = (props: IList["style"]) =>
  CNG.join(
    new CNG()
      .values("my-3")
      .and("0")
      .values("")
      .and("1")
      .values("mx-[3%]")
      .and("2")
      .values("mx-[5%]")
  ).generate(arrayize(props?.margin, "1"));

export const itemTextContainer = (props: IList["style"]) => classNames("flex");

export const itemText = (props: IList["style"]) =>
  CNG.join(
    new CNG().values(
      "before:content-['']",
      "before:bg-pri-900",
      "before:inline-block",
      "before:rounded-full",
      "before:mr-4",
      "before:shrink-0",
      "capitalize",
      "text-justify",
      "leading-6"
    ),
    new CNG()
      .and("p")
      .values("before:bg-pri-900")
      .not("p")
      .values("before:bg-slate-500"),
    new CNG()
      .and("l")
      .values("before:w-3", "before:h-3")
      .and("n")
      .values("before:w-2", "before:h-2")
      .and("s")
      .values("before:w-1", "before:h-1"),
    new CNG()
      .and("b")
      .values("font-bold")
      .and("n")
      .values("font-normal")
      .and("l")
      .values("font-light")
  ).generate(
    arrayize(),
    arrayize(props?.color, "n"),
    arrayize(props?.size, "n"),
    arrayize(props?.weight, "n")
  );

export const Icon = (props: IList["style"]) => classNames();
