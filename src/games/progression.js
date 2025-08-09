import runGame from '../index.js'
import { getRandomInt } from '../utils/utils.js'

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const generateRound = () => {
  const progressionLength = getRandomInt(5, 10)
  const start = getRandomInt(1, 50)
  const step = getRandomInt(1, 10)
  const progression = generateProgression(start, step, progressionLength)

  const hiddenIndex = getRandomInt(0, progressionLength - 1)
  const correctAnswer = String(progression[hiddenIndex])

  progression[hiddenIndex] = '..'
  const question = progression.join(' ')

  return [question, correctAnswer]
}

const description = 'What number is missing in the progression?'

export default () => runGame(description, generateRound)
