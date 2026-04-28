import React from 'react';
import { Search, Flame, Heart, Sparkles, MessageCircle, MoreVertical } from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_CHARACTERS } from '../../types';

export default function HomeM({ onSelectChar }: { onSelectChar: (id: string) => void }) {
  const categories = ['恋爱', '治愈', '二次元', '冒险', '学习', '古风'];
  const featured = MOCK_CHARACTERS[0];

  return (
    <div className="px-5 pt-12 pb-10 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Hi, Voyager</h2>
          <p className="text-[10px] text-gray-400 font-medium">Your AI friends missed you.</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary p-0.5">
          <div className="w-full h-full bg-mobile-bg rounded-full border border-white/20 overflow-hidden">
            <img src="https://i.pravatar.cc/150?u=user" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Featured Card */}
      <div className="space-y-3">
        <motion.div 
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectChar(featured.id)}
          className="relative h-44 rounded-2xl overflow-hidden bg-mobile-card border border-white/10 shrink-0 shadow-2xl group"
        >
          <img src={featured.cover} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">✨</div>
          <div className="absolute bottom-4 left-4 z-20">
            <span className="bg-brand-primary text-[8px] font-bold px-2 py-0.5 rounded-full mb-1 inline-block uppercase tracking-widest leading-none">Today's Special</span>
            <h4 className="text-sm font-bold text-white">{featured.name}</h4>
            <p className="text-[9px] text-white/70 line-clamp-1">{featured.description}</p>
          </div>
        </motion.div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide py-1">
        {['All', 'Romance', 'RPG', 'Heal', 'Adventure', 'Study'].map((cat, i) => (
          <span 
            key={cat} 
            className={`px-3 py-1.5 rounded-full text-[9px] font-bold transition-all border shrink-0 cursor-pointer ${i === 0 ? 'bg-brand-primary border-brand-primary text-white' : 'bg-mobile-card border-white/5 text-gray-400 hover:border-white/20'}`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Recent Grid */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Recent Converses</h3>
          <span className="text-[10px] text-brand-primary font-bold">See All</span>
        </div>
        <div className="grid grid-cols-2 gap-3 pb-4">
          {MOCK_CHARACTERS.map(char => (
            <motion.div 
              key={char.id}
              whileTap={{ scale: 0.96 }}
              onClick={() => onSelectChar(char.id)}
              className="bg-mobile-surface p-2 rounded-xl border border-white/5 flex flex-col gap-2 hover:bg-mobile-surface/80 group"
            >
              <div className="w-full aspect-square bg-mobile-elevated rounded-lg relative overflow-hidden">
                <img src={char.avatar} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full border border-mobile-surface shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              </div>
              <div className="px-1">
                <h5 className="text-[10px] font-bold text-white truncate">{char.name}</h5>
                <p className="text-[8px] text-gray-500 uppercase font-black tracking-tighter">Relationship: Neutral</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
