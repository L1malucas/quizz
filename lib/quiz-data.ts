import { reactQuiz } from './quizzes/react-quiz';
import { Quiz } from "@/utils/interfaces"
import { cssQuiz } from "./quizzes/css-quiz"
import { domQuiz } from "./quizzes/dom-quiz"
import { htmlQuiz } from "./quizzes/html-quiz"
import { jsQuiz } from "./quizzes/js-quiz"
import { logicQuiz } from "./quizzes/logic-quiz"
import { mongodbQuiz } from "./quizzes/mongodb-quiz"
import { sqlQuiz } from "./quizzes/sql-quiz"
import { typescriptQuiz } from "./quizzes/ts-quiz"
import { angularQuiz } from './quizzes/angular-quiz';
import { csharpDotnetQuiz } from './quizzes/csharp-quiz';
import { frameworksQuiz } from './quizzes/ddd-quiz';

export const quizzes: Quiz[] = [
  logicQuiz,
  htmlQuiz,
  cssQuiz,
  domQuiz,
  mongodbQuiz,
  sqlQuiz,
  jsQuiz, 
  typescriptQuiz,
  reactQuiz, 
  angularQuiz,
  csharpDotnetQuiz,
  frameworksQuiz
]
