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
  structure: {
    rank: string;
    desc: string;
  }[];
  vision: string;
  mission: IMission;
}
export type IMission = (IText | IList)[]

export interface IText {
  content: string;
  kind: "paragraph" | "title" | "subTitle" | "bigParagraph";
  type: "text";
}

type IColorKind = "colored" | "uncolored";
type ISizeKind = "big" | "normal" | "small";
type IListKind = IColorKind | ISizeKind | `${IColorKind} ${ISizeKind}` |  `${ISizeKind} ${IColorKind}`

export interface IList {
  items: {
    title: string;
    contents?: (IText | IList)[] 
  }[]
  kind: IListKind;
  type: "list";
}