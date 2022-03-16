import React from "react";
import Case from "./case/case.component";
import Default from "./default";
import { Context, useSwitch } from "./hooks";
import { IProps } from "./switch.interface";

const Switch = (props: IProps) => {
  const { taken, setTaken } = useSwitch(props.value);

  return (
    <Context.Provider value={{ value: props.value, taken, setTaken }}>
      {props.children}
    </Context.Provider>
  );
};

Switch.Case = Case;
Switch.Default = Default;

export default Switch;
