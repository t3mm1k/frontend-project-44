#!/usr/bin/env node


import runGame from '../index.js';
import { getRandomInt } from '../utils/utils.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
    const question = getRandomInt(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

runGame(description, generateRound);