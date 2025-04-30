export interface QuizScore {
  score: number
  date: string
  title: string
}

export interface WelcomePageProps {
  quizTitle: string
  timeLimit: number
  onStart: () => void
  onBack: () => void
}

export interface ScoreHistoryProps {
  onClose: () => void
}

export interface ResultPageProps {
  quizTitle: string
  score: number
  questions: QuizQuestion[]
  onRestart: () => void
  onHome: () => void
}

export interface QuizPageProps {
  quizTitle: string
  questions: QuizQuestion[]
  currentQuestion: number
  selectedAnswers: number[]
  timer: number
  setTimer: (value: number | ((prevTimer: number) => number)) => void
  isPaused: boolean
  onAnswer: (optionIndex: number) => void
  onNext: () => void
  onTogglePause: () => void
  onQuit: () => void
}

export interface QuizCardProps {
  title: string
  description: string
  icon: React.ReactNode
  questionsCount: number
  timeLimit: number
  slug: string
}

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