import React from 'react';
import { Shield, Lock, User, ArrowRight, Github, Chrome } from 'lucide-react';
import { motion } from 'motion/react';

export default function LoginPage({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F6FB] p-8">
      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden">
        {/* Left Side: Branding */}
        <div className="bg-[#121426] p-20 flex flex-col justify-between relative overflow-hidden">
           <div className="absolute top-0 right-0 p-40 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
              <Shield size={300} />
           </div>
           
           <div className="relative z-10">
              <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center font-black text-3xl text-white mb-8 shadow-2xl shadow-violet-600/30">R</div>
              <h1 className="text-4xl font-black text-white leading-tight">RoleNest AI<br/><span className="text-violet-400">Governance Portal</span></h1>
              <p className="text-slate-400 mt-6 max-w-sm font-medium leading-relaxed italic opacity-80">
                “每一个契约背后，都是一段被守护的数字生命。” —— 进入核心管理系统。
              </p>
           </div>

           <div className="relative z-10 flex gap-12">
              <div>
                 <p className="text-2xl font-black text-white leading-none">4.2w+</p>
                 <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2">受控角色数</p>
              </div>
              <div>
                 <p className="text-2xl font-black text-white leading-none">99.98%</p>
                 <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2">服务高可用</p>
              </div>
           </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-20 flex flex-col justify-center bg-white relative">
           <div className="max-w-md mx-auto w-full space-y-10">
              <div className="space-y-3">
                 <h2 className="text-3xl font-black text-slate-800 tracking-tight font-bold">管理员登录</h2>
                 <p className="text-slate-500 font-medium text-sm">请输入您的身份识别凭证以继续</p>
              </div>

              <div className="space-y-6">
                 <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-2 font-bold">管理员账号</label>
                    <div className="relative group">
                       <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-violet-600 transition-colors" size={20} />
                       <input 
                        type="text" 
                        placeholder="Admin UID / Email" 
                        defaultValue="admin@rolenest.ai"
                        className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500/50 transition-all" 
                       />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <div className="flex justify-between items-center px-2">
                       <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest font-bold">访问密钥</label>
                       <button className="text-[10px] text-violet-600 font-black uppercase tracking-tight">忘记密钥？</button>
                    </div>
                    <div className="relative group">
                       <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-violet-600 transition-colors" size={20} />
                       <input 
                        type="password" 
                        placeholder="Master Password" 
                        defaultValue="••••••••"
                        className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500/50 transition-all font-mono" 
                       />
                    </div>
                 </div>

                 <div className="flex items-center gap-3 px-2">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500" />
                    <span className="text-xs font-bold text-slate-500">信任此设备 (30 天免验证)</span>
                 </div>

                 <motion.button 
                    whileTap={{ scale: 0.98 }}
                    onClick={onLogin}
                    className="w-full h-16 bg-violet-600 text-white rounded-2xl font-black text-sm tracking-widest uppercase shadow-xl shadow-violet-600/20 flex items-center justify-center gap-3 transition-all hover:bg-violet-700"
                 >
                    安全通行认证
                    <ArrowRight size={20} className="shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
                 </motion.button>
              </div>

              <div className="pt-10 space-y-6">
                 <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-slate-100" />
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">第三方 SSO 登录</p>
                    <div className="flex-1 h-px bg-slate-100" />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <button className="h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-100 transition-colors">
                       <Github size={20} className="text-slate-800" />
                       <span className="text-xs font-black text-slate-800 uppercase">Github</span>
                    </button>
                    <button className="h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-100 transition-colors">
                       <Chrome size={20} className="text-blue-500" />
                       <span className="text-xs font-black text-slate-800 uppercase">Google</span>
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
