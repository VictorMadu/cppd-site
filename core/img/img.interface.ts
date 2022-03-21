export interface IProps {
  src: string;
  alt?: string;
  imgStyles?: {
    width?: string;
    height?: string;
    cursor?: string;
  };
  onClick?: () => void;
}
