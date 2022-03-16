import React from "react";
import If from "../../if";
import { useDefault } from "../hooks";
import { IProps } from "./default.interface";

const Default = (props: IProps) => {
  const { show } = useDefault();
  return <If cond={show} Component={props.children} />;
};

export default Default;
