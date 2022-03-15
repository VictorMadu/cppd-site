import React from "react";
import * as styles from "./carousel.styles";
import { IProps } from "./carousel.interface";
import Controls from "./controls/controls.component";
import CarouselItem from "./carousel-item/carousel-item.component";
import Circle from "./circle";
import CircleContainer from "./circle_container";

const Carousel = (props: IProps) => {
  return (
    <div className={styles.container(props)}>
      <div className={styles.controlContainer(props)}>
        <Controls
          onPrevClick={props.onPrevClick}
          onNextClick={props.onNextClick}
        />
      </div>
      <ul className={styles.listContainer(props)}>{props.children}</ul>
    </div>
  );
};

Carousel.Item = CarouselItem;
Carousel.CircleContainer = CircleContainer;
Carousel.Circle = Circle;

// Carousel show types
Carousel.fadeShow = styles.fadeShow;

export default Carousel;
