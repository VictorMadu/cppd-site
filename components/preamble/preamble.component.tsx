import React from "react";
import { preamble } from "../../languages/en/preamble";

const Preamble = () => {
  return (
    <div className="mt-5 text-lg">
      <div className="text-3xl font-bold capitalize">
        <h2>{preamble.title}</h2>
      </div>
      <p className="columns-md gap-x-8 text-justify">
        {preamble.texts.map((text, index) => (
          <React.Fragment key={index}>
            <p className="first-letter:ml-8">{text}</p>
          </React.Fragment>
        ))}
      </p>
      <p className="ml-auto w-[fit-content] flex flex-col">
        <span>J.C. Madu</span>
        <span>Executive Director </span>
        <span>(1st January 2009)</span>
      </p>
    </div>
  );
};

export default Preamble;
