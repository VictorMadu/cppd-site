import React from "react";
import If from "../../../../core/if";
import Text from "../text/text.component";
import { IParaText, IParaWithChildren, IProps } from "./para.interface";
import map from "lodash/map";
import * as styles from "./para.styles";

const Para = (props: IProps) => {
  return (
    <If
      cond={(props.content as any).text} // if text exists
      Component={
        <p className={styles.container((props.content as IParaText).style)}>
          {(props.content as IParaText).text}
        </p>
      }
      Else={
        <p
          className={styles.container(
            (props.content as IParaWithChildren).style
          )}
        >
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

export default Para;
