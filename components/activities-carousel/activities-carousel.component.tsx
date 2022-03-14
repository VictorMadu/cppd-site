import React from "react";
import Carousel from "../../core/carousel";
import { useCarousel } from "../../hooks/useCarousel";
import activitiesInPhotos from "../../languages/en/texts/activities_in_photos";
import Img from "../../core/img/img.components";
import map from "lodash/map";
import { IProps } from "./activities-carousel.interface";
import * as styles from "./activities-carousel.styles";

const ActivitesCarousel = (props: IProps) => {
  const { currIndex, displayPrevAction, displayNextAction } = useCarousel(
    activitiesInPhotos.length
  );
  return (
    <div>
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
      <div className={styles.carouselTextContainer(props)}>
        {map(activitiesInPhotos, (aPhoto, index) => {
          return (
            // TODO: Add more and less link
            <div
              key={index}
              className={styles.carouselTextGroup({ show: true })}
            >
              {map(aPhoto.texts, (text, index) => (
                <p key={index} className={styles.carouselText(props)}>
                  {text}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivitesCarousel;
