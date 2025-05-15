"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { saveScore } from "@/lib/actions"
import { useRouter } from "next/navigation"
import { SaveScoreResponse, UsernameModalProps } from "@/utils/interfaces"

export default function UsernameModal({
  slug,
  quizTitle,
  score,
  onClose,
  questionsAnswered,
  correctAnswers,
}: UsernameModalProps) {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState("")
  const [savedUsername, setSavedUsername] = useState("")
  const [offlineMode, setOfflineMode] = useState(false)
  useEffect(() => {
    const storedUsername = localStorage.getItem("quizUsername")
    if (storedUsername) {
      setUsername(storedUsername)
      setSavedUsername(storedUsername)
    }
  }, [])
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim()) {
      setError("Por favor, insira um nome de usuário")
      return
    }
    setIsSaving(true)
    setError("")
    try {
      localStorage.setItem("quizUsername", username)
      const existingScores = JSON.parse(localStorage.getItem("quizScores") || "{}")
      const newScore = {
        score,
        date: new Date().toISOString(),
        title: quizTitle,
        username,
        questionsAnswered,
        correctAnswers,
      }
      existingScores[slug] = newScore
      localStorage.setItem("quizScores", JSON.stringify(existingScores))
      let serverSaveSuccessful = false
      if (!offlineMode) {
        try {
          console.log("Saving score:", { username, slug, quizTitle, score, date: new Date(), questionsAnswered, correctAnswers }) 
          const result: SaveScoreResponse = await saveScore({
            username,
            slug,
            quizTitle,
            score,
            date: new Date(Date.now()),
            questionsAnswered,
            correctAnswers,
          })
          serverSaveSuccessful = result.success
          if (!result.success) {
            console.warn("Salvamento online falhou:", result.error)
            const pendingScores = JSON.parse(localStorage.getItem("pendingScores") || "[]")
            pendingScores.push(newScore)
            localStorage.setItem("pendingScores", JSON.stringify(pendingScores))
          }
        } catch (serverError) {
          console.error("Erro ao salvar no servidor:", serverError)
          const pendingScores = JSON.parse(localStorage.getItem("pendingScores") || "[]")
          pendingScores.push(newScore)
          localStorage.setItem("pendingScores", JSON.stringify(pendingScores))
        }
      }
      onClose()
    } catch (error) {
      console.error("Erro ao salvar pontuação:", error)
      const errorMessage =
        error instanceof Error && error.message.includes("tls")
          ? "Erro de conexão com o banco de dados. Sua pontuação foi salva localmente."
          : error instanceof Error
            ? error.message
            : "Falha ao salvar sua pontuação online. Salvamento local concluído."
      setError(errorMessage)
      setOfflineMode(true)
    } finally {
      setIsSaving(false)
    }
  }
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-purple-500">Salvar Sua Pontuação</h2>
        <p className="mb-6">
          Sua pontuação: <span className="font-bold text-purple-400">{score}%</span>
          {questionsAnswered ? ` (${correctAnswers} de ${questionsAnswered} corretas)` : ""}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              Digite seu nome de usuário:
            </label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nome de usuário"
              className="bg-zinc-800 border-zinc-700"
              autoFocus
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            {offlineMode && (
              <p className="text-amber-400 text-sm mt-2">
                Modo offline: As pontuações serão salvas localmente e sincronizadas depois.
              </p>
            )}
          </div>
          <div className="flex justify-between gap-4 mt-6">
            <Button type="submit" className="w-1/2 bg-purple-500 hover:bg-purple-600" disabled={isSaving}>
              {isSaving ? "Salvando..." : "Salvar Pontuação"}
            </Button>
            <Button
              type="button"
              onClick={onClose}
              className="w-1/2 bg-zinc-700 hover:bg-zinc-600"
            >
              Cancelar
            </Button>
          </div>
          {savedUsername && savedUsername !== username && (
            <p className="text-xs text-gray-400 mt-4">
              Nome de usuário usado anteriormente: {savedUsername}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}