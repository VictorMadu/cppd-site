import React, { useEffect, useState } from "react";
import Header from "../header";
import { IProps } from "./layout.interface";
import ActivitesCarousel from "../activities-carousel/activities-carousel.component";
import ContactSection from "../contact_section";
import * as styles from "./layout.styles";
import If from "../../core/if";
import { useRouter } from "next/router";

export const Layout = (props: IProps) => {
  const router = useRouter();
  return (
    <div className={styles.container(props)}>
      <Header />
      <If cond={router.pathname === "/"} Component={<ActivitesCarousel />} />

      <div className={styles.sectionContainer(props)}>
        <p className={styles.sectionTitle(props)}>{props.title}</p>
        {props.children}
      </div>
      <ContactSection />
    </div>
  );
};

export default Layout;
