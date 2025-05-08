import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IScore extends Document {
  username: string;
  quizId: string;
  quizTitle: string;
  score: number;
  date: Date;
  questionsAnswered?: number;
  correctAnswers?: number;
}

const ScoreSchema = new Schema<IScore>({
  username: {
    type: String,
    required: [true, 'Um nome de usuário é necessário'],
    trim: true,
  },
  quizId: {
    type: String,
    required: [true, 'O ID do quiz é necessário'],
    trim: true,
  },
  quizTitle: {
    type: String,
    required: [true, 'O título do quiz é necessário'],
    trim: true,
  },
  score: {
    type: Number,
    required: [true, 'A pontuação é necessária'],
    min: 0,
    max: 100,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  questionsAnswered: {
    type: Number,
    min: 0,
  },
  correctAnswers: {
    type: Number,
    min: 0,
  },
});

ScoreSchema.index({ score: -1 });
ScoreSchema.index({ quizId: 1, score: -1 });
ScoreSchema.index({ username: 1, date: -1 });

export const Score = models.Score || model<IScore>('Score', ScoreSchema, 'scores');