import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface QuizCardProps {
  title: string
  description: string
  icon: React.ReactNode
  questionsCount: number
  timeLimit: number
  slug: string
}

export default function QuizCard({ title, description, icon, questionsCount, timeLimit, slug }: QuizCardProps) {


  return (
    <Card className="bg-zinc-900 border-gray-700 hover:border-orange-500 transition-all">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-orange-500">{title}</CardTitle>
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
          <Button className="w-full bg-orange-500 hover:bg-orange-600">Iniciar Quiz</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
