import React from "react";
import WithTransition from "../../transition-in-out";
import { IProps } from "./carousel-item.interface";
import * as styles from "./carousel-item.styles";

const CarouselItem = (props: IProps) => {
  return (
    <li
      className={styles.container(props)}
      onTransitionEnd={props.onTransitionEnd}
    >
      {props.children}
    </li>
    // <li
    //   className={classNames(
    //     "absolute top-0 left-0 w-full h-full transition-opacity duration-[2400ms]",
    //     {
    //       "opacity-1": currIndex === 0,
    //       "opacity-0": currIndex !== 0,
    //     }
    //   )}
    // >
    //   <div className="relative h-full">
    //     <Image
    //       src="/imgs/c-1.png"
    //       layout="fill"
    //       alt="img1"
    //       className="object-fill"
    //     />
    //   </div>
    // </li>
  );
};
export default WithTransition<IProps>(CarouselItem);
