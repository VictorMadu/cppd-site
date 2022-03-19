export const WithHOC = <T extends {} = {}>(
  Component: (props: T) => JSX.Element
) => {
  const HOC = <U extends T>(hocProps: U) => {
    const Inner = (remainingProps: Exclude<T, U>) => {
      const allProps: T = { ...hocProps, ...remainingProps };
      return <Component {...allProps} />;
    };
    return Inner;
  };
  return HOC;
};

export default WithHOC;
