import React, { useState } from 'react';
import { Home, MessageCircle, ImagePlus, User, Settings2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Mobile Pages
import HomeM from '../pages/mobile/HomeM';
import CharacterDetailM from '../pages/mobile/CharacterDetailM';
import ChatM from '../pages/mobile/ChatM';
import GenerationM from '../pages/mobile/GenerationM';
import ProfileM from '../pages/mobile/ProfileM';
import MiniAdminM from '../pages/mobile/MiniAdminM';

export default function MobileLayout() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCharId, setSelectedCharId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<'tabs' | 'detail' | 'chat'>('tabs');

  const renderContent = () => {
    if (currentPage === 'detail') return <CharacterDetailM id={selectedCharId!} onBack={() => setCurrentPage('tabs')} onChat={() => setCurrentPage('chat')} />;
    if (currentPage === 'chat') return <ChatM id={selectedCharId!} onBack={() => setCurrentPage('detail')} />;

    switch (activeTab) {
      case 'home': return <HomeM onSelectChar={(id) => { setSelectedCharId(id); setCurrentPage('detail'); }} />;
      case 'chat': return <ChatM id={selectedCharId || '1'} />;
      case 'generate': return <GenerationM />;
      case 'profile': return <ProfileM onOpenAdmin={() => setActiveTab('admin')} />;
      case 'admin': return <MiniAdminM />;
      default: return <HomeM onSelectChar={() => {}} />;
    }
  };

  return (
    <div className="relative w-[390px] h-[844px] bg-mobile-bg shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden rounded-[40px] border-[6px] border-mobile-card flex flex-col ring-1 ring-white/10">
      {/* Mobile Status Bar */}
      <div className="h-8 px-8 flex justify-between items-center text-[10px] text-white/40 pt-2 shrink-0 z-50">
        <span className="font-bold">9:41</span>
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 rounded-full border border-white/20"></div>
          <div className="w-4 h-2.5 bg-white/40 rounded-sm"></div>
        </div>
      </div>

      {/* Dynamic Content Area */}
      <div className="flex-1 overflow-y-auto scrollbar-hide relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage === 'tabs' ? activeTab : currentPage}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="min-h-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Persistent Bottom Nav (Only for tab views) */}
      {currentPage === 'tabs' && (
        <div className="h-[72px] bg-mobile-surface/80 backdrop-blur-md border-t border-white/5 flex items-center justify-around px-4 pb-2 z-50">
          <NavBtn icon={<Home />} label="首页" active={activeTab === 'home'} onClick={() => setActiveTab('home')} color="#8B5CF6" />
          <NavBtn icon={<MessageCircle />} label="聊天" active={activeTab === 'chat'} onClick={() => setActiveTab('chat')} color="#EC4899" />
          <NavBtn icon={<ImagePlus />} label="生成" active={activeTab === 'generate'} onClick={() => setActiveTab('generate')} color="#22D3EE" />
          <NavBtn icon={<User />} label="我的" active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} color="#8B5CF6" />
        </div>
      )}
    </div>
  );
}

function NavBtn({ icon, label, active, onClick, color }: any) {
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-1 min-w-[64px] relative">
      <div className={`transition-all ${active ? 'text-brand-primary' : 'text-white/30'}`} style={{ color: active ? color : undefined }}>
        {React.cloneElement(icon, { size: 20, strokeWidth: active ? 2.5 : 1.5 })}
      </div>
      <span className={`text-[8px] font-bold tracking-widest uppercase transition-colors ${active ? '' : 'text-white/20'}`} style={{ color: active ? color : undefined }}>{label}</span>
      {active && <motion.div layoutId="nav-dot" className="w-1 h-1 rounded-full absolute -bottom-1 bg-current" style={{ color }} />}
    </button>
  );
}
