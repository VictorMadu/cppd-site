import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudMoon,
  faSun,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import { IProps, IThemesAndIcons } from "./theme-switcher.interface";
import Dropdown from "./dropdown";
import { useThemeSwitcher } from "./hooks";
import * as styles from "./theme-switcher.styles";

const themes = [
  {
    text: "light",
    icon: faSun,
  },
  {
    text: "dark",
    icon: faCloudMoon,
  },
  {
    text: "system",
    icon: faDesktop,
  },
] as IThemesAndIcons;

const ThemeSwitcher = (props: IProps) => {
  const {
    currIndex,
    showDropdown,
    handleBtnClick,
    handleDropItem,
  } = useThemeSwitcher(themes);

  return (
    <div className={styles.container(props)}>
      <button className={styles.btn(props)} onClick={handleBtnClick}>
        <FontAwesomeIcon
          icon={themes[currIndex].icon}
          size="xs"
          className={""}
        />
      </button>
      <Dropdown
        show={showDropdown}
        onClick={(selectedIndex: number) => handleDropItem(selectedIndex)}
        activeIndex={currIndex}
        themes={themes}
      />
    </div>
  );
};
export default ThemeSwitcher;
