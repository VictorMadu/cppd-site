import React from "react";
import If from "../../if";
import { useCase } from "../hooks";
import { IProps } from "./case.interface";

const Case = (props: IProps) => {
  const { show } = useCase(props.compCase);
  return <If cond={show} Component={props.children} />;
};

export default Case;
