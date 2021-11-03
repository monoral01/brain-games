import getRandomNumber from "../utils.js";

export function createBrainProgression() {
  const prLength = getRandomNumber(5, 10);
  let prFirstElement = getRandomNumber(0, 20);
  const prStep = getRandomNumber(2, 5);
  const prArray = [prFirstElement];
  const missingNumberIndex = getRandomNumber(0, prLength);
  for (let i = 0; i < prLength; i += 1) {
    prArray.push((prFirstElement += prStep));
  }

  const result = String(prArray[missingNumberIndex]);
  prArray[missingNumberIndex] = "..";
  const question = prArray.join(" ");
  return { result, question };
}
export const rule = "Enter the missing element:";
