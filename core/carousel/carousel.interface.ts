import { ExactlyOrArray } from "../../types";

export interface IProps {
  onPrevClick: () => void;
  onNextClick: () => void;
  styleClassNames: {
    height: string;
    padding?: string;
    margin?: string;
  };
  children: ExactlyOrArray<JSX.Element>;
}
