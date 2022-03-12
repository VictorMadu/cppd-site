import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import * as styles from "./controls.styles";
import { IProps } from "./controls.interface";

const Controls = (props: IProps) => {
  return (
    <div className={styles.container(props)}>
      <FontAwesomeIcon icon={faChevronLeft} size="lg" />
      <FontAwesomeIcon icon={faChevronRight} size="lg" />
    </div>
  );
};

export default Controls;
