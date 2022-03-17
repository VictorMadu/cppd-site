import React from "react";
import { IProps } from "./about_section.interface";
import * as app from "../../languages/en/app";
import map from "lodash/map";
import organzation from "../../languages/en/texts/organization";
import { ids } from "../../constants";
import MissionContent from "./mission_content/mission_content.component";
import * as styles from "./about_section.styles";
import IdLink from "./id_link";

const aboutSectionIds = ids.homePage.about_section;
const links = [
  { id: aboutSectionIds.structure, text: app.structure },
  { id: aboutSectionIds.vision, text: app.vision },
  { id: aboutSectionIds.mission, text: app.mission },
];

const AboutSection = (props: IProps) => {
  const groupStyle = styles.idGroup(props);
  const groupTextStyle = styles.idGroupTitle(props);
  return (
    <div className={styles.container(props)}>
      <p className={styles.title(props)}>{app.about}</p>
      <ul className={styles.linksContainer(props)}>
        <IdLink id={links[0].id} text={links[0].text} />
        <IdLink id={links[1].id} text={links[1].text} />
        <IdLink id={links[2].id} text={links[2].text} />
      </ul>
      <div className={styles.contentContainer(props)}>
        <div id={aboutSectionIds.structure} className={groupStyle}>
          <p className={groupTextStyle}>{app.structure}</p>
          <div className={styles.structureContainer(props)}>
            <MissionContent contents={organzation.structure} />
          </div>
        </div>
        <div id={aboutSectionIds.vision} className={groupStyle}>
          <p className={groupTextStyle}>{app.vision}</p>
          <MissionContent contents={organzation.vision} />
        </div>
        <div id={aboutSectionIds.mission} className={groupStyle}>
          <p className={groupTextStyle}>{app.mission}</p>
          <MissionContent contents={organzation.mission} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
