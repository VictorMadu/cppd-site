import React from "react";
import If from "../if";
import Text from "../text/text.component";
import { IParaText, IParaWithChildren, IProps } from "./paragraph.interface";
import map from "lodash/map";
import * as styles from "./paragraph.styles";

const Paragraph = (props: IProps) => {
  const containerStyle = styles.container(props.content.style);
  return (
    <If
      cond={(props.content as any).text} // if text exists
      Component={
        <p className={containerStyle}>{(props.content as IParaText).text}</p>
      }
      Else={
        <p className={containerStyle}>
          {map(
            (props.content as IParaWithChildren).children,
            (child, index) => (
              <Text key={index} content={child} />
            )
          )}
        </p>
      }
    />
  );
};

export default Paragraph;
