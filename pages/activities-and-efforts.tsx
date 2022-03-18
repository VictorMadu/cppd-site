import { NextPage } from "next";
import React from "react";
import Header from "../components/header";

const ActivitiesAndEfforts: NextPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.container(props)}>
        <p className={styles.title(props)}>{app.activitiesAndEfforts}</p>
        <MissionContent contents={activitiesAndEfforts.contents} />
      </div>
    </div>
  );
};

export default ActivitiesAndEfforts;
