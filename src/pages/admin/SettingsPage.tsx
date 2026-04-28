import React from 'react';
import { 
  Building, Shield, Activity, Users, Bell, 
  CreditCard, Globe, Database, Cpu, 
  FileLock, Save, RefreshCw, Key
} from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-8 pb-32">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-800">系统全局设置</h2>
          <p className="text-sm text-slate-500 mt-1">配置站点元信息、权限角色映射及全平台额度规则</p>
        </div>
        <button className="flex items-center gap-2 px-8 py-3 bg-violet-600 text-white text-sm font-bold rounded-xl hover:bg-violet-700 shadow-lg shadow-violet-600/20 transition-all">
          <Save size={18} />
          同步所有变更
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Sidebar Sections */}
        <div className="space-y-4">
           <SettingsNav active label="基本设置" icon={<Building />} />
           <SettingsNav label="合规与安全性" icon={<Shield />} />
           <SettingsNav label="用户权限组" icon={<Users />} />
           <SettingsNav label="点数与账单" icon={<CreditCard />} />
           <SettingsNav label="CDN 与部署" icon={<Globe />} />
        </div>

        {/* Main Form Fields */}
        <div className="md:col-span-2 space-y-8">
           <Section title="站点元信息">
              <div className="grid grid-cols-2 gap-8">
                 <Field label="应用名称" value="RoleNest AI" />
                 <Field label="站点域名" value="api.rolenest.ai" />
              </div>
              <Field label="站点描述" type="textarea" value="下一代 AI 沉浸式养成与对话社区。探索无限可能的角色元联，开启属于你的第二人生。" />
           </Section>

           <Section title="经济规则设定 (Point Economy)">
              <div className="grid grid-cols-3 gap-6">
                 <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">对话单位开销</p>
                    <p className="text-xl font-black text-slate-800 tracking-tight">1 <span className="text-[10px] font-normal opacity-40 ml-1">幻念点 / 次</span></p>
                 </div>
                 <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">图片生成成本</p>
                    <p className="text-xl font-black text-slate-800 tracking-tight">12 <span className="text-[10px] font-normal opacity-40 ml-1">幻念点 / 张</span></p>
                 </div>
                 <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">默认注册赠送</p>
                    <p className="text-xl font-black text-slate-800 tracking-tight">500 <span className="text-[10px] font-normal opacity-40 ml-1">幻念点</span></p>
                 </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-100 rounded-2xl text-amber-600 text-xs font-bold font-medium leading-relaxed">
                 <Activity size={24} className="flex-shrink-0" />
                 任何经济规则的修改都将产生即时全局影响，涉及超过 4.2w 活跃账户，请谨慎决策。
              </div>
           </Section>

           <Section title="开发者配置 (Advanced)">
              <div className="grid grid-cols-2 gap-8">
                 <div className="space-y-3">
                    <div className="flex items-center justify-between">
                       <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-2 font-bold">MASTER API KEY</label>
                       <button className="text-[10px] text-violet-600 font-bold uppercase tracking-tight flex items-center gap-1"><RefreshCw size={10} /> 强制轮换</button>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-900 rounded-2xl border border-slate-700 text-white">
                       <Key size={18} className="text-slate-500" />
                       <span className="font-mono text-xs text-slate-400 flex-1">RN_LIVE_7392_••••••••••••••••</span>
                    </div>
                 </div>
                 <div className="space-y-3">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-2 font-bold">系统维护模式</label>
                    <div className="h-[54px] bg-slate-100 rounded-2xl flex items-center justify-between px-6">
                       <span className="text-sm font-bold text-slate-500">已禁用</span>
                       <div className="w-10 h-6 bg-slate-300 rounded-full relative p-1 cursor-not-allowed">
                          <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                       </div>
                    </div>
                 </div>
              </div>
           </Section>
        </div>
      </div>
    </div>
  );
}

function SettingsNav({ icon, label, active }: any) {
  return (
    <button className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all text-left ${active ? 'bg-white text-violet-600 shadow-sm border border-slate-100' : 'text-slate-400 hover:text-slate-600 hover:bg-white/50'}`}>
       {React.cloneElement(icon, { size: 20 })}
       {label}
    </button>
  );
}

function Section({ title, children }: any) {
  return (
    <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 space-y-8">
       <h3 className="text-lg font-black text-slate-800 tracking-tight flex items-center gap-3">
          <div className="w-1.5 h-8 bg-violet-600 rounded-full" />
          {title}
       </h3>
       {children}
    </div>
  );
}

function Field({ label, value, type = 'text' }: any) {
  return (
    <div className="space-y-3">
       <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-2 font-bold">{label}</label>
       {type === 'text' ? (
         <input type="text" defaultValue={value} className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500/50 transition-all font-medium" />
       ) : (
         <textarea defaultValue={value} rows={3} className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500/50 transition-all font-medium leading-relaxed" />
       )}
    </div>
  );
}
