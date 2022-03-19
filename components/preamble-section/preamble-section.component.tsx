import React from "react";
import * as app from "../../languages/en/app";
import preamble from "../../languages/en/texts/preamble";
import Layout from "../layout";
import Content from "../../core/img/content";
import { IProps } from "./preamble-section.interface";
import * as styles from "./preamble-section.styles";

const PreambleSection = (props: IProps) => {
  return (
    <Layout title={app.preamble}>
      <Content contents={preamble.contents} />
      <div className={styles.authorDescContainer(props)}>
        <p className={styles.authorName(props)}>{preamble.author.name}</p>
        <p className={styles.authorPosition(props)}>
          {preamble.author.position}
        </p>
        <p className={styles.authorDate(props)}>{preamble.author.date}</p>
      </div>
    </Layout>
  );
};

export default PreambleSection;
