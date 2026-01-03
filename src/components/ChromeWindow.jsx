import React, { useState } from 'react';

const ChromeWindow = ({ onClose }) => {
 
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, title: "Raktsetu", url:" https://raktsetu-in.vercel.app/ "},
    { id: 2, title: "Edu2medu", url: "https://www.edu2medu.com/" },
    { id: 3, title: "New Tab", url: "about:blank" }
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center z-[5000] p-10">
      <div className="absolute inset-0 bg-black/20" onClick={onClose}></div>

      <div className="relative w-full h-full max-w-[1000px] max-h-[700px] bg-[#f1f3f4] rounded-lg shadow-2xl flex flex-col overflow-hidden border border-gray-400">
        
        <div className="h-10 bg-[#dee1e6] flex items-end px-2 gap-1 pt-2">
          {tabs.map((tab) => (
            <div 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`h-8 px-4 py-1 rounded-t-lg text-[11px] flex items-center gap-2 cursor-pointer transition-all ${
                activeTab === tab.id ? "bg-white border-t border-x border-gray-300 min-w-[160px]" : "hover:bg-gray-300 min-w-[140px]"
              }`}
            >
              <img src="https://www.google.com/favicon.ico" className="w-3 h-3" alt="ico" />
              <span className="truncate">{tab.title}</span>
              {tab.id !== 1 && <span className="ml-auto hover:bg-gray-200 px-1 rounded text-[10px]">✕</span>}
            </div>
          ))}
          
          <div className="ml-auto flex h-full items-center mb-1">
             <div onClick={onClose} className="w-10 h-8 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all cursor-pointer">✕</div>
          </div>
        </div>

        <div className="h-10 bg-white flex items-center px-3 gap-3 border-b border-gray-300">
          <div className="flex-1 bg-[#f1f3f4] h-7 rounded-full flex items-center px-4 text-xs text-gray-600">
            <span className="mr-2 text-green-600">🔒</span>
            <input 
              type="text" 
              value={tabs.find(t => t.id === activeTab).url} 
              className="bg-transparent outline-none w-full" 
              readOnly 
            />
          </div>
        </div>

        <div className="flex-1 bg-white">
          {activeTab === 3 ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-white">
              <h1 className="text-4xl font-bold mb-8 text-gray-400">Google</h1>
              <div className="w-1/2 h-10 border border-gray-300 rounded-full shadow-sm"></div>
            </div>
          ) : (
            <iframe 
              src={tabs.find(t => t.id === activeTab).url} 
              title="Project" 
              className="w-full h-full border-none"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChromeWindow;