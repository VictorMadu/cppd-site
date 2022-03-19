import { SetStateAction, useEffect, useState } from "react";
import { IThemes } from "./theme-switcher.interface";

const setLight = (document: Document) => {
  document.documentElement.classList.remove("dark");
};

const setDark = (document: Document) => {
  document.documentElement.classList.add("dark");
};

const setSystem = (window: Window & typeof globalThis, document: Document) => {
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? setDark(document)
    : setLight(document);
};

// TODO: Save settings to localStorage and load automatically
export const setTheme = (
  window: Window & typeof globalThis,
  document: Document,
  themes: IThemes,
  currIndex: number
) => {
  switch (themes[currIndex].text) {
    case "Light":
      setLight(document);
      break;
    case "Dark":
      setDark(document);
      break;
    case "System":
      setSystem(window, document);
      break;
    default:
      throw new Error("Unsupported Type");
  }
};

export const useThemeSwitcher = (themes: IThemes) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setTheme(window, document, themes, activeIndex);
  }, [activeIndex, themes]);

  const handleBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setShowDropdown((s) => !s);
    clickListner(window, setShowDropdown);
  };

  const handleDropItem = (selectedIndex: number) =>
    setActiveIndex(selectedIndex);

  return {
    activeIndex,
    showDropdown,
    handleBtnClick,
    handleDropItem,
    setActiveIndex,
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
