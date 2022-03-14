import React from "react";
import map from "lodash/map";
import { IList, IProps, IText } from "./mission_content.interface";
import * as styles from "./mission_content.styles";
import If from "../../../core/if/if.component";

const MissionContent = (props: IProps) => {
  return (
    <>
      {map(props.contents, (contentProp, index) => (
        <If
          key={index}
          cond={contentProp.type === "text"}
          Component={
            <p className={styles.text(contentProp as IText)}>
              {(contentProp as IText).content}
            </p>
          }
          Else={
            <ul className={styles.listsContainer(contentProp as IList)}>
              {map((contentProp as IList).items, (item, index) => (
                <li
                  key={index}
                  className={styles.listContainer(contentProp as IList)}
                >
                  <p className={styles.listText(contentProp as IList)}>
                    {item.title}
                  </p>
                  <If
                    cond={!!item.contents}
                    Component={
                      <MissionContent
                        contents={item.contents as (IList | IText)[]}
                      />
                    }
                  />
                </li>
              ))}
            </ul>
          }
        />
      ))}
    </>
  );
};

export default MissionContent;
