import readlineSync from 'readline-sync';
import greeting from './cli.js';

// рандомное число
export function random(min = 0, max) {
  return Math.floor(min + Math.random() * (max - min));
}
// получение ответа
function getAnswer(str) {
  return readlineSync.question(str);
}

// функция реализует общую часть для игр, передается функция самой игры, и правило игры
export function createGame(game, rule = '') {
  // приветствие
  const name = greeting();
  // выводится правило, соответствующее игре
  console.log(rule);
  // счётчик правильных ответов
  let rightAnswerCount = 0;
  do {
    // в gameComponents передаётся объект, содержащий корректный результат и вопрос игры
    const gameComponents = game();
    console.log(`Question: ${gameComponents.question}`);
    // ответ юзера
    let userAnswer = getAnswer('Your answer: ');
    // если строка, приведенная к числу - НЕ NaN, то приводится к числу
    if (!Number.isNaN(Number(userAnswer))) {
      userAnswer = Number(userAnswer);
    }
    if (gameComponents.result === userAnswer) {
      console.log('Correct!');
      rightAnswerCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer :c . Correct answer was '${gameComponents.result}'.`);
      console.log(`Let's try again, ${name}!`);
      rightAnswerCount = 0;
    }
  } while (rightAnswerCount !== 3);
  console.log(`Congratulations, ${name}!`);
}
