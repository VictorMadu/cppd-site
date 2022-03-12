import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { useCarousel } from "../../hooks/carousel";
import c from "../../constants";
import * as styles from "./carousel.styles";
import { IProps } from "../header/header.interface";

const Carousel = (props: IProps) => {
  const { currIndex } = useCarousel(
    c.carousel.total_imgs,
    c.carousel.display_time
  );

  return (
    <Carousel 
      items={
        []
      }
      displayTime={Carousel.default.displayTime}
      transitionTime={Carousel.default.transitionTime}
      styleClassNames={{
        width: 'w-full',
        height: 
      }}
    />
  )

  return (
    <div className={styles.container(props)}>
      <ul className={styles.imgLists(props)}>
        <li
          className={classNames(
            "absolute top-0 left-0 w-full h-full transition-opacity duration-[2400ms]",
            {
              "opacity-1": currIndex === 0,
              "opacity-0": currIndex !== 0,
            }
          )}
        >
          <div className="relative h-full">
            <Image
              src="/imgs/c-1.png"
              layout="fill"
              alt="img1"
              className="object-fill"
            />
          </div>
        </li>
        <li
          className={classNames(
            "absolute top-0 left-0 w-full h-full transition-opacity  duration-[2400ms]",
            {
              "opacity-1": currIndex === 1,
              "opacity-0": currIndex !== 1,
            }
          )}
        >
          <div className="relative h-full">
            <Image
              src="/imgs/c-2.png"
              layout="fill"
              alt="img1"
              className="object-fill"
            />
          </div>
        </li>
        <li
          className={classNames(
            "absolute top-0 left-0 w-full h-full transition-opacity  duration-[3000ms]",
            {
              "opacity-1": currIndex === 2,
              "opacity-0": currIndex !== 2,
            }
          )}
        >
          <div className="relative h-full">
            <Image
              src="/imgs/c-3.png"
              layout="fill"
              alt="img1"
              className="object-fill"
            />
          </div>
        </li>
        <li
          className={classNames(
            "absolute top-0 left-0 w-full h-full transition-opacity duration-[2400ms]",
            {
              "opacity-1": currIndex === 3,
              "opacity-0": currIndex !== 3,
            }
          )}
        >
          <div className="relative h-full">
            <Image
              src="/imgs/c-4.png"
              layout="fill"
              alt="img1"
              className="object-fill"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Carousel;
