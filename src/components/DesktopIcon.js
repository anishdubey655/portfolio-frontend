const DesktopIcon = ({ name, iconImg, iconColor }) => {
  return (
    <div className="flex flex-col items-center w-24 p-2 m-2 cursor-pointer hover:bg-white/10 rounded-md transition-all group">
      <div className={`w-12 h-12 flex items-center justify-center mb-1 rounded-lg ${!iconImg ? iconColor : ''}`}>
        {/* Agar iconImg hai toh image dikhao, nahi toh color wala box */}
        {iconImg ? (
          <img src={iconImg} alt={name} className="w-full h-full object-contain" />
        ) : (
          <div className="w-8 h-8 bg-white/20 rounded-sm"></div>
        )}
      </div>
      <span className="text-white text-[12px] text-center font-medium drop-shadow-md">
        {name}
      </span>
    </div>
  );
};

export default DesktopIcon;