import React, { useState, useEffect, useRef } from 'react';
import { sendMessageToAI, ChatMessage } from '../services/geminiService';
import { Link } from 'react-router-dom';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { text: "System Initialized...", isUser: false },
    { text: "Hello. I am Omar's AI agent. What would you like to know about his technical experience or projects? I can respond in both Spanish and English.", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
       chatContainerRef.current.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: 'smooth'
       });
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await sendMessageToAI(userMessage, messages);
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    } catch (error: any) {
      setMessages(prev => [ ...prev, { text: `[Error Sys]: API currently unavailable. Please contact Omar through another channel.`, isUser: false } ]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatBotMessage = (text: string) => {
    // Verificación de Call to Action Link
    const wantsProjects = text.toLowerCase().includes('/projects');

    // 1. Separamos el texto que entrega la API salto a salto de línea
    const lines = text.split('\n');

    const formattedLines = lines.map((line, index) => {
        let currentLine = line;

        // Comprueba si esta línea de texto la AI quería mandarla como lista ('*' o '-')
        const isListItem = currentLine.trim().startsWith('-') || currentLine.trim().startsWith('*');
        if (isListItem) {
            // Le quito el guión crudo, dejo el texto
            currentLine = currentLine.trim().substring(1).trim(); 
        }

        // Convierto asteriscos **texto** a Bold con tailwind 
        const htmlLine = currentLine.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-extrabold">$1</strong>');
        const renderedHtml = { __html: htmlLine };

        if (!currentLine.trim()) return <br key={index} />;

        if (isListItem) {
             // Devolvemos el ítem estilizado para terminal y un puntito delante de Tailwind list-disc
            return <li key={index} dangerouslySetInnerHTML={renderedHtml} className="ml-5 mt-1 list-disc text-slate-300" />
        }

        return <div key={index} dangerouslySetInnerHTML={renderedHtml} className="mt-1" />;
    });

    return (
      <div className="flex flex-col gap-1 w-full max-w-full">
        <div className="leading-relaxed font-mono text-[14.5px] w-full break-words opacity-95 tracking-wide text-sky-200">
           {/* Si mandó listas, React las iterará y dibujará precioso */}
           <ul className="marker:text-emerald-500 w-full">
             {formattedLines}
           </ul>
        </div>
        
        {wantsProjects && (
          <div className="mt-3 flex">
            <Link to="/projects" className="group inline-flex items-center text-[13px] bg-emerald-500/10 text-emerald-400 px-3 py-2 rounded border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all font-bold">
               <span className="animate-pulse mr-2 opacity-75">{'>_'}</span> 
               Explore /projects Gallery
            </Link>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="w-full max-w-4xl mx-auto mt-16 px-4 relative z-20">
      <div className="w-full bg-slate-950 rounded-xl overflow-hidden shadow-2xl shadow-sky-900/10 border border-slate-700/50 flex flex-col h-[500px]">
        
        <div className="bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-slate-800 select-none">
          <div className="flex gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500/90" />
            <div className="w-3.5 h-3.5 rounded-full bg-amber-500/90" />
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/90 flex justify-center items-center">
                {isLoading && <span className="w-1.5 h-1.5 bg-emerald-100 rounded-full animate-ping"></span>}
            </div>
          </div>
          <p className="flex-1 text-center text-slate-500 text-xs font-mono tracking-widest ml-[-40px]">omar_sh ~ (agent)</p>
        </div>

        {/* CONTENEDOR CON LA REFERENCIA (Solo scrollea esto) */}
        <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6 font-mono scrollbar-thin scrollbar-thumb-slate-700 bg-slate-950">
          <div className="mb-6 pb-3 text-slate-600 border-b border-slate-800 text-[13px]">
             System.AI Model: Local.RAG_Node Initialized...
          </div>

          {messages.map((msg, index) => (
            <div key={index} className="flex flex-col break-words">
              {msg.isUser ? (
                <div className="w-full mb-1">
                   <span className="text-emerald-400 font-bold mr-3 select-none">recruiter@guest:~$</span>
                   <span className="text-slate-300 font-medium">{msg.text}</span>
                </div>
              ) : (
                <div className="py-2 pl-4 border-l border-slate-800/60 ml-[6px]">
                  {formatBotMessage(msg.text)}
                </div>
              )}
            </div>
          ))}
          {isLoading && <div className="text-amber-500 opacity-80 animate-pulse ml-[26px]">_ searching for relevant data...</div>}
        </div>

        <form onSubmit={handleSubmit} className="bg-[#090d16] p-4 sm:px-6 flex items-center border-t border-slate-800">
          <span className="text-emerald-500 font-bold mr-3 font-mono">~$</span>
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            disabled={isLoading}
            className="flex-1 bg-transparent text-slate-200 text-sm font-mono focus:outline-none placeholder-slate-700 w-full"
            placeholder="What projects use Node or Python?..."
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </form>

      </div>
    </section>
  );
};

export default AIAssistant;