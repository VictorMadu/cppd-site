import React from "react";
import Carousel from "../../core/carousel";
import { useCarousel } from "../../hooks/useCarousel";
import activitiesInPhotos from "../../languages/en/texts/activities_in_photos";
import Img from "../../core/img/img.components";
import map from "lodash/map";
import { IProps } from "./activities-carousel.interface";
import * as styles from "./activities-carousel.styles";
import Content from "../../core/img/content";

const ActivitesCarousel = (props: IProps) => {
  const {
    currIndex,
    displayPrevAction,
    displayNextAction,
    displayIndex,
  } = useCarousel(activitiesInPhotos.length);
  return (
    <div className={styles.container(props)}>
      <Carousel
        styleClassNames={styles.carousel(props)}
        onPrevClick={displayPrevAction}
        onNextClick={displayNextAction}
      >
        <>
          {map(activitiesInPhotos, (aPhoto, index) => {
            return (
              // TODO: Carousel show type eg: (fadeShow) is to be placed in the Carousel Container and the Items and Circle get the show type through useContext. This aids in flexibility and ease of use.
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
          <Carousel.CircleContainer>
            {map(activitiesInPhotos, (aPhoto, index) => {
              return (
                <Carousel.Circle
                  key={index}
                  active={currIndex === index}
                  onClick={() => displayIndex(index)}
                />
              );
            })}
          </Carousel.CircleContainer>
        </>
        <div className={styles.overlayImg(props)}></div>
      </Carousel>
      {/* TODO: Move to styles class and this is duplicating the section classes */}
      <div className="text-justify px-[4%] bg-pri-100 py-4">
        <Content contents={activitiesInPhotos[currIndex].texts} />
      </div>
    </div>
  );
};

export default ActivitesCarousel;
