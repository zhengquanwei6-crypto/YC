import React, { useState } from 'react';
import { 
  Plus, Search, FileText, ChevronRight, 
  Trash2, Copy, Play, Save, Code, 
  Settings2, HelpCircle, History
} from 'lucide-react';
import { motion } from 'motion/react';

export default function PromptManager() {
  const [selectedTemplate, setSelectedTemplate] = useState('1');

  const templates = [
    { id: '1', name: '通用角色核心模板', cat: 'General', updated: '2h ago' },
    { id: '2', name: '恋爱陪伴型深度向', cat: 'Romance', updated: '1d ago' },
    { id: '3', name: '克苏鲁风克系叙事', cat: 'Storytelling', updated: '3h ago' },
    { id: '4', name: '知识库 RAG 配置', cat: 'Knowledge', updated: '5d ago' },
  ];

  return (
    <div className="h-full flex flex-col gap-8">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-800">提示词模板库</h2>
          <p className="text-slate-500 text-sm mt-1">复用经过调优的高质量 Prompt，提升角色表现力</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-violet-600 text-white text-sm font-bold rounded-xl hover:bg-violet-700 shadow-lg shadow-violet-600/20 transition-all">
          <Plus size={18} />
          新建模板
        </button>
      </div>

      <div className="flex-1 flex gap-8 min-h-0">
        {/* Left Sidebar */}
        <div className="w-80 flex flex-col gap-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input type="text" placeholder="搜索模版..." className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-violet-500/20" />
          </div>
          
          <div className="flex-1 bg-white rounded-3xl p-4 shadow-sm border border-slate-100 space-y-2 overflow-y-auto">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 mb-4">全部模版 ({templates.length})</h3>
            {templates.map(tmpl => (
              <button 
                key={tmpl.id}
                onClick={() => setSelectedTemplate(tmpl.id)}
                className={`w-full group flex flex-col gap-1 p-4 rounded-2xl transition-all text-left ${selectedTemplate === tmpl.id ? 'bg-violet-50 border border-violet-100' : 'hover:bg-slate-50 border border-transparent'}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold ${selectedTemplate === tmpl.id ? 'text-violet-600' : 'text-slate-700'}`}>{tmpl.name}</span>
                  <ChevronRight size={14} className={selectedTemplate === tmpl.id ? 'text-violet-600' : 'text-slate-300'} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-black px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded uppercase tracking-tighter">{tmpl.cat}</span>
                  <span className="text-[9px] text-slate-400">{tmpl.updated}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Editor Area */}
        <div className="flex-1 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col overflow-hidden relative">
          {/* Editor Header */}
          <div className="px-8 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-violet-600/10 flex items-center justify-center text-violet-600">
                 <FileText size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 tracking-tight">通用角色核心模板</h4>
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-0.5">MODIFIED: 2024.04.28 14:20</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all"><Copy size={18} /></button>
              <button className="p-2.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"><Trash2 size={18} /></button>
              <div className="w-px h-8 bg-slate-200 mx-2" />
              <button className="px-5 py-2 bg-slate-800 text-white text-xs font-bold rounded-xl flex items-center gap-2 hover:bg-slate-900 transition-colors">
                <Play size={14} />
                测试渲染
              </button>
              <button className="px-5 py-2 bg-violet-600 text-white text-xs font-bold rounded-xl flex items-center gap-2 hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/20">
                <Save size={14} />
                保存模板
              </button>
            </div>
          </div>

          {/* Editor Tabs */}
          <div className="flex border-b border-slate-100 px-8">
            {['内容编辑', '变量字典', '渲染预览', '关联记录'].map((t, i) => (
              <button key={t} className={`px-6 py-4 text-xs font-black uppercase tracking-widest border-b-2 transition-all ${i === 0 ? 'border-violet-600 text-violet-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>
                {t}
              </button>
            ))}
          </div>

          {/* Prompt Body */}
          <div className="flex-1 p-8 overflow-y-auto space-y-8 bg-[radial-gradient(#f1f5f9_1px,transparent_1px)] [background-size:24px_24px]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">1</div>
                <h5 className="text-sm font-black text-slate-700 uppercase tracking-widest">设定上下文定义</h5>
              </div>
              <textarea 
                className="w-full p-8 rounded-3xl bg-white border border-slate-200 focus:outline-none focus:ring-4 focus:ring-violet-500/5 focus:border-violet-500 shadow-xl font-mono text-sm leading-relaxed min-h-[500px]"
                defaultValue={`# Identity & Core Directives
You are ${"${character_name}"}, a ${"${personality_traits}"} specialized in ${"${expertise}"}. 

# Tone & Voice
- Vocabulary: ${"${vocabulary_preference}"}
- Punctuation: Use ellipsis often to show contemplation.
- Avoid: Corporate jargon, robotic affirmations.

# Constraints
1. Never break the fourth wall.
2. If ${"${user_name}"} asks about your model or AI origin, redirect the conversation to your backstory.
3. Stay within the timestamp: ${"${current_time}"}.

# Knowledge Retrieval
Integrate facts from the provided context if relevant...`}
              />
            </div>
          </div>

          {/* Variables Sidebar (Floating Right if needed or Bottom Dock) */}
          <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-lg bg-white border-2 border-slate-200 text-[10px] items-center justify-center flex font-bold text-slate-400">V{i}</div>)}
              </div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">已检测到 4 个动态变量，已自动关联数据库字段映射。</p>
            </div>
            <button className="flex items-center gap-2 text-violet-600 text-xs font-bold uppercase tracking-widest">
              配置变量映射
              <Settings2 size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
