import readlineSync from "readline-sync";

export default function createGame(getGameComponents, rule) {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hi, ${name}!`);
  console.log(rule, "\n");
  let rightAnswersCount = 0;
  do {
    const { result, question } = getGameComponents();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");
    if (result === userAnswer) {
      console.log("Correct!");
      rightAnswersCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer :c . Correct answer was '${result}'.`
      );
      console.log(`Let's try again, ${name}!`);
      rightAnswersCount = 0;
    }
  } while (rightAnswersCount !== 3);
  console.log(`Congratulations, ${name}!`);
}
