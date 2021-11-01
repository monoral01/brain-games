import { random } from '../index.js';
// генерация рандомного числа от 5 до 10
export function createBrainProgression() {
  const prLength = random(5, 10);
  let prFirstElement = random(0, 20);
  // рандомный шаг прогрессии
  const prStep = random(2, 5);
  const prArray = [prFirstElement];
  // индекс случайного скрытого элемента
  const index = random(0, prLength);
  for (let i = 0; i < prLength; i += 1) {
    prArray.push(prFirstElement += prStep);
  }
  // случайный элемент заменяется на точки
  const result = prArray[index];
  prArray[index] = '..';
  const prString = String(prArray);
  prString.split(',');
  const question = `${prString.replace(/,/g, ' ')}`;
  const obj = { result, question };
  return obj;
}
export const rule = 'Enter the missing element:\n';
