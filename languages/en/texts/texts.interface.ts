import { ExactlyOne } from "../../../types";

export interface IOrganization {
  name: {
    full: string;
    short: string;
  };
  contacts: {
    secretariat: string;
    phone: {
      country_code: string;
      numbers: string[];
    };
  };
  structure: IContainer;
  vision: IContainer;
  mission: IContainer;
}
export type IContainer = (IList | IPara | IText)[];

export type IParaBase = {
  type: "para";
  style?: Partial<{
    color: IColorStyle;
    weight: IWeightStyle;
    transform: ITransformStyle;
    height: IHeightStyle;
  }>;
};

export type IParaWithChildren = IParaBase & { children: IText[] };

export type IParaText = IParaBase & { text: string };

export type IPara = IParaWithChildren | IParaText;

export type IText = {
  type: "text";
  style?: Partial<{
    color: IColorStyle;
    weight: IWeightStyle;
    transform: ITransformStyle;
    height: IHeightStyle;
  }>;
  text: string;
};

export type IList = {
  type: "list";
  style?: Partial<{
    color: IColorStyle;
    weight: IWeightStyle;
    size: ISizeStyle;
    transform: ITransformStyle;
    icon: IListIconStyle;
    marginX: IMarginXStyle;
    marginY: IMarginYStyle;
    spaceBtw: ISpaceBtwStyle;
    seperateIcon: ISeperateIconStyle;
  }>;
  items: {
    text: string;
    children?: (IList | IPara | IText)[];
  }[];
};

export type IType = "list" | "para" | "text";
export type IColorStyle = "n" | "p";
export type IWeightStyle = "b" | "s-b" | "n" | "l";
export type ISizeStyle = "l" | "n" | "s";
export type IListIconStyle = "p" | "c-d";
export type ITransformStyle = "u" | "c" | "l";
export type IMarginXStyle = "0" | "1" | "2";
export type IMarginYStyle = "0" | "1" | "2";
export type ISpaceBtwStyle = "0" | "1" | "2" | "3";
export type ISeperateIconStyle = "y" | "n";
export type IHeightStyle = "0" | "1" | "2";
