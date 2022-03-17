import React from "react";
import * as app from "../../languages/en/app";
import { researchAreas } from "../../languages/en/texts/research-areas";
import { IProps } from "./research_areas_section.interface";
import * as styles from "./research_areas_section.styles";
import MissionContent from "../about_section/mission_content/mission_content.component";

const ResearchAreasSection = (props: IProps) => {
  return (
    <div className={styles.container(props)}>
      <p className={styles.title(props)}>{app.researchAreas}</p>
      <div>
        <MissionContent contents={researchAreas.contents} />
      </div>
    </div>
  );
};

export default ResearchAreasSection;
