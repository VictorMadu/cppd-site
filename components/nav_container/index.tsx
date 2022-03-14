import React from "react";
import { IProps } from "./nav_container.interface";
import * as styles from "./nav_container.styles";

const NavContainer = (props: IProps) => {
  return (
    <ul className={styles.container(props)}>
      <li className={styles.item(props)}>Home</li>
      <li className={styles.item(props)}>About</li>
      <li className={styles.item(props)}>Members</li>
    </ul>
  );
};

export default NavContainer;
