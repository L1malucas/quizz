"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "./mongodb";
import { Score, IScore } from "./score";

export interface QuizScore {
  username: string;
  quizId: string;
  quizTitle: string;
  score: number;
  date: Date;
  questionsAnswered?: number;
  correctAnswers?: number;
}

export async function saveScore(pontuacao: QuizScore) {
  try {
    await dbConnect('saveScore');

    const newScore = await Score.create({
      ...pontuacao,
      date: pontuacao.date || new Date(),
    });

    revalidatePath("/ranking");

    return { success: true, id: newScore._id.toString() };
  } catch (error) {
    console.error("Falha ao salvar pontuação:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Falha ao salvar pontuação",
    };
  }
}

export async function getTopScores(limite = 20) {
  try {
    await dbConnect('getTopScores');

    const pontuacoes = await Score.find({})
      .sort({ score: -1 })
      .limit(limite)
      .lean();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(pontuacoes)),
    };
  } catch (error) {
    console.error("Falha ao buscar melhores pontuações:", error);
    return {
      success: false,
      error: "Falha ao buscar melhores pontuações",
    };
  }
}

export async function getTopScoresByQuiz(quizId: string, limite = 10) {
  try {
    await dbConnect('getTopScoresByQuiz');

    const pontuacoes = await Score.find({ quizId })
      .sort({ score: -1 })
      .limit(limite)
      .lean();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(pontuacoes)),
    };
  } catch (error) {
    console.error(`Falha ao buscar melhores pontuações para o quiz ${quizId}:`, error);
    return {
      success: false,
      error: `Falha ao buscar melhores pontuações para o quiz ${quizId}`,
    };
  }
}

export async function getTopScoresByUser(username: string) {
  try {
    await dbConnect('getTopScoresByUser');

    const pontuacoes = await Score.find({ username })
      .sort({ date: -1 })
      .lean();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(pontuacoes)),
    };
  } catch (error) {
    console.error(`Falha ao buscar pontuações para o usuário ${username}:`, error);
    return {
      success: false,
      error: `Falha ao buscar pontuações para o usuário ${username}`,
    };
  }
}