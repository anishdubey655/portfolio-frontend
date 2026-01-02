import React, { useEffect, useState } from 'react';

const AdminWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    fetch('http://localhost:5000/api/messages')
      .then(res => res.json())
      .then(data => setMessages(data))
      .catch(err => console.log("Backend chalu kar bhai"));
  };

  useEffect(() => { getMessages(); }, []);

  const deleteMsg = async (id) => {
    await fetch(`http://localhost:5000/api/messages/${id}`, { method: 'DELETE' });
    getMessages();
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
          {messages.map(m => (
            <div key={m._id} className="p-3 bg-[#1e1e1e] rounded border border-white/5 flex justify-between items-start group">
              <div className="flex-1 pr-4">
                <p className="text-[10px] text-gray-500 font-bold uppercase">{m.name}</p>
                <p className="text-sm text-gray-200 mt-1">{m.message}</p>
              </div>
              <button onClick={() => deleteMsg(m._id)} className="text-red-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminWindow;