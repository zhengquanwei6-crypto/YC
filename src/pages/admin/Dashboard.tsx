import React from 'react';
import { 
  Users, MessageCircle, AlertCircle, ShieldAlert, 
  TrendingUp, Activity, BarChart3, Clock, 
  CheckCircle2, XCircle, AlertTriangle, Image as ImageIcon
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';

const data = [
  { name: '04-22', dialogs: 4200, users: 2400 },
  { name: '04-23', dialogs: 5100, users: 2800 },
  { name: '04-24', dialogs: 4800, users: 2600 },
  { name: '04-25', dialogs: 6300, users: 3200 },
  { name: '04-26', dialogs: 7100, users: 3800 },
  { name: '04-27', dialogs: 8200, users: 4200 },
  { name: '04-28', dialogs: 9400, users: 4800 },
];

export default function Dashboard() {
  return (
    <div className="space-y-8 pb-12">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="今日活跃用户" value="4,821" change="+12.4%" icon={<Users className="text-violet-600" />} />
        <MetricCard title="今日对话数" value="12,408" change="+18.2%" icon={<MessageCircle className="text-blue-600" />} />
        <MetricCard title="图片生成数" value="3,120" change="+5.7%" icon={<ImageIcon className="text-pink-600" />} />
        <MetricCard title="待审核事项" value="42" change="-2.4%" icon={<AlertCircle className="text-amber-500" />} color="amber" />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-tight">增长趋势</h3>
              <p className="text-[10px] text-gray-400 font-medium">最近 7 天活跃用户与对话量</p>
            </div>
            <select className="bg-gray-50 border border-gray-100 text-[10px] font-bold uppercase tracking-wider rounded-lg px-2 py-1 outline-none">
              <option>最近7天</option>
              <option>最近30天</option>
            </select>
          </div>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorDialogs" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f8fafc" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#090A16', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '10px' }}
                  itemStyle={{ color: '#8b5cf6' }}
                />
                <Area type="monotone" dataKey="dialogs" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorDialogs)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-tight mb-6">热门角色排名</h3>
          <div className="flex-1 space-y-4">
            {[
              { name: 'Luna Thorne', category: 'Romance', dialogs: '24.2k', rank: 1, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop' },
              { name: 'Sakura Mochi', category: 'Anime', dialogs: '18.5k', rank: 2, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
              { name: 'Cyber X-88', category: 'Adventure', dialogs: '12.1k', rank: 3, avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop' },
              { name: 'Old Wise One', category: 'Fantasy', dialogs: '8.4k', rank: 4, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
            ].map((char) => (
              <div key={char.name} className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                <span className={`text-[10px] font-black w-4 ${char.rank <= 3 ? 'text-brand-primary' : 'text-gray-300'}`}>{char.rank}</span>
                <div className="w-10 h-10 rounded-lg overflow-hidden border border-gray-100 flex-shrink-0">
                  <img src={char.avatar} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-gray-800 truncate">{char.name}</h4>
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter">{char.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-900">{char.dialogs}</p>
                  <p className="text-[8px] text-gray-400 font-bold uppercase">MSG</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 rounded-lg bg-gray-50 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-all border border-gray-100/50">
            View All Ranking
          </button>
        </div>
      </div>

      {/* Systems Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
        {/* Recent Activities */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-tight">系统记录</h3>
            <button className="text-brand-primary text-[10px] font-bold uppercase tracking-widest hover:underline">View All Log</button>
          </div>
          <div className="space-y-4">
            {[
              { type: 'Role', msg: '新角色 "Elowen Frost" 已通过审核并发布', time: '10 MINS AGO', icon: <CheckCircle2 size={16} className="text-emerald-500" /> },
              { type: 'Audit', msg: '监测到疑似违规对话 (ID: #8329), 已自动拦截', time: '24 MINS AGO', icon: <ShieldAlert size={16} className="text-rose-500" /> },
              { type: 'System', msg: '模型 RoleNest-Chat-v2 性能优化完成', time: '1 HOUR AGO', icon: <TrendingUp size={16} className="text-blue-500" /> },
              { type: 'User', msg: '创作者 "Sarah" 更新了其角色的提示词', time: '2 HOURS AGO', icon: <Activity size={16} className="text-brand-primary" /> },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="mt-0.5">{item.icon}</div>
                <div>
                  <p className="text-xs text-gray-800 font-bold leading-tight">{item.msg}</p>
                  <p className="text-[9px] text-gray-400 mt-1 font-bold uppercase tracking-tighter">
                    {item.time} • <span className="text-brand-primary/60">{item.type}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Queue */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-tight">待处理审核</h3>
            <span className="px-2 py-0.5 bg-rose-50 text-rose-500 text-[10px] font-black rounded border border-rose-100 uppercase tracking-widest animate-pulse">Critical</span>
          </div>
          <div className="border border-gray-50 rounded-xl overflow-hidden">
            {[1, 2, 3].map((item, i) => (
              <div key={i} className={`p-4 flex items-center justify-between ${i !== 2 ? 'border-b border-gray-50' : ''} hover:bg-gray-50/50 transition-colors`}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
                    {i === 1 ? <AlertTriangle className="text-amber-500" size={16} /> : <Users className="text-gray-400" size={16} />}
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold text-gray-800 tracking-tight uppercase">Inappropriate Content</h5>
                    <p className="text-[10px] text-gray-400 font-medium">Reporter: Alex_C • 11:24 AM</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-2 py-1 rounded-md bg-gray-100 text-gray-500 text-[9px] font-bold uppercase tracking-tight hover:bg-gray-200">Ignore</button>
                  <button className="px-2 py-1 rounded-md bg-brand-primary text-white text-[9px] font-bold uppercase tracking-tight hover:shadow-lg hover:shadow-brand-primary/20 transition-all">Review</button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-gray-600 transition-colors">
            Enter Review Workspace
          </button>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, change, icon, color = 'violet' }: any) {
  const isPositive = change.startsWith('+');
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 group transition-all hover:bg-gray-50/50">
      <div className="flex items-center justify-between mb-3">
        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{title}</p>
        <div className={`p-1.5 rounded-lg ${color === 'violet' ? 'bg-brand-primary/10 text-brand-primary' : 'bg-amber-50 text-amber-500'}`}>
          {React.cloneElement(icon, { size: 16 })}
        </div>
      </div>
      <div>
        <h4 className="text-2xl font-bold text-gray-900 tracking-tight">{value}</h4>
        <p className={`text-[10px] font-bold mt-1 ${isPositive ? 'text-green-500' : 'text-rose-500'}`}>
          {isPositive ? '↑' : '↓'} {change} <span className="text-gray-400 font-medium">from yest.</span>
        </p>
      </div>
    </div>
  );
}
