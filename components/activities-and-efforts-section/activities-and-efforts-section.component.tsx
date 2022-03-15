import React from "react";
import * as app from "../../languages/en/app";
import activitiesAndEfforts from "../../languages/en/texts/activities_and_efforts";
import map from "lodash/map";
import * as styles from "./activities-and-efforts-section.styles";
import { IProps } from "./activities-and-efforts-section.interface";

const ActivitesAndEffortsSection = (props: IProps) => {
  return (
    <div className={styles.container(props)}>
      <p className={styles.title(props)}>{app.activitiesAndEfforts}</p>
      <p className={styles.paragraph(props)}>{activitiesAndEfforts.text1}</p>
      {map(activitiesAndEfforts.texts2, (aes, index) => (
        <div key={index} className={styles.paragraph(props)}>
          {map(aes, (ae, index) => (
            <p key={index} className="bg-red-200 mt-1">
              {ae}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ActivitesAndEffortsSection;
