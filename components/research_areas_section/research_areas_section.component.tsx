import React from "react";
import * as app from "../../languages/en/app";
import { researchAreas } from "../../languages/en/texts/research-areas";
import map from "lodash/map";
import isArray from "lodash/isArray";
import If from "../../core/if/if.component";
import Text from "./text";
import { IText, ITextAndLists } from "./research_areas_section.interface";
import TextAndList from "./text_and_list/text_and_list.component";
import * as styles from "./research_areas_section.styles";
import { isString } from "lodash";

const ResearchAreasSection = (props: unknown) => {
  return (
    <div className={styles.container(props)}>
      <p>{app.researchAreas}</p>
      <div>
        {map(researchAreas.areas, (area, index) => (
          <div key={index}>
            <p>{area.title}</p>
            <div>
              {map(area.texts, (text, index) => (
                <If
                  key={index}
                  cond={isString(text)}
                  Component={<Text text={text as IText} />}
                  Else={
                    <TextAndList
                      text={(text as ITextAndLists).body}
                      lists={(text as ITextAndLists).lists}
                    />
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchAreasSection;
