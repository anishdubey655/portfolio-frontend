import React from 'react';
import { X, Minus, Square } from 'lucide-react';

const ExplorerWindow = ({ onClose, onResumeClick }) => {
  return (
    <div className="fixed md:absolute inset-0 md:top-10 md:left-10 w-full h-full md:w-[850px] md:h-[520px] bg-white md:rounded-sm shadow-2xl overflow-hidden flex flex-col z-[5000] border-none md:border md:border-gray-300">
      
      <div className="h-12 md:h-9 bg-white flex items-center justify-between px-3 select-none border-b border-gray-100">
        <div className="flex items-center gap-2">
          <img src="/fileicon.webp" className="w-4 h-4" alt="icon" />
          <span className="text-gray-700 text-[12px] font-medium">File Explorer</span>
        </div>
        
        <div className="flex h-full">
          <div className="hidden md:flex w-11 h-full items-center justify-center hover:bg-gray-100"><Minus className="w-3 h-3 text-gray-800" /></div>
          <div className="hidden md:flex w-11 h-full items-center justify-center hover:bg-gray-100"><Square className="w-3 h-3 text-gray-800" /></div>
          <div onClick={onClose} className="w-12 md:w-11 h-full flex items-center justify-center hover:bg-red-600 hover:text-white cursor-pointer group">
            <X className="w-5 h-5 md:w-4 md:h-4 text-gray-800 group-hover:text-white" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">

        <div className="w-48 bg-[#f0f0f0] p-2 hidden md:block select-none border-r border-gray-200">
          <ul className="text-[12px] text-gray-700 space-y-0.5">
            <li className="bg-blue-100 p-1.5 rounded-sm cursor-pointer flex items-center gap-2 px-3 border border-blue-200 font-medium text-blue-700">
              <span>🖥️</span> Desktop
            </li>
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

        <div className="flex-1 bg-white flex flex-col">
          <div className="grid grid-cols-2 md:grid-cols-4 text-[11px] text-gray-500 py-2 px-4 md:px-6 border-b border-gray-100 bg-white sticky top-0 font-medium uppercase tracking-tighter">
            <span>Name</span>
            <span className="hidden md:block">Date modified</span>
            <span className="hidden md:block">Type</span>
            <span className="text-right md:text-left">Size</span>
          </div>
          
          <div className="overflow-y-auto flex-1 p-0 md:p-1">
            <div 
              onClick={onResumeClick}
              className="grid grid-cols-2 md:grid-cols-4 text-[13px] md:text-[12px] text-gray-800 hover:bg-[#e5f3ff] hover:outline hover:outline-1 hover:outline-[#99d1ff] py-3 md:py-1 px-4 md:px-5 cursor-pointer group rounded-sm border-b md:border-none border-gray-50"
            >
              <div className="flex items-center gap-3 md:gap-2">
                <img src="/pdf.webp" className="w-5 h-5 md:w-4 md:h-4" alt="pdf" />
                <span className="font-medium truncate">resume.pdf</span>
              </div>
              
              <span className="hidden md:block text-gray-500 text-[11px]">03-01-2026 16:12</span>
              <span className="hidden md:block text-gray-500 text-[11px]">PDF Document</span>
              
              <span className="text-gray-400 md:text-gray-500 text-[11px] text-right md:text-left flex items-center justify-end md:justify-start">
                1.2 MB
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorerWindow;