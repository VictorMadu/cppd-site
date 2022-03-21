import React from "react";
import * as app from "../../languages/en/app";
import activitiesAndEfforts from "../../languages/en/texts/activities_and_efforts";
import { IProps } from "./activities-and-efforts-section.interface";
import Content from "../../core/img/content";
import Layout from "../layout";

const ActivitesAndEffortsSection = (props: IProps) => {
  return (
    <Layout title={app.activitiesAndEfforts}>
      <Content contents={activitiesAndEfforts.contents} />
    </Layout>
  );
};

export default ActivitesAndEffortsSection;
