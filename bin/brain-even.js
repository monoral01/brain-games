import readlineSync from 'readline-sync';

const getAnswer = (str) => readlineSync.question(str);
//Функция с логикой игры
const numParity = () => {
    const name = getAnswer(`May I have your name? `);
    console.log(`Hello, ${name}!`);
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
    let rightAnswerCount = 0;
    do {
        //Поскольку конкретного диапазона в задании не указано,
        //то выбираю "случайное" число от 0 до 100
        const pseudoRandomNumber = Math.floor(Math.random() * 100);
        console.log(`Question: ${pseudoRandomNumber}`);
        if (pseudoRandomNumber %2 === 0) {
            if (getAnswer(`Your answer: `) === `yes`) {
                console.log(`Correct!`);
                rightAnswerCount ++;
            }
            else {
                console.log(`It is wrong answer :c . Correct answer was 'yes'.`);
                console.log(`Let's try again, ${name}!`);
                rightAnswerCount = 0;
            } 
        }
        else {
            if (getAnswer(`Your answer: `) === `no`){ 
                console.log(`Correct!`);
                rightAnswerCount ++;
            }
            else {
                console.log(`It is wrong answer :c . Correct answer was 'no'.`);
                console.log(`Let's try again, ${name}!`);
                rightAnswerCount = 0;
            } 
        }
    }while (rightAnswerCount !== 3);
    console.log(`Congratulations, ${name}!`)
  };
numParity();