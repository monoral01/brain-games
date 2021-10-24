import games from '../src/index.js';

// !после написания логики здесь надо продумать реализацию общей логики для всех игр!
// Логика игры
const name = games.getAnswer('May I have your name? ');
console.log(`Hello, ${name}!`);
let rightAnswerCount = 0;
do {
  // генерация рандомного числа от 5 до 10
  const prLength = games.random(5, 10);
  let prFirstElement = games.random(0, 20);
  // рандомный шаг прогрессии
  const prStep = games.random(2, 5);
  const prArray = [prFirstElement];
  // индекс случайного скрытого элемента
  const index = games.random(0, prLength);
  for (let i = 0; i < prLength; i += 1) {
    prArray.push(prFirstElement += prStep);
  }
  // случайный элемент заменяется на точки
  const operationResult = prArray[index];
  prArray[index] = '..';
  const prString = String(prArray);
  prString.split(',');
  console.log(`Question: ${prString.replace(/,/g, ' ')}`);
  const userAnswer = games.getAnswer('Your answer: ');// это строка
  const userNumber = Number(userAnswer);// преобразование к числу
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
