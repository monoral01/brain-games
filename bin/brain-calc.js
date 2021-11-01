/*  const userNumber = Number(userAnswer);// преобразование к числу */
import { rule, createBrainCalc } from '../src/games/calc.js';
import { createGame } from '../src/index.js';

createGame(createBrainCalc, rule);
