import { random } from '../index.js';
// проверка на четность
function isEven(num) {
  return (num % 2 === 0 ? 'yes' : 'no');
}
export function createBrainEven() {
  const question = random(0, 100);
  const result = isEven(question);
  const obj = { question, result };
  return obj;
}

export const rule = 'Answer "yes" if the number is even, otherwise answer "no":\n';
