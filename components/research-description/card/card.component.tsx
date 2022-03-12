import React from "react";
import { IProps } from "./card.interface";
import map from "lodash/map";
import isString from "lodash/isString";

const Card = (props: IProps) => {
  console.log("props text", props.texts);
  return (
    <div>
      <h2>{props.heading}</h2>
      <div>
        {props.texts.map((text, index) => {
          <React.Fragment key={index}>
            {isString(text) ? (
              <p className="bg-blue-800">{text}</p>
            ) : (
              <div>
                <p className="bg-red-800">{text.body}</p>
                {map(text.lists, (text) => (
                  <p>{text}</p>
                ))}
              </div>
            )}
          </React.Fragment>;
        })}
      </div>
    </div>
  );
};

export default Card;
