import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { useCarousel } from "../../hooks/carousel";

const TOTAL_IMGS = 4;
const DISPLAY_TIME = 5000;
const Carousel = () => {
  const { currIndex } = useCarousel(TOTAL_IMGS, DISPLAY_TIME);
  return (
    <div className="relative m-1">
      <ul className="relative w-full h-[25rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem]">
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
            "absolute top-0 left-0 w-full h-full transition-opacity  duration-[2400ms]",
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
