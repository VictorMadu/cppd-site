import React from "react";
import * as styles from "./group-content.styles";
import { IProps } from "./group-content.interface";
import Content from "../../mission_content";

const GroupContent = (props: IProps) => {
  return (
    <div id={props.id} className={styles.container(props)}>
      <p className={styles.title(props)}>{props.title}</p>
      <Content contents={props.contents} />
    </div>
  );
};

export default GroupContent;
