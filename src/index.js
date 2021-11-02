import readlineSync from 'readline-sync';

export default function createGame(game, rule) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${name}!`);
  console.log(rule, '\n');
  let rightAnswerCount = 0;
  do {
    const gameComponents = game();
    console.log(`Question: ${gameComponents.question}`);
    const userAnswer = readlineSync.question('Your answer: ');
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
