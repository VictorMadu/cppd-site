import React from "react";
import { IProps } from "./text_and_list.interface";
import map from "lodash/map";
import Text from "../text/text.component";
import * as styles from "./text_and_list.styles";

const TextAndList = (props: IProps) => {
  return (
    <div className={styles.container(props)}>
      <Text text={props.text} />
      <ul className={styles.itemsContainer(props)}>
        {map(props.lists, (list, index) => (
          <li key={index} className={styles.item(props)}>
            {list}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextAndList;
