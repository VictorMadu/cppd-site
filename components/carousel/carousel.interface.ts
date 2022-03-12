export interface IProps {
  items: {
    src: string;
    alt: string;
    textComponent: JSX.Element;
  }[];
  startIndex?: number;
  displayTime?: number;
  transitionDurationStyle?: string;
  styleClassNames: {
    width: string;
    height: string;
  };
}
