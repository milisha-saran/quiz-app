import React, { useState } from "react";
import Quiz from "../../components/quiz/Quiz";
import useTimer from "../../hooks/useTimer";
import QuizCard from "./QuizCard";

const Quizzes = () => {
  const [isQuizStarted, setQuizStarted] = useState(false);
  const [time, reset] = useTimer();

  return (
    <div>
      {isQuizStarted ? (
        <Quiz time={time} reset={reset} />
      ) : (
        <QuizCard setQuizStarted={setQuizStarted} reset={reset} />
      )}
    </div>
  );
};

export default Quizzes;
