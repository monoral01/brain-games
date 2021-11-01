import { random } from '../index.js';

function mathOperation(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return undefined;
  }
}
// Логика игры
export function createBrainCalc() {
  const signs = ['-', '+', '*'];
  const randomNum1 = random(0, 100);
  const randomNum2 = random(0, 100);
  const randomSign = signs[random(0, signs.length)];
  const question = `${randomNum1} ${randomSign} ${randomNum2} = ?`;
  const result = mathOperation(randomNum1, randomNum2, randomSign);
  const obj = { question, result };
  return obj;
}
export const rule = 'Evaluate the value of the expression:\n';
