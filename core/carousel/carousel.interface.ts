// export interface IProps {
//   items: {
//     src: string;
//     alt: string;
//     textComponent: JSX.Element;
//   }[];
//   startIndex?: number;
//   displayTime?: number;
//   transitionDurationStyle?: string;
//   styleClassNames: {
//     width: string;
//     height: string;
//   };
// }

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
