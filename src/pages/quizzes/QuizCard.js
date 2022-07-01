import React, { useState } from "react";
import { useQuiz } from "../../context/QuizProvider";
import styles from "../quizzes/quizcard.module.css";

const QuizCard = ({ setQuizStarted, reset }) => {
  const { dispatch } = useQuiz();

  const [questions, setQuestions] = useState(20);
  const [range, setRange] = useState(10);
  const [operators, setOperators] = useState([]);

  const handleQuestions = (e) => setQuestions(e.target.value);
  const handleRange = (e) => setRange(e.target.value);
  const handleOperators = (e) => {
    const { value } = e.target;
    setOperators((prev) =>
      prev.includes(value)
        ? prev.filter((ele) => ele !== value)
        : [...prev, e.target.value]
    );
  };

  const submitData = () => {
    dispatch({
      type: "SET_QUIZ_DATA",
      payload: {
        numberOfQuestions: questions,
        range,
        operators: operators.length > 0 ? operators : ["+", "-", "*", "/"],
      },
    });
    setQuizStarted(true);
    reset();
  };

  return (
    <div className={styles.quizcard}>
      <div className={styles.quizelement}>
        <label className={styles.inputinfo} htmlFor="questions">
          Enter Number of Questions:
        </label>
        <br />
        <input
          className={styles.userinput}
          id="questions"
          type="number"
          value={questions}
          onChange={handleQuestions}
        />
      </div>

      <div className={styles.quizelement}>
        <label className={styles.inputinfo} htmlFor="range">
          Enter The Range:
        </label>
        <input
          className={styles.inputinfo}
          id="range"
          type="number"
          value={range}
          onChange={handleRange}
        />
      </div>

      <div className={styles.quizelement}>
        <label className={styles.inputinfo} htmlFor="range">
          Choose Your Operators:
        </label>
        <div className={styles.inlineoperators}>
          <div className={styles.operator}>
            <label htmlFor="plus">Add(+)</label>
            <input
              id="plus"
              type="checkbox"
              value="+"
              checked={operators.includes("+")}
              onChange={handleOperators}
            />
          </div>
          <div className={styles.operator}>
            <label htmlFor="minus">Subtract(-)</label>
            <input
              id="minus"
              type="checkbox"
              value="-"
              checked={operators.includes("-")}
              onChange={handleOperators}
            />
          </div>
        </div>
        <div className={styles.inlineoperators}>
          <div className={styles.operator}>
            <label htmlFor="multiply">Multiply(*)</label>
            <input
              id="multiply"
              type="checkbox"
              value="*"
              checked={operators.includes("*")}
              onChange={handleOperators}
            />
          </div>
          <div className={styles.operator}>
            <label htmlFor="divide">Divide (/)</label>
            <input
              id="divide"
              type="checkbox"
              value="/"
              checked={operators.includes("/")}
              onChange={handleOperators}
            />
          </div>
        </div>
      </div>

      <button className={styles.startbutton} onClick={submitData}>
        Start Quiz
      </button>
    </div>
  );
};

export default QuizCard;
