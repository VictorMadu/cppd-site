import React from "react";
import * as app from "../../languages/en/app";
import activitiesAndEfforts from "../../languages/en/texts/activities_and_efforts";
import * as styles from "./activities-and-efforts-section.styles";
import { IProps } from "./activities-and-efforts-section.interface";
import MissionContent from "../about_section/mission_content/mission_content.component";

const ActivitesAndEffortsSection = (props: IProps) => {
  return (
    <div className={styles.container(props)}>
      <p className={styles.title(props)}>{app.activitiesAndEfforts}</p>
      <MissionContent contents={activitiesAndEfforts.contents} />
    </div>
  );
};

export default ActivitesAndEffortsSection;
