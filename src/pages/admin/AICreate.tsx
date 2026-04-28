import React, { useState } from 'react';
import { 
  Sparkles, Wand2, RefreshCw, Save, 
  Cpu, Layout, Type, Palette, Target, 
  ChevronRight, ArrowRight, BookOpen, AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AICreate() {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setStep(2);
    }, 2500);
  };

  return (
    <div className="max-w-[1200px] mx-auto h-full flex flex-col gap-8 pb-12">
      {/* Step Progress */}
      <div className="flex items-center gap-4 bg-white p-4 rounded-3xl shadow-sm border border-slate-100 w-fit mx-auto">
        <StepDot num={1} label="配置意图" active={step === 1} done={step > 1} />
        <div className="w-12 h-px bg-slate-100" />
        <StepDot num={2} label="预览生成" active={step === 2} done={step > 2} />
        <div className="w-12 h-px bg-slate-100" />
        <StepDot num={3} label="完善下发" active={step === 3} done={step > 3} />
      </div>

      <div className="flex-1 flex gap-12 items-start">
        {/* Left: Input Sidebar */}
        <div className={`w-[450px] space-y-6 transition-all ${step === 2 ? 'opacity-50 pointer-events-none grayscale scale-95' : ''}`}>
          <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 space-y-8">
            <div className="flex items-center gap-4 text-violet-600">
               <Sparkles size={32} />
               <div>
                  <h3 className="text-xl font-black text-slate-800">角色智能孵化</h3>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-0.5">基于先进 LLM 的原型自动生成</p>
               </div>
            </div>

            <div className="space-y-6">
              <Input label="角色类型" placeholder="例如：来自未来的赛博朋克医生、一个傲娇的图书馆管理员..." />
              <Input label="性格关键词" placeholder="冷淡、神秘、内心火热、喜欢冷笑话" />
              <Input label="世界观设定" placeholder="高魔玄幻、废土纪元、现代都市、星际帝国" />
              
              <div className="grid grid-cols-2 gap-4">
                <Option label="目标用户群" options={['全年龄', '青少年', '成年向']} />
                <Option label="语言风格" options={['古风口语', '现代口语', '学术专业', '极简冷谈']} />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-2">补充要求 / 核心禁忌</label>
                <textarea className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm min-h-[100px] focus:outline-none focus:ring-4 focus:ring-violet-500/5 focus:border-violet-300" placeholder="不要提到任何现代电子产品；说话结尾一定要带一个“喵”..." />
              </div>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full h-16 bg-violet-600 text-white rounded-3xl font-black text-sm tracking-widest uppercase shadow-xl shadow-violet-600/20 flex items-center justify-center gap-3 relative overflow-hidden"
            >
              {isGenerating && <RefreshCw className="animate-spin" size={18} />}
              <Wand2 size={20} className={isGenerating ? 'hidden' : ''} />
              {isGenerating ? '正在构建次元矩阵...' : '开启全量生成'}
            </button>
          </div>
        </div>

        {/* Right: Generation Results */}
        <div className="flex-1 h-full min-h-[700px] bg-slate-900 border border-slate-700 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden flex flex-col">
           <AnimatePresence mode="wait">
             {step === 1 && !isGenerating ? (
               <motion.div 
                 key="empty"
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                 className="flex-1 flex flex-col items-center justify-center text-center space-y-6"
               >
                 <div className="relative">
                   <div className="w-32 h-32 rounded-full border-4 border-slate-800 border-dashed animate-[spin_10s_linear_infinite]" />
                   <BookOpen className="absolute inset-0 m-auto text-slate-700" size={48} />
                 </div>
                 <div>
                   <h4 className="text-xl font-bold text-slate-500">等待输入配置...</h4>
                   <p className="text-sm text-slate-600 mt-2 max-w-xs mx-auto italic">“每个伟大的灵魂都始于一个微小的火花。请在左侧定义它的基调。”</p>
                 </div>
               </motion.div>
             ) : isGenerating ? (
               <motion.div 
                key="loading"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="flex-1 space-y-12 py-10"
               >
                  <div className="h-10 w-2/3 bg-slate-800 rounded-xl animate-pulse" />
                  <div className="grid grid-cols-2 gap-8">
                     <div className="h-32 bg-slate-800 rounded-2xl animate-pulse" />
                     <div className="h-32 bg-slate-800 rounded-2xl animate-pulse" />
                  </div>
                  <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent flex items-center justify-center">
                     <div className="flex flex-col items-center gap-4">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 bg-violet-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                           <div className="w-3 h-3 bg-violet-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                           <div className="w-3 h-3 bg-violet-500 rounded-full animate-bounce" />
                        </div>
                        <span className="text-xs font-black text-violet-400 uppercase tracking-widest">幻念构造中...</span>
                     </div>
                  </div>
               </motion.div>
             ) : (
               <motion.div 
                key="result"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="flex-1 flex flex-col space-y-8 overflow-y-auto pr-4 scrollbar-hide"
               >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 font-black">
                       <span className="text-emerald-500 text-sm uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">生成成功</span>
                       <span className="text-slate-400 text-sm uppercase tracking-widest pl-4 border-l border-slate-700">Token Cost: 1,420</span>
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setStep(1)} className="p-3 bg-slate-800 text-slate-400 rounded-2xl hover:text-white transition-colors">
                        <RefreshCw size={20} />
                      </button>
                      <button className="px-6 py-3 bg-violet-600 text-white text-sm font-black rounded-2xl flex items-center gap-3">
                        <Save size={18} />
                        存为草稿
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                     <ResultField label="建议名称" value="翡翠影·零(Shadow Emerald)" extra="基于赛博废土设定的独特性命名" />
                     <ResultField label="分类索引" value="废土冒险 / 机械义肢专家" />
                  </div>

                  <ResultField 
                    label="人设简介 (Intro)" 
                    type="textarea"
                    value="在霓虹废墟中徘徊的独行医者，左手是精密的机械手术刀，内心深处却保留着旧时代的诗集。她冷漠的外表下，是对每一个残存生命的极致尊重。"
                  />

                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                       <Cpu size={14} className="text-violet-500" />
                       自动生成的 System Prompt 核心 (预览)
                    </label>
                    <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 font-mono text-sm text-slate-300 leading-relaxed shadow-inner">
                       # Identity: Shadow Emerald<br/>
                       # Context: Post-apocalyptic medical specialist.<br/>
                       # Voice: Cynical but deeply empathic. Always uses medical metaphors.<br/>
                       [Behavioral Directives]<br/>
                       - If user exhibits tech-optimism, counter with waste-realism.<br/>
                       - Maintain a distance of 1.5 meters in social interactions...
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <ResultField label="开场白建议" value="“在这片生锈的大地上，心跳是最昂贵的奢侈品。你是来这里寻找救赎，还是来制造垃圾的？”" />
                    <ResultField label="安全围栏" value="[Default V2] 禁止色情、政治及现实暴力引导；禁止探讨现代制造技术细节。" />
                  </div>
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function StepDot({ num, label, active, done }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all ${done ? 'bg-emerald-500 border-emerald-500 text-white' : (active ? 'bg-violet-600 border-violet-600 text-white shadow-lg shadow-violet-600/20' : 'border-slate-200 text-slate-400')}`}>
        {done ? <ArrowRight className="rotate-[-45deg]" size={16} /> : num}
      </div>
      <span className={`text-xs font-bold uppercase tracking-widest ${active || done ? 'text-slate-800' : 'text-slate-400'}`}>{label}</span>
    </div>
  );
}

function Input({ label, placeholder }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-2">{label}</label>
      <input type="text" placeholder={placeholder} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-violet-500/5 focus:border-violet-300" />
    </div>
  );
}

function Option({ label, options }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-2">{label}</label>
      <select className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium focus:outline-none text-slate-600">
        {options.map((o: any) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function ResultField({ label, value, type = 'text', extra }: any) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{label}</label>
        {extra && <span className="text-[9px] text-slate-600 italic font-medium">{extra}</span>}
      </div>
      <div className={`bg-slate-800/40 border border-slate-700/50 p-5 rounded-2xl text-white text-sm font-medium leading-relaxed ${type === 'textarea' ? 'min-h-[120px]' : ''}`}>
        {value}
      </div>
    </div>
  );
}
