import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudMoon,
  faSun,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import { IProps, IThemes } from "./theme-switcher.interface";
import Dropdown from "./dropdown";
import { useThemeSwitcher } from "./hooks";

const themes = [
  {
    text: "Light",
    icon: faSun,
  },
  {
    text: "Dark",
    icon: faCloudMoon,
  },
  {
    text: "System",
    icon: faDesktop,
  },
] as IThemes;

const ThemeSwitcher = (props: IProps) => {
  const {
    activeIndex,
    showDropdown,
    setActiveIndex,
    handleBtnClick,
  } = useThemeSwitcher(themes);

  return (
    <div className="pr-[4%] sm:pr-8 relative">
      <button
        className="rounded-full bg-neu-100 dark:bg-neu-800 hover:bg-neu-200 hover:dark:bg-neu-700 focus:bg-neu-200 focus:dark:bg-neu-700 w-8 h-8 flex items-center justify-center text-neu-800/90 dark:text-neu-100/90 transition-all"
        onClick={handleBtnClick}
      >
        <FontAwesomeIcon
          icon={themes[activeIndex].icon}
          size="xs"
          className={""}
        />
      </button>
      <Dropdown
        show={showDropdown}
        onClick={(selectedIndex: number) => setActiveIndex(selectedIndex)}
        activeIndex={activeIndex}
        themes={themes}
      />
    </div>
  );
};
export default ThemeSwitcher;
