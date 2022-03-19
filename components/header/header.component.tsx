import React from "react";
import Img from "../../core/img/img.components";
import { IProps } from "./header.interface";
import * as styles from "./header.styles";
import organzation from "../../languages/en/texts/organization";
import { useRouter } from "next/router";

const Header = (props: IProps) => {
  const router = useRouter();
  return (
    <div className={styles.container(props)}>
      <div
        className={styles.logoContainer(props)}
        onClick={() => router.push("/")}
      >
        <Img src={"/imgs/logo.png"} imgStyles={styles.imgStyles(props)} />

        <span className={styles.fullName(props)}>{organzation.name.full}</span>
        <span className={styles.shortName(props)}>
          {organzation.name.short}
        </span>
      </div>
      <ul className={styles.navItems(props)}>
        {/* TODO: NavLinks into seperate component and abstract out the className */}
        <li
          className={styles.navItem({ activePath: router.pathname === "/" })}
          onClick={() => router.push("/")}
        >
          Home
        </li>
        <li
          className={styles.navItem({
            activePath: router.pathname === "/activities-and-efforts",
          })}
          onClick={() => router.push("/activities-and-efforts")}
        >
          Activities
        </li>
        <li
          className={styles.navItem({
            activePath: router.pathname === "/research-areas",
          })}
          onClick={() => router.push("/research-areas")}
        >
          Research Areas
        </li>
        <li
          className={styles.navItem({
            activePath: router.pathname === "/about",
          })}
          onClick={() => router.push("/about")}
        >
          About
        </li>
        <li
          className={styles.navItem({
            activePath: router.pathname === "/members",
          })}
          onClick={() => router.push("/members")}
        >
          Members
        </li>
      </ul>
    </div>
  );
};

export default Header;
