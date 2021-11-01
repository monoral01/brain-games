import { random } from '../index.js';

// проверка на простое число
function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
}

export function createBrainPrime() {
  const question = random(0, 100);
  const result = isPrime(question);
  const obj = { question, result };
  return obj;
}

export const rule = 'Answer "yes" if the number is prime, otherwise answer "no":';
