import React from 'react';

const BinWindow = ({ onClose }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-[5000] p-4">

      <div className="absolute inset-0 bg-black/10" onClick={onClose}></div>

      <div className="relative w-full max-w-[700px] h-[450px] bg-[#1c1c1c] rounded-lg shadow-2xl flex flex-col overflow-hidden border border-white/10 text-white">
      
        <div className="h-9 bg-[#2b2b2b] flex items-center justify-between pl-3 select-none border-b border-white/5">
          <div className="flex items-center gap-2">
            <img src="https://win11.blueedge.me/img/icon/bin0.png" className="w-4 h-4" alt="bin" />
            <span className="text-[11px] font-medium text-gray-300">Recycle Bin</span>
          </div>

          {/* Controls */}
          <div className="flex h-full">
            <div className="w-11 h-full flex items-center justify-center hover:bg-white/5 transition-colors text-lg">−</div>
            <div className="w-11 h-full flex items-center justify-center hover:bg-white/5 transition-colors text-[10px]">⬜</div>
            <div 
              onClick={onClose} 
              className="w-11 h-full flex items-center justify-center hover:bg-[#e81123] transition-colors cursor-pointer text-lg"
            >
              ✕
            </div>
          </div>
        </div>

        <div className="flex-1 p-8 flex flex-wrap gap-8 content-start bg-[#191919]">
          
          <div className="group flex flex-col items-center gap-2 w-24 p-2 hover:bg-white/5 rounded cursor-pointer transition-all">
            <div className="relative">
              <img 
                src="pdf.webp" 
                className="w-12 h-12 object-contain" 
                alt="file" 
              />
            </div>
            <span className="text-[11px] text-center leading-tight break-all text-gray-200 group-hover:text-white">
              Book.txt
            </span>
          </div>

        </div>

        <div className="h-6 bg-[#202020] border-t border-white/5 px-3 flex items-center">
          <span className="text-[10px] text-gray-500">1 item</span>
        </div>
      </div>
    </div>
  );
};

export default BinWindow;