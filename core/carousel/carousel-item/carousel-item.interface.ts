import { ExactlyOrArray } from "../../../types";

export interface IProps {
  className: string;
  onTransitionEnd: () => void;
  children: ExactlyOrArray<JSX.Element>;
}
