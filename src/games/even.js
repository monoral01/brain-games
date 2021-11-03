import getRandomNumber from "../utils.js";

function isNumberEven(num) {
  return num % 2 === 0 ? "yes" : "no";
}
export function createBrainEven() {
  const question = getRandomNumber(0, 100);
  const result = isNumberEven(question);
  return { result, question };
}

export const rule =
  'Answer "yes" if the number is even, otherwise answer "no":';
