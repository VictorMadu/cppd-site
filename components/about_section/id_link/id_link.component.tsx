import React from "react";
import { generateIdHref } from "../../../utils";
import { IProps } from "./id_link.interface";
import * as styles from "./id_link.styles";

const IdLink = (props: IProps) => {
  return (
    <li className={styles.container(props)}>
      <a href={generateIdHref(props.id)} className={styles.link(props)}>
        {props.text}
      </a>
    </li>
  );
};

export default IdLink;
