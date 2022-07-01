import React from "react";
import { useQuiz } from "../../context/QuizProvider";
import styles from "./footer.module.css";

const Footer = ({ quizNo, resetQuiz }) => {
  const { state } = useQuiz();
  return (
    <div className={styles.scorecard}>
      <p>Score : {state[quizNo].score}</p>
      <button className={styles.reset} onClick={resetQuiz}>
        Reset
      </button>
    </div>
  );
};

export default Footer;
