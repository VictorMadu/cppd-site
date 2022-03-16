import { Dispatch, SetStateAction } from "react";

export interface IProps {
  value: string | symbol;
  children: JSX.Element;
}

export interface IContext {
  value: string | symbol;
  taken: boolean;
  setTaken: Dispatch<SetStateAction<boolean>>;
}
