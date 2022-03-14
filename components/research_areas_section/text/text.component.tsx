import React from "react";
import map from "lodash/map";
import * as styles from "./text.styles";

const Text = (props: { text: string }) => {
  return <p className={styles.container(props)}>{props.text}</p>;
};

export default Text;
