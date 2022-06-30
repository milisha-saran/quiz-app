export const randomQuestionGenerator = (
  range = 10,
  operators = ["+", "-", "*", "/"]
) => {
  const operand1 = Math.ceil(Math.random() * range);
  const operand2 = Math.ceil(Math.random() * range);
  const operator = operators[Math.ceil(Math.random() * operators.length - 1)];
  return {
    question: `${operand1}${operator}${operand2}`,
    answer: eval(`${operand1}${operator}${operand2}`),
  };
};
