import { GoogleGenAI } from "@google/genai";

export interface AIQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

const genAI = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_API || "" });

export async function generateAIQuestion(topic = ""): Promise<AIQuestion> {
  const topicPrompt = topic ? `about ${topic}` : "on any programming or technology topic";

  try {
    const response = await genAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Generate a multiple-choice quiz question ${topicPrompt}. 
      
      The question should be challenging but fair, with 4 possible answers where only one is correct.
      
      Format your response as a JSON object with the following structure:
      {
        "question": "The question text goes here?",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correctAnswerIndex": 0 // Index of the correct answer (0-3)
      }
      
      Only return the JSON object in ptbr, nothing else.`
    });

    let responseText = response.text || '';
    
    if (responseText.includes("```json")) {
      const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/);
      if (jsonMatch && jsonMatch[1]) {
        responseText = jsonMatch[1];
      }
    }
    
    responseText = responseText.trim();
    
    const questionData = JSON.parse(responseText);

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