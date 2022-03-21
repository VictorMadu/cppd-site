import { Dispatch, SetStateAction } from "react";
import { ExactlyOrArray } from "../../types";

export interface IProps {
  value: string | symbol;
  children: ExactlyOrArray<JSX.Element>;
}

export interface IContext {
  value: string | symbol;
  taken: boolean;
  setTaken: Dispatch<SetStateAction<boolean>>;
}
