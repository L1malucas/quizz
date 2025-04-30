import { Quiz } from "@/utils/interfaces"
import { cssQuiz } from "./quizzes/css-quiz"
import { domQuiz } from "./quizzes/dom-quiz"
import { htmlQuiz } from "./quizzes/html-quiz"
import { jsQuiz } from "./quizzes/js-quiz"
import { logicQuiz } from "./quizzes/logic-quiz"
import { mongodbQuiz } from "./quizzes/mongodb-quiz"
import { sqlQuiz } from "./quizzes/sql-quiz"

export const quizzes: Quiz[] = [
  logicQuiz,
  htmlQuiz,
  cssQuiz,
  domQuiz,
  mongodbQuiz,
  sqlQuiz,
  jsQuiz, 
]
