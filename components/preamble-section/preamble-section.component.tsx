import { map } from "lodash";
import React from "react";
import * as app from "../../languages/en/app";
import preamble from "../../languages/en/texts/preamble";
import { IProps } from "./preamble-section.interface";
import * as styles from "./preamble-section.styles";

const PreambleSection = (props: IProps) => {
  return (
    <div className={styles.container(props)}>
      <p className={styles.title(props)}>{app.preamble}</p>
      <div className={styles.textContainer(props)}>
        {map(preamble.texts, (text, index) => (
          <p key={index} className={styles.paragraph(props)}>
            {text}
          </p>
        ))}
      </div>
      <div className={styles.authorDescContainer(props)}>
        <p className={styles.authorName(props)}>{preamble.author.name}</p>
        <p className={styles.authorPosition(props)}>
          {preamble.author.position}
        </p>
        <p className={styles.authorDate(props)}>{preamble.author.date}</p>
      </div>
    </div>
  );
};

export default PreambleSection;
