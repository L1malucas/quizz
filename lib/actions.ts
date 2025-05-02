"use server"

import { revalidatePath } from "next/cache"
import clientPromise from "./mongodb"

export interface QuizScore {
  username: string
  quizId: string
  quizTitle: string
  score: number
  date: Date
  questionsAnswered?: number
  correctAnswers?: number
}

export async function saveScore(pontuacao: QuizScore) {
  try {
    const client = await clientPromise
    const db = client.db("quizz-woad")

    // Adiciona timestamp se não fornecido
    if (!pontuacao.date) {
      pontuacao.date = new Date()
    }

    // Insere a pontuação no banco de dados
    await db.collection("scores").insertOne(pontuacao)

    // Revalida a página de ranking para mostrar dados atualizados
    revalidatePath("/ranking")

    return { success: true }
  } catch (error) {
    console.error("Falha ao salvar pontuação:", error)
    return { success: false, error: "Falha ao salvar pontuação" }
  }
}

export async function getTopScores(limite = 20) {
  try {
    const client = await clientPromise
    const db = client.db("quizz-woad")

    // Obtém as melhores pontuações de todos os quizzes
    const pontuacoes = await db.collection("scores").find({}).sort({ score: -1 }).limit(limite).toArray()

    return { success: true, data: pontuacoes }
  } catch (error) {
    console.error("Falha ao buscar melhores pontuações:", error)
    return { success: false, error: "Falha ao buscar melhores pontuações" }
  }
}

export async function getTopScoresByQuiz(quizId: string, limite = 10) {
  try {
    const client = await clientPromise
    const db = client.db("quizz-woad")

    // Obtém as melhores pontuações para um quiz específico
    const pontuacoes = await db.collection("scores").find({ quizId }).sort({ score: -1 }).limit(limite).toArray()

    return { success: true, data: pontuacoes }
  } catch (error) {
    console.error(`Falha ao buscar melhores pontuações para o quiz ${quizId}:`, error)
    return { success: false, error: `Falha ao buscar melhores pontuações para o quiz ${quizId}` }
  }
}

export async function getTopScoresByUser(username: string) {
  try {
    const client = await clientPromise
    const db = client.db("quizz-woad")

    // Obtém todas as pontuações para um usuário específico
    const pontuacoes = await db.collection("scores").find({ username }).sort({ date: -1 }).toArray()

    return { success: true, data: pontuacoes }
  } catch (error) {
    console.error(`Falha ao buscar pontuações para o usuário ${username}:`, error)
    return { success: false, error: `Falha ao buscar pontuações para o usuário ${username}` }
  }
}
