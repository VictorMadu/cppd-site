import React from "react";
import Carousel from "../../core/carousel";
import { useCarousel } from "../../hooks/useCarousel";
import activitiesInPhotos from "../../languages/en/texts/activities_in_photos";
import Img from "../../core/img/img.components";
import map from "lodash/map";
import { IProps } from "./activities-carousel.interface";
import * as styles from "./activities-carousel.styles";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ExactlyOrArray } from "../../types";

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
        <>
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
          <Carousel.CircleContainer>
            {map(activitiesInPhotos, (aPhoto, index) => {
              return (
                <Carousel.Circle key={index} active={currIndex === index} />
              );
            })}
          </Carousel.CircleContainer>
        </>
        <div className={styles.overlayImg(props)}></div>
      </Carousel>
      {/* <TransitionGroup component={({children}: {children: ExactlyOrArray<JSX.Element>}) => <div className={styles.carouselTextContainer(props)}>
        {children}
      </div>}>
      {map(activitiesInPhotos, (aPhoto, index) => {
          return (
            // TODO: Add more and less link
          <CSSTransition key={index} in={currIndex === index} timeout={100} appear classNames={{
            appear: 'absolute left'
          }}>
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
          </CSSTransition>
          );
        })}
                 </TransitionGroup> */}
    </div>
  );
};

export default ActivitesCarousel;
