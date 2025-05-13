import { Suspense } from "react"
import { getTopScores, getTopScoresByQuiz } from "@/lib/actions"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Medal, Award, Clock } from "lucide-react"

export const dynamic = "force-dynamic"
export const revalidate = 0

export default function RankingPage() {
  return (
    <div className="min-h-screen bg-black text-white p-4 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
          <h1 className="text-3xl font-bold text-purple-500">Ranking Global</h1>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-3 mb-8">
            <TabsTrigger value="all">Todos os Quizz</TabsTrigger>
            <TabsTrigger value="ai-challenge">Desafio IA</TabsTrigger>
            <TabsTrigger value="recent">Recentes</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <Suspense fallback={<RankingLoading />}>
              <GlobalRanking />
            </Suspense>
          </TabsContent>

          <TabsContent value="mongodb">
            <Suspense fallback={<RankingLoading />}>
              <QuizRanking quizId="mongodb" quizTitle="MongoDB" />
            </Suspense>
          </TabsContent>

          <TabsContent value="ai-challenge">
            <Suspense fallback={<RankingLoading />}>
              <QuizRanking quizId="ai-challenge" quizTitle="Desafio IA" />
            </Suspense>
          </TabsContent>

          <TabsContent value="recent">
            <Suspense fallback={<RankingLoading />}>
              <RecentScores />
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

async function GlobalRanking() {
  const { success, data: scores, error } = await getTopScores(20)

  if (!success) {
    return <div className="text-center py-12 text-red-500">Falha ao carregar ranking: {error}</div>
  }

  if (!scores || scores.length === 0) {
    return <EmptyRanking message="Nenhuma pontuação registrada ainda. Seja o primeiro a fazer um quiz!" />
  }

  return (
    <div>
      <div className="grid gap-4">
        {scores.map((score: any, index: any) => (
          <RankingItem
            key={index}
            rank={index + 1}
            username={score.username}
            score={score.score}
            quizTitle={score.quizTitle}
            date={new Date(score.date)}
            questionsAnswered={score.questionsAnswered}
            correctAnswers={score.correctAnswers}
          />
        ))}
      </div>
      <br /><br /><br />
    </div>
  )
}

async function QuizRanking({ quizId, quizTitle }: { quizId: string; quizTitle: string }) {
  const { success, data: scores, error } = await getTopScoresByQuiz(quizId, 20)

  if (!success) {
    return <div className="text-center py-12 text-red-500">Falha ao carregar ranking: {error}</div>
  }

  if (!scores || scores.length === 0) {
    return <EmptyRanking message={`Nenhuma pontuação para ${quizTitle} ainda. Seja o primeiro a fazer este quiz!`} />
  }

  return (
    <div>
      <div className="grid gap-4">
        {scores.map((score: any, index: any) => (
          <RankingItem
            key={index}
            rank={index + 1}
            username={score.username}
            score={score.score}
            quizTitle={score.quizTitle}
            date={new Date(score.date)}
            questionsAnswered={score.questionsAnswered}
            correctAnswers={score.correctAnswers}
          />
        ))}
      </div>
    </div>
  )
}

async function RecentScores() {
  const { success, data: scores, error } = await getTopScores(20)

  if (!success) {
    return <div className="text-center py-12 text-red-500">Falha ao carregar pontuações recentes: {error}</div>
  }

  if (!scores || scores.length === 0) {
    return <EmptyRanking message="Nenhuma pontuação registrada ainda. Seja o primeiro a fazer um quiz!" />
  }

  const recentScores = [...scores].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div>
      <div className="grid gap-4">
        {recentScores.map((score, index) => (
          <RankingItem
            key={index}
            username={score.username}
            score={score.score}
            quizTitle={score.quizTitle}
            date={new Date(score.date)}
            questionsAnswered={score.questionsAnswered}
            correctAnswers={score.correctAnswers}
            showRank={false}
          />
        ))}
      </div>
    </div>
  )
}

function RankingItem({
  rank,
  username,
  score,
  quizTitle,
  date,
  questionsAnswered,
  correctAnswers,
  showRank = true,
}: {
  rank?: number
  username: string
  score: number
  quizTitle: string
  date: Date
  questionsAnswered?: number
  correctAnswers?: number
  showRank?: boolean
}) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-6 w-6 text-yellow-500" />
    if (rank === 2) return <Medal className="h-6 w-6 text-gray-400" />
    if (rank === 3) return <Award className="h-6 w-6 text-amber-700" />
    return null
  }

  return (
    <Card className="bg-zinc-900 border-gray-700">
      <CardContent className="p-4 flex items-center">
        {showRank && (
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center mr-4">
            {rank && rank <= 3 ? (
              getRankIcon(rank)
            ) : (
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold">
                {rank}
              </div>
            )}
          </div>
        )}

        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-bold text-lg">{username}</p>
              <p className="text-sm text-gray-400">{quizTitle}</p>
              <p className="text-sm text-gray-400">
                Respondidas: {questionsAnswered !== undefined ? questionsAnswered : "N/A"}
                {questionsAnswered !== undefined && correctAnswers !== undefined ? `, Corretas: ${correctAnswers}` : ""}
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-purple-500">{score}%</p>
              <p className="text-xs text-gray-500 flex items-center justify-end">
                <Clock className="h-3 w-3 mr-1" />
                {formatDate(date)}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function RankingLoading() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-lg">Carregando ranking...</p>
    </div>
  )
}

function EmptyRanking({ message }: { message: string }) {
  return (
    <Card className="bg-zinc-900 border-gray-700">
      <CardContent className="flex flex-col items-center justify-center py-12">
        <Trophy className="h-16 w-16 text-gray-500 mb-4" />
        <p className="text-xl text-center mb-2">Sem Rankings Ainda</p>
        <p className="text-gray-400 text-center">{message}</p>
      </CardContent>
    </Card>
  )
}