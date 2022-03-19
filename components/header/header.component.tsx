import React from "react";
import Img from "../../core/img/img.components";
import { IProps } from "./header.interface";
import * as styles from "./header.styles";
import organzation from "../../languages/en/texts/organization";
import { useRouter } from "next/router";
import map from "lodash/map";
import ThemeSwitcher from "./theme-switcher";

const routes = [
  { text: "Home", path: "/" },
  { text: "Activities", path: "/activities-and-efforts" },
  { text: "Research Areas", path: "/research-areas" },
  { text: "About", path: "/about" },
  { text: "Members", path: "/members" },
];

const Header = (props: IProps) => {
  const router = useRouter();
  return (
    <div className={styles.container(props)}>
      <div className="flex items-center">
        <div
          className={styles.logoContainer(props)}
          onClick={() => router.push("/")}
        >
          <Img src={"/imgs/logo.png"} imgStyles={styles.imgStyles(props)} />

          <span className={styles.fullName(props)}>
            {organzation.name.full}
          </span>
          <span className={styles.shortName(props)}>
            {organzation.name.short}
          </span>
        </div>
        <ThemeSwitcher />
      </div>

      <ul className={styles.navItems(props)}>
        {map(routes, (route) => (
          <li
            key={route.path}
            className={styles.navItem({
              isActive: route.path === router.pathname,
            })}
            onClick={() => router.push(route.path)}
          >
            {route.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
