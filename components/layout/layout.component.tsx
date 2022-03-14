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
      <ActivitesCarousel />
      <PreambleSection />
      <ActivitesAndEffortsSection />
      <ResearchAreasSection />
      <MembersSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Layout;
