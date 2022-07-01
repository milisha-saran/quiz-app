import React from "react";
import { useQuiz } from "../../context/QuizProvider";
import styles from "./footer.module.css";

const Footer = () => {
  const { state } = useQuiz();
  return <div className={styles.scorecard}>Score : {state.quiz1.score}</div>;
};

export default Footer;
