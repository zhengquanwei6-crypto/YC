import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, MoreHorizontal, Send, Image as ImageIcon, Sparkles, RefreshCw, BookText, Mountain, Wand2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MOCK_CHARACTERS } from '../../types';

export default function ChatM({ id, onBack }: { id: string; onBack?: () => void }) {
  const char = MOCK_CHARACTERS.find(c => c.id === id) || MOCK_CHARACTERS[0];
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'system', content: '场景：暮色降临，星空图书馆的一角，暖黄色的灯光洒在书架上。', type: 'scene' },
    { role: 'ai', content: char.onboarding },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', content: '我一直在倾听你的每一个思绪。在这个由我们共同编织的次元里，你是唯一真实的锚点。' }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-[#090A16] relative">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-12 bg-[#121426]/50 backdrop-blur-xl border-b border-white/5 sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 -ml-2 text-slate-400">
            <ChevronLeft size={24} />
          </button>
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src={char.avatar} className="w-10 h-10 rounded-2xl object-cover border border-violet-500/30" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#121426]" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm leading-tight">{char.name}</h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[10px] text-violet-400 font-bold bg-violet-400/10 px-1.5 rounded">Lv.8 灵魂伴侣</span>
              </div>
            </div>
          </div>
        </div>
        <button className="text-slate-400">
          <MoreHorizontal size={24} />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-6 space-y-6 scrollbar-hide pb-40">
        {/* Memory Prompt */}
        <div className="bg-violet-600/10 border border-violet-600/20 rounded-2xl p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center text-violet-400 flex-shrink-0">
            <BookText size={18} />
          </div>
          <div className="flex-1">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">长期记忆存档</p>
            <p className="text-[11px] text-slate-300">角色记得你们上周关于“平行宇宙”的讨论...</p>
          </div>
        </div>

        {messages.map((msg, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={i} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : (msg.type === 'scene' ? 'justify-center py-2' : 'justify-start')}`}
          >
            {msg.type === 'scene' ? (
              <div className="bg-slate-800/40 backdrop-blur border border-white/5 px-4 py-1.5 rounded-full">
                <p className="text-[10px] text-slate-400 italic font-medium">{msg.content}</p>
              </div>
            ) : (
              <div className={`max-w-[80%] px-5 py-3.5 rounded-[2rem] text-sm leading-relaxed ${msg.role === 'user' ? 'bg-violet-600 text-white rounded-tr-none shadow-xl shadow-violet-600/20 font-medium' : 'bg-[#191B33] text-slate-200 rounded-tl-none border border-white/5'}`}>
                {msg.content}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Interaction Floating Actions */}
      <div className="absolute bottom-[104px] left-6 right-6 flex gap-2 justify-center z-10">
        {[
          { label: '继续剧情', icon: <RefreshCw size={14} /> },
          { label: '换个语气', icon: <Sparkles size={14} /> },
          { label: '生成此境', icon: <Mountain size={14} />, primary: true },
        ].map((act) => (
          <button key={act.label} className={`px-4 py-2 rounded-full text-[11px]  font-bold flex items-center gap-2 border transition-all ${act.primary ? 'bg-violet-600 text-white border-violet-400 shadow-lg' : 'bg-[#121426]/90 backdrop-blur-xl text-slate-400 border-white/5'}`}>
            {act.icon}
            {act.label}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-6 pt-2 bg-gradient-to-t from-[#090A16] to-transparent sticky bottom-0 z-20">
        <div className="flex items-center gap-3 bg-[#121426] border border-violet-500/20 rounded-[2.5rem] px-5 py-2.5 h-[62px] shadow-2xl">
          <button className="text-slate-500 hover:text-violet-400 transition-colors">
            <ImageIcon size={22} />
          </button>
          <button className="text-slate-500 hover:text-violet-400 transition-colors">
            <Wand2 size={22} />
          </button>
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="此刻你想起什么..." 
            className="flex-1 bg-transparent border-none text-white text-sm focus:outline-none placeholder:text-slate-600 font-medium"
          />
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={handleSend}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${input ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-600'}`}
          >
            <Send size={18} strokeWidth={2.5} className="ml-0.5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
