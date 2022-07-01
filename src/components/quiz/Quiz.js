import React, { useEffect, useState } from "react";
import { useQuiz } from "../../context/QuizProvider";
import { randomQuestionGenerator } from "../../helpers/randomQuestionGenerator";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Result from "../result/Result";
import styles from "./quiz.module.css";

const Quiz = ({ time, reset }) => {
  const { state, dispatch } = useQuiz();

  const [operation, setOperation] = useState({ question: "", answer: "" });
  const [useranswer, setUseranswer] = useState("");
  const [isFinished, setFinished] = useState(false);

  const isLastQuestion =
    Number(state.quiz1.questionNo) === Number(state.quiz1.numberOfQuestions);

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
    const payload = {
      questionNo: state.quiz1.questionNo,
      question: operation.question,
      useranswer: useranswer,
      answer: operation.answer,
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

    setUseranswer("");

    if (isLastQuestion) return setFinished(true);

    dispatch({ type: "SET_QUESTION_NO", payload: state.quiz1.questionNo + 1 });

    changeQuestion();

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
      {!isFinished ? (
        <>
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
                {isLastQuestion ? "Finish" : "Submit"}
              </button>
            </div>
          </div>
          <Footer />{" "}
        </>
      ) : (
        <Result />
      )}
    </div>
  );
};

export default Quiz;
