import { useEffect, useRef } from "react";
import { useQuiz } from "../../context/QuizProvider";

import styles from "./header.module.css";

const Header = ({ time, quizNo }) => {
  const { state } = useQuiz();
  return (
    <div className={styles.header}>
      <p className={styles.question}>Question No. {state[quizNo].questionNo}</p>
      <p className={styles.timer}>Timer : {time}</p>
    </div>
  );
};

export default Header;
