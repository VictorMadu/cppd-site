import { ClassNameGenerator as CNG } from "../../../utils";
import { IProps } from "./group-content.interface";

export const container = (props: IProps) => new CNG().generate([]);

export const title = (props: IProps) =>
  new CNG().values("text-lg", "font-bold", "capitalize", "mb-2").generate([]);
