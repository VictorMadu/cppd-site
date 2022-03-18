import React from "react";
import Header from "../header";
import { IProps } from "./layout.interface";
import PreambleSection from "../preamble-section";
import ActivitesCarousel from "../activities-carousel/activities-carousel.component";
import ActivitesAndEffortsSection from "../activities-and-efforts-section";
import ResearchAreasSection from "../research_areas_section";
import MembersSection from "../members_section";
import AboutSection from "../about_section/about_section.component";
import ContactSection from "../contact_section";
import * as styles from "./layout.styles";

const Layout = (props: IProps) => {
  return (
    <div className={styles.container(props)}>
      <Header />
      <div className="max-w-[60rem] mx-auto">
        <ActivitesCarousel />
      </div>
      {/* TODO: All the sections below should be made as wrapper and missionContent Component/Elemenet passed as children */}
      {/* TODO: Bring MissionContent Component out from inside the aboutSection to the same folder level as here */}
      {/* TODO: Split to pages */}
      <div className="max-w-[42rem] mx-auto">
        <PreambleSection />
        <ActivitesAndEffortsSection />
        <ResearchAreasSection />
        <MembersSection />
        <AboutSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Layout;
