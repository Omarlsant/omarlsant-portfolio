import React, { useState, useEffect, useRef } from 'react';
import { sendMessageToAI, ChatMessage } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { text: "Sistema Inicializado...", isUser: false },
    { text: "Hola. Soy el agente IA de Omar. ¿Qué quieres saber sobre su experiencia en Full Stack, Python o IA?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Hook para Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Delegamos toda la lógica al Servicio que creamos aplicando la Arquitectura de Capas
      const response = await sendMessageToAI(userMessage, messages);
      setMessages(prev => [...prev, { text: response, isUser: false }]);
      
    } catch (error: any) {
      console.error(error);
      setMessages(prev => [
        ...prev, 
        { text: `[Error Sys]: El servidor AI ha rechazado la conexión. ${error.message}`, isUser: false }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto mt-16 px-4">
      <div className="w-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 flex flex-col h-[500px]">
        
        {/* Cabecera SO */}
        <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700 select-none">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500 flex justify-center items-center">
              {isLoading && <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-ping" />}
            </div>
          </div>
          <p className="flex-1 text-center text-slate-400 text-xs font-mono font-bold tracking-widest ml-[-40px]">omar@terminal ~</p>
        </div>

        {/* Zona del Chat de la Terminal */}
        <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-4 font-mono text-sm sm:text-base">
          <div className="mb-4 opacity-75">
            <span className="text-slate-500 block">AI Agent Core: Activated.</span>
          </div>

          {messages.map((msg, index) => (
            <div key={index} className="flex flex-col break-words">
              {msg.isUser ? (
                <div><span className="text-emerald-400 font-bold mr-2">guest@visitor:~$</span><span className="text-slate-200">{msg.text}</span></div>
              ) : (
                <div className="text-sky-300 py-1 ml-4 leading-relaxed relative">
                  <span className="absolute -left-4 text-slate-500 select-none">{'>'}</span>{msg.text}
                </div>
              )}
            </div>
          ))}

          {isLoading && <div className="text-amber-300 ml-4 animate-pulse pt-2 select-none">_ Esperando respuesta del server...</div>}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="bg-slate-950 p-4 border-t border-slate-800 flex items-center">
          <span className="text-emerald-400 font-bold mr-2 font-mono">~$</span>
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            disabled={isLoading}
            className="flex-1 bg-transparent text-slate-200 font-mono focus:outline-none ml-2"
            autoFocus
          />
        </form>

      </div>
    </section>
  );
};

export default AIAssistant;