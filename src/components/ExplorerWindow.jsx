import React from 'react';
import { X, Minus, Square } from 'lucide-react';

const ExplorerWindow = ({ onClose, onResumeClick }) => {
  return (
    <div className="absolute top-10 left-10 w-[95vw] md:w-[850px] h-[520px] bg-white rounded-sm shadow-2xl overflow-hidden flex flex-col z-[5000] border border-gray-300">
      
      {/* Title Bar */}
      <div className="h-9 bg-white flex items-center justify-between px-3 select-none border-b border-gray-100">
        <div className="flex items-center gap-2">
          <img src="/fileicon.webp" className="w-4 h-4" alt="icon" />
          <span className="text-gray-700 text-[12px]">File Explorer</span>
        </div>
        
        <div className="flex h-full">
          <div className="w-11 h-full flex items-center justify-center hover:bg-gray-100"><Minus className="w-3 h-3 text-gray-800" /></div>
          <div className="w-11 h-full flex items-center justify-center hover:bg-gray-100"><Square className="w-3 h-3 text-gray-800" /></div>
          <div onClick={onClose} className="w-11 h-full flex items-center justify-center hover:bg-red-600 hover:text-white cursor-pointer group">
            <X className="w-4 h-4 text-gray-800 group-hover:text-white" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-48 bg-[#f0f0f0] p-2 hidden md:block select-none border-r border-gray-200">
          <ul className="text-[12px] text-gray-700 space-y-0.5">
            {/* Desktop (Active) */}
            <li className="bg-blue-100 p-1.5 rounded-sm cursor-pointer flex items-center gap-2 px-3 border border-blue-200 font-medium text-blue-700">
              <span>🖥️</span> Desktop
            </li>

            {/* 3 Naye Items (Jo kaam nahi karenge, sirf show honge) */}
            <li className="hover:bg-gray-200 p-1.5 rounded-sm cursor-default flex items-center gap-2 px-3">
              <span>⬇️</span> Downloads
            </li>
            <li className="hover:bg-gray-200 p-1.5 rounded-sm cursor-default flex items-center gap-2 px-3">
              <span>🖼️</span> Pictures
            </li>
            <li className="hover:bg-gray-200 p-1.5 rounded-sm cursor-default flex items-center gap-2 px-3">
              <span>🎬</span> Videos
            </li>

            <li className="hover:bg-gray-200 p-1.5 rounded-sm cursor-default flex items-center gap-2 px-3">
              <span>📁</span> Documents
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-white flex flex-col">
          <div className="grid grid-cols-4 text-[11px] text-gray-500 py-2 px-6 border-b border-gray-100 bg-white sticky top-0">
            <span>Name</span>
            <span>Date modified</span>
            <span>Type</span>
            <span>Size</span>
          </div>
          
          <div className="overflow-y-auto flex-1 p-1">
            {/* Resume Row (Clickable) */}
            <div 
              onClick={onResumeClick}
              className="grid grid-cols-4 text-[12px] text-gray-800 hover:bg-[#e5f3ff] hover:outline hover:outline-1 hover:outline-[#99d1ff] py-1 px-5 cursor-pointer group rounded-sm"
            >
              <div className="flex items-center gap-2">
                <img src="/pdf.webp" className="w-4 h-4" alt="pdf" />
                <span className="font-medium">resume.pdf</span>
              </div>
              <span className="text-gray-500 text-[11px]">03-01-2026 16:12</span>
              <span className="text-gray-500 text-[11px]">PDF Document</span>
              <span className="text-gray-500 text-[11px]">1,250 KB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorerWindow;