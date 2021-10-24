import games from '../src/index.js';

// !после написания логики здесь надо продумать реализацию общей логики для всех игр!
// Логика игры
const name = games.getAnswer('May I have your name? ');
console.log(`Hello, ${name}!`);
let rightAnswerCount = 0;
do {
  const randomNum1 = games.random(0, 100);
  const randomNum2 = games.random(0, 100);
  console.log(`Question: ${randomNum1} ${randomNum2}`);
  const userAnswer = games.getAnswer('Your answer: ');// это строка
  const userNumber = Number(userAnswer);// преобразование к числу
  const operationResult = games.GCD(randomNum1, randomNum2);
  if (operationResult === userNumber) {
    console.log('Correct!');
    rightAnswerCount += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer :c . Correct answer was '${operationResult}'.`);
    console.log(`Let's try again, ${name}!`);
    rightAnswerCount = 0;
  }
} while (rightAnswerCount !== 3);
console.log(`Congratulations, ${name}!`);
