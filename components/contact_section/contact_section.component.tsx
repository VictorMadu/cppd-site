import React from "react";
import * as app from "../../languages/en/app";
import organzation from "../../languages/en/texts/organization";
import map from "lodash/map";

const ContactSection = () => {
  return (
    <div className="bg-pri-900 mx-auto w-full px-[4%] py-2 mt-6 flex flex-col md:flex-row gap-y-4 sm:gap-y-1 gap-x-8 justify-center">
      <div className="space-x-3">
        <span className="font-bold text-white capitalize">
          {app.contacts.secretariat}:
        </span>
        <span className="text-pri-100 text-sm break-words">
          {organzation.contacts.secretariat}
        </span>
      </div>
      <div className="space-x-3">
        <span className="font-bold text-white capitalize">
          {app.contacts.phone}:
        </span>
        <span className="text-pri-100 text-sm space-x-2">
          {map(organzation.contacts.phones, (p) => (
            <span>{p},</span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default ContactSection;
