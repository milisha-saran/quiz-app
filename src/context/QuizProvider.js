import { createContext, useContext, useReducer } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const initialValue = {
    quiz1: {
      numberOfQuestions: 20,
      range: 10,
      operators: ["+", "-", "*", "/"],
      questionNo: 1,
      userAnswers: [],
      score: 0,
    },
  };
  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "SET_QUIZ_DATA":
        return {
          ...state,
          quiz1: { ...state.quiz1, ...action.payload },
        };
      case "SET_QUESTION_NO":
        return {
          ...state,
          quiz1: { ...state.quiz1, questionNo: action.payload },
        };

      case "SET_ANSWER":
        return {
          ...state,
          quiz1: {
            ...state.quiz1,
            userAnswers: [...state.quiz1.userAnswers, action.payload],
          },
        };
      case "SET_SCORE":
        return { ...state, quiz1: { ...state.quiz1, score: action.payload } };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFunc, initialValue);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
