import React from "react";
import { IProps } from "./text_and_list.interface";
import map from "lodash/map";
import Text from "../text/text.component";

const TextAndList = (props: IProps) => {
  return (
    <div>
      <Text text={props.text} />
      <ul>
        {map(props.lists, (list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default TextAndList;
