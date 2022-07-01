import React, { useState } from "react";
import CumulativeScore from "../../components/cumulative-score/CumulativeScore";
import Quiz from "../../components/quiz/Quiz";
import useTimer from "../../hooks/useTimer";
import QuizCard from "./QuizCard";
import styles from "./quizcard.module.css";

const Quizzes = () => {
  const [isQuiz1Started, setQuiz1Started] = useState(false);
  const [isQuiz2Started, setQuiz2Started] = useState(false);
  const { time: time1, reset: reset1 } = useTimer();
  const { time: time2, reset: reset2 } = useTimer();

  return (
    <div>
      <CumulativeScore />
      <div className={styles.quizzes}>
        <div className={styles.quiz}>
          {isQuiz1Started ? (
            <Quiz
              time={time1}
              reset={reset1}
              quizNo={"quiz1"}
              setQuizStarted={setQuiz1Started}
            />
          ) : (
            <QuizCard
              setQuizStarted={setQuiz1Started}
              reset={reset1}
              quizNo={"quiz1"}
            />
          )}
        </div>

        <div className={styles.quiz}>
          {isQuiz2Started ? (
            <Quiz
              time={time2}
              reset={reset2}
              quizNo={"quiz2"}
              setQuizStarted={setQuiz2Started}
            />
          ) : (
            <QuizCard
              setQuizStarted={setQuiz2Started}
              reset={reset2}
              quizNo={"quiz2"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
