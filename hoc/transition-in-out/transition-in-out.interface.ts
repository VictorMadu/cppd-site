import { ExactlyOrArray } from "../../types";

export interface IProps {
  enter: boolean;
  unMountOnLeave?: boolean;
  setUpStyle: string;
  enterStyle: string;
  transitionInStyle: string;
  transitionOutStyle: string;
}

export interface IWrappedProps {
  className: string;
  onTransitionEnd: () => void;
}
