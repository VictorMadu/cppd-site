import { useEffect, useState } from "react";
import { carousel } from "../constants";
// TODO: Move to component
const modIncr = (n: number, mod: number, incr = 1) => {
  return (n + incr) % mod;
};

const modDecr = (n: number, mod: number, decr = 1) => {
  const newValue = (n - decr) % mod;
  return newValue > -1 ? newValue : mod + newValue;
};

export function useCarousel(
  noOfImgs: number,
  displayTime = carousel.display_time,
  startIndex = carousel.start_index
) {
  const [currIndex, setCurrIndex] = useState(startIndex);
  useEffect(() => {
    const intervalId = setTimeout(() => {
      setCurrIndex((s) => modIncr(s, noOfImgs));
    }, displayTime);
    return () => clearTimeout(intervalId);
  }, [currIndex, displayTime, noOfImgs]);

  return {
    currIndex,
    startIndex,
    displayTime,
    displayIndex: setCurrIndex,
    displayPrevAction: () => setCurrIndex((s) => modDecr(s, noOfImgs)),
    displayNextAction: () => setCurrIndex((s) => modIncr(s, noOfImgs)),
  };
}
