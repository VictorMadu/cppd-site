import React from "react";
import map from "lodash/map";
import { IProps } from "./text_group.interface";
import * as styles from "./text_group.styles";

const TextGroup = (props: IProps) => {
  return (
    <div className={styles.container(props)}>
      {map(props.texts, (text, index) => (
        <p key={index} className={styles.text(props)}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default TextGroup;
