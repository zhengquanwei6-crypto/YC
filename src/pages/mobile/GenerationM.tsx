import React, { useState } from 'react';
import { 
  Sparkles, ImageIcon, Palette, Monitor, Plus, 
  History, Wand2, Info, ChevronRight, Layers, Settings2
} from 'lucide-react';
import { motion } from 'motion/react';

export default function GenerationM() {
  const styles = [
    { id: '2d', name: '二次元', img: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=200&h=200&fit=crop' },
    { id: 'cg', name: '精致CG', img: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=200&h=200&fit=crop' },
    { id: 'oil', name: '艺术油画', img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=200&h=200&fit=crop' },
    { id: 'real', name: '超写实', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop' },
  ];

  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('2d');

  return (
    <div className="px-6 pt-16 pb-12 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white tracking-widest uppercase flex items-center gap-3">
            <Sparkles className="text-violet-500" />
            幻念生成
          </h1>
          <p className="text-slate-500 text-xs mt-1 font-bold tracking-tight">将你的想象具象化为永恒瞬间</p>
        </div>
        <button className="p-3 bg-[#121426] border border-white/5 rounded-2xl text-slate-400">
          <History size={20} />
        </button>
      </div>

      {/* Preview Section (Mocking) */}
      <div className="relative aspect-[3/4] bg-[#121426] rounded-[3rem] border border-violet-500/20 overflow-hidden flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 opacity-20 group">
          <div className="w-20 h-20 rounded-full bg-violet-600/20 flex items-center justify-center animate-pulse">
            <ImageIcon size={40} className="text-violet-400" />
          </div>
          <p className="text-sm font-bold text-violet-400 tracking-widest uppercase">等待构思输入...</p>
        </div>
        
        {/* Status Overlay */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
          <div className="px-3 py-1.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">DreamGen-XL 在线</span>
          </div>
          <button className="w-10 h-10 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center text-white">
            <Layers size={18} />
          </button>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="space-y-6">
        {/* Style Selection */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Palette size={16} className="text-violet-400" />
              风格基调
            </h3>
            <span className="text-[10px] text-violet-400 font-bold uppercase tracking-widest">查看全部</span>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {styles.map(style => (
              <button 
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all ${selectedStyle === style.id ? 'border-violet-500 scale-105 shadow-xl shadow-violet-600/20' : 'border-transparent opacity-60 grayscale'}`}
              >
                <img src={style.img} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />
                <span className="absolute bottom-1.5 inset-x-0 text-[9px] font-black text-white text-center">{style.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Input Field */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Wand2 size={16} className="text-violet-400" />
              构造引导词
            </h3>
            <button className="p-1 px-2.5 bg-violet-600/10 text-violet-400 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
              <Sparkles size={10} />
              AI 智能润色
            </button>
          </div>
          <div className="bg-[#121426] border border-violet-500/10 rounded-3xl p-5 shadow-2xl space-y-4">
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="描述你想要生成的画面，比如：'在樱花树下的少女，阳光从叶间洒落，轻盈的二次元画风'..."
              className="w-full h-24 bg-transparent border-none text-white text-sm focus:outline-none resize-none font-medium placeholder:text-slate-700 leading-relaxed"
            />
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <button className="flex items-center gap-2 text-slate-500 text-xs font-bold hover:text-white transition-colors">
                <Monitor size={14} />
                尺寸: 3:4 (竖屏)
                <ChevronRight size={14} />
              </button>
              <button className="p-2 border border-white/10 rounded-xl text-slate-500 hover:text-white transition-colors">
                <Settings2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Generate Button Container */}
      <div className="pt-2">
        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="w-full h-16 bg-gradient-to-r from-violet-600 to-pink-500 text-white rounded-3xl font-black text-sm tracking-[0.2em] uppercase shadow-[0_20px_50px_rgba(139,92,246,0.3)] flex items-center justify-center gap-3 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <span className="relative">开启位面召唤</span>
          <div className="px-2 py-1 bg-white/20 backdrop-blur-md rounded-lg text-[9px] relative flex items-center gap-1 lowercase font-normal italic">
            消耗 12 幻念值
          </div>
        </motion.button>
        <p className="text-center text-[10px] text-slate-600 mt-4 font-bold tracking-widest uppercase">今日剩余额度: 420 / 1000</p>
      </div>

      {/* History Preview */}
      <div className="space-y-4 pt-4">
        <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">历史构想</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex-shrink-0 w-24 h-32 rounded-2xl overflow-hidden border border-white/5 relative group">
              <img src={`https://images.unsplash.com/photo-${1530000000000 + i * 100000}?w=200&h=300&fit=crop`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Plus size={20} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
