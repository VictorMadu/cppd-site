import { ExactlyOne } from "../../../types";

export type IChildren = { children: JSX.Element };
export type IComponent = { Component: JSX.Element };

export type IProps = {
  title: string;
  members: { photo?: string; name: string; about: string }[];
};
