import React from "react";
import map from "lodash/map";
import MissionContent from "../mission_content.component";
import { IProps } from "./list.interface";
import * as styles from "./list.styles";
import If from "../../../../core/if";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = (props: IProps) => {
  return (
    <ul className={styles.container(props.content.style)}>
      {map(props.content.items, (item, index) => (
        <li key={index} className={styles.item(props.content.style)}>
          <p className={styles.itemText(props.content.style)}>{item.text}</p>
          <MissionContent contents={item.children ?? []} />
        </li>
      ))}
    </ul>
  );
};

export default List;
