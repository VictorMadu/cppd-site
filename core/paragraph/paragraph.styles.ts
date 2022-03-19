import { arrayize, ClassNameGenerator as CNG } from "../../utils";
import { IParaText } from "./paragraph.interface";

export const container = (props: IParaText["style"]) =>
  CNG.join(
    new CNG().values("indent-4", "mb-2"),
    new CNG()
      .and("p")
      .values("text-pri-600 dark:text-pri-300")
      .not("p")
      .values("text-neu-800/90 dark:text-neu-100/90"),
    new CNG()
      .and("0")
      .values("leading-4")
      .and("1")
      .values("leading-6")
      .and("2")
      .values("leading-8"),
    new CNG()
      .and("b")
      .values("font-bold")
      .and("s-b")
      .values("font-semibold")
      .and("n")
      .values("font-normal")
      .and("l")
      .values("font-light"),
    new CNG()
      .and("u")
      .values("uppercase")
      .and("c")
      .values("capitalize")
      .and("l")
      .values("lowercase")
  ).generate(
    arrayize(),
    arrayize(props?.color, "n"),
    arrayize(props?.height, "2"),
    arrayize(props?.weight, "n"),
    arrayize(props?.transform)
  );
