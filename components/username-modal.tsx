"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { saveScore } from "@/lib/actions"
import { useRouter } from "next/navigation"
import { UsernameModalProps } from "@/utils/interfaces"


export default function UsernameModal({
  quizId,
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

  // Load previously used username from localStorage
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
      setError("Please enter a username")
      return
    }

    setIsSaving(true)
    setError("")

    try {
      // Save username to localStorage for future use
      localStorage.setItem("quizUsername", username)

      // Save score to localStorage with username
      const existingScores = JSON.parse(localStorage.getItem("quizScores") || "{}")
      existingScores[quizId] = {
        score,
        date: new Date().toISOString(),
        title: quizTitle,
        username,
        questionsAnswered,
        correctAnswers,
      }
      localStorage.setItem("quizScores", JSON.stringify(existingScores))

      // Save score to MongoDB via server action
      await saveScore({
        username,
        quizId,
        quizTitle,
        score,
        date: new Date(),
        questionsAnswered,
        correctAnswers,
      })

      // Close modal and redirect to ranking page
      onClose()
      router.push("/ranking")
    } catch (error) {
      console.error("Error saving score:", error)
      setError("Falha ao salvar sua pontuação. Por favor, tente novamente.")
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
          </div>

          <div className="flex justify-between gap-4 mt-6">

            <Button type="submit" className="w-1/2 bg-purple-500 hover:bg-purple-600" disabled={isSaving}>
              {isSaving ? "Salvando..." : "Salvar Pontuação"}
            </Button>
          </div>

          {savedUsername && savedUsername !== username && (
            <p className="text-xs text-gray-400 mt-4">Nome de usuário usado anteriormente: {savedUsername}</p>
          )}
        </form>
      </div>
    </div>
  )
}
