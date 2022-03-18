import { ClassNameGenerator as CNG } from "../../../utils";
import { IProps } from "./text.interface";

export const container = (props: IProps) =>
  new CNG()
    .values("first-letter:ml-4", "mb-2", "leading-8", "[hyphens:manual]")
    .generate([]);
