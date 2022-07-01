import React from "react";
import { useQuiz } from "../../context/QuizProvider";
import styles from "./footer.module.css";

const Footer = ({ quizNo }) => {
  const { state } = useQuiz();
  return <div className={styles.scorecard}>Score : {state[quizNo].score}</div>;
};

export default Footer;
