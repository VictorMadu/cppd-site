import React from "react";
import { IProps } from "./text.interface";
import * as styles from "./text.styles";

const Text = (props: IProps) => {
  return (
    <span className={styles.container(props.content.style)}>
      {props.content.text}
    </span>
  );
};

export default Text;
