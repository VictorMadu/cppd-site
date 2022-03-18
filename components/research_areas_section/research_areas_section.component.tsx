import React from "react";
import * as app from "../../languages/en/app";
import { researchAreas } from "../../languages/en/texts/research-areas";
import { IProps } from "./research_areas_section.interface";
import Content from "../mission_content";
import Layout from "../layout";

const ResearchAreasSection = (props: IProps) => {
  return (
    <Layout title={app.activitiesAndEfforts}>
      <Content contents={researchAreas.contents} />
    </Layout>
  );
};

export default ResearchAreasSection;
