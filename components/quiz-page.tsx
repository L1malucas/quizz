"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { QuizPageProps } from "@/utils/interfaces"

export default function QuizPage({
  quizTitle,
  questions,
  currentQuestion,
  selectedAnswers,
  timer,
  setTimer,
  isPaused,
  onAnswer,
  onNext,
  onTogglePause,
  onQuit,
  onFinish,
}: QuizPageProps) {
  const tickSound = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    tickSound.current = new Audio(
      "https://www.soundjay.com/button/sounds/button-3.mp3"
    )
  }, [])

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (!isPaused && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          // Play tick sound every second
          if (prevTimer % 2 === 0 && tickSound.current) {
            tickSound.current.play().catch((e) => console.log("Audio play failed:", e))
          }
          return prevTimer - 1
        })
      }, 1000)
    } else if (timer === 0) {
      // Time's up - go to result page
      onFinish()
    }

    return () => clearInterval(interval)
  }, [timer, isPaused, setTimer, onFinish])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" + secs : secs}`
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black">
      <div className="w-full max-w-4xl p-6 bg-zinc-900 rounded-lg shadow-lg">
        <div className="flex flex-col gap-4 mb-6">
          <h1 className="text-2xl font-bold text-purple-500">{quizTitle}</h1>
          <div className="flex items-center gap-4">

            <Button
              onClick={onFinish}
              variant="outline"
              className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white"
            >
              Finalizar
            </Button>
            <Button
              onClick={onTogglePause}
              variant="outline"
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white"
            >
              {isPaused ? "Continuar" : "Pausar"}
            </Button>
            <div className={`text-lg font-mono ${timer < 60 ? "text-red-500" : "text-white"}`}>{formatTime(timer)}</div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-400">
              Questão {currentQuestion + 1} de {questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded-full">
            <div
              className="bg-purple-500 h-2 rounded-full"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-6">{currentQ.question}</h2>

          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <div
                key={index}
                onClick={() => onAnswer(index)}
                className={`p-4 border border-gray-700 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-gray-800 ${selectedAnswers[currentQuestion] === index ? "border-purple-500 bg-gray-800" : ""
                  }`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-5 h-5 mr-3 rounded-full border ${selectedAnswers[currentQuestion] === index ? "border-purple-500 bg-purple-500" : "border-gray-500"
                      }`}
                  >
                    {selectedAnswers[currentQuestion] === index && (
                      <div className="flex items-center justify-center h-full">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <span className="mr-2">{String.fromCharCode(65 + index)}.</span>
                  <span>{option}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            onClick={onNext}
            disabled={selectedAnswers[currentQuestion] === null}
            className={`px-6 py-3 rounded-lg font-semibold ${selectedAnswers[currentQuestion] !== null
              ? "bg-purple-500 hover:bg-purple-600 text-white"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
              }`}
          >
            {currentQuestion < questions.length - 1 ? "Próxima" : "Finalizar"}
          </Button>
        </div>
      </div>
    </div>
  )
}