"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Trophy } from "lucide-react"
import { QuizScore } from "@/utils/interfaces"

export default function ScoresPage() {
  const router = useRouter()
  const [scores, setScores] = useState<Record<string, QuizScore>>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      const storedScores = localStorage.getItem("quizScores")
      if (storedScores) {
        setScores(JSON.parse(storedScores))
      }
    } catch (error) {
      console.error("Error loading scores from localStorage:", error)
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
      localStorage.removeItem("quizScores")
      setScores({})
    } catch (error) {
      console.error("Error clearing score history:", error)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Button variant="ghost" onClick={() => router.push("/")} className="mr-4">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar
          </Button>
          <h1 className="text-3xl font-bold text-purple-500">Histórico de Pontuações</h1>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p>Carregando histórico...</p>
          </div>
        ) : Object.keys(scores).length === 0 ? (
          <Card className="bg-zinc-900 border-gray-700">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Trophy className="h-16 w-16 text-gray-500 mb-4" />
              <p className="text-xl text-center mb-6">Nenhuma pontuação registrada ainda.</p>
              <Button onClick={() => router.push("/")}>Voltar para os Quizzes</Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="grid gap-4 mb-6">
              {Object.entries(scores).map(([quizId, scoreData]) => (
                <Card key={quizId} className="bg-zinc-900 border-gray-700 hover:border-gray-600 transition-all">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{scoreData.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Realizado em: {formatDate(scoreData.date)}</p>
                        <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                          <div
                            className={`h-2 rounded-full ${scoreData.score >= 70
                              ? "bg-green-500"
                              : scoreData.score >= 50
                                ? "bg-yellow-500"
                                : "bg-red-500"
                              }`}
                            style={{ width: `${scoreData.score}%` }}
                          ></div>
                        </div>
                      </div>
                      <span
                        className={`text-2xl font-bold ${scoreData.score >= 70
                          ? "text-green-500"
                          : scoreData.score >= 50
                            ? "text-yellow-500"
                            : "text-red-500"
                          }`}
                      >
                        {scoreData.score}%
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-end">
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