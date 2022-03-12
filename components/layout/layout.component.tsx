import React from "react";
import Carousel from "../../core/carousel";
import Header from "../header";
import activitiesInPhotos from "../../languages/en/activities_in_photos";
import map from "lodash/map";
import * as styles from "./layout.styles";
import { IProps } from "./layout.interface";
import Img from "../../core/img/img.components";
import { useCarousel } from "../../hooks/carousel";

const Layout = (props: IProps) => {
  const { currIndex, displayPrevAction, displayNextAction } = useCarousel(
    activitiesInPhotos.length
  );

  console.log("currIndex", currIndex);

  return (
    <div>
      <Header />
      <Carousel
        styleClassNames={styles.carousel(props)}
        onPrevClick={displayPrevAction}
        onNextClick={displayNextAction}
      >
        {map(activitiesInPhotos, (aPhoto, index) => {
          return (
            <Carousel.Item
              key={index}
              type={Carousel.fadeShow({
                show: currIndex === index,
              })}
            >
              <Img src={aPhoto.photo} imgStyles={styles.carouselImg(props)} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Layout;
