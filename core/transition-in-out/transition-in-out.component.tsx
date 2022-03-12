import classNames from "classnames";
import React from "react";
import { useTransition } from "../../hooks/transition";
import { ExcludeProp } from "../../types";
import If from "../if/if.component";
import { IProps, IWrappedProps } from "./transition-in-out.interface";

const WithTransition = <T extends IWrappedProps = IWrappedProps>(
  Component: (props: T) => JSX.Element
) => {
  const MyComp = (
    props: IProps & ExcludeProp<T, "className" | "onTransitionEnd">
  ) => {
    const { show, handleTransitionEnd, transitionStyle } = useTransition(props);
    return (
      <If
        cond={!props.unMountOnLeave || show}
        Component={
          <Component
            {...((props as unknown) as T)}
            onTransitionEnd={handleTransitionEnd}
            className={classNames(props.setUpStyle, transitionStyle)}
          />
        }
      />
    );
  };
  MyComp.displayName = "WithTransitionInner";
  return MyComp;
};

export default WithTransition;
