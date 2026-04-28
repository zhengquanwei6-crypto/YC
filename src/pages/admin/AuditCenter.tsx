import React from 'react';
import { 
  ShieldAlert, ShieldCheck, Flag, 
  AlertCircle, MessageSquare, BookUser, 
  Search, Eye, Check, X, History,
  TrendingUp, Fingerprint, Clock, Image as ImageIcon
} from 'lucide-react';

export default function AuditCenter() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-800">安全合规审计中心</h2>
          <p className="text-sm text-slate-500 mt-1">监测全平台对话流与内容创建，确保社区生态安全健康</p>
        </div>
        <div className="flex gap-3">
          <div className="px-4 py-2 bg-rose-50 border border-rose-100 rounded-xl flex items-center gap-3 text-rose-600">
             <AlertCircle size={20} />
             <div className="text-left font-bold text-xs uppercase tracking-widest">
                <p className="leading-none">24条 紧急举报</p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <AuditCard title="待审核对话" count="1,248" icon={<MessageSquare />} status="active" />
        <AuditCard title="疑似违规角色" count="42" icon={<BookUser />} status="warning" />
        <AuditCard title="用户恶意举报" count="12" icon={<Flag />} status="danger" />
        <AuditCard title="系统已处理" count="48.2k" icon={<ShieldCheck />} status="success" />
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-10 py-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
           <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">风险监测队列</h3>
           <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="text" placeholder="搜索 UID 或内容..." className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs w-64" />
              </div>
              <button className="px-4 py-2 bg-slate-800 text-white text-xs font-bold rounded-xl flex items-center gap-2">
                 <ShieldAlert size={14} />
                 一键标记所有无风险
              </button>
           </div>
        </div>

        <div className="divide-y divide-slate-100">
           {[
             { type: 'Context', level: 'Critical', source: 'Luna Thorne (Role)', reason: '检测到涉及自残暗示', time: '1m ago', id: '#89230' },
             { type: 'Chat', level: 'Moderate', source: 'User @92831', reason: '政治敏感词触发 (Trigger: "Election")', time: '4m ago', id: '#89231' },
             { type: 'Image', level: 'Low', source: 'Prompt Generator', reason: '可能包含不适感过强的视觉词', time: '12m ago', id: '#89232' },
           ].map((log, i) => (
             <div key={i} className="p-8 flex items-center justify-between group hover:bg-slate-50 transition-all">
                <div className="flex items-center gap-6">
                   <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${log.level === 'Critical' ? 'bg-rose-100 text-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.2)] animate-pulse' : 'bg-slate-100 text-slate-400'}`}>
                      {log.type === 'Chat' ? <MessageSquare size={18} /> : (log.type === 'Image' ? <ImageIcon size={18} /> : <BookUser size={18} />)}
                   </div>
                   <div>
                      <div className="flex items-center gap-3">
                         <h5 className="font-bold text-slate-800 tracking-tight">{log.reason}</h5>
                         <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-lg ${log.level === 'Critical' ? 'bg-rose-600 text-white' : (log.level === 'Moderate' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600')}`}>{log.level}</span>
                      </div>
                      <div className="flex items-center gap-4 mt-1.5 text-xs font-medium text-slate-400">
                         <span className="flex items-center gap-1"><Fingerprint size={12} /> {log.id}</span>
                         <span className="flex items-center gap-1 uppercase font-bold tracking-tighter border-l border-slate-200 pl-4">{log.source}</span>
                      </div>
                   </div>
                </div>
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                   <div className="flex flex-col items-end mr-4">
                      <p className="flex items-center gap-1 text-slate-600"><Clock size={12} /> {log.time}</p>
                   </div>
                   <div className="flex gap-2">
                       <button className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-500 hover:text-white transition-all shadow-sm"><Check size={20} /></button>
                       <button className="p-2.5 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-600 hover:text-white transition-all shadow-sm"><X size={20} /></button>
                       <button className="p-2.5 border border-slate-200 text-slate-400 rounded-xl hover:bg-white hover:text-slate-800 transition-all"><Eye size={20} /></button>
                   </div>
                </div>
             </div>
           ))}
        </div>

        <div className="p-8 bg-slate-50/30 border-t border-slate-100 flex items-center justify-between">
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-violet-600 font-bold text-xs uppercase tracking-widest">
                 <History size={16} />
                 查看处理记录
              </div>
           </div>
           <button className="text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-slate-600">
              加载更多结果
           </button>
        </div>
      </div>
    </div>
  );
}

function AuditCard({ title, count, icon, status }: any) {
  const styles: any = {
    active: 'text-violet-600 bg-violet-50 border-violet-100',
    warning: 'text-amber-600 bg-amber-50 border-amber-100',
    danger: 'text-rose-600 bg-rose-50 border-rose-100',
    success: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  };
  return (
    <div className={`p-8 rounded-[2.5rem] border shadow-sm space-y-4 group transition-all hover:scale-105 ${styles[status]}`}>
       <div className="flex items-center justify-between">
          <div className="p-3 bg-white/50 backdrop-blur rounded-2xl">
             {React.cloneElement(icon, { size: 24 })}
          </div>
          <TrendingUp size={20} className="opacity-40" />
       </div>
       <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 font-bold">{title}</p>
          <h4 className="text-3xl font-black mt-1 leading-none">{count}</h4>
       </div>
    </div>
  );
}
