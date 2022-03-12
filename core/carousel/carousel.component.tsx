import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useCarousel } from "../../hooks/carousel";
import c from "../../constants";
import * as styles from "./carousel.styles";
import { IProps } from "./carousel.interface";
import map from "lodash/map";
import Controls from "./controls/controls.component";
import CarouselItem from "./carousel-item/carousel-item.component";

const Carousel = (props: IProps) => {
  // const { currIndex, displayTime } = useCarousel(
  //   props.items.length,
  //   props.displayTime,
  //   props.startIndex
  // );

  return (
    <div className={styles.container(props)}>
      <div className={styles.controlContainer(props)}>
        <Controls
          onPrevClick={props.onPrevClick}
          onNextClick={props.onNextClick}
        />
      </div>
      <ul className={styles.listContainer(props)}>
        {props.children}
        {/* {map(props.items, (item, index) => (
        <li className={classNames("absolute top-0 left-0 w-full h-full")}>
          <div className="relative">
            <Image src={item.src} alt={item.alt} layout="fill" />
          </div>
        </li>
      ))} */}
      </ul>
    </div>
  );
};

Carousel.Item = CarouselItem;

export default Carousel;
