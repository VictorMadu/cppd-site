import React from "react";
import If from "../../if";
import { useDefault } from "../hooks";
import { IChildren, IComponent, IProps } from "./default.interface";

const Default = (props: IProps) => {
  const { show } = useDefault();
  return (
    <If
      cond={show}
      Component={
        (props as IChildren).children ?? (props as IComponent).Component
      }
    />
  );
};

export default Default;
