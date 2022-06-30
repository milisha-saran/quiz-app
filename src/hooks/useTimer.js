import React, { useEffect, useRef, useState } from "react";

const useTimer = () => {
  const [time, setTime] = useState(20);
  const timerID = useRef();

  const reset = () => {
    setTime(20);
    countdown();
  };

  const countdown = () => {
    timerID.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
  };

  useEffect(() => {
    if (time === 0) clearInterval(timerID.current);
  }, [time]);

  return [time, reset];
};

export default useTimer;
