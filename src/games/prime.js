import getRandomNumber from "../utils.js";

function isNumberPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return "no";
  }
  return "yes";
}

export function createBrainPrime() {
  const question = getRandomNumber(0, 100);
  const result = isNumberPrime(question);
  return { result, question };
}

export const rule =
  'Answer "yes" if the number is prime, otherwise answer "no":';
