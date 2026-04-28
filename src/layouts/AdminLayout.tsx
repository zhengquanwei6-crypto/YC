import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, BookUser, MessageSquare, Image, 
  Cpu, Workflow, ShieldCheck, Settings, LogOut, Bell, Search, 
  PlusCircle, FileText, Smartphone
} from 'lucide-react';
import { motion } from 'motion/react';

// Admin Pages Dummy Imports or Logic
import Dashboard from '../pages/admin/Dashboard';
import RoleList from '../pages/admin/RoleList';
import RoleEdit from '../pages/admin/RoleEdit';
import AICreate from '../pages/admin/AICreate';
import PromptManager from '../pages/admin/PromptManager';
import ModelConfig from '../pages/admin/ModelConfig';
import WorkflowEditor from '../pages/admin/WorkflowEditor';
import UserManagement from '../pages/admin/UserManagement';
import AuditCenter from '../pages/admin/AuditCenter';
import SettingsPage from '../pages/admin/SettingsPage';
import LoginPage from '../pages/admin/LoginPage';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Default true for demo

  if (!isLoggedIn) return <LoginPage onLogin={() => setIsLoggedIn(true)} />;

  const menuItems = [
    { id: 'dashboard', icon: <LayoutDashboard size={20} />, label: '数据看板' },
    { id: 'role-mgmt', icon: <BookUser size={20} />, label: '角色管理' },
    { id: 'ai-create', icon: <PlusCircle size={20} />, label: 'AI 创建角色' },
    { id: 'prompt', icon: <FileText size={20} />, label: '提示词管理' },
    { id: 'model', icon: <Cpu size={20} />, label: '模型配置' },
    { id: 'workflow', icon: <Workflow size={20} />, label: '图像工作流' },
    { id: 'user', icon: <Users size={20} />, label: '用户管理' },
    { id: 'audit', icon: <ShieldCheck size={20} />, label: '内容审核' },
    { id: 'settings', icon: <Settings size={20} />, label: '系统设置' },
  ];

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard': return <Dashboard />;
      case 'role-mgmt': return <RoleList onEdit={() => setActivePage('role-edit')} />;
      case 'role-edit': return <RoleEdit onBack={() => setActivePage('role-mgmt')} />;
      case 'ai-create': return <AICreate />;
      case 'prompt': return <PromptManager />;
      case 'model': return <ModelConfig />;
      case 'workflow': return <WorkflowEditor />;
      case 'user': return <UserManagement />;
      case 'audit': return <AuditCenter />;
      case 'settings': return <SettingsPage />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-admin-bg text-slate-900 overflow-hidden font-sans">
      {/* App Top Header */}
      <header className="h-14 border-b border-gray-800 bg-[#090A16] flex items-center justify-between px-6 shrink-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center font-bold text-lg shadow-lg shadow-purple-500/20 text-white">R</div>
          <span className="font-bold text-xl tracking-tight text-white">RoleNest <span className="text-brand-primary">AI</span></span>
          <span className="ml-4 px-2 py-0.5 bg-gray-800 rounded text-[10px] text-gray-400 uppercase tracking-widest font-semibold">V2.0.4 PRO</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-400 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>System Status: Online</span>
          </div>
          <div className="h-4 w-px bg-gray-800"></div>
          <div className="flex items-center gap-3">
            <span>Admin: Chen_Staff</span>
            <div className="w-8 h-8 rounded-full bg-gray-700 border border-gray-600 overflow-hidden">
              <img src="https://i.pravatar.cc/150?u=admin" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-56 bg-admin-sidebar border-r border-gray-800 flex flex-col py-6">
          <div className="px-5 mb-8 text-[10px] font-bold text-gray-500 uppercase tracking-widest px-2">
            Core Systems
          </div>
          <nav className="flex-1 px-4 space-y-1 overflow-y-auto scrollbar-hide">
             {menuItems.map((item) => (
               <button
                 key={item.id}
                 onClick={() => setActivePage(item.id)}
                 className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${activePage === item.id ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
               >
                 <div className={`w-5 h-5 flex items-center justify-center ${activePage === item.id ? 'opacity-100' : 'opacity-50'}`}>
                   {React.cloneElement(item.icon as React.ReactElement, { size: 18 })}
                 </div>
                 {item.label}
               </button>
             ))}
          </nav>

          <div className="p-4 border-t border-gray-800">
            <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-rose-400 text-sm font-medium transition-colors">
              <LogOut size={18} opacity={0.5} />
              退出系统
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Header Bar */}
        <header className="h-14 bg-white border-b border-gray-100 px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-gray-800 uppercase tracking-tight text-sm">{activePage.replace('-', ' ')}</h3>
            <div className="px-2 py-0.5 bg-gray-50 border border-gray-100 rounded text-[10px] text-gray-400 font-medium italic">Active Session</div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-[10px] font-bold">
              <span className="bg-brand-primary/10 text-brand-primary border border-brand-primary/20 px-2 py-0.5 rounded uppercase">Auto-Refresh</span>
              <span className="text-gray-400 uppercase tracking-tighter">Sync: 12:45:01</span>
            </div>
            <div className="h-4 w-px bg-gray-100 border-l border-gray-200"></div>
            <button className="p-1.5 text-gray-400 hover:text-brand-primary transition-colors relative">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {renderPage()}
          </motion.div>
        </div>

        {/* Console Footer */}
        <footer className="h-8 bg-admin-sidebar border-t border-gray-800 flex items-center justify-between px-6 text-[10px] text-gray-500 shrink-0">
          <div className="flex gap-4">
            <span className="opacity-60">High Fidelity APK Design System</span>
            <span className="opacity-40">f0e39a2_release</span>
          </div>
          <div className="flex gap-4 uppercase tracking-tighter">
            <span className="text-brand-primary font-bold">● 0 ISSUES</span>
            <span className="opacity-60 italic">RoleNest AI Administration Portal © 2024</span>
          </div>
        </footer>
      </main>
    </div>
  </div>
  );
}
