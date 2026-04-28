import React from 'react';
import { 
  PlusCircle, BookUser, FileText, Cpu, 
  Workflow, ShieldCheck, Settings, LayoutDashboard, 
  TrendingUp, MessageCircle, AlertCircle, ChevronLeft,
  Activity
} from 'lucide-react';
import { motion } from 'motion/react';

export default function MiniAdminM() {
  return (
    <div className="px-6 pt-16 pb-12 space-y-8">
      {/* Admin Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white tracking-widest uppercase flex items-center gap-3">
            <LayoutDashboard className="text-emerald-500" />
            管辖核心
          </h1>
          <p className="text-slate-500 text-xs mt-1 font-bold tracking-tight">移动端简易治理后台</p>
        </div>
        <div className="w-10 h-10 bg-emerald-500/20 border border-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          <Activity size={20} />
        </div>
      </div>

      {/* Data Summary */}
      <div className="grid grid-cols-3 gap-3">
        <DataBox label="角色数" value="124" icon={<BookUser size={12} />} color="#8B5CF6" />
        <DataBox label="今日对话" value="8.2k" icon={<MessageCircle size={12} />} color="#EC4899" />
        <DataBox label="待审核" value="12" icon={<AlertCircle size={12} />} color="#F59E0B" highlight />
      </div>

      {/* Main Action */}
      <motion.button 
        whileTap={{ scale: 0.98 }}
        className="w-full h-20 bg-emerald-600 rounded-3xl border border-emerald-400/30 flex items-center justify-center gap-4 shadow-[0_15px_40px_rgba(16,185,129,0.3)] relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-80 group-hover:scale-110 transition-transform" />
        <PlusCircle size={28} className="text-white relative" />
        <div className="text-left relative">
          <h4 className="text-lg font-black text-white leading-tight">AI 智能创建角色</h4>
          <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest">基于大模型全自动生成设定</p>
        </div>
      </motion.button>

      {/* Entries Grid */}
      <div className="grid grid-cols-2 gap-4">
        <AdminEntry icon={<BookUser />} label="角色管理" color="#8B5CF6" />
        <AdminEntry icon={<FileText />} label="提示词模板" color="#EC4899" />
        <AdminEntry icon={<Cpu />} label="模型链路" color="#3B82F6" />
        <AdminEntry icon={<Workflow />} label="图像流" color="#22D3EE" />
        <AdminEntry icon={<ShieldCheck />} label="内容治理" color="#F59E0B" />
        <AdminEntry icon={<Settings />} label="核心设置" color="#64748B" />
      </div>

      {/* Warning Card */}
      <div className="bg-[#191B33] border border-violet-500/10 p-6 rounded-[2.5rem] relative overflow-hidden">
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-violet-600/5 rounded-full blur-2xl" />
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-2xl bg-violet-600/10 flex items-center justify-center text-violet-400 flex-shrink-0">
            <TrendingUp size={24} />
          </div>
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-widest mb-1">精细化管理建议</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              当前移动端仅支持快速审核与状态切换。涉及复杂工作流、批量导入或深度 Prompt 编辑，请前往 <span className="text-violet-400">Web 版 SaaS 后台</span> 操作。
            </p>
          </div>
        </div>
      </div>

      <div className="text-center pt-4">
        <button className="text-xs font-bold text-slate-500 flex items-center justify-center gap-2 mx-auto uppercase tracking-widest hover:text-slate-300 transition-colors">
          <ChevronLeft size={14} />
          返回个人中心
        </button>
      </div>
    </div>
  );
}

function DataBox({ label, value, icon, color, highlight }: any) {
  return (
    <div className={`bg-[#121426] border p-4 rounded-3xl space-y-1 ${highlight ? 'border-amber-500/30' : 'border-white/5'}`}>
      <div className="flex items-center gap-1.5 text-slate-500">
        <div style={{ color }}>{icon}</div>
        <span className="text-[9px] font-black uppercase tracking-tight">{label}</span>
      </div>
      <p className={`text-xl font-black ${highlight ? 'text-amber-500' : 'text-white'}`}>{value}</p>
    </div>
  );
}

function AdminEntry({ icon, label, color }: any) {
  return (
    <button className="bg-[#121426] border border-white/5 p-6 rounded-[2.2rem] shadow-xl space-y-3 group hover:border-white/20 transition-all text-left relative overflow-hidden">
      <div className="absolute -bottom-4 -right-4 text-white opacity-[0.02] group-hover:scale-125 transition-transform">
        {React.cloneElement(icon, { size: 60 })}
      </div>
      <div className="p-3 rounded-2xl w-fit group-hover:scale-110 transition-transform" style={{ backgroundColor: `${color}15`, color }}>
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <span className="text-xs font-black text-slate-200 block uppercase tracking-widest">{label}</span>
    </button>
  );
}
