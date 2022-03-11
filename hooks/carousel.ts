import { useEffect, useState } from "react";

const modIncr = (n: number, mod: number, incr = 1) => {
  return (n + incr) % mod;
};

const modDecr = (n: number, mod: number, decr = 1) => {
  return (n - decr) % mod;
};

export function useCarousel(noOfImgs: number, displayTime = 5000) {
  const [currIndex, setCurrIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrIndex((s) => modIncr(s, noOfImgs));
    }, displayTime);
    return () => clearInterval(intervalId);
  }, [displayTime, noOfImgs]);

  return {
    currIndex,
    displayPrev: () => setCurrIndex((s) => modDecr(s, noOfImgs)),
    displayNext: () => setCurrIndex((s) => modIncr(s, noOfImgs)),
  };
}
