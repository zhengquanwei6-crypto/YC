import React from 'react';
import { 
  Puzzle, Workflow, Play, Save, 
  Image as ImageIcon, Layers, 
  Settings2, Plus, ArrowRight,
  Database, DatabaseZap, HardDrive, Share2, Type
} from 'lucide-react';

export default function WorkflowEditor() {
  return (
    <div className="h-full flex flex-col gap-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-800">图像生成工作流</h2>
          <p className="text-sm text-slate-500 mt-1">设计复杂的参数映射与多阶段出图逻辑，适配各种画风</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-xl hover:bg-slate-50 transition-colors">
            <Share2 size={18} />
            分享配置
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-violet-600 text-white text-sm font-bold rounded-xl hover:bg-violet-700 shadow-lg shadow-violet-600/20 transition-all">
            <Plus size={18} />
            创建流
          </button>
        </div>
      </div>

      <div className="flex-1 flex gap-8 min-h-0">
        {/* Left List */}
        <div className="w-80 flex flex-col gap-4 overflow-hidden">
           <div className="bg-white rounded-[2rem] p-4 shadow-sm border border-slate-100 flex-1 flex flex-col overflow-hidden">
             <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 py-2 border-b border-slate-50 mb-4 font-bold">已保存的工作流</h3>
             <div className="space-y-2 overflow-y-auto pr-1">
                {[
                  { name: 'Stable Diffusion XL (Default)', desc: '通用高质量出图流', icon: <ImageIcon size={16} /> },
                  { name: 'Anime 2.5D Ultra', desc: '特制二次元精修流', icon: <Puzzle size={16} /> },
                  { name: 'Cyberpunk Photorealistic', desc: '写实赛博风渲染器', icon: <Layers size={16} /> },
                  { name: 'Sketch to Illustration', desc: '草图到插图转换', icon: <Settings2 size={16} /> },
                ].map((wf, i) => (
                  <button key={i} className={`w-full group flex items-center gap-4 p-4 rounded-2xl transition-all text-left border ${i === 0 ? 'bg-violet-50 border-violet-100' : 'hover:bg-slate-50 border-transparent'}`}>
                    <div className={`p-2 rounded-xl transition-colors ${i === 0 ? 'bg-violet-600 text-white shadow-lg' : 'bg-slate-100 text-slate-400 group-hover:bg-violet-100'}`}>
                      {wf.icon}
                    </div>
                    <div>
                       <p className={`text-xs font-bold ${i === 0 ? 'text-violet-700' : 'text-slate-700'}`}>{wf.name}</p>
                       <p className="text-[10px] text-slate-400 mt-1">{wf.desc}</p>
                    </div>
                  </button>
                ))}
             </div>
           </div>
        </div>

        {/* Right Flow Editor - Visual Mock */}
        <div className="flex-1 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col overflow-hidden relative group">
           {/* Editor Tools */}
           <div className="h-16 border-b border-slate-100 px-8 flex items-center justify-between bg-slate-50/30">
              <div className="flex items-center gap-6">
                <span className="text-sm font-black text-slate-800 uppercase tracking-widest font-bold">Stable Diffusion XL (Default)</span>
                <div className="w-px h-6 bg-slate-200" />
                <div className="flex gap-2">
                   <button className="px-3 py-1 bg-emerald-500/10 text-emerald-600 text-[10px] font-black rounded-lg uppercase tracking-tighter shadow-sm">节点正常</button>
                   <button className="px-3 py-1 bg-amber-500/10 text-amber-600 text-[10px] font-black rounded-lg uppercase tracking-tighter">参数需调优</button>
                </div>
              </div>
              <div className="flex gap-2">
                 <button className="px-5 py-2 bg-slate-800 text-white text-xs font-bold rounded-xl flex items-center gap-2 hover:bg-slate-900 transition-colors">
                    <Play size={14} />
                    运行单步测试
                 </button>
                 <button className="px-5 py-2 bg-violet-600 text-white text-xs font-bold rounded-xl flex items-center gap-2 hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/20">
                    <Save size={14} />
                    保存配置
                 </button>
              </div>
           </div>

           {/* Flow Canvas Area (Visual) */}
           <div className="flex-1 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] relative overflow-hidden p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-transparent" />
              
              {/* Fake Node Graph */}
              <div className="relative flex items-center gap-16">
                 {/* Input Node */}
                 <div className="w-56 bg-slate-900 rounded-[2rem] p-6 text-white border border-slate-700 shadow-2xl space-y-4">
                    <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                       <Type size={14} className="text-violet-400" />
                       <span className="text-[10px] font-black uppercase tracking-widest">Text Input</span>
                    </div>
                    <div className="space-y-4">
                       <div className="text-[9px] font-bold text-slate-500 uppercase">Input Prompt</div>
                       <div className="h-10 bg-white/5 rounded-lg border border-white/10 flex items-center px-3">
                          <div className="w-full h-1 bg-violet-500/50 rounded-full" />
                       </div>
                    </div>
                 </div>

                 <ArrowRight className="text-slate-300" />

                 {/* Processor Node */}
                 <div className="w-64 bg-white rounded-[2rem] p-6 border-4 border-violet-600 shadow-2xl space-y-4 relative">
                    <div className="absolute -top-3 -right-3 bg-violet-600 text-white p-2 rounded-xl shadow-lg">
                      <Workflow size={16} />
                    </div>
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                       <DatabaseZap size={14} className="text-violet-600" />
                       <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">K-Sampler XL</span>
                    </div>
                    <div className="space-y-3">
                       <div className="flex justify-between text-[9px] font-black text-slate-400 uppercase">
                          <span>Steps</span>
                          <span className="text-violet-600">30</span>
                       </div>
                       <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-violet-600 w-1/2" />
                       </div>
                       <div className="flex justify-between text-[9px] font-black text-slate-400 uppercase pt-2">
                          <span>CFG Scale</span>
                          <span className="text-violet-600">7.5</span>
                       </div>
                       <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-violet-600 w-3/4" />
                       </div>
                    </div>
                 </div>

                 <ArrowRight className="text-slate-300" />

                 {/* VAE Decode */}
                 <div className="w-56 bg-slate-900 rounded-[2rem] p-6 text-white border border-slate-700 shadow-2xl space-y-4">
                    <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                       <ImageIcon size={14} className="text-emerald-400" />
                       <span className="text-[10px] font-black uppercase tracking-widest">VAE Decode</span>
                    </div>
                    <div className="flex items-center justify-center p-4">
                       <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 border-dashed flex items-center justify-center">
                          <ImageIcon size={24} className="text-slate-700 animate-pulse" />
                       </div>
                    </div>
                 </div>
              </div>

              {/* Sidebar Settings Override */}
              <div className="absolute right-8 top-8 bottom-8 w-80 bg-white shadow-2xl rounded-[2.5rem] border border-slate-100 p-8 flex flex-col">
                 <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6">全域参数配置</h4>
                 <div className="flex-1 space-y-6 overflow-y-auto scrollbar-hide">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Base Model</label>
                       <select className="w-full px-4 py-2.5 bg-slate-100 border-none rounded-xl text-xs font-bold text-slate-700">
                          <option>sd_xl_base_1.0.safetensors</option>
                          <option>ponyDiffusionV6XL_v6.safetensors</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Refiner Model</label>
                       <select className="w-full px-4 py-2.5 bg-slate-100 border-none rounded-xl text-xs font-bold text-slate-700">
                          <option>sd_xl_refiner_1.0.safetensors</option>
                          <option>None</option>
                       </select>
                    </div>
                    <div className="space-y-4 pt-6 border-t border-slate-100">
                       <p className="text-[10px] font-bold text-slate-400 uppercase">LoRA Weights</p>
                       <div className="space-y-2">
                          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                             <span className="text-[10px] font-bold text-slate-600">Envy_Style_XL</span>
                             <span className="text-[10px] font-black text-violet-600">0.65</span>
                          </div>
                          <button className="w-full py-2 border-2 border-dashed border-slate-200 rounded-xl text-[10px] font-black text-slate-400 uppercase tracking-widest">
                             + Add LoRA
                          </button>
                       </div>
                    </div>
                 </div>
                 <div className="pt-6 border-t border-slate-100">
                   <div className="bg-violet-50 p-4 rounded-2xl flex items-center gap-3">
                      <HardDrive size={20} className="text-violet-600" />
                      <div>
                        <p className="text-[10px] font-black text-violet-900 uppercase">VRAM Usage</p>
                        <p className="text-xs font-bold text-violet-600 leading-none mt-0.5">8.2 GB / 24 GB</p>
                      </div>
                   </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
