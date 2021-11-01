import { random } from '../index.js';

export function GCD(a, b) {
  if (b) {
    return GCD(b, a % b);
  }
  return Math.abs(a);
}
// Логика игры
export function createBrainGCD() {
  const randomNum1 = random(0, 100);
  const randomNum2 = random(0, 100);
  const question = `${randomNum1} ${randomNum2}`;
  const result = GCD(randomNum1, randomNum2);
  const obj = { question, result };
  return obj;
}
export const rule = 'Find the greatest common devisor:\n';
