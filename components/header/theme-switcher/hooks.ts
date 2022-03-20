import { SetStateAction, useEffect, useState } from "react";
import findIndex from "lodash/findIndex";
import { useAppDispatch, useAppSelector } from "../../../redux";
import { changeTheme } from "../../../redux/app/app.actions";
import { selectTheme } from "../../../redux/app/app.selectors";
import { ITheme, IThemesAndIcons } from "./theme-switcher.interface";

export const useThemeSwitcher = (themesAndIcons: IThemesAndIcons) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const currIndex = getCurrIndex(themesAndIcons, theme);

  const handleBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setShowDropdown((s) => !s);
    clickListner(window, setShowDropdown);
  };

  const handleDropItem = (selectedIndex: number) => {
    dispatch(changeTheme(themesAndIcons[selectedIndex].text));
  };

  return {
    currIndex,
    showDropdown,
    handleBtnClick,
    handleDropItem,
  };
};

const clickListner = (
  window: Window & typeof globalThis,
  setShow: (value: SetStateAction<boolean>) => void
) => {
  const inner = () => {
    window.removeEventListener("click", inner);
    setShow(false);
  };

  window.addEventListener("click", inner);
};

const getCurrIndex = (themesAndIcons: IThemesAndIcons, theme: ITheme) => {
  return findIndex(themesAndIcons, (tai) => tai.text === theme);
};
