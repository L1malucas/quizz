"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Trophy, Brain } from "lucide-react"

interface AIQuizScore {
  date: string
  questionsAnswered: number
  correctAnswers: number
  topic: string
}

export default function AIScoresPage() {
  const router = useRouter()
  const [scores, setScores] = useState<AIQuizScore[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      const storedScores = localStorage.getItem("aiQuizScores")
      if (storedScores) {
        setScores(JSON.parse(storedScores))
      }
    } catch (error) {
      console.error("Error loading AI quiz scores from localStorage:", error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  const clearHistory = () => {
    try {
      localStorage.removeItem("aiQuizScores")
      setScores([])
    } catch (error) {
      console.error("Error clearing AI score history:", error)
    }
  }

  // Sort scores by questions answered (descending)
  const sortedScores = [...scores].sort((a, b) => b.questionsAnswered - a.questionsAnswered)
  const bestScore = sortedScores.length > 0 ? sortedScores[0] : null

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Button variant="ghost" onClick={() => router.push("/")} className="mr-4">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar
          </Button>
          <h1 className="text-3xl font-bold text-purple-500">Pontuações do Desafio IA</h1>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p>Carregando histórico...</p>
          </div>
        ) : scores.length === 0 ? (
          <Card className="bg-zinc-900 border-gray-700">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Brain className="h-16 w-16 text-gray-500 mb-4" />
              <p className="text-xl text-center mb-6">Nenhuma tentativa do desafio IA ainda.</p>
              <Button onClick={() => router.push("/ai-quiz")} className="bg-purple-600 hover:bg-purple-700">
                Tentar o Desafio IA
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            {bestScore && (
              <Card className="bg-gradient-to-r from-zinc-900 to-zinc-800 border-purple-500 mb-8">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-purple-400">Sua Melhor Pontuação</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Trophy className="h-16 w-16 text-yellow-500 mr-6" />
                    <div>
                      <p className="text-2xl font-bold mb-1">{bestScore.questionsAnswered} Questões Respondidas</p>
                      <p className="text-lg mb-2">
                        com {bestScore.correctAnswers} respostas corretas (
                        {Math.round((bestScore.correctAnswers / bestScore.questionsAnswered) * 100)}%)
                      </p>
                      <p className="text-sm text-gray-400">
                        Tópico: {bestScore.topic} • {formatDate(bestScore.date)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <h2 className="text-xl font-semibold mb-4 text-gray-200">Todas as Tentativas</h2>
            <div className="grid gap-4 mb-6">
              {sortedScores.map((score, index) => (
                <Card key={index} className="bg-zinc-900 border-gray-700 hover:border-gray-600 transition-all">
                  <CardContent className="py-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium mb-1">
                          {score.questionsAnswered} Questões • {score.correctAnswers} Corretas
                        </p>
                        <p className="text-sm text-gray-400 mb-1">Tópico: {score.topic}</p>
                        <p className="text-xs text-gray-500">{formatDate(score.date)}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold mb-1">
                          {Math.round((score.correctAnswers / score.questionsAnswered) * 100)}%
                        </div>
                        <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                          <div
                            className="h-2 rounded-full bg-purple-500"
                            style={{ width: `${(score.correctAnswers / score.questionsAnswered) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-between">
              <Button onClick={() => router.push("/ai-quiz")} className="bg-purple-600 hover:bg-purple-700">
                Tentar Novamente
              </Button>
              <Button variant="destructive" onClick={clearHistory}>
                Limpar Histórico
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
