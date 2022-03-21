import React from "react";
import If from "../../../core/if";
import Cards from "./cards/cards.component";
import { IProps } from "./cards-container.interface";
import * as styles from "./cards-container.styles";

const CardsContainer = (props: IProps) => {
  return (
    <div>
      <If
        cond={!!props.title}
        Component={<p className={styles.title(props)}>{props.title}</p>}
      />
      {/* TODO: Instead of Cards component to map through all cards and show each card, move the map to here, change the name from Cards to Card and display only one card */}
      <Cards members={props.members} />
    </div>
  );
};

export default CardsContainer;
