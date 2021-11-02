import getRandomNumber from '../utils.js';

function evaluateExpression(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      console.log(`\nUnknown operator: "${operator}"!\n`);
      return null;
  }
}

export function createBrainCalc() {
  const signs = ['-', '+', '*'];
  const randomNum1 = getRandomNumber(0, 100);
  const randomNum2 = getRandomNumber(0, 100);
  const randomSign = signs[getRandomNumber(0, signs.length)];
  const question = `${randomNum1} ${randomSign} ${randomNum2}`;
  const result = String(evaluateExpression(randomNum1, randomNum2, randomSign));
  return { result, question };
}
export const rule = 'Evaluate the value of the expression:';
