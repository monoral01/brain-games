import readlineSync from 'readline-sync';
// общая логика игр
const games = {
  isEven(num) {
    return num % 2 === 0 ? 'yes' : 'no';
  },
  isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) { if (num % i === 0) return 'no'; }
    return 'yes';
  },
  random(min = 0, max) {
    return Math.floor(min + Math.random() * (max - min));
  },
  getAnswer(str) {
    return readlineSync.question(str);
  },
  operation(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        console.log('Произошли технические шоколадки');
        return null;
    }
  },
  GCD(a, b) {
    if (b) {
      return this.GCD(b, a % b);
    }
    return Math.abs(a);
  },
  createQuestion(typeOfGame) {
    switch (typeOfGame) {
      case 'brain-even':
        return this.random(100);
      case 'brain-calc':
        return [];
      default:
        console.log("Error, can't create question");
        return null;
    }
  },
  createGame(typeOfGame) {
    const name = this.getAnswer('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let rightAnswerCount = 0;
    do {
      const randomNum = this.random(100);
      console.log(`Question: ${this.createQuestion(typeOfGame)}`);
      const userAnswer = this.getAnswer('Your answer: ');
      const result = this.isEven(randomNum);
      if (result === userAnswer) {
        console.log('Correct!');
        rightAnswerCount += 1;
      } else {
        console.log(
          `'${userAnswer}' is wrong answer :c . Correct answer was '${result}'.`,
        );
        console.log(`Let's try again, ${name}!`);
        rightAnswerCount = 0;
      }
    } while (rightAnswerCount !== 3);
    console.log(`Congratulations, ${name}!`);
  },
};
export default games;
