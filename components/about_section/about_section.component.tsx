import React from "react";
import { IProps } from "./about_section.interface";
import * as app from "../../languages/en/app";
import map from "lodash/map";
import organzation from "../../languages/en/texts/organization";
import { ids } from "../../constants";
import MissionContent from "./mission_content/mission_content.component";
import * as styles from "./about_section.styles";
import IdLink from "./id_link";

const AboutSection = (props: IProps) => {
  const aboutSectionIds = ids.homePage.about_section;
  return (
    <div className={styles.container(props)}>
      <p className={styles.title(props)}>{app.about}</p>
      <ul className={styles.linksContainer(props)}>
        <IdLink
          id={aboutSectionIds.structure}
          text={app.structure}
          active={true}
        />
        <IdLink id={aboutSectionIds.vision} text={app.vision} active={false} />
        <IdLink
          id={aboutSectionIds.mission}
          text={app.mission}
          active={false}
        />
      </ul>
      <div className={styles.contentContainer(props)}>
      <div id={aboutSectionIds.structure} className={styles.idGroup(props)}>
        <p className={styles.idGroupTitle(props)}>{app.structure}</p>
        <div className={styles.structureContainer(props)}>
          {map(organzation.structure, (level, index) => (
            <div key={index} className={styles.structureGroup(props)}>
              <span className={styles.structureTitle(props)}>{level.rank}</span>
              <span className={styles.paragraph(props)}>{level.desc}</span>
            </div>
          ))}
        </div>
      </div>
      <div id={aboutSectionIds.vision} className={styles.idGroup(props)}>
        <p className={styles.idGroupTitle(props)}>{app.vision}</p>
        <p className={styles.paragraph(props)}>{organzation.vision}</p>
      </div>
      <div id={aboutSectionIds.mission} className={styles.idGroup(props)}>
        <p className={styles.idGroupTitle(props)}>{app.mission}</p>
        <MissionContent contents={organzation.mission} />
      </div>
    </div>
      </div>
  );
};

export default AboutSection;
