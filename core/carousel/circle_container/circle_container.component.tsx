import React from "react";
import { IProps } from "./circle_container.interface";
import * as styles from "./circle_container.styles";

const CircleContainer = (props: IProps) => {
  return <div className={styles.container(props)}>{props.children}</div>;
};

export default CircleContainer;
