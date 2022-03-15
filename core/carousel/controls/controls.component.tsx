import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import * as styles from "./controls.styles";
import { IProps } from "./controls.interface";

const Controls = (props: IProps) => {
  const iconStyles = styles.icon(props);
  return (
    <div className={styles.container(props)}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        size="1x"
        onClick={props.onPrevClick}
        className={iconStyles}
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        size="1x"
        onClick={props.onNextClick}
        className={iconStyles}
      />
    </div>
  );
};

export default Controls;
