import { useEffect, useState } from "react";
import c from "../constants";

const modIncr = (n: number, mod: number, incr = 1) => {
  return (n + incr) % mod;
};

const modDecr = (n: number, mod: number, decr = 1) => {
  const newValue = (n - decr) % mod;
  return newValue > -1 ? newValue : mod + newValue;
};

export function useCarousel(
  noOfImgs: number,
  displayTime = c.carousel.display_time,
  startIndex = c.carousel.start_index
) {
  const [currIndex, setCurrIndex] = useState(startIndex);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrIndex((s) => modIncr(s, noOfImgs));
    }, displayTime);
    return () => clearInterval(intervalId);
  }, [displayTime, noOfImgs]);

  return {
    currIndex,
    startIndex,
    displayTime,
    displayPrevAction: () => setCurrIndex((s) => modDecr(s, noOfImgs)),
    displayNextAction: () => setCurrIndex((s) => modIncr(s, noOfImgs)),
  };
}
