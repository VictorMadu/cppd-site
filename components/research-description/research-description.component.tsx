import React from "react";
import { researchAreas } from "../../languages/en/research-areas";
import { Card } from "./card";

const ResearchDescription = () => {
  return (
    <div className="mt-5 text-lg">
      <div className="text-3xl font-bold capitalize">
        <h2>{researchAreas.title}</h2>
      </div>
      <div className="flex flex-wrap">
        {researchAreas.areas.map((area, index) => (
          <Card key={index} heading={area.title} texts={area.text}></Card>
        ))}
      </div>
    </div>
  );
};

export default ResearchDescription;
