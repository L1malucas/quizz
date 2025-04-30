"use client"

import { Button } from "@/components/ui/button"
import { WelcomePageProps } from "@/utils/interfaces"


export default function WelcomePage({ quizTitle, timeLimit, onStart, onBack }: WelcomePageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black">
      <div className="w-full max-w-2xl p-8 bg-zinc-900 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6 text-orange-500">{quizTitle}</h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-orange-400">Duração</h2>
          <p className="mb-4">
            {timeLimit} minutos (Você pode pausar o teste entre questões; Não é possível retornar a questões anteriores)
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-green-500">Permitido</h2>
          <p className="mb-4">Você pode usar referências comuns e documentações oficiais, apostilas, atividades.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-red-500">Não permitido</h2>
          <p className="mb-4">Você não tem permissão para buscar ou enviar soluções de qualquer outra fonte.</p>
          <p>Não copie ou compartilhe qualquer conteúdo do teste com qualquer outro site ou pessoa.</p>
        </div>

        <div className="flex gap-4">
          <Button
            onClick={onBack}
            variant="outline"
            className="w-1/3 py-3 border-gray-700 text-white hover:bg-zinc-800"
          >
            Voltar
          </Button>

          <Button onClick={onStart} className="w-2/3 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold">
            Iniciar Teste
          </Button>
        </div>
      </div>
    </div>
  )
}
