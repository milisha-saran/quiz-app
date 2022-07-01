import React from "react";
import { useQuiz } from "../../context/QuizProvider";

const CumulativeScore = () => {
  const {
    state: { quiz1, quiz2 },
  } = useQuiz();

  return (
    <div>
      <h3 align="center">CumulativeScore : {quiz1.score + quiz2.score}</h3>
    </div>
  );
};

export default CumulativeScore;
