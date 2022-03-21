import { ExactlyOne } from "../../../types";

export type IChildren = { children: JSX.Element };
export type IComponent = { Component: JSX.Element };

export type IProps = ExactlyOne<IChildren & IComponent>;
