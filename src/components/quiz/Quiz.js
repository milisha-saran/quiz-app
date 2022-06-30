import React, { useEffect, useState } from "react";
import { useQuiz } from "../../context/QuizProvider";
import { randomQuestionGenerator } from "../../helpers/randomQuestionGenerator";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./quiz.module.css";

const Quiz = ({ time, reset }) => {
  const { state, dispatch } = useQuiz();

  const [operation, setOperation] = useState({ question: "", answer: "" });
  const [useranswer, setUseranswer] = useState("");

  const changeQuestion = () => {
    const { question, answer } = randomQuestionGenerator(
      state.quiz1.range,
      state.quiz1.operators
    );
    setOperation({ question, answer });
  };

  const acceptAnswer = (e) => {
    setUseranswer(e.target.value);
  };

  const submitAnswer = () => {
    if (state.quiz1.questionNo === state.quiz1.numberOfQuestions) return;

    const payload = {
      questionNo: state.quiz1.questionNo,
      answer: useranswer,
      isCorrect: false,
      isWrong: false,
      isUnattemped: false,
    };
    if (Number(operation.answer) === Number(useranswer)) {
      payload.isCorrect = true;
      dispatch({ type: "SET_SCORE", payload: state.quiz1.score + 1 });
    } else if (useranswer === "") {
      payload.isUnattemped = true;
    } else {
      payload.isWrong = true;
    }
    dispatch({ type: "SET_ANSWER", payload });

    dispatch({ type: "SET_QUESTION_NO", payload: state.quiz1.questionNo + 1 });

    changeQuestion();

    setUseranswer("");

    reset();
  };

  useEffect(() => {
    changeQuestion();
  }, []);

  useEffect(() => {
    if (time === 0) submitAnswer();
  }, [time]);

  return (
    <div>
      <Header time={time} />

      <div className={styles.container}>
        <div className={styles.arithmetic}>
          <p className={styles.question}>
            What is the value of {operation.question}?
          </p>

          <input
            className={styles.answer}
            type="number"
            value={useranswer}
            onChange={acceptAnswer}
          />
          <button className={styles.answerbutton} onClick={submitAnswer}>
            {state.quiz1.questionNo === state.quiz1.numberOfQuestions
              ? "Finish"
              : "Submit"}
          </button>
        </div>
        {/* <button className={styles.startbutton} >Start Quiz</button> */}
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
