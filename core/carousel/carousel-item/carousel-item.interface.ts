import { ExactlyOrArray } from "../../../types";

export interface IProps {
  type: string;
  children: ExactlyOrArray<JSX.Element>;
}

export interface ITransitionProps {
  show: boolean;
  transitionTime?: string;
}
