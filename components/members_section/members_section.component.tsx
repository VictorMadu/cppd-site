import React from "react";
import { IProps } from "./members_section.interface";
import * as app from "../../languages/en/app";
import map from "lodash/map";
import allMembers from "../../languages/en/texts/members";
import CardsContainer from "./cards-container/cards-container.component";
import Layout from "../layout";

const MembersSection = (props: IProps) => {
  return (
    <Layout title={app.members.title}>
      {map(allMembers, (groupMembers, index) => (
        <CardsContainer
          key={index}
          title={groupMembers.title}
          members={groupMembers.members}
        />
      ))}
    </Layout>
  );
};

export default MembersSection;
