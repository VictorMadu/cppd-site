import React from "react";
import WithTransition from "../../../hoc/transition-in-out";
import { IProps } from "./carousel-item.interface";
import * as styles from "./carousel-item.styles";

const CarouselItem = (props: IProps) => {
  return <li className={styles.container(props)}>{props.children}</li>;
};

export default CarouselItem;
