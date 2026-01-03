import React from 'react';

const Taskbar = ({ onStartClick, onMsgClick, onBinClick, onChromeClick, onExplorerClick, onGitClick }) => {
  return (
    <div className="h-12 w-full bg-[#1c1c1cb3] backdrop-blur-md border-t border-white/10 flex items-center justify-center z-[10000]">
      <div className="flex items-center gap-1 h-full">

        {/* Message Icon - Big */}
        <div onClick={onMsgClick} className="w-11 h-11 flex items-center justify-center hover:bg-white/10 rounded-md transition-all cursor-pointer group">
          <img src="message.webp" className="w-8 h-8 object-contain group-active:scale-90" alt="message" />
        </div>

        {/* Chrome Icon - Big */}
        <div onClick={onChromeClick} className="w-11 h-11 flex items-center justify-center hover:bg-white/10 rounded-md transition-all cursor-pointer group">
          <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-active:scale-90">
            <circle cx="50" cy="50" r="22" fill="#4285F4"/>
            <path d="M50 0C32.12 0 16.59 9.42 8.01 23.51L29.5 60.75C31.5 54.5 37.25 50 44 50H88.5C85.5 21.5 60.25 0 50 0Z" fill="#EA4335"/>
            <path d="M8.01 23.51C2.96 31.85 0 41.59 0 52C0 76.25 17.25 96.5 40.5 99.5L62 62.25C59 66.75 53.75 70 48 70C39.5 70 32.25 64.5 29.5 56.75L8.01 23.51Z" fill="#FBBC05"/>
            <path d="M40.5 99.5C43.5 99.85 46.75 100 50 100C77.5 100 100 77.5 100 50C100 44.75 99.25 39.75 97.75 35H54.5C63 35 70 42 70 50.5C70 56.5 66.5 61.5 61.5 64L40.5 99.5Z" fill="#34A853"/>
            <circle cx="50" cy="50" r="26" stroke="white" strokeWidth="6"/>
          </svg>
        </div>

        {/* Explorer Icon - Big */}
        <div onClick={onExplorerClick} className="w-11 h-11 flex items-center justify-center hover:bg-white/10 rounded-md transition-all cursor-pointer group">
          <img src="/fileIcon.webp" className="w-9 h-9 object-contain group-active:scale-90" alt="explorer" />
        </div>

        {/* Git Bash Icon - Big */}
        <div onClick={onGitClick} className="w-11 h-11 flex items-center justify-center hover:bg-white/10 rounded-md transition-all cursor-pointer group">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-active:scale-90">
            <path d="M23.277 11.761L12.239.723a.665.665 0 00-.941 0L9.03 3.001l2.43 2.43a1.99 1.99 0 012.396 2.396l2.457 2.458a1.991 1.991 0 11-.941.941l-2.458-2.457a1.99 1.99 0 01-2.396-2.396l-2.43-2.43L.723 11.298a.665.665 0 000 .941l11.038 11.038a.665.665 0 00.941 0l10.575-10.575a.665.665 0 000-.941z" fill="#F05032"/>
          </svg>
        </div>

        {/* Recycle Bin - Big */}
        <div onClick={onBinClick} className="w-11 h-11 flex items-center justify-center hover:bg-white/10 rounded-md transition-all cursor-pointer group">
          <img src="https://win11.blueedge.me/img/icon/bin0.png" className="w-8 h-8 object-contain group-active:scale-90" alt="bin" />
        </div>
        
      </div>

      <div className="absolute right-4 flex flex-col items-end text-white text-[11px] font-medium leading-tight select-none">
        <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        <span>{new Date().toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default Taskbar;