import React from 'react';
import { 
  Settings, Shield, CreditCard, Users, Image as ImageIcon, 
  MessageSquare, ChevronRight, LogOut, LayoutGrid, Cpu, 
  Sparkles, History, Bell, ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';

export default function ProfileM({ onOpenAdmin }: { onOpenAdmin: () => void }) {
  return (
    <div className="px-6 pt-16 pb-12 space-y-8">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-violet-600 to-pink-500 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
            <img src="https://i.pravatar.cc/150?u=user" className="w-full h-full rounded-full object-cover border-4 border-[#090A16]" />
          </div>
          <div className="absolute bottom-1 right-1 w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center border-2 border-[#090A16] shadow-lg">
            <Sparkles size={14} className="text-white" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-black text-white tracking-widest uppercase">探险家 Alex</h2>
          <p className="text-slate-500 text-xs font-bold mt-1 tracking-tight">星际契约号: #920384 • 加入于 2023.12</p>
        </div>
      </div>

      {/* Credit Card */}
      <div className="bg-gradient-to-br from-violet-600 to-indigo-700 p-6 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
          <CreditCard size={100} className="text-white" />
        </div>
        <div className="relative z-10 space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-black text-white/60 uppercase tracking-[0.2em] mb-2">可用幻念额度</p>
              <h3 className="text-4xl font-black text-white">4,280 <span className="text-sm font-normal opacity-60">pts</span></h3>
            </div>
            <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-[10px] font-black text-white tracking-widest uppercase">
              Premium
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white text-xs font-black uppercase tracking-widest hover:bg-white/20 transition-all">
              明细
            </button>
            <button className="flex-1 h-12 bg-white text-violet-700 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl hover:shadow-white/20 transition-all">
              充值
            </button>
          </div>
        </div>
      </div>

      {/* Grid Quick Entry */}
      <div className="grid grid-cols-2 gap-4">
        <QuickCard icon={<Cpu className="text-violet-400" />} label="模型接入" value="GPT-4o / Claude 3" />
        <QuickCard icon={<ImageIcon className="text-pink-400" />} label="图像配置" value="Stable Diffusion" />
      </div>

      {/* Settings List */}
      <div className="space-y-3 pt-4">
        <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] px-4">系统管理</h3>
        <div className="bg-[#121426] border border-white/5 rounded-[2.5rem] overflow-hidden divide-y divide-white/5 shadow-2xl">
          <ListItem icon={<Users />} label="我的角色" count="12" />
          <ListItem icon={<ImageIcon />} label="我的图库" count="148" />
          <ListItem icon={<MessageSquare />} label="记忆档案" />
          <ListItem icon={<Bell />} label="通知提醒" />
          <ListItem 
            icon={<LayoutGrid className="text-violet-400" />} 
            label="移动简易后台" 
            onClick={onOpenAdmin}
            rightElement={<ExternalLink size={14} className="text-violet-400" />}
          />
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] px-4">其他安全</h3>
        <div className="bg-[#121426] border border-white/5 rounded-[2.5rem] overflow-hidden divide-y divide-white/5 shadow-2xl">
          <ListItem icon={<Shield />} label="隐私设置" />
          <ListItem icon={<Settings />} label="账号安全" />
          <ListItem icon={<LogOut className="text-rose-500" />} label="退出次元" />
        </div>
      </div>

      <p className="text-center text-[10px] text-slate-700 font-bold tracking-widest uppercase py-4">Version 2.4.0 (Build 492) • RoleNest AI</p>
    </div>
  );
}

function QuickCard({ icon, label, value }: any) {
  return (
    <div className="bg-[#121426] border border-white/5 p-5 rounded-[2.2rem] shadow-xl space-y-2 group hover:border-violet-500/20 transition-all">
      <div className="p-2.5 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.15em]">{label}</p>
        <p className="text-[11px] font-bold text-slate-200 mt-1 truncate">{value}</p>
      </div>
    </div>
  );
}

function ListItem({ icon, label, count, onClick, rightElement }: any) {
  return (
    <button 
      onClick={onClick}
      className="w-full flex items-center justify-between px-6 py-5 hover:bg-white/5 transition-colors group text-left"
    >
      <div className="flex items-center gap-4">
        <div className="text-slate-500 group-hover:text-violet-400 transition-colors">
          {React.cloneElement(icon, { size: 20 })}
        </div>
        <span className="text-sm font-bold text-slate-200">{label}</span>
      </div>
      <div className="flex items-center gap-3">
        {count && <span className="text-[10px] font-black text-slate-600 border border-white/10 px-2 py-0.5 rounded-lg">{count}</span>}
        {rightElement ? rightElement : <ChevronRight size={18} className="text-slate-700 group-hover:translate-x-1 transition-transform" />}
      </div>
    </button>
  );
}
