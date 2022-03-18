import React from "react";
import * as styles from "./circle.styles";
import { IProps } from "./circle.interface";

const Circle = (props: IProps) => {
  return (
    <button
      className={styles.container(props)}
      onClick={props.onClick}
    ></button>
  );
};

export default Circle;
