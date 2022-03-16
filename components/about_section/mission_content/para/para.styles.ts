import classNames from "classnames";
import { sectionParagraph } from "../../../layout/layout.styles";
import { IParaText } from "./para.interface";

export const container = (props: IParaText["style"]) => sectionParagraph(props);
