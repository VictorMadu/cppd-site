import React from "react";
import LogoContainer from "../logo-container";
import NavContainer from "../nav-container";
import { IProps } from "./header.interface";
import * as styles from "./header.styles";

const Header = (props: IProps) => {
  return (
    <div className={styles.container(props)}>
      <LogoContainer />
      <NavContainer />
    </div>
  );
};

export default Header;
