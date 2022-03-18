import React from "react";
import { IProps } from "./about_section.interface";
import * as app from "../../languages/en/app";
import map from "lodash/map";
import organzation from "../../languages/en/texts/organization";
import { ids } from "../../constants";
import * as styles from "./about_section.styles";
import IdLink from "./id_link";
import GroupContent from "./group-content/group-content.component";
import Layout from "../layout";

const aboutSectionIds = ids.homePage.about_section;
const abouts = [
  {
    id: aboutSectionIds.structure,
    text: app.structure,
    contents: organzation.structure,
  },
  {
    id: aboutSectionIds.vision,
    text: app.vision,
    contents: organzation.vision,
  },
  {
    id: aboutSectionIds.mission,
    text: app.mission,
    contents: organzation.mission,
  },
];

const AboutSection = (props: IProps) => {
  return (
    <Layout title={app.about}>
      <ul className={styles.linksContainer(props)}>
        {map(abouts, (about) => (
          <IdLink key={about.id} id={about.id} text={about.text} />
        ))}
      </ul>
      <div className={styles.contentContainer(props)}>
        {map(abouts, (about) => (
          <GroupContent
            key={about.id}
            id={about.id}
            title={about.text}
            contents={about.contents}
          />
        ))}
      </div>
    </Layout>
  );
};

export default AboutSection;
