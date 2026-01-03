import React from 'react';
import { X, Minus, Square } from 'lucide-react';

const GitBashWindow = ({ onClose }) => {
  return (
    <div className="absolute top-20 left-20 w-[90vw] md:w-[650px] h-[400px] bg-black rounded-t-md shadow-2xl overflow-hidden flex flex-col z-[6000] border border-[#333]">
      
      {/* Title Bar (Git Bash Style) */}
      <div className="h-8 bg-[#1e1e1e] flex items-center justify-between px-3 select-none">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-orange-600 rounded-sm flex items-center justify-center text-[10px] text-white font-bold">G</div>
          <span className="text-gray-300 text-[12px]">MINGW64:/</span>
        </div>
        
        <div className="flex h-full text-gray-400">
          <div className="w-10 h-full flex items-center justify-center hover:bg-white/10"><Minus size={14} /></div>
          <div className="w-10 h-full flex items-center justify-center hover:bg-white/10"><Square size={12} /></div>
          <div onClick={onClose} className="w-10 h-full flex items-center justify-center hover:bg-red-600 hover:text-white cursor-pointer transition-colors">
            <X size={16} />
          </div>
        </div>
      </div>

      {/* Terminal Content Area */}
      <div className="flex-1 p-2 font-mono text-[13px] overflow-y-auto">
        <div className="flex flex-wrap items-center gap-x-2">
          <span className="text-[#27c93f]">admin@DESKTOP-5LCDHQV</span>
          <span className="text-[#d33682]">MINGW64</span>
          <span className="text-[#b58900]">/</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-white">$</span>
          <input 
            type="text" 
            autoFocus 
            className="bg-transparent border-none outline-none text-white flex-1 caret-white"
          />
        </div>
      </div>
    </div>
  );
};

export default GitBashWindow;