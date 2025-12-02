import { GoogleGenAI } from "@google/genai";
import { Question, QuestionOption } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const explainError = async (
  question: Question,
  selectedOptionId: string
): Promise<string> => {
  if (!apiKey) {
    return "API Key no configurada. No se puede generar la explicación.";
  }

  const selectedOption = question.options.find(o => o.id === selectedOptionId);
  const correctOption = question.options.find(o => o.id === question.correctAnswerId);

  if (!selectedOption || !correctOption) return "Error al procesar la pregunta.";

  const prompt = `
    Actúa como un profesor experto de español para extranjeros (nivel B2/C1).
    El alumno ha cometido un error en la siguiente pregunta de examen.
    
    Pregunta/Frase: "${question.text}"
    Tema Gramatical/Contexto: ${question.grammarTopic || question.context || 'General'}
    
    Respuesta del alumno (Incorrecta): "${selectedOption.text}"
    Respuesta correcta: "${correctOption.text}"
    
    Por favor, explica brevemente (máximo 50 palabras) por qué la respuesta del alumno es incorrecta y por qué la correcta es la adecuada. Sé amable y didáctico.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "No se pudo generar una explicación.";
  } catch (error) {
    console.error("Error fetching AI explanation:", error);
    return "Ocurrió un error al conectar con el tutor virtual.";
  }
};