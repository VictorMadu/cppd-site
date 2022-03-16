import React from "react";
import * as app from "../../languages/en/app";
import organzation from "../../languages/en/texts/organization";
import map from "lodash/map";

const ContactSection = () => {
  return (
    <div>
      <div>
        <div>{app.contacts.secretariat}</div>
        <div>{organzation.contacts.secretariat}</div>
      </div>
      <div>
        <div>{app.contacts.phone}</div>
        {/* <div>
          {map(organzation.contacts.phone.numbers, (no, index) => (
            <React.Fragment key={index}>
              <span>{organzation.contacts.phone.country_code}</span>
              <span>{no}</span>
            </React.Fragment>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ContactSection;
