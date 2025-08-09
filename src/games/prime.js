import runGame from "../index.js";
import { getRandomInt } from "../utils/utils.js";

const isPrime = (number) => {
    if (number < 2) return false;

    for (let i = 2, max = Math.sqrt(number); i <= max; i++) {
        if (number % i === 0) return false;
    }

    return true;
};

const generateRound = () => {
    const number = getRandomInt(1, 100);
    const correctAnswer = isPrime(number) ? "yes" : "no";
    return [number, correctAnswer];
};

const description =
    'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => runGame(description, generateRound);
