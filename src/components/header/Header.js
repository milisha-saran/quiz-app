import { useEffect, useRef } from "react";

import styles from "./header.module.css";

const Header = () => {
  const timerID = useRef();

  const reset = () => {
    dispatch({ type: "COUNTDOWN", payload: state.quiz1.timer });
    countdown();
  };

  const countdown = () => {
    timerID.current = setInterval(() => {
      dispatch({ type: "COUNTDOWN", payload: state.quiz1.countdown - 1 });
    }, 1000);
  };

  useEffect(() => {
    if (state.quiz1.countdown === 0) clearInterval(timerID.current);
  }, [state.quiz1.countdown]);

  return (
    <div className={styles.header}>
      <p className={styles.question}>Question No. {state.quiz1.questionNo}</p>
      {/* <button onClick={reset}>Next Question</button> */}
      <p className={styles.timer}>Timer : {state.quiz1.countdown}</p>
    </div>
  );
};

export default Header;
