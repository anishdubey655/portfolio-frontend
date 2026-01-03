import React, { useState } from 'react';

const ChromeWindow = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, title: "Raktsetu", url: "https://raktsetu-in.vercel.app/" },
    { id: 2, title: "Edu2medu", url: "https://www.edu2medu.com/" },
    { id: 3, title: "New Tab", url: "about:blank" }
  ];

  return (
    <div className="fixed md:absolute inset-0 flex items-center justify-center z-[5000] p-0 md:p-10">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative w-full h-full md:max-w-[1000px] md:max-h-[700px] bg-[#f1f3f4] md:rounded-lg shadow-2xl flex flex-col overflow-hidden border-none md:border md:border-gray-400">
        
        <div className="h-12 md:h-10 bg-[#dee1e6] flex items-end px-1 md:px-2 gap-1 pt-2 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <div 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`h-9 md:h-8 px-2 md:px-4 py-1 rounded-t-lg text-[10px] md:text-[11px] flex items-center gap-1 md:gap-2 cursor-pointer transition-all flex-shrink-0 ${
                activeTab === tab.id 
                ? "bg-white border-t border-x border-gray-300 min-w-[100px] md:min-w-[160px]" 
                : "hover:bg-gray-300 min-w-[80px] md:min-w-[140px]"
              }`}
            >
              <img src="https://www.google.com/favicon.ico" className="w-3 h-3 hidden md:block" alt="ico" />
              <span className="truncate max-w-[60px] md:max-w-none">{tab.title}</span>
              {tab.id !== 1 && <span className="ml-auto hover:bg-gray-200 px-1 rounded text-[10px] hidden md:inline">✕</span>}
            </div>
          ))}
          
          <div className="ml-auto flex h-full items-center mb-1 sticky right-0 bg-[#dee1e6] pl-2">
             <div onClick={onClose} className="w-10 h-8 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all cursor-pointer rounded-md">✕</div>
          </div>
        </div>

        <div className="h-10 bg-white flex items-center px-3 gap-2 md:gap-3 border-b border-gray-300">
          <div className="flex-1 bg-[#f1f3f4] h-7 rounded-full flex items-center px-4 text-[10px] md:text-xs text-gray-600 overflow-hidden">
            <span className="mr-2 text-green-600 hidden md:inline">🔒</span>
            <input 
              type="text" 
              value={tabs.find(t => t.id === activeTab).url} 
              className="bg-transparent outline-none w-full truncate" 
              readOnly 
            />
          </div>
        </div>

        <div className="flex-1 bg-white overflow-hidden">
          {activeTab === 3 ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-white p-4 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-300">Google</h1>
              <div className="w-full max-w-[400px] h-10 border border-gray-200 rounded-full shadow-sm bg-gray-50"></div>
            </div>
          ) : (
            <iframe 
              src={tabs.find(t => t.id === activeTab).url} 
              title="Project" 
              className="w-full h-full border-none"
              sandbox="allow-scripts allow-same-origin"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChromeWindow;