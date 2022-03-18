import React from "react";
import Image from "next/image";
import { IProps } from "./cards.interface";
import map from "lodash/map";
import * as styles from "./cards.styles";
import If from "../../../../core/if";
import Text from "../../../../core/text";

const Cards = (props: IProps) => {
  return (
    <div className={styles.container(props)}>
      {map(props.members, (p, index) => (
        <div key={index} className={styles.card(props)}>
          <If
            cond={!!p.photo}
            Component={
              <div className={styles.imgContainer(props)}>
                <Image
                  src={p.photo as string}
                  alt={""}
                  layout={"fill"}
                  className={styles.img(props)}
                />
              </div>
            }
          />
          <p className={styles.name(props)}>{p.name}</p>
          <Text content={p.about} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
