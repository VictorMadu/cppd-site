import React from "react";
import map from "lodash/map";
import * as styles from "./text.styles";
import { IProps } from "./text.interface";

const Text = (props: IProps) => {
  return <p className={styles.container(props)}>{props.text}</p>;
};

export default Text;
