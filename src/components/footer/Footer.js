import React from "react";
import { useQuiz } from "../../context/QuizProvider";

const Footer = () => {
  const { state, dispatch } = useQuiz();
  return <div>Score:{state.quiz1.score}</div>;
};

export default Footer;
