import React from 'react';
import { 
  Plus, Search, Cpu, Globe, Key, 
  Settings2, Activity, CheckCircle2, XCircle, 
  Clock, Database, HardDrive, RefreshCw, ShieldCheck
} from 'lucide-react';

export default function ModelConfig() {
  return (
    <div className="space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-800">模型链路配置</h2>
          <p className="text-sm text-slate-500 mt-1">管理 AI 处理核心、图像引擎及多模态服务接入点</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-violet-600 text-white text-sm font-bold rounded-xl hover:bg-violet-700 shadow-lg shadow-violet-600/20 transition-all">
          <Plus size={18} />
          接入新模型
        </button>
      </div>

      {/* Model Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ModelCard 
          icon={<Cpu />} 
          type="Chat" 
          name="RoleNest-Chat-v2" 
          provider="OpenAI API" 
          status="Active" 
          tag="默认聊天核心"
        />
        <ModelCard 
          icon={<Globe />} 
          type="Image" 
          name="DreamGen-XL-v4" 
          provider="Stable Diffusion WebUI" 
          status="Maintenance" 
          tag="自建集群"
        />
        <ModelCard 
          icon={<ShieldCheck className="text-amber-500" />} 
          type="Audit" 
          name="Guard-LLM-8B" 
          provider="Internal Local Inference" 
          status="Active" 
          tag="独立合规审计"
        />
      </div>

      {/* Configuration Detail */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-10 py-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-violet-600 text-white flex items-center justify-center">
                <Settings2 size={24} />
             </div>
             <div>
               <h3 className="text-lg font-black text-slate-800">当前激活模型参数 (RoleNest-Chat-v2)</h3>
               <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">Endpoint: https://api.openai.com/v1/chat/completions</p>
             </div>
          </div>
          <button className="flex items-center gap-2 text-violet-600 font-bold text-sm bg-violet-50 px-4 py-2 rounded-xl">
             <RefreshCw size={16} />
             测试端点连接
          </button>
        </div>

        <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            <InputField label="模型标识词 (ID)" value="gpt-4-turbo-preview" />
            <InputField label="API Key" value="sk-••••••••••••••••••••••••" type="password" />
            <div className="space-y-4">
               <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-2 font-bold">默认采样参数</label>
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                     <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Temperature</p>
                     <p className="text-xl font-black text-slate-800">1.25 <span className="text-xs font-normal opacity-40 ml-2">Creativity High</span></p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                     <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Top_P</p>
                     <p className="text-xl font-black text-slate-800">0.95</p>
                  </div>
               </div>
            </div>
            <InputField label="响应最大长度 (Max Tokens)" value="4096" />
          </div>

          {/* Monitoring Stats */}
          <div className="bg-slate-900 rounded-3xl p-8 space-y-8 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Activity size={100} />
             </div>
             <div className="relative">
               <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 mb-6 font-bold">实时服务监控</h4>
               <div className="space-y-6">
                  <StatItem label="平均响应延迟" value="842ms" color="emerald" />
                  <StatItem label="今日总消耗 (Estimated)" value="$42.90" color="blue" />
                  <StatItem label="吞吐量 (RPM)" value="1,240" color="violet" />
               </div>
               <div className="mt-10 pt-10 border-t border-white/5 space-y-4">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">服务可用率 (Last 24h)</p>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden flex gap-0.5">
                     <div className="h-full bg-emerald-500 flex-1" />
                     <div className="h-full bg-emerald-500 flex-1" />
                     <div className="h-full bg-emerald-500 flex-1" />
                     <div className="h-full bg-emerald-500 flex-1" />
                     <div className="h-full bg-rose-500 w-4" />
                     <div className="h-full bg-emerald-500 flex-1" />
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModelCard({ icon, type, name, provider, status, tag }: any) {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 hover:border-violet-300 transition-all group relative overflow-hidden">
      <div className={`absolute top-0 right-0 p-4 font-black text-[9px] uppercase tracking-widest rounded-bl-2xl ${status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
         {status}
      </div>
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-violet-600/10 text-violet-600 rounded-2xl group-hover:scale-110 transition-transform">
           {React.cloneElement(icon, { size: 28 })}
        </div>
        <div>
          <h4 className="text-lg font-black text-slate-800 tracking-tight leading-none">{name}</h4>
          <p className="text-xs text-slate-400 font-bold uppercase mt-1.5">{type} • {provider}</p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
         <span className="text-[10px] font-black text-violet-400 uppercase tracking-widest bg-violet-50 px-2.5 py-1 rounded-lg border border-violet-100">{tag}</span>
         <button className="p-2 text-slate-400 hover:text-slate-800"><Settings2 size={18} /></button>
      </div>
    </div>
  );
}

function InputField({ label, value, type = 'text' }: any) {
  return (
    <div className="space-y-3">
      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-2 font-bold">{label}</label>
      <input type={type} defaultValue={value} className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500/50" />
    </div>
  );
}

function StatItem({ label, value, color }: any) {
  const colors: any = { emerald: 'text-emerald-500', blue: 'text-blue-400', violet: 'text-violet-400' };
  return (
    <div className="flex items-center justify-between">
       <span className="text-xs text-slate-400 font-medium">{label}</span>
       <span className={`text-lg font-black ${colors[color]}`}>{value}</span>
    </div>
  );
}
