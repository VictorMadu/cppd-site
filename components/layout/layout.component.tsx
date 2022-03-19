import React, { useEffect, useState } from "react";
import Header from "../header";
import { IProps } from "./layout.interface";
import ActivitesCarousel from "../activities-carousel/activities-carousel.component";
import ContactSection from "../contact_section";
import * as styles from "./layout.styles";
import If from "../../core/if";
import { useRouter } from "next/router";

export const Layout = (props: IProps) => {
  // TODO: This is a side effect. Try using a HOC;
  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsRendered(true), 100);
    return () => setIsRendered(false);
  }, []);
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
      {/* TODO: Performance issue. ContactSection jump from up to down while children is rendering (rendering of children is slow. We need to improve the speed of rendering in children) */}
      {/* NOTE: I use isRendered to prevent ContactSection from rendering until others have rendered because of the performacnce issue */}
      {/* NOTE: I suspect Switch component is the cause */}
      <If cond={isRendered} Component={<ContactSection />} />
    </div>
  );
};

export default Layout;
