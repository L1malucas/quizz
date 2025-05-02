import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

export interface AIQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

// Create OpenAI client with proper API key configuration
const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY });

export async function generateAIQuestion(topic = ""): Promise<AIQuestion> {
  const topicPrompt = topic ? `about ${topic}` : "on any programming or technology topic";

  try {
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: `Generate a multiple-choice quiz question ${topicPrompt}. 
      
      The question should be challenging but fair, with 4 possible answers where only one is correct.
      
      Format your response as a JSON object with the following structure:
      {
        "question": "The question text goes here?",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correctAnswerIndex": 0 // Index of the correct answer (0-3)
      }
      
      Only return the JSON object in ptbr, nothing else.`,
      temperature: 0.7,
    });

    // Parse the response as JSON
    const questionData = JSON.parse(text);

    // Validate the response structure
    if (
      !questionData.question ||
      !Array.isArray(questionData.options) ||
      questionData.options.length !== 4 ||
      typeof questionData.correctAnswerIndex !== "number"
    ) {
      throw new Error("Invalid question format received from AI");
    }

    return questionData as AIQuestion;
  } catch (error) {
    console.error("Erro ao gerar questão IA:", error);
    return {
      question: "Qual é o principal propósito do hook useEffect no React?",
      options: [
        "Criar novas variáveis de estado",
        "Executar efeitos colaterais em componentes funcionais",
        "Otimizar o desempenho da renderização",
        "Definir props do componente",
      ],
      correctAnswerIndex: 1,
    };
  }
} 