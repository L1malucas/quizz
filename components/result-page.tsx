"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ResultPageProps } from "@/utils/interfaces"
import UsernameModal from "./username-modal"
import { useRouter } from "next/navigation"

export default function ResultPage({
  quizTitle,
  score,
  questions,
  onRestart,
  onHome,
  slug,
  userAnswers = [] // Default to empty array
}: ResultPageProps & { userAnswers?: (number | null)[] }) {
  const router = useRouter()
  const [showUsernameModal, setShowUsernameModal] = useState(true)
  const [hoveredQuestion, setHoveredQuestion] = useState<number | null>(null)
  const isPassing = score >= 25

  const questionsAnswered = questions.length
  const correctAnswers = Math.round((score / 100) * questionsAnswered)

  const generateAnswerKey = () => {
    return questions
      .map((q, index) => {
        // Only include questions where the user's answer was incorrect
        const userAnswer = userAnswers[index]
        if (userAnswer !== q.correctAnswer && userAnswer !== undefined) {
          return `${index + 1}. ${q.correctLetter}`
        }
        return null
      })
      .filter((answer) => answer !== null) as string[]
  }

  const answerKey = generateAnswerKey()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black">
      <div className="w-full max-w-2xl p-8 bg-zinc-900 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-purple-500 text-center">{quizTitle} - Resultado</h1>

        <p className="text-xl mb-4 text-center">
          Sua pontuação total no teste "{quizTitle}" foi de {score}%.
        </p>

        <p className="text-lg mb-6 text-center">
          {isPassing
            ? "Parabéns! Essa pontuação coloca você entre os 25% melhores candidatos."
            : "Essa pontuação não coloca você entre os 25% melhores candidatos."}
        </p>

        {!isPassing && (
          <p className="text-lg mb-6 text-center">
            Convidamos você a refazer o teste depois de praticar um pouco mais, pois, como diz o ditado, a prática leva
            à perfeição! 🙂
          </p>
        )}

        <div className="mb-8 bg-zinc-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-3 text-purple-400">Gabarito (Questões Erradas):</h2>
          {answerKey.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {answerKey.map((answer, index) => {
                const questionIndex = parseInt(answer.split(".")[0]) - 1
                return (
                  <div
                    key={index}
                    className="relative text-center p-1 bg-zinc-700 rounded cursor-pointer"
                    onMouseEnter={() => setHoveredQuestion(questionIndex)}
                    onMouseLeave={() => setHoveredQuestion(null)}
                  >
                    {answer}
                    {hoveredQuestion === questionIndex && (
                      <div className="absolute z-10 w-96 p-4 bg-zinc-800 border border-zinc-700 rounded-lg shadow-lg -top-2 left-1/2 transform -translate-x-1/2 translate-y-[-100%]">
                        <p className="text-sm font-semibold text-white mb-2">{questions[questionIndex].question}</p>
                        <ul className="text-sm text-gray-300 mb-2">
                          {questions[questionIndex].options.map((option, optIndex) => (
                            <li key={optIndex} className="mb-1">
                              {String.fromCharCode(65 + optIndex)}. {option}
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm text-green-400">
                          Correta: {questions[questionIndex].correctLetter}
                        </p>
                        <p className="text-sm text-yellow-400">
                          Selecionada:{" "}
                          {userAnswers[questionIndex] !== null && userAnswers[questionIndex] !== undefined
                            ? String.fromCharCode(65 + userAnswers[questionIndex])
                            : "Não selecionada"}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ) : (
            <p className="text-sm text-gray-400">Parabéns! Você acertou todas as questões.</p>
          )}
        </div>

        <div className="flex gap-4">
          <Button
            onClick={onHome}
            variant="outline"
            className="w-1/3 px-6 py-3 border-gray-700 text-white hover:bg-zinc-800"
          >
            Home
          </Button>

          <Button
            onClick={onRestart}
            className="w-1/3 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold"
          >
            Refazer
          </Button>

          <Button
            onClick={() => {
              setShowUsernameModal(true)
              router.push("/ranking")
            }}
            className="w-1/3 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold"
          >
            Ranking
          </Button>
        </div>
      </div>

      {showUsernameModal && (
        <UsernameModal
          slug={slug}
          quizTitle={quizTitle}
          score={score}
          onClose={() => {
            setShowUsernameModal(false)
          }}
          questionsAnswered={questionsAnswered}
          correctAnswers={correctAnswers}
        />
      )}
    </div>
  )
}