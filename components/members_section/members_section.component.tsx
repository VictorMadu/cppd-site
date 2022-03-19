import React, { useState } from "react";
import { IProps } from "./members_section.interface";
import * as app from "../../languages/en/app";
import allMembers from "../../languages/en/texts/members";
import CardsContainer from "./cards-container/cards-container.component";
import Layout from "../layout";
import * as styles from "./members_section.styles";

const loop = (noOfLoops: number, cb: (currLoop: number) => JSX.Element) => {
  let i = 0;
  const results = [];
  while (noOfLoops > i) {
    results.push(cb(i));
    i++;
  }
  return results;
};

const MembersSection = (props: IProps) => {
  const [currIndex, setCurrIndex] = useState(0);

  return (
    <Layout title={app.members.title} width="1">
      <div className={styles.buttonContainer(props)}>
        {loop(allMembers.length, (index) => (
          <button
            key={index}
            className={styles.button({ isActive: index === currIndex })}
            onClick={() => setCurrIndex(index)}
          >
            {allMembers[index].title}
          </button>
        ))}
      </div>
      <>
        <CardsContainer members={allMembers[currIndex].members} />
      </>
    </Layout>
  );
};

export default MembersSection;
