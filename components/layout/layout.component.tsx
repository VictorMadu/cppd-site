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
  const {
    currIndex,
    displayTime,
    displayPrevAction,
    displayNextAction,
  } = useCarousel(activitiesInPhotos.length);

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
          const itemStyles = styles.carouselItem(props);
          return (
            <Carousel.Item
              key={index}
              unMountOnLeave={false}
              enter={currIndex === index}
              setUpStyle={itemStyles.setUp}
              enterStyle={itemStyles.enter}
              transitionInStyle={itemStyles.in}
              transitionOutStyle={itemStyles.out}
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
