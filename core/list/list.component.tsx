import React from "react";
import map from "lodash/map";
import Content from "../img/content/content.component";
import { IProps } from "./list.interface";
import * as styles from "./list.styles";

const List = (props: IProps) => {
  return (
    <ul className={styles.container(props.content.style)}>
      {map(props.content.items, (item, index) => (
        <li key={index} className={styles.item(props.content.style)}>
          <p className={styles.itemText(props.content.style)}>{item.text}</p>
          <Content contents={item.children ?? []} />
        </li>
      ))}
    </ul>
  );
};

export default List;
