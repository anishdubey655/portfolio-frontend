import React, { useState } from 'react';

const MessageWindow = ({ onClose, messages, onSend }) => {
  const [message, setMessage] = useState(''); 
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const currentMsg = message; 
    
    // 1. App.js ki state update karega (UI Syncing)
    onSend(currentMsg); 
    
    setMessage(''); 
    setLoading(true);

    try {
      // 2. LIVE BACKEND API CALL (Updated URL)
      const response = await fetch('https://portfolio-backend-j4a5.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: "User", // Backend validation ke liye
          email: "user@portfolio.com", 
          message: currentMsg 
        }),
      });

      if (!response.ok) {
        throw new Error("Server response failed");
      }
      
      console.log("Message sent to Render backend!");
    } catch (error) {
      console.error("Backend Error:", error);
      // Agar backend down ho toh alert dikhayega
      alert("Backend server respond nahi kar raha, par messages local sync ho gaye hain!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center z-[5000] p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative w-full max-w-[850px] h-[580px] bg-[#1c1c1c] rounded-lg shadow-2xl flex flex-col overflow-hidden border border-white/10 text-white">
        
        {/* Title Bar */}
        <div className="h-10 bg-[#202020] flex items-center justify-between pl-3 select-none border-b border-white/5">
          <div className="flex items-center gap-2">
            <img src="message.webp" className="w-4 h-4 invert opacity-80" alt="icon" />
            <span className="text-[11px] font-medium text-gray-300">Messages</span>
          </div>
          <div className="flex h-full">
            <div onClick={onClose} className="w-12 h-full flex items-center justify-center hover:bg-[#e81123] transition-colors cursor-pointer">
              <span className="text-lg font-light">✕</span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar */}
          <div className="w-[300px] bg-[#252525] border-r border-white/5 flex flex-col">
            <div className="p-5">
              <h2 className="text-xl font-bold mb-4 tracking-tight">Messages</h2>
              <input type="text" placeholder="Search" className="w-full bg-[#323232] border border-white/5 outline-none p-2 px-4 text-sm rounded-md" />
            </div>
            <div className="flex-1 overflow-y-auto px-2">
              <div className="flex items-center gap-3 p-3 bg-blue-600/20 rounded-lg border-l-4 border-blue-500 cursor-pointer shadow-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm">AD</div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">Anish Dubey</p>
                  <p className="text-xs text-gray-400 truncate mt-0.5">Hey! Welcome to my port...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col bg-[#1e1e1e]">
            <div className="flex-1 p-6 flex flex-col gap-4 overflow-y-auto">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`${msg.sender === 'User' ? 'self-end' : 'self-start'} max-w-[85%]`}
                >
                  {msg.sender !== 'User' && (
                    <p className="text-[10px] text-gray-500 ml-3 mb-1 font-bold uppercase">Anish Dubey</p>
                  )}
                  <div className={`p-3 rounded-2xl shadow-md text-[13px] leading-relaxed border border-white/5 ${
                    msg.sender === 'User' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-[#2d2d2d] text-gray-200 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#202020]/50 border-t border-white/5">
              <div className="flex items-center gap-3 bg-[#2d2d2d] rounded-full px-5 py-3 border border-white/10 focus-within:border-blue-500/50 transition-all">
                <input 
                  type="text" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type a message" 
                  className="flex-1 bg-transparent outline-none text-sm text-gray-200 placeholder:text-gray-500"
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={loading}
                  className={`${loading ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-500'} p-1.5 rounded-full transition-all active:scale-95 shadow-lg`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageWindow;