import React, { useState } from 'react';
import { 
  Search, Filter, Plus, MoreHorizontal, 
  Edit3, Trash2, Eye, ExternalLink, 
  CheckCircle2, Clock, XCircle, ChevronLeft, ChevronRight
} from 'lucide-react';
import { MOCK_CHARACTERS } from '../../types';

export default function RoleList({ onEdit }: { onEdit: () => void }) {
  const [filter, setFilter] = useState('All');

  return (
    <div className="space-y-6">
      {/* Actions Bar */}
      <div className="flex items-center justify-between bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl">
            {['All', 'Online', 'Draft', 'Offline'].map(t => (
              <button 
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === t ? 'bg-white text-violet-600 shadow-sm shadow-black/5' : 'text-slate-500 hover:text-slate-800'}`}
              >
                {t === 'All' ? '全部角色' : (t === 'Online' ? '已上线' : (t === 'Draft' ? '草稿箱' : '已下架'))}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="text" placeholder="按名称或分类搜索..." className="pl-10 pr-4 py-2.5 bg-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 w-80" />
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-600 text-sm font-bold rounded-xl hover:bg-slate-200 transition-colors">
            <ExternalLink size={18} />
            批量导出
          </button>
          <button onClick={onEdit} className="flex items-center gap-2 px-6 py-2.5 bg-violet-600 text-white text-sm font-bold rounded-xl hover:bg-violet-700 shadow-lg shadow-violet-600/20 transition-all">
            <Plus size={18} />
            新建角色
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100 text-[11px] font-black text-slate-400 uppercase tracking-widest">
              <th className="px-6 py-4 w-12">排序</th>
              <th className="px-6 py-4">基础信息</th>
              <th className="px-6 py-4">分类与标签</th>
              <th className="px-6 py-4">交互统计</th>
              <th className="px-6 py-4">状态</th>
              <th className="px-6 py-4">更新时间</th>
              <th className="px-6 py-4 text-right">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 px-24">
            {MOCK_CHARACTERS.map((char, index) => (
              <tr key={char.id} className="group hover:bg-slate-50/80 transition-colors">
                <td className="px-6 py-5">
                   <span className="text-sm font-bold text-slate-300">0{index + 1}</span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <img src={char.avatar} className="w-12 h-12 rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform" />
                    <div>
                      <p className="font-bold text-slate-800 group-hover:text-violet-600 transition-colors">{char.name}</p>
                      <p className="text-xs text-slate-500 mt-0.5 max-w-[200px] truncate">{char.description}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="px-3 py-1 bg-violet-100 text-violet-600 text-[10px] font-black rounded-lg uppercase tracking-tight">{char.category}</span>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {char.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">#{tag}</span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-800">{(char.stats.dialogs / 1000).toFixed(1)}k</p>
                    <p className="text-[10px] text-slate-400 font-medium">总对话数</p>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <StatusBadge status={char.status} />
                </td>
                <td className="px-6 py-5">
                  <p className="text-sm font-medium text-slate-600">{char.updatedAt}</p>
                  <p className="text-[10px] text-slate-400">14:32:01</p>
                </td>
                <td className="px-6 py-5 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all" title="查看预览">
                      <Eye size={18} />
                    </button>
                    <button onClick={onEdit} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="编辑设定">
                      <Edit3 size={18} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all" title="删除角色">
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="group-hover:hidden transition-all">
                    <MoreHorizontal className="text-slate-300 ml-auto" size={20} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Dummy */}
        <div className="px-8 py-5 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">显示第 1 - 22 条，共 124 条结果</p>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg border border-slate-200 text-slate-400 disabled:opacity-50" disabled><ChevronLeft size={16} /></button>
            {[1, 2, 3].map(p => (
              <button key={p} className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${p === 1 ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/20' : 'bg-white border border-slate-200 text-slate-500 hover:border-violet-300'}`}>{p}</button>
            ))}
            <button className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:border-violet-300"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: any) {
  const styles: any = {
    Online: { bg: 'bg-emerald-100', text: 'text-emerald-600', icon: <CheckCircle2 size={12} />, label: '已上线' },
    Draft: { bg: 'bg-blue-100', text: 'text-blue-600', icon: <Clock size={12} />, label: '草稿' },
    Offline: { bg: 'bg-slate-100', text: 'text-slate-400', icon: <XCircle size={12} />, label: '下架' },
  };
  const s = styles[status] || styles.Draft;
  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${s.bg} ${s.text} text-[10px] font-black uppercase tracking-widest`}>
      {s.icon}
      {s.label}
    </div>
  );
}
