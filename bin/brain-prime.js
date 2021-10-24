import games from '../src/index.js';

// Логика игры
const name = games.getAnswer('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is prime, otherwise answer "no".');
let rightAnswerCount = 0;
do {
  // Поскольку конкретного диапазона в задании не указано,
  // то выбираю "случайное" число от 0 до 100
  const randomNum = games.random(0, 100);
  console.log(`Question: ${randomNum}`);
  const userAnswer = games.getAnswer('Your answer: ');
  const result = games.isPrime(randomNum);
  if (result === userAnswer) {
    console.log('Correct!');
    rightAnswerCount += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer :c . Correct answer was '${result}'.`);
    console.log(`Let's try again, ${name}!`);
    rightAnswerCount = 0;
  }
} while (rightAnswerCount !== 3);
console.log(`Congratulations, ${name}!`);
