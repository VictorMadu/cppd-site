import classNames from "classnames";

export const container = <P extends unknown = unknown>(
  props: P,
  otherNames?: string
) =>
  classNames(
    "bg-white",
    "space-y-2",
    "shadow-md",
    "divide-y",
    "divide-slate-300/50",
    otherNames
  );
