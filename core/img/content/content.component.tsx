import React from "react";
import map from "lodash/map";
import { IList, IProps, IText } from "./content.interface";
import Text from "../../text/text.component";
import { IContainer, IPara } from "../../../languages/en/texts/texts.interface";
import Paragraph from "../../paragraph";
import List from "../../list/list.component";
import Switch2 from "../../switch2";

const Content = (props: IProps) => {
  return (
    <>
      {map(props.contents, (contentProp: IContainer[number], index) => (
        <Switch2
          key={index}
          value={contentProp.type}
          cases={{
            para: <Paragraph content={contentProp as IPara} />,
            text: <Text content={contentProp as IText} />,
            list: <List content={contentProp as IList} />,
          }}
        />
      ))}
    </>
  );
};

export default Content;
