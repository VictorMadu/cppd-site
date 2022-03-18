import React from "react";
import { IProps } from "./members_section.interface";
import * as app from "../../languages/en/app";
import map from "lodash/map";
import members from "../../languages/en/texts/members";
import Img from "../../core/img/img.components";
import Image from "next/image";
import * as styles from "./members_section.styles";
import CardsContainer from "./cards-container/cards-container.component";

const MembersSection = (props: IProps) => {
  return (
    <div className={styles.container(props)}>
      <p className={styles.title(props)}>{app.members.title}</p>
      <CardsContainer
        title={app.members.levels.board_of_trustees}
        members={members.board_of_trustees}
      />
      <CardsContainer
        title={app.members.levels.council_of_advisers}
        members={members.council_of_advisers}
      />
      <CardsContainer
        title={app.members.levels.other_key_members}
        members={members.other_key_members}
      />
      <CardsContainer
        title={app.members.levels.late_members}
        members={members.late_members}
      />
    </div>
  );
};

export default MembersSection;
