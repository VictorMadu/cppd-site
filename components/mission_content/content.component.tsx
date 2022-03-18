import React from "react";
import map from "lodash/map";
import { IList, IProps, IText } from "./content.interface";
import Text from "../../core/text/text.component";
import { IContainer, IPara } from "../../languages/en/texts/texts.interface";
import Switch from "../../core/switch";
import Paragraph from "../../core/paragraph";
import List from "./list/list.component";

const Content = (props: IProps) => {
  return (
    <>
      {map(props.contents, (contentProp: IContainer[number], index) => (
        <Switch value={contentProp.type} key={index}>
          <Switch.Case
            compCase={"para"}
            Component={<Paragraph content={contentProp as IPara} />}
          />
          <Switch.Case
            compCase={"text"}
            Component={<Text content={contentProp as IText} />}
          />
          <Switch.Case
            compCase={"list"}
            Component={<List content={contentProp as IList} />}
          />
        </Switch>
      ))}
    </>
  );
};

export default Content;
