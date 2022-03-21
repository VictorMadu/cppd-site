import { ExactlyOrArray } from "../../types";

export interface IProps {
  title: string;
  width?: "0" | "1" | "2";
  children: ExactlyOrArray<JSX.Element>;
}
