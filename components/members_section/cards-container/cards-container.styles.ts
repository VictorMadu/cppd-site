import { ClassNameGenerator as CNG } from "../../../utils";
import { IProps } from "./cards-container.interface";

export const title = (props: IProps) =>
  new CNG().values("font-bold", "mb-4", "mt-8", "uppercase").generate([]);
