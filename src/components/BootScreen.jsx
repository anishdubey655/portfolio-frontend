import React, { useState, useEffect } from 'react';

const BootScreen = ({ onBootComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
  
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onBootComplete, 800); 
          return 100;
        }
        return prev + 1; 
      });
    }, 30); 

    return () => clearInterval(interval);
  }, [onBootComplete]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[99999] font-sans">
      
      <div className="mb-16 scale-125 animate-pulse">
        <svg width="100" height="100" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H42.3V42.3H0V0Z" fill="#0078D4"/>
          <path d="M45.7 0H88V42.3H45.7V0Z" fill="#0078D4"/>
          <path d="M0 45.7H42.3V88H0V45.7Z" fill="#0078D4"/>
          <path d="M45.7 45.7H88V88H45.7V45.7Z" fill="#0078D4"/>
        </svg>
      </div>

      <div className="w-64 h-[3px] bg-white/10 rounded-full overflow-hidden relative">
        <div 
          className="h-full bg-white transition-all duration-100 ease-out shadow-[0_0_10px_rgba(255,255,255,0.7)]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="mt-6 flex flex-col items-center gap-1">
        <p className="text-white/60 text-[11px] tracking-[0.3em] font-light uppercase">
          Anish Windows...
        </p>
      </div>

      <div className="absolute bottom-12 flex gap-1">
         <div className="w-1 h-1 bg-white/20 rounded-full animate-bounce"></div>
         <div className="w-1 h-1 bg-white/20 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
         <div className="w-1 h-1 bg-white/20 rounded-full animate-bounce [animation-delay:-0.5s]"></div>
      </div>
    </div>
  );
};

export default BootScreen;