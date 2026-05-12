import { projectsData } from '../data/ProjectsData';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
// Usamos exclusivamente la regla maestra de sistema que acabamos de crear
const SYSTEM_PROMPT = import.meta.env.VITE_AI_SYSTEM_PROMPT;

export interface ChatMessage {
  text: string;
  isUser: boolean;
}

const generateProjectsContext = () => {
  return projectsData.map(p => 
    `- [ID: ${p.id}] Title: ${p.title} | Category: ${p.category} | Tech: ${p.technologies.join(', ')} | Summary: ${p.description}`
  ).join('\n');
};

export const sendMessageToAI = async (query: string, history: ChatMessage[]): Promise<string> => {
  if (!API_KEY || !SYSTEM_PROMPT) {
    throw new Error("Missing AI environment variables in .env file.");
  }

  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`;
  
  const historyText = history.map(m => `${m.isUser ? 'User' : 'Assistant'}: ${m.text}`).join('\n');
  const contextData = generateProjectsContext();

  // El contexto ahora es neutro (inglés) para no condicionar las respuestas a español.
  const fullPrompt = `
[CORE DIRECTIVES]
${SYSTEM_PROMPT}

[OMAR'S SECURE DATABASE]
${contextData}

[CHAT HISTORY]
${historyText}
  
User: ${query}
omar_sh:`;

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: fullPrompt }] }]
    })
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("AI REST Error:", data);
    throw new Error(data.error?.message || "Internal server overload.");
  }

  return data.candidates[0].content.parts[0].text;
};