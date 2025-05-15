"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { quizzes } from "@/lib/quiz-data"
import WelcomePage from "@/components/welcome-page"
import QuizPage from "@/components/quiz-page"
import ResultPage from "@/components/result-page"
import { use } from "react"

export default function QuizContainer({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter()
  const { slug } = use(params)
  const [page, setPage] = useState<"welcome" | "quiz" | "result">("welcome")
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [timer, setTimer] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const quizData = quizzes.find((quiz) => quiz.slug === slug)

  useEffect(() => {
    if (!quizData) {
      router.push("/")
      return
    }

    setSelectedAnswers(Array(quizData.questions.length).fill(null))
    setTimer(quizData.timeLimit * 60)
  }, [quizData, router])

  if (!quizData) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>
  }

  const calculateScore = () => {
    const correctAnswers = selectedAnswers.reduce((count, answer, index) => {
      return answer === quizData.questions[index].correctAnswer ? count + 1 : count
    }, 0)

    const finalScore = Math.round((correctAnswers / quizData.questions.length) * 100)
    setScore(finalScore)

    saveScoreToLocalStorage(finalScore)
  }

  const saveScoreToLocalStorage = (finalScore: number) => {
    try {
      const existingScores = JSON.parse(localStorage.getItem("quizScores") || "{}")
      existingScores[slug] = {
        score: finalScore,
        date: new Date().toISOString(),
        title: quizData.title,
      }
      localStorage.setItem("quizScores", JSON.stringify(existingScores))
    } catch (error) {
      console.error("Error saving score to localStorage:", error)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers(Array(quizData.questions.length).fill(null))
    setTimer(quizData.timeLimit * 60)
    setIsPaused(false)
  }

  const handleStartQuiz = () => {
    setPage("quiz")
  }

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = optionIndex
    setSelectedAnswers(newAnswers)
  }

  const navigateToNextQuestion = () => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1)
    } else {
      calculateScore()
      setPage("result")
    }
  }

  const handleFinish = () => {
    calculateScore()
    setPage("result")
  }

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  const quitTest = () => {
    setPage("welcome")
    resetQuiz()
  }

  const restartQuiz = () => {
    resetQuiz()
    setPage("welcome")
  }

  const goToHome = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {page === "welcome" && (
        <WelcomePage
          quizTitle={quizData.title}
          timeLimit={quizData.timeLimit}
          onStart={handleStartQuiz}
          onBack={goToHome}
        />
      )}

      {page === "quiz" && (
        <QuizPage
          quizTitle={quizData.title}
          questions={quizData.questions}
          currentQuestion={currentQuestion}
          selectedAnswers={selectedAnswers}
          timer={timer}
          setTimer={setTimer}
          isPaused={isPaused}
          onAnswer={handleAnswer}
          onNext={navigateToNextQuestion}
          onTogglePause={togglePause}
          onQuit={quitTest}
          onFinish={handleFinish}
        />
      )}

      {page === "result" && (
        <ResultPage
          quizTitle={quizData.title}
          score={score}
          questions={quizData.questions}
          onRestart={restartQuiz}
          onHome={goToHome}
          slug={slug}
          userAnswers={selectedAnswers}
        />
      )}
    </div>
  )
}