import React from "react";
import { IProps } from "./members_section.interface";
import * as app from "../../languages/en/app";
import map from "lodash/map";
import members from "../../languages/en/texts/members";
import Img from "../../core/img/img.components";

const MembersSection = (props: IProps) => {
  return (
    <div>
      <p>{app.members.title}</p>
      <div>
        <p>{app.members.levels.board_of_trustees}</p>
        <div>
          {map(members.board_of_trustees, (p, index) => (
            <div key={index}>
              <Img src={p.photo} />
              <div>
                <p>{p.name}</p>
                <p>{p.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p>{app.members.levels.council_of_advisers}</p>
        <div>
          {map(members.council_of_advisers, (p, index) => (
            <div key={index}>
              <p>{p.name}</p>
              <p>{p.short_about}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p>{app.members.levels.other_key_members}</p>
        <div>
          {map(members.other_key_members, (p, index) => (
            <div key={index}>
              <Img src={p.photo} />
              <div>
                <p>{p.name}</p>
                <p>{p.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p>{app.members.levels.late_members}</p>
        <div>
          {map(members.late_members, (p, index) => (
            <div key={index}>
              <Img src={p.photo} />
              <div>
                <p>{p.name}</p>
                <p>{p.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembersSection;
