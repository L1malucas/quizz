import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { quizzes } from "@/lib/quiz-data"
import QuizCard from "@/components/quiz-card"
import { getQuizIcon } from "@/lib/get-icons"
import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <br /><br /><br /><br />
        <p className="text-xl text-center mb-12">Selecione um quiz para testar seu conhecimento</p>
        {/* <Button variant="outline" className="mb-8 bg-purple-500 hover:bg-purple-600 text-white" asChild>
          <a href="/scores">Ver Pontuações</a>
        </Button> */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-zinc-900 to-zinc-800 border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-purple-400">Modo Desafio IA</CardTitle>
                <Sparkles className="h-8 w-8 text-purple-400" />
              </div>
              <CardDescription className="text-gray-300">
                Teste seus limites com questões geradas por IA. O quiz continua até você cometer 3 erros.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Dificuldade:</span>
                <span className="text-purple-400">Adaptativa</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Questões:</span>
                <span>Ilimitadas</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Tempo Limite:</span>
                <span>Nenhum</span>
              </div>
            </CardContent>
            <CardFooter>
              {/* <p>Em breve...</p> */}
              <Link href="/ai-quiz" className="w-full">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Iniciar Desafio IA</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

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
