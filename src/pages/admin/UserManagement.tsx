import React from 'react';
import { 
  Users, UserPlus, Search, Filter, 
  MoreHorizontal, Ban, BadgeCheck, Mail,
  Calendar, MessageCircle, CreditCard, ChevronLeft, ChevronRight
} from 'lucide-react';
import { MOCK_USERS } from '../../types';

export default function UserManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-800">用户管理系统</h2>
          <p className="text-sm text-slate-500 mt-1">查看用户画像、调配点数额度、处理违规及权限变更</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-violet-600 text-white text-sm font-bold rounded-xl hover:bg-violet-700 shadow-lg shadow-violet-600/20 transition-all">
            <UserPlus size={18} />
            邀请种子创作者
          </button>
        </div>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-4 gap-6">
        <MiniMetric label="累计注册" value="48,290" change="+120" />
        <MiniMetric label="活跃创作者" value="1,420" change="+12" />
        <MiniMetric label="月度留存" value="62.4%" change="+2.1%" />
        <MiniMetric label="限制用户数" value="12" change="0" isWarning />
      </div>

      {/* Table & Filtering */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex items-center justify-between gap-6 overflow-x-auto">
          <div className="flex items-center gap-2 p-1 bg-slate-50 rounded-xl">
            {['全部', '普通用户', '创作者', '管理员', '已封禁'].map((t, i) => (
              <button key={t} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${i === 0 ? 'bg-white text-violet-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}>{t}</button>
            ))}
          </div>
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="text" placeholder="搜索 UID、昵称或关联邮箱..." className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-600">
             <Filter size={16} />
             自定义筛选
          </button>
        </div>

        <table className="w-full text-left">
           <thead>
             <tr className="bg-slate-50/50 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100">
                <th className="px-10 py-5">核心用户</th>
                <th className="px-10 py-5">身份标识</th>
                <th className="px-10 py-5">资产额度</th>
                <th className="px-10 py-5">交互历史</th>
                <th className="px-10 py-5">账户状态</th>
                <th className="px-10 py-5">最后活跃</th>
                <th className="px-10 py-5 text-right">管理</th>
             </tr>
           </thead>
           <tbody className="divide-y divide-slate-50">
             {MOCK_USERS.map((user) => (
               <tr key={user.id} className="group hover:bg-slate-50/50 transition-colors">
                 <td className="px-10 py-6">
                    <div className="flex items-center gap-4">
                       <img src={user.avatar} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                       <div>
                          <p className="font-bold text-slate-800">{user.name}</p>
                          <p className="text-xs text-slate-400">UID: 9283{user.id}</p>
                       </div>
                    </div>
                 </td>
                 <td className="px-10 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${user.role === 'Creator' ? 'bg-pink-100 text-pink-600' : 'bg-slate-100 text-slate-500'}`}>{user.role}</span>
                 </td>
                 <td className="px-10 py-6">
                    <div className="flex items-center gap-2 font-bold text-slate-800">
                       <CreditCard size={14} className="text-violet-400" />
                       {user.credits}
                    </div>
                 </td>
                 <td className="px-10 py-6">
                    <div className="flex items-center gap-2 font-bold text-slate-800">
                       <MessageCircle size={14} className="text-blue-400" />
                       {user.dialogs} 对话
                    </div>
                 </td>
                 <td className="px-10 py-6">
                    <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold uppercase tracking-widest">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                       {user.status}
                    </div>
                 </td>
                 <td className="px-10 py-6">
                    <p className="text-xs font-bold text-slate-600">2024.04.28</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">14:42:01</p>
                 </td>
                 <td className="px-10 py-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                       <button className="p-2 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg"><Mail size={18} /></button>
                       <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg"><Ban size={18} /></button>
                       <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg"><MoreHorizontal size={18} /></button>
                    </div>
                 </td>
               </tr>
             ))}
           </tbody>
        </table>

        <div className="px-10 py-6 bg-slate-50/30 border-t border-slate-100 flex items-center justify-between">
           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Page 1 of 84 • Total 4.2k Users</p>
           <div className="flex gap-2">
              <button className="p-2 rounded-xl bg-white border border-slate-200 text-slate-400 hover:border-violet-500 transition-colors"><ChevronLeft size={16} /></button>
              <button className="p-2 rounded-xl bg-white border border-slate-200 text-slate-400 hover:border-violet-500 transition-colors"><ChevronRight size={16} /></button>
           </div>
        </div>
      </div>
    </div>
  );
}

function MiniMetric({ label, value, change, isWarning }: any) {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm space-y-3">
       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">{label}</span>
       <div className="flex items-end justify-between">
          <h4 className={`text-2xl font-black ${isWarning ? 'text-rose-500' : 'text-slate-800'}`}>{value}</h4>
          <span className={`text-[10px] font-bold ${change.includes('+') ? 'text-emerald-500' : 'text-slate-400'}`}>{change}</span>
       </div>
    </div>
  );
}
