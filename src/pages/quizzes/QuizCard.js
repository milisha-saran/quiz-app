import React, { useState } from "react";
import { useQuiz } from "../../context/QuizProvider";

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
    <div>
      <span>
        <label htmlFor="questions">Enter Number of Questions</label>
        <input
          id="questions"
          type="number"
          value={questions}
          onChange={handleQuestions}
        />
      </span>

      <span>
        <label htmlFor="range">Enter the range</label>
        <input id="range" type="number" value={range} onChange={handleRange} />
      </span>
      <div>
        <span>
          <label htmlFor="plus">+</label>
          <input
            id="plus"
            type="checkbox"
            value="+"
            checked={operators.includes("+")}
            onChange={handleOperators}
          />
        </span>
        <span>
          <label htmlFor="minus">-</label>
          <input
            id="minus"
            type="checkbox"
            value="-"
            checked={operators.includes("-")}
            onChange={handleOperators}
          />
        </span>
        <span>
          <label htmlFor="multiply">*</label>
          <input
            id="multiply"
            type="checkbox"
            value="*"
            checked={operators.includes("*")}
            onChange={handleOperators}
          />
        </span>
        <span>
          <label htmlFor="divide">/</label>
          <input
            id="divide"
            type="checkbox"
            value="/"
            checked={operators.includes("/")}
            onChange={handleOperators}
          />
        </span>
      </div>

      <button onClick={submitData}>Start Quiz</button>
    </div>
  );
};

export default QuizCard;
