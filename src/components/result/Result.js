import React from "react";
import { useQuiz } from "../../context/QuizProvider";
import styles from "./result.module.css";

const Result = ({ quizNo }) => {
  const { state } = useQuiz();
  return (
    <div>
      {state[quizNo].userAnswers.map(
        ({
          questionNo,
          question,
          answer,
          useranswer,
          isCorrect,
          isWrong,
          isUnattemped,
        }) => (
          <div className={styles.solution} key={questionNo}>
            <p className={styles.question}>
              {questionNo}. What is the value of {question}?
            </p>
            <p
              className={styles.useranswer}
              style={{
                background: isCorrect ? "green" : isWrong ? "red" : "",
              }}
            >
              Your Answer : {useranswer}
            </p>
            <p className={styles.answer}>Correct Answer : {answer}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Result;
