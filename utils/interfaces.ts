export interface QuizScore {
  score: number
  date: string
  title: string
}

export interface SaveScoreResponse {
  success: boolean
  error?: string
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
  onFinish: () => void;

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

export interface ResultPageProps {
  quizTitle: string
  score: number
  questions: {
    question: string
    options: string[]
    correctAnswer: number
    correctLetter: string
  }[]
  onRestart: () => void
  onHome: () => void
  slug: string
  userAnswers?: (number | null)[] 
}

export interface UsernameModalProps {
  slug: string
  quizTitle: string
  score: number
  onClose: () => void
  questionsAnswered?: number
  correctAnswers?: number
}

export interface QuizScore {
  score: number
  date: string
  title: string
}

export interface ScoreHistoryProps {
  onClose: () => void
}
