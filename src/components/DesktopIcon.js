import React from 'react';

const DesktopIcon = ({ name, iconImg, iconColor }) => {
  return (
    <div className="flex flex-col items-center w-20 sm:w-24 p-1 sm:p-2 cursor-pointer hover:bg-white/10 rounded-md transition-all group select-none">

      <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-1 rounded-lg transition-transform group-active:scale-90 ${!iconImg ? iconColor : ''}`}>
        {iconImg ? (
          <img src={iconImg} alt={name} className="w-full h-full object-contain filter drop-shadow-sm" />
        ) : (
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-sm"></div>
        )}
      </div>

      <span className="text-white text-[11px] sm:text-[13px] text-center font-normal drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] px-1 leading-tight line-clamp-2">
        {name}
      </span>
    </div>
  );
};

export default DesktopIcon;