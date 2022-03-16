import React from "react";
import map from "lodash/map";
import { IList, IProps, IText } from "./mission_content.interface";
import Text from "./text/text.component";
import If from "../../../core/if/if.component";
import { IContainer, IPara } from "../../../languages/en/texts/texts.interface";
import Switch from "../../../core/switch";
import Para from "./para";
import List from "./list/list.component";

const MissionContent = (props: IProps) => {
  return (
    <>
      {map(props.contents, (contentProp: IContainer[number], index) => (
        <Switch value={contentProp.type} key={index}>
          <Switch.Case
            compCase={"para"}
            Component={<Para content={contentProp as IPara} />}
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

export default MissionContent;
