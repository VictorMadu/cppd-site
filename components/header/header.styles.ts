import classNames from "classnames";

export const container = <P extends unknown = unknown>(
  props: P,
  otherNames?: string
) => classNames("bg-white", "space-y-6", "shadow-md", otherNames);
