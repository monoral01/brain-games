import getRandomNumber from "../utils.js";

function findGreatestDivisor(a, b) {
  if (b) {
    return findGreatestDivisor(b, a % b);
  }
  return Math.abs(a);
}

export function createBrainGCD() {
  const randomNum1 = getRandomNumber(0, 100);
  const randomNum2 = getRandomNumber(0, 100);
  const question = `${randomNum1} ${randomNum2}`;
  const result = String(findGreatestDivisor(randomNum1, randomNum2));
  return { result, question };
}
export const rule = "Find the greatest common devisor:";
