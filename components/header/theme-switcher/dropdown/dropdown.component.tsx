import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { map } from "lodash";
import React from "react";
import { IProps } from "./dropdown.interface";
import * as styles from "./dropdown.styles";

const Dropdown = (props: IProps) => {
  return (
    <div className={styles.container(props)}>
      <ul>
        {map(props.themes, (theme, index) => (
          <li
            key={index}
            className={styles.listItem({
              ...props,
              isActive: index === props.activeIndex,
            })}
            onClick={() => props.onClick(index)}
          >
            <FontAwesomeIcon
              icon={theme.icon}
              size="1x"
              className={styles.icon({
                ...props,
                isActive: index === props.activeIndex,
              })}
            />
            {theme.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
