import React from "react";
import Img from "../../core/img/img.components";
import { IProps } from "./header.interface";
import * as styles from "./header.styles";
import organzation from "../../languages/en/texts/organization";

const Header = (props: IProps) => {
  const navItemStyles = styles.navItem(props);
  return (
    <div className={styles.container(props)}>
      <div className={styles.logoContainer(props)}>
        <Img src={"/imgs/logo.png"} imgStyles={styles.imgStyles(props)} />

        <span className={styles.fullName(props)}>{organzation.name.full}</span>
        <span className={styles.shortName(props)}>
          {organzation.name.short}
        </span>
      </div>
      <ul className={styles.navItems(props)}>
        <li className={navItemStyles}>Home</li>
        <li className={navItemStyles}>Activities</li>
        <li className={navItemStyles}>Research Areas</li>
        <li className={navItemStyles}>About</li>
        <li className={navItemStyles}>Members</li>
      </ul>
    </div>
  );
};

export default Header;
