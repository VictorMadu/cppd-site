import Image from "next/image";
import React from "react";
import { IProps } from "./img.interface";
import * as styles from "./img.styles";

const Img = (props: IProps) => {
  return (
    <div className={styles.container(props)}>
      <Image
        src={props.src}
        alt={props.alt ?? ""}
        className={styles.img(props)}
        layout="fill"
        onClick={props.onClick}
      />
    </div>
  );
};

export default Img;
