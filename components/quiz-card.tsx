"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { QuizCardProps, QuizScore } from "@/utils/interfaces"

export default function QuizCard({ title, description, icon, questionsCount, timeLimit, slug }: QuizCardProps) {
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
  return (
    <Card className="bg-zinc-900 border-gray-700 hover:border-purple-500 transition-all">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-purple-500">{title}</CardTitle>
          {icon}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Questões:</span>
          <span>{questionsCount}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Tempo Limite:</span>
          <span>{timeLimit} minutos</span>
        </div>

      </CardContent>
      <CardFooter>
        <Link href={`/quiz/${slug}`} className="w-full">
          <Button className="w-full bg-purple-500 hover:bg-purple-600">Iniciar Quiz</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
