import React from "react";
import { IProps } from "./about_section.interface";
import * as app from "../../languages/en/app";
import map from "lodash/map";
import organzation from "../../languages/en/texts/organization";
import { getIdHref } from "../../utils";
import { ids } from "../../constants";
import MissionContent from "./mission_content/mission_content.component";

const AboutSection = (props: IProps) => {
  const aboutSectionIds = ids.homePage.about_section;
  return (
    <div>
      <p>{app.about}</p>
      <div>
        <a href={getIdHref(aboutSectionIds.structure)}>{app.structure}</a>
        <a href={getIdHref(aboutSectionIds.vision)}>{app.vision}</a>
        <a href={getIdHref(aboutSectionIds.mission)}>{app.mission}</a>
      </div>
      <div id={aboutSectionIds.structure}>
        <p>{app.structure}</p>
        <div>
          {map(organzation.structure, (level, index) => (
            <div key={index}>
              <p>{level.rank}</p>
              <p>{level.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div id={aboutSectionIds.vision}>
        <p>{app.vision}</p>
        <p>{organzation.vision}</p>
      </div>
      <div id={aboutSectionIds.mission}>
        <p>{app.mission}</p>
        <MissionContent contents={organzation.mission} />
        {/* TODO: Use that Text and TextAndList components */}

        {/* <div>
          <p>{organzation.mission.achieve_peace_and_dev}</p>
        </div>
        <ul>
          {map(
            organzation.mission.achieve_peace_and_dev_list,
            (text, index) => (
              <li key={index}>
                <p>{text}</p>
              </li>
            )
          )}
        </ul>
        <div>
          <p>{organzation.mission.achieve_peace_and_dev}</p>
        </div> */}
      </div>
    </div>
  );
};

export default AboutSection;
