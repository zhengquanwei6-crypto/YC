import React from 'react';
import { ChevronLeft, Heart, Share2, MessageCircle, Sparkles, Zap, BrainCircuit, Activity, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_CHARACTERS } from '../../types';

export default function CharacterDetailM({ id, onBack, onChat }: { id: string; onBack: () => void; onChat: () => void }) {
  const char = MOCK_CHARACTERS.find(c => c.id === id) || MOCK_CHARACTERS[0];

  return (
    <div className="bg-[#090A16] min-h-full">
      {/* Hero Section */}
      <div className="relative h-[480px]">
        <img src={char.cover} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A16] via-[#090A16]/20 to-transparent" />
        
        {/* Top Controls */}
        <div className="absolute top-12 left-5 right-5 flex justify-between">
          <button onClick={onBack} className="p-3 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 text-white">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-3">
            <button className="p-3 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 text-rose-500">
              <Heart size={20} className="fill-rose-500" />
            </button>
            <button className="p-3 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 text-white">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Char Info Layer */}
        <div className="absolute bottom-8 left-6 right-6">
          <div className="flex items-end gap-5 mb-6">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-24 h-24 rounded-3xl border-4 border-[#090A16] overflow-hidden shadow-2xl relative"
            >
              <img src={char.avatar} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 inset-x-0 h-1 bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            </motion.div>
            <div className="pb-2">
              <h1 className="text-3xl font-black text-white leading-tight">{char.name}</h1>
              <div className="flex gap-2 mt-2">
                {char.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-violet-400 bg-violet-400/10 px-2 py-0.5 rounded-full border border-violet-400/20">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="px-6 pb-32 space-y-8 -mt-4 relative z-10">
        {/* Relationship Status Card */}
        <div className="bg-[#121426] border border-violet-500/10 rounded-[2.5rem] p-6 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Activity size={80} className="text-violet-400" />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center text-violet-400">
                <Heart size={20} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">当前契约关系</p>
                <p className="text-lg font-black text-white">灵魂伴侣 <span className="text-xs font-normal text-violet-400">Lv.8</span></p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">心情状态</p>
              <p className="text-sm font-bold text-emerald-400 flex items-center justify-end gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                欣喜若狂
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
              <span>亲密度进度</span>
              <span>850 / 1000</span>
            </div>
            <div className="h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-white/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-violet-600 to-pink-500 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)] relative"
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BrainCircuit className="text-violet-400" size={18} />
            <h2 className="text-sm font-black tracking-widest text-slate-400 uppercase">人设档案</h2>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed font-medium bg-[#121426]/30 p-5 rounded-3xl border border-white/5">
            {char.description}
          </p>
        </div>

        {/* Abilities */}
        <div className="space-y-4">
          <h2 className="text-sm font-black tracking-widest text-slate-400 uppercase flex items-center gap-2">
            <Zap className="text-violet-400" size={18} />
            角色能力
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: '长期记忆', icon: <BrainCircuit size={14} />, color: '#8B5CF6' },
              { label: '多情境模拟', icon: <Sparkles size={14} />, color: '#EC4899' },
              { label: '实时绘图', icon: <ImageIcon size={14} />, color: '#22D3EE' },
              { label: '性格演化', icon: <Activity size={14} />, color: '#F59E0B' },
            ].map(abi => (
              <div key={abi.label} className="bg-[#121426] border border-white/5 p-4 rounded-2xl flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${abi.color}15`, color: abi.color }}>
                  {abi.icon}
                </div>
                <span className="text-xs font-bold text-slate-200">{abi.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* First Message */}
        <div className="bg-gradient-to-br from-violet-600/20 to-transparent border border-violet-500/10 p-6 rounded-[2.5rem] relative">
          <MessageCircle className="absolute -top-3 -right-3 text-violet-500/50" size={40} />
          <p className="text-[10px] font-bold text-violet-400 uppercase mb-2 tracking-widest">开场白</p>
          <p className="text-white italic text-sm leading-relaxed">"{char.onboarding}"</p>
        </div>
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[340px] px-2 py-2 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-2">
        <button className="h-14 w-14 flex-shrink-0 bg-[#121426] text-slate-400 rounded-full flex items-center justify-center hover:text-white transition-colors">
          <Sparkles size={20} />
        </button>
        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={onChat}
          className="flex-1 h-14 bg-violet-600 text-white rounded-full font-black text-sm tracking-widest uppercase shadow-[0_10px_30px_rgba(139,92,246,0.4)] flex items-center justify-center gap-3"
        >
          开始深度共鸣
          <ChevronLeft size={18} className="rotate-180" strokeWidth={3} />
        </motion.button>
      </div>
    </div>
  );
}
