import React from "react";
import Header from "../header";
import { IProps } from "./layout.interface";
import ActivitesCarousel from "../activities-carousel/activities-carousel.component";
import ContactSection from "../contact_section";
import * as styles from "./layout.styles";
import If from "../../core/if";
import { useRouter, withRouter } from "next/router";

export const Layout = (props: IProps) => {
  // TODO: This is a side effect. Try using a HOC;
  const router = useRouter();
  return (
    <div className={styles.container(props)}>
      <Header />
      <If cond={router.pathname === "/"} Component={<ActivitesCarousel />} />

      <div className={styles.sectionContainer(props)}>
        <p className={styles.sectionTitle(props)}>{props.title}</p>
        {props.children}
      </div>
      {/* TODO: Footer Section */}
      <ContactSection />
    </div>
  );
};

export default Layout;
