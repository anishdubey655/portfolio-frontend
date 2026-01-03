import React from 'react';
import { X, Minus, Square } from 'lucide-react';

const GitBashWindow = ({ onClose }) => {
  return (
    <div className="fixed md:absolute inset-0 md:top-20 md:left-20 w-full h-full md:w-[650px] md:h-[400px] bg-black md:rounded-t-md shadow-2xl overflow-hidden flex flex-col z-[6000] border-none md:border md:border-[#333]">
      
      <div className="h-12 md:h-8 bg-[#1e1e1e] flex items-center justify-between px-3 select-none">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 md:w-4 md:h-4 bg-orange-600 rounded-sm flex items-center justify-center text-[10px] text-white font-bold">G</div>
          <span className="text-gray-300 text-[11px] md:text-[12px] font-medium tracking-tight">MINGW64:/</span>
        </div>
        
        <div className="flex h-full text-gray-400">

          <div className="hidden md:flex w-10 h-full items-center justify-center hover:bg-white/10">
            <Minus size={14} />
          </div>
          <div className="hidden md:flex w-10 h-full items-center justify-center hover:bg-white/10">
            <Square size={12} />
          </div>
          <div onClick={onClose} className="w-12 md:w-10 h-full flex items-center justify-center hover:bg-red-600 hover:text-white cursor-pointer transition-colors">
            <X size={20} />
          </div>
        </div>
      </div>

      <div className="flex-1 p-3 md:p-2 font-mono text-[12px] md:text-[13px] overflow-y-auto">
        <div className="flex flex-wrap items-center gap-x-2 leading-tight">
          <span className="text-[#27c93f] break-all">admin@DESKTOP-5LCDHQV</span>
          <span className="text-[#d33682]">MINGW64</span>
          <span className="text-[#b58900]">/</span>
        </div>
        
        <div className="flex items-start gap-2 mt-1">
          <span className="text-white font-bold">$</span>
          <input 
            type="text" 
            autoFocus 
            className="bg-transparent border-none outline-none text-white flex-1 caret-white w-full"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
};

export default GitBashWindow;