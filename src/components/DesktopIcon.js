const DesktopIcon = ({ name, iconImg, iconColor }) => {
  return (
    <div className="flex flex-col items-center w-24 p-2 m-1 cursor-pointer hover:bg-white/10 rounded-md transition-all group select-none">
      {/* Icon Container: w-12 ko w-14 kar diya */}
      <div className={`w-14 h-14 flex items-center justify-center mb-1 rounded-lg transition-transform group-active:scale-90 ${!iconImg ? iconColor : ''}`}>
        {iconImg ? (
          <img src={iconImg} alt={name} className="w-full h-full object-contain filter drop-shadow-sm" />
        ) : (
          <div className="w-10 h-10 bg-white/20 rounded-sm"></div>
        )}
      </div>
      
      {/* Text: text-[12px] ko thoda bada kiya aur shadow badhayi */}
      <span className="text-white text-[13px] text-center font-normal drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] px-1 leading-tight">
        {name}
      </span>
    </div>
  );
};

export default DesktopIcon;