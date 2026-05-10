import { projectsData } from '../data/ProjectsData';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const SYSTEM_PROMPT = import.meta.env.VITE_AI_SYSTEM_PROMPT;
const RULE_FORMAT = import.meta.env.VITE_AI_RULE_FORMAT;

export interface ChatMessage {
  text: string;
  isUser: boolean;
}

const generateProjectsContext = () => {
  return projectsData.map(p => 
    `- [ID: ${p.id}] Título: ${p.title}. Área: ${p.category}. Stack Técnico: ${p.technologies.join(', ')}. Breve Descripción: ${p.description}`
  ).join('\n');
};

export const sendMessageToAI = async (query: string, history: ChatMessage[]): Promise<string> => {
  if (!API_KEY || !SYSTEM_PROMPT) {
    throw new Error("Variables de entorno ausentes. Por favor revisa el .env");
  }

  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`;
  
  const historyText = history.map(m => `${m.isUser ? 'User' : 'Bot'}: ${m.text}`).join('\n');
  const contextData = generateProjectsContext();

  const fullPrompt = `
  DIRECTRICES DEL SISTEMA: 
  ${SYSTEM_PROMPT}

  BASE DE DATOS VIVA DE PROYECTOS DE OMAR (ÚLTIMA FUENTE DE VERDAD):
  ${contextData}

  REGLA DE FORMATO:
  ${RULE_FORMAT}
  
  -------------------------
  HISTORIAL:
  ${historyText}
  
  Usuario: ${query}
  Agente de Terminal:`;

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: fullPrompt }] }]
    })
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("AI Error:", data);
    throw new Error(data.error?.message || "Fallo en conexión del socket");
  }

  return data.candidates[0].content.parts[0].text;
};