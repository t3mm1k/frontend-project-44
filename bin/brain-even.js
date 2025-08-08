#!/usr/bin/env node
import cli from "./cli.js";
import readlineSync from "readline-sync";

const name = cli();
console.log(`Hello, ${name}!`);

const roundsCount = 3;

for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);

    }

    console.log('Correct!');
}

console.log(`Congratulations, ${name}!`);
