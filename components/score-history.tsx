"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QuizScore, ScoreHistoryProps } from "@/utils/interfaces"


export default function ScoreHistory({ onClose }: ScoreHistoryProps) {
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
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl bg-zinc-900 border-gray-700">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl text-orange-500">Histórico de Pontuações</CardTitle>
            <Button variant="ghost" onClick={onClose} className="text-gray-400 hover:text-white">
              Fechar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p className="text-center py-8">Carregando histórico...</p>
          ) : Object.keys(scores).length === 0 ? (
            <p className="text-center py-8">Nenhuma pontuação registrada ainda.</p>
          ) : (
            <div className="space-y-4">
              {Object.entries(scores).map(([quizId, scoreData]) => (
                <div key={quizId} className="p-4 border border-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg">{scoreData.title}</h3>
                    <span
                      className={`text-lg font-bold ${scoreData.score >= 70
                          ? "text-green-500"
                          : scoreData.score >= 50
                            ? "text-yellow-500"
                            : "text-red-500"
                        }`}
                    >
                      {scoreData.score}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">Realizado em: {formatDate(scoreData.date)}</p>
                </div>
              ))}

              <div className="flex justify-end mt-6">
                <Button variant="destructive" onClick={clearHistory} className="text-sm">
                  Limpar Histórico
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
