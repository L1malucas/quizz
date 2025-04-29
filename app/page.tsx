import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Code, FileText, Layout, CodeXml } from "lucide-react"
import { quizzes } from "@/lib/quiz-data"
import QuizCard from "@/components/quiz-card"

export default function HomePage() {
  const getQuizIcon = (slug: string) => {
    switch (slug) {
      case "mongodb":
        return <Database className="h-8 w-8 text-orange-500" />
      case "html":
        return <FileText className="h-8 w-8 text-orange-500" />
      case "css":
        return <Layout className="h-8 w-8 text-orange-500" />
      case "dom":
        return <Code className="h-8 w-8 text-orange-500" />
      default:
        return <CodeXml className="h-8 w-8 text-orange-500" />
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-orange-500">Central de Quizzes</h1>
        <p className="text-xl text-center mb-12">Selecione um quiz para testar seu conhecimento</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quizzes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              title={quiz.title}
              description={quiz.description}
              icon={getQuizIcon(quiz.slug)}
              questionsCount={quiz.questions.length}
              timeLimit={quiz.timeLimit}
              slug={quiz.slug}
            />
          ))}
          <Card className="bg-zinc-900 border-gray-700 opacity-50">
            <CardHeader>
              <CardTitle className="text-gray-400">Em Breve</CardTitle>
              <CardDescription className="text-gray-500">Mais quizzes estão sendo desenvolvidos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-20">
                <p className="text-gray-500">Fique atento para mais desafios!</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled className="w-full bg-gray-700 text-gray-400">
                Não Disponível
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
