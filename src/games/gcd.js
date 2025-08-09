import runGame from '../index.js'
import { getRandomInt } from '../utils/utils.js'

const calculateGcd = (a, b) => {
  if (!b) return a
  return calculateGcd(b, a % b)
}

const generateRound = () => {
  const num1 = getRandomInt(1, 100)
  const num2 = getRandomInt(1, 100)
  const question = `${num1} ${num2}`
  const correctAnswer = String(calculateGcd(num1, num2))
  return [question, correctAnswer]
}

const description = 'Find the greatest common divisor of given numbers.'

export default () => runGame(description, generateRound)
