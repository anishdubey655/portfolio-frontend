import React from 'react';

const AdminWindow = ({ onClose, messages, setAllMessages }) => {
  
  const deleteMsg = async (id) => {
    // 1. Double safety check: Intro messages ko bachane ke liye
    if (id === 1 || id === 2) return;

    // Local state update (UI fast response ke liye)
    const filtered = messages.filter(m => (m.id || m._id) !== id);
    setAllMessages(filtered);
    
    try {
      // 2. LIVE BACKEND DELETE (Updated URL)
      await fetch(`https://portfolio-backend-j4a5.onrender.com/api/messages/${id}`, { 
        method: 'DELETE' 
      });
      console.log("Message deleted from live server");
    } catch (error) {
      console.error("Backend Delete Error:", error);
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center z-[6000] p-4">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-[500px] h-[450px] bg-[#1a1a1a] rounded-lg shadow-2xl flex flex-col border border-white/10 text-white overflow-hidden">
        
        <div className="h-9 bg-[#252525] flex items-center justify-between px-3 border-b border-white/5">
          <span className="text-[11px] font-bold tracking-widest uppercase text-blue-400">Admin - Private Access</span>
          <div onClick={onClose} className="cursor-pointer hover:bg-red-600 px-2 h-full flex items-center transition-all">✕</div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0f0f0f]">
          {messages && messages.length > 0 ? (
            messages.map((m) => (
              <div key={m.id || m._id} className="p-3 bg-[#1e1e1e] rounded border border-white/5 flex justify-between items-start group transition-all">
                <div className="flex-1 pr-4">
                  <p className="text-[10px] text-gray-500 font-bold uppercase">{m.sender || m.name || 'User'}</p>
                  <p className="text-sm text-gray-200 mt-1">{m.text || m.message}</p>
                </div>

                {/* Fixed Logic: Intro messages par delete nahi dikhega */}
                {(m.id !== 1 && m.id !== 2) ? (
                  <button 
                    onClick={() => deleteMsg(m.id || m._id)} 
                    className="text-red-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity hover:underline"
                  >
                    Delete
                  </button>
                ) : (
                  <span className="text-[9px] text-gray-600 uppercase font-bold">System</span>
                )}
              </div>
            ))
          ) : (
            <div className="h-full flex items-center justify-center text-gray-600 text-sm italic">
              No new messages...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminWindow;