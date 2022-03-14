import React from "react";
import * as app from "../../languages/en/app";
import activitiesAndEfforts from "../../languages/en/texts/activities_and_efforts";
import map from "lodash/map";
import * as styles from "./activities-and-efforts-section.styles";

const ActivitesAndEffortsSection = (props: unknown) => {
  return (
    <div className={styles.container(props)}>
      <p>{app.activitiesAndEfforts}</p>
      <p>{activitiesAndEfforts.text1}</p>
      {map(activitiesAndEfforts.texts2, (aes, index) => (
        <div key={index}>
          {map(aes, (ae, index) => (
            <p key={index}>{ae}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ActivitesAndEffortsSection;
