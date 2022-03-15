import React from "react";
import * as styles from "./circle.styles";
import { IProps } from "./circle.interface";

const Circle = (props: IProps) => {
  return <span className={styles.container(props)}></span>;
};

export default Circle;
