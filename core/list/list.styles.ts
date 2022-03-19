import classNames from "classnames";
import { arrayize, ClassNameGenerator as CNG } from "../../utils";
import { IList } from "./list.interface";

export const container = (props: IList["style"]) =>
  CNG.join(
    new CNG()
      .and("0")
      .values("")
      .and("1")
      .values("mx-[2%]")
      .and("2")
      .values("mx-[4%]"),
    new CNG()
      .and("0")
      .values("my-5")
      .and("1")
      .values("my-7")
      .and("2")
      .values("my-9"),

    new CNG()
      .and("0")
      .values("space-y-2")
      .and("1")
      .values("space-y-4")
      .and("2")
      .values("space-y-7")
      .and("3")
      .values("space-y-12")
  ).generate(
    arrayize(props?.marginX, "0"),
    arrayize(props?.marginY, "0"),
    arrayize(props?.spaceBtw, "0")
  );

export const item = (props: IList["style"]) => new CNG().generate([]);

export const itemText = (props: IList["style"]) =>
  CNG.join(
    new CNG().values(
      "before:content-['']",
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
      .values("before:bg-pri-700 dark:before:bg-pri-200")
      .not("p")
      .values("before:bg-neu-900 dark:before:bg-neu-50"),
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
      .and("s-b")
      .values("font-semibold")
      .and("n")
      .values("font-normal")
      .and("l")
      .values("font-light"),
    new CNG().and("y").values("flex", "before:translate-y-full")
  ).generate(
    arrayize(),
    arrayize(props?.color, "n"),
    arrayize(props?.size, "n"),
    arrayize(props?.weight, "n"),
    arrayize(props?.seperateIcon, "n")
  );

export const Icon = (props: IList["style"]) => classNames();
