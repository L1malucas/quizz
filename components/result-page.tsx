"use client"

import { Button } from "@/components/ui/button"
import { ResultPageProps } from "@/utils/interfaces"

export default function ResultPage({ quizTitle, score, questions, onRestart, onHome }: ResultPageProps) {
  const isPassing = score >= 25

  // Generate answer key
  const generateAnswerKey = () => {
    return questions.map((q, index) => {
      return `${index + 1}. ${q.correctLetter}`
    })
  }

  const answerKey = generateAnswerKey()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black">
      <div className="w-full max-w-2xl p-8 bg-zinc-900 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-orange-500 text-center">{quizTitle} - Resultado</h1>

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

        {/* <div className="mb-8 bg-zinc-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-3 text-orange-400">Gabarito:</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {answerKey.map((answer, index) => (
              <div key={index} className="text-center p-1 bg-zinc-700 rounded">
                {answer}
              </div>
            ))}
          </div>
        </div> */}

        <div className="flex gap-4">
          <Button
            onClick={onHome}
            variant="outline"
            className="w-1/2 px-6 py-3 border-gray-700 text-white hover:bg-zinc-800"
          >
            Voltar para Home
          </Button>

          <Button
            onClick={onRestart}
            className="w-1/2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold"
          >
            Refazer Teste
          </Button>
        </div>
      </div>
    </div>
  )
}
