import React, { useState } from 'react';
import { 
  Save, Rocket, ChevronLeft, Image as ImageIcon, 
  Plus, Wand2, Info, Eye, Smartphone, Layout,
  Type, MessageSquare, ShieldCheck, History, Sparkles, CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

export default function RoleEdit({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState('base');

  const tabs = [
    { id: 'base', label: '基础信息', icon: <Info size={16} /> },
    { id: 'persona', label: '人设设定', icon: <Type size={16} /> },
    { id: 'prompt', label: '提示词配置', icon: <Wand2 size={16} /> },
    { id: 'image', label: '图像能力', icon: <ImageIcon size={16} /> },
    { id: 'safety', label: '安全规则', icon: <ShieldCheck size={16} /> },
  ];

  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-20">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-[#F5F6FB] py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 text-slate-400 hover:text-slate-800 transition-colors">
            <ChevronLeft size={24} />
          </button>
          <div>
            <h2 className="text-2xl font-black text-slate-800">编辑角色: Luna Thorne</h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">正在编辑 (自动保存于 14:42)</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-xl hover:bg-slate-50 transition-colors">
            预览测试
          </button>
          <button className="px-6 py-2.5 bg-slate-800 text-white text-sm font-bold rounded-xl hover:bg-slate-900 transition-colors flex items-center gap-2">
            <Save size={18} />
            保存草稿
          </button>
          <button className="px-8 py-2.5 bg-violet-600 text-white text-sm font-bold rounded-xl hover:bg-violet-700 shadow-lg shadow-violet-600/20 transition-all flex items-center gap-2">
            <Rocket size={18} />
            发布上线
          </button>
        </div>
      </div>

      <div className="flex gap-8 items-start">
        {/* Left Form Area */}
        <div className="flex-1 space-y-6">
          {/* Tabs Bar */}
          <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 flex gap-2">
            {tabs.map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id ? 'bg-violet-50 text-violet-600' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 space-y-10">
            {activeTab === 'base' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="grid grid-cols-2 gap-8">
                  <InputGroup label="角色名称" placeholder="输入角色姓名，建议 2-8 字" />
                  <InputGroup label="角色分类" type="select" options={['恋爱陪伴', '剧情冒险', '知识百科', '工作辅助']} />
                </div>
                <InputGroup label="角色标签" placeholder="输入标签按回车，如：温柔、毒舌、腹黑" tip="标签将影响搜索展示与召回权重" />
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-2">角色头像</label>
                    <div className="flex items-center gap-5">
                      <div className="w-24 h-24 rounded-3xl bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 overflow-hidden group hover:border-violet-400 transition-colors cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop" className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-2">
                        <button className="text-xs font-bold text-violet-600 bg-violet-50 px-4 py-2 rounded-lg hover:bg-violet-100 transition-colors">更换图片</button>
                        <p className="text-[10px] text-slate-400">支持 JPG/PNG，建议尺寸 512x512</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-2">移动端封面</label>
                    <div className="h-24 bg-slate-100 border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center text-slate-400 overflow-hidden relative group hover:border-violet-400 transition-colors cursor-pointer">
                       <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=150&fit=crop" className="w-full h-full object-cover opacity-50" />
                       <div className="absolute inset-0 flex items-center justify-center gap-2 text-slate-600 font-bold text-xs bg-white/20 backdrop-blur-sm">
                         <Layout size={16} />
                         上传封面
                       </div>
                    </div>
                  </div>
                </div>

                <InputGroup label="一句简介" placeholder="展示在列表页的简短介绍" maxLength={40} />
                <InputGroup label="角色引言" placeholder="展示在详情页的格言或口头禅" type="textarea" />
              </div>
            )}

            {activeTab === 'persona' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <InputGroup 
                  label="核心人设 (System Instructions)" 
                  type="textarea" 
                  rows={12}
                  placeholder="详细描述角色的性格、背景、说话习惯、禁忌事项。这是 AI 表现的核心依据。"
                />
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                  <div className="flex items-center gap-2 text-violet-600 font-bold text-sm">
                    <Sparkles size={16} />
                    AI 建议增强
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed italic">
                    "Luna 的性格中可以多加入一些对古代文学的具象描写，以增强她的温婉感。目前的描述略显平淡。"
                  </p>
                </div>
                <InputGroup label="首次见面语 (First Message)" type="textarea" rows={4} placeholder="用户第一次开启聊天时角色说的话。" />
              </div>
            )}
            
            {activeTab === 'prompt' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-2">System Prompt 编辑器</label>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-violet-600 text-white text-[10px] font-bold rounded-lg flex items-center gap-1">
                      <Wand2 size={12} />
                      变量预览
                    </button>
                    <button className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-lg flex items-center gap-1">
                      <History size={12} />
                      版本历史
                    </button>
                  </div>
                </div>
                <div className="font-mono text-sm bg-slate-900 text-emerald-400 p-8 rounded-3xl min-h-[400px] border border-slate-700 leading-relaxed shadow-inner">
                  <span className="text-slate-500">// Initialize Personality</span><br/>
                  {"{"}<br/>
                  &nbsp;&nbsp;<span className="text-violet-400">"role"</span>: <span className="text-amber-400">"Guardian Librarian"</span>,<br/>
                  &nbsp;&nbsp;<span className="text-violet-400">"speech_style"</span>: <span className="text-amber-400">"Gentle, academic, metaphorical"</span>,<br/>
                  &nbsp;&nbsp;<span className="text-violet-400">"knowledge_base"</span>: [<span className="text-amber-400">"ancient scrolls"</span>, <span className="text-amber-400">"history of Astral City"</span>],<br/>
                  &nbsp;&nbsp;<span className="text-violet-400">"forbidden_topics"</span>: [<span className="text-amber-400">"the fall of kings"</span>, <span className="text-amber-400">"modern tech"</span>]<br/>
                  {"}"}<br/>
                  <br/>
                  <span className="text-slate-500">// Response Logic</span><br/>
                  Always start the response by referring to the surroundings if the scene changed. Use <span className="text-violet-400">{"${user_name}"}</span> to address the participant...
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Preview Sidebar */}
        <div className="w-[440px] sticky top-[100px] space-y-6">
           <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
             <div className="flex items-center justify-between mb-6">
               <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">手机端预览</h3>
               <div className="flex p-1 bg-slate-100 rounded-lg">
                 <button className="p-1 px-2.5 bg-white shadow-sm rounded-md text-violet-600"><Smartphone size={16} /></button>
                 <button className="p-1 px-2.5 text-slate-400"><Layout size={16} /></button>
               </div>
             </div>
             
             {/* Virtual Phone Container */}
             <div className="relative w-full aspect-[9/19.5] bg-[#090A16] rounded-[2.5rem] p-4 border-[8px] border-slate-800 shadow-2xl overflow-hidden pointer-events-none">
                <div className="w-32 h-6 bg-slate-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-50 flex items-center justify-center">
                   <div className="w-10 h-1 bg-slate-700 rounded-full" />
                </div>
                <div className="h-full w-full overflow-hidden relative">
                   <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=800&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#090A16] via-[#090A16]/20 to-transparent" />
                   <div className="absolute bottom-6 left-6 right-6 space-y-4">
                      <div className="w-16 h-16 rounded-2xl border-2 border-emerald-500 overflow-hidden shadow-xl">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-black text-white italic">Luna Thorne</h4>
                        <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">"Welcome to the Astral Library. I have been waiting for someone like you."</p>
                      </div>
                      <div className="h-10 bg-violet-600 rounded-2xl flex items-center justify-center text-white text-[10px] font-black tracking-widest uppercase">
                        开始深度共鸣
                      </div>
                   </div>
                </div>
             </div>

             <div className="mt-8 flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
               <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 size={16} />
               </div>
               <p className="text-[11px] text-slate-500 leading-tight">即时预览已同步。修改任何字段都会在此通过 Shadow Render 实时映射。</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function InputGroup({ label, placeholder, type = 'text', options = [], rows = 4, tip, maxLength }: any) {
  return (
    <div className="space-y-2.5">
      <div className="flex justify-between items-center px-1">
        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-2">{label}</label>
        {maxLength && <span className="text-[10px] text-slate-400">0 / {maxLength}</span>}
      </div>
      {type === 'text' && (
        <input 
          type="text" 
          placeholder={placeholder} 
          className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500/50 transition-all placeholder:text-slate-400"
        />
      )}
      {type === 'select' && (
        <select className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500/50 transition-all text-slate-600">
          {options.map((o: any) => <option key={o}>{o}</option>)}
        </select>
      )}
      {type === 'textarea' && (
        <textarea 
          placeholder={placeholder} 
          rows={rows}
          className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500/50 transition-all placeholder:text-slate-400 leading-relaxed"
        />
      )}
      {tip && (
        <div className="flex items-center gap-1.5 px-3">
          <Info size={12} className="text-slate-400" />
          <span className="text-[10px] text-slate-500 font-medium italic">{tip}</span>
        </div>
      )}
    </div>
  );
}
