"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, ArrowLeft, AlertCircle, CheckCircle, XCircle, Loader2 } from "lucide-react"
import { generateAIQuestion } from "@/lib/ai-quiz"
import UsernameModal from "@/components/username-modal"

interface AIQuestion {
  question: string
  options: string[]
  correctAnswerIndex: number
}

export default function AIQuizPage() {
  const router = useRouter()
  const [isStarted, setIsStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState<AIQuestion | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswerChecked, setIsAnswerChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [errorCount, setErrorCount] = useState(0)
  const [questionCount, setQuestionCount] = useState(0)
  const [topic, setTopic] = useState("")
  const [gameOver, setGameOver] = useState(false)
  const [showUsernameModal, setShowUsernameModal] = useState(false)

  // Load a new question
  const loadQuestion = async () => {
    setIsLoading(true)
    setSelectedAnswer(null)
    setIsAnswerChecked(false)

    try {
      const newQuestion = await generateAIQuestion(topic)
      setCurrentQuestion(newQuestion)
      setQuestionCount((prev) => prev + 1)
    } catch (error) {
      console.error("Error generating question:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Start the quiz
  const startQuiz = () => {
    setIsStarted(true)
    loadQuestion()
  }

  // Handle answer selection
  const handleAnswerSelect = (index: number) => {
    if (isAnswerChecked) return // Prevent changing answer after checking
    setSelectedAnswer(index)
  }

  // Check the selected answer
  const checkAnswer = () => {
    if (selectedAnswer === null) return

    const isAnswerCorrect = selectedAnswer === currentQuestion?.correctAnswerIndex
    setIsCorrect(isAnswerCorrect)
    setIsAnswerChecked(true)

    if (!isAnswerCorrect) {
      const newErrorCount = errorCount + 1
      setErrorCount(newErrorCount)

      // Game over after 3 errors
      if (newErrorCount >= 3) {
        setGameOver(true)
        setShowUsernameModal(true)
      }
    }
  }

  // Next question
  const nextQuestion = () => {
    loadQuestion()
  }

  // Restart the quiz
  const restartQuiz = () => {
    setErrorCount(0)
    setQuestionCount(0)
    setGameOver(false)
    setIsStarted(false)
    setCurrentQuestion(null)
    setSelectedAnswer(null)
    setIsAnswerChecked(false)
  }

  // Welcome screen
  if (!isStarted) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <Button variant="ghost" onClick={() => router.push("/")} className="mb-8 text-gray-400 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Home
          </Button>

          <Card className="bg-zinc-900 border-purple-500 p-8">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-purple-400 mr-3" />
              <h1 className="text-3xl font-bold text-purple-400">Modo Desafio IA</h1>
            </div>

            <p className="text-lg mb-6 text-center">
              Teste seus conhecimentos com perguntas geradas por IA. O quiz continua até você cometer 3 erros.
            </p>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-400 mb-2">Escolha um tópico (opcional):</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="ex: JavaScript, React, MongoDB..."
                className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-md text-white"
              />
              <p className="text-xs text-gray-500 mt-2">
                Deixe em branco para tópicos variados. Seja específico para perguntas focadas.
              </p>
            </div>

            <Button
              onClick={startQuiz}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg"
            >
              Iniciar Desafio
            </Button>
          </Card>
        </div>
      </div>
    )
  }

  // Game over screen
  if (gameOver) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <Card className="bg-zinc-900 border-purple-500 p-8">
            <h1 className="text-3xl font-bold text-center mb-6 text-purple-400">Desafio Completo!</h1>

            <div className="text-center mb-8">
              <p className="text-xl mb-4">
                Você respondeu <span className="text-purple-400 font-bold">{questionCount}</span> questões
              </p>
              <p className="text-xl mb-6">
                Com <span className="text-green-500 font-bold">{questionCount - errorCount}</span> respostas corretas
              </p>

              <div className="flex justify-center space-x-2 mb-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${i < errorCount ? "bg-red-500/20 text-red-500" : "bg-zinc-800 text-zinc-600"
                      }`}
                  >
                    {i < errorCount ? <XCircle className="h-6 w-6" /> : i + 1}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={() => router.push("/")}
                variant="outline"
                className="w-1/3 py-3 border-gray-700 text-white hover:bg-zinc-800"
              >
                Início
              </Button>
              <Button
                onClick={restartQuiz}
                className="w-1/3 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold"
              >
                Tentar Novamente
              </Button>
              <Button
                onClick={() => {
                  setShowUsernameModal(true)
                  router.push("/ranking")
                }}
                className="w-1/3 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold"
              >
                Ranking
              </Button>
            </div>
          </Card>
        </div>

        {showUsernameModal && (
          <UsernameModal
            quizId="ai-challenge"
            quizTitle={`Desafio IA: ${topic || "Tópicos Variados"}`}
            score={Math.round(((questionCount - errorCount) / questionCount) * 100)}
            questionsAnswered={questionCount}
            correctAnswers={questionCount - errorCount}
            onClose={() => setShowUsernameModal(false)}
          />
        )}
      </div>
    )
  }

  // Loading state
  if (isLoading || !currentQuestion) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center">
          <Loader2 className="h-12 w-12 text-purple-500 animate-spin mb-4" />
          <p className="text-xl">Gerando sua questão...</p>
        </div>
      </div>
    )
  }

  // Quiz question screen
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <Button
            variant="ghost"
            onClick={() => {
              if (confirm("Tem certeza que deseja sair? Seu progresso será perdido.")) {
                router.push("/")
              }
            }}
            className="text-gray-400 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Sair
          </Button>

          <div className="flex items-center">
            <span className="mr-4 text-lg">
              Questão <span className="text-purple-400 font-bold">{questionCount}</span>
            </span>
            <div className="flex space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${i < errorCount ? "bg-red-500/20 text-red-500" : "bg-zinc-800 text-zinc-600"
                    }`}
                >
                  {i < errorCount ? <XCircle className="h-4 w-4" /> : i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Card className="bg-zinc-900 border-gray-700 p-6 mb-6">
          <h2 className="text-xl font-semibold mb-6">{currentQuestion.question}</h2>

          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`p-4 border rounded-lg cursor-pointer transition-colors duration-200 
                  ${isAnswerChecked
                    ? index === currentQuestion.correctAnswerIndex
                      ? "border-green-500 bg-green-500/10"
                      : selectedAnswer === index
                        ? "border-red-500 bg-red-500/10"
                        : "border-gray-700 bg-zinc-800"
                    : selectedAnswer === index
                      ? "border-purple-500 bg-zinc-800"
                      : "border-gray-700 hover:bg-zinc-800"
                  }
                `}
              >
                <div className="flex items-center">
                  <div
                    className={`w-6 h-6 mr-3 rounded-full flex items-center justify-center
                      ${isAnswerChecked
                        ? index === currentQuestion.correctAnswerIndex
                          ? "bg-green-500 text-white"
                          : selectedAnswer === index
                            ? "bg-red-500 text-white"
                            : "border border-gray-500"
                        : selectedAnswer === index
                          ? "bg-purple-500 text-white"
                          : "border border-gray-500"
                      }
                    `}
                  >
                    {isAnswerChecked ? (
                      index === currentQuestion.correctAnswerIndex ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : selectedAnswer === index ? (
                        <XCircle className="h-4 w-4" />
                      ) : (
                        String.fromCharCode(65 + index)
                      )
                    ) : (
                      String.fromCharCode(65 + index)
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </div>
            ))}
          </div>

          {isAnswerChecked ? (
            <div className="mb-6">
              <div
                className={`p-4 rounded-lg ${isCorrect ? "bg-green-500/10 border border-green-500" : "bg-red-500/10 border border-red-500"
                  }`}
              >
                <div className="flex items-start">
                  {isCorrect ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  )}
                  <div>
                    <p className={`font-medium ${isCorrect ? "text-green-500" : "text-red-500"}`}>
                      {isCorrect ? "Correto!" : "Incorreto!"}
                    </p>
                    <p className="text-gray-300">
                      {isCorrect
                        ? "Ótimo trabalho! Vamos para a próxima questão."
                        : `A resposta correta é ${String.fromCharCode(
                          65 + currentQuestion.correctAnswerIndex,
                        )}: ${currentQuestion.options[currentQuestion.correctAnswerIndex]}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {isAnswerChecked ? (
            <Button
              onClick={nextQuestion}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold"
            >
              Próxima Questão
            </Button>
          ) : (
            <Button
              onClick={checkAnswer}
              disabled={selectedAnswer === null}
              className={`w-full py-3 ${selectedAnswer !== null
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-gray-700 text-gray-400 cursor-not-allowed"
                }`}
            >
              Verificar Resposta
            </Button>
          )}
        </Card>
      </div>
    </div>
  )
}
