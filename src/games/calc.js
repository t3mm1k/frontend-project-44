import runGame from '../index.js'
import { getRandomInt } from '../utils/utils.js'

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateRound = () => {
  const a = getRandomInt(1, 25)
  const b = getRandomInt(1, 25)
  const operators = ['+', '-', '*']
  const operator = operators[getRandomInt(0, operators.length - 1)]

  const question = `${a} ${operator} ${b}`
  const correctAnswer = String(calculate(a, b, operator))

  return [question, correctAnswer]
}

const description = 'What is the result of the expression?'

export default () => runGame(description, generateRound)
