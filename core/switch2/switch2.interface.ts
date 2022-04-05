export interface IProps<
  T extends string | symbol | number = string | symbol | number
> {
  value: T;
  cases: Record<T | symbol, JSX.Element>;
}
