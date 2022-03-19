import React from "react";
import map from "lodash/map";
import { IList, IProps, IText } from "./content.interface";
import Text from "../../text/text.component";
import { IContainer, IPara } from "../../../languages/en/texts/texts.interface";
import Switch from "../../switch";
import Paragraph from "../../paragraph";
import List from "../../list/list.component";

const Content = (props: IProps) => {
  return (
    <>
      {/* {map(props.contents, (contentProp: IContainer[number], index) => (
        
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
      ))} */}

      {map(props.contents, (contentProp: IContainer[number], index) => (
        <React.Fragment key={index}>
          {contentProp.type === "para" ? (
            <Paragraph content={contentProp} />
          ) : contentProp.type === "text" ? (
            <Text content={contentProp} />
          ) : contentProp.type === "list" ? (
            <List content={contentProp as IList} />
          ) : null}
        </React.Fragment>
      ))}
    </>
  );
};

export default Content;
