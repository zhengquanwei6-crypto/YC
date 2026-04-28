/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Layout, Smartphone, Database, Monitor } from 'lucide-react';
import MobileLayout from './layouts/MobileLayout';
import AdminLayout from './layouts/AdminLayout';

export default function App() {
  const [view, setView] = useState<'mobile' | 'admin'>('mobile');

  return (
    <div className="min-h-screen bg-[#0F111A] text-white font-sans selection:bg-brand-primary/30">
      {/* Platform Switcher */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999]">
        <div className="flex bg-[#090A16]/80 backdrop-blur-md border border-white/10 p-1.5 rounded-full shadow-2xl">
          <button 
            onClick={() => setView('mobile')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${view === 'mobile' ? 'bg-brand-primary text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <Smartphone size={16} />
            <span className="text-[11px] font-bold uppercase tracking-widest">Mobile Client</span>
          </button>
          <button 
            onClick={() => setView('admin')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${view === 'admin' ? 'bg-brand-primary text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <Monitor size={16} />
            <span className="text-[11px] font-bold uppercase tracking-widest">Admin Console</span>
          </button>
        </div>
      </div>

      {/* Primary Viewport */}
      {view === 'mobile' ? (
        <div className="flex justify-center items-center py-10 bg-[#0F111A] min-h-screen">
          <div className="scale-[0.9] origin-center sm:scale-100">
            <MobileLayout />
          </div>
        </div>
      ) : (
        <AdminLayout />
      )}
    </div>
  );
}
