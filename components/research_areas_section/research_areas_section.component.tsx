import React from "react";
import * as app from "../../languages/en/app";
import { researchAreas } from "../../languages/en/texts/research-areas";
import { IProps } from "./research_areas_section.interface";
import Content from "../../core/img/content";
import Layout from "../layout";

const ResearchAreasSection = (props: IProps) => {
  return (
    <Layout title={app.researchAreas}>
      <Content contents={researchAreas.contents} />
    </Layout>
  );
};

export default ResearchAreasSection;
