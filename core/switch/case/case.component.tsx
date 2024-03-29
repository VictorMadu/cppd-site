import React from "react";
import If from "../../if";
import { useCase } from "../hooks";
import { IChildren, IComponent, IProps } from "./case.interface";

const Case = (props: IProps) => {
  const { show } = useCase(props.compCase);
  return (
    <If
      cond={show}
      Component={
        <If
          cond={!!(props as IChildren).children}
          Component={<>{(props as IChildren).children}</>}
          Else={<>{(props as IComponent).Component}</>}
        />
      }
    />
  );
};

export default Case;
