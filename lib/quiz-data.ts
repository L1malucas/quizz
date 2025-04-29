import { cssQuiz } from "./quizzes/css-quiz"
import { domQuiz } from "./quizzes/dom-quiz"
import { htmlQuiz } from "./quizzes/html-quiz"
import { jsQuiz } from "./quizzes/js-quiz"
import { mongodbQuiz } from "./quizzes/mongodb-quiz"

export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  correctLetter: string
}

export interface Quiz {
  id: number
  slug: string
  title: string
  description: string
  timeLimit: number 
  questions: QuizQuestion[]
}

export const quizzes: Quiz[] = [
  mongodbQuiz,
  htmlQuiz,
  cssQuiz,
  domQuiz,
  jsQuiz
]
