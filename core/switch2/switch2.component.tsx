import React from "react";
import If from "../if";
import { IProps } from "./switch2.interface";

export const Switch2 = (props: IProps) => {
  return (
    <React.Fragment>
      <If
        cond={!!props.cases[props.value]}
        Component={props.cases[props.value]}
        Else={props.cases[Switch2.DEFAULT]}
      />
    </React.Fragment>
  );
};

Switch2.DEFAULT = Symbol("DEFAULT");

export default Switch2;
