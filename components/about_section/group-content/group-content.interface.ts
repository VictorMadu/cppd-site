import { IContainer } from "../../../languages/en/texts/texts.interface";
import { ExactlyOrArray } from "../../../types";

export interface IProps {
  id: string;
  title: string;
  contents: IContainer;
}
