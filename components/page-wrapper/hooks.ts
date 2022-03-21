import { useEffect } from "react";
import { ITheme } from "./page-wrapper.interface";

export const useThemeSwitcher = (theme: ITheme) => {
  useEffect(() => {
    setTheme(window, document, theme);
  }, [theme]);
};

export const setTheme = (
  window: Window & typeof globalThis,
  document: Document,
  theme: ITheme
) => {
  switch (theme) {
    case "light":
      setLight(document);
      break;
    case "dark":
      setDark(document);
      break;
    case "system":
      setSystem(window, document);
      break;
    default:
      throw new Error("Unsupported Type");
  }
};

const setLight = (document: Document) => {
  document.documentElement.classList.remove("dark");
  document.body.classList.remove("dark");
};

const setDark = (document: Document) => {
  document.documentElement.classList.add("dark");
  document.body.classList.add("dark");
};

const setSystem = (window: Window & typeof globalThis, document: Document) => {
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? setDark(document)
    : setLight(document);
};
