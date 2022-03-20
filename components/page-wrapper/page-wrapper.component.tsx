import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import withHoc from "../../hoc/with-hoc";
import { useAppSelector } from "../../redux";
import { selectTheme } from "../../redux/app/app.selectors";
import { getVScrollbarStyle } from "../../utils";
import { useThemeSwitcher } from "./hooks";
import { IProps } from "./page-wrapper.interface";

export const PageWrapper = (props: IProps) => {
  useThemeSwitcher(props.theme);
  return <React.Fragment>{props.children}</React.Fragment>;
};

const HOCPageWrapper = (props: { children: JSX.Element }) => {
  const theme = useAppSelector(selectTheme);
  return <PageWrapper theme={theme}>{props.children}</PageWrapper>;
};

export default HOCPageWrapper;
