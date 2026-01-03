import React, { useState } from 'react';

const TerminalWindow = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('about');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    try {
      const response = await fetch("https://portfolio-backend-j4a5.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert(" Message Sent Successfully!");
        e.target.reset();
      } else {
        alert(" Failed to send message.");
      }
    } catch (err) {
      alert(" Server Error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[6000] p-0 md:p-4">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full h-full md:w-[700px] md:h-[450px] bg-white/90 md:bg-white/80 border border-white/40 md:rounded-lg overflow-hidden flex flex-col shadow-2xl ring-1 ring-black/5">
        
        <div className="h-12 md:h-9 bg-gray-100/60 flex justify-between items-center select-none border-b border-black/5">
          <div className="flex items-center gap-2 ml-3">
            <span className="text-blue-600">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
            </span>
            <span className="text-xs text-gray-600 font-medium uppercase tracking-tight">WhoAmI</span>
          </div>
          <div className="flex h-full">
            <div onClick={onClose} className="px-5 md:px-4 flex items-center hover:bg-[#e81123] hover:text-white transition-colors cursor-pointer group">
              <svg className="stroke-gray-800 group-hover:stroke-white" width="12" height="12" viewBox="0 0 24 24" fill="none" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col md:flex-row overflow-hidden">

          <div className="w-full md:w-48 bg-gray-50/50 p-1 md:p-2 flex md:flex-col gap-1 border-b md:border-b-0 md:border-r border-black/5 overflow-x-auto no-scrollbar">
            <button onClick={() => setActiveTab('about')} className={`flex-1 md:flex-none whitespace-nowrap items-center gap-3 px-3 py-2 rounded-md text-xs md:text-sm transition-all ${activeTab === 'about' ? 'bg-black/10 text-black font-semibold' : 'text-gray-500 hover:bg-black/5'}`}>👤 About</button>
            <button onClick={() => setActiveTab('skills')} className={`flex-1 md:flex-none whitespace-nowrap items-center gap-3 px-3 py-2 rounded-md text-xs md:text-sm transition-all ${activeTab === 'skills' ? 'bg-black/10 text-black font-semibold' : 'text-gray-500 hover:bg-black/5'}`}>{"</>"} Tech</button>
            <button onClick={() => setActiveTab('contact')} className={`flex-1 md:flex-none whitespace-nowrap items-center gap-3 px-3 py-2 rounded-md text-xs md:text-sm transition-all ${activeTab === 'contact' ? 'bg-black/10 text-black font-semibold' : 'text-gray-500 hover:bg-black/5'}`}>📧 Contact</button>
          </div>

          <div className="flex-1 p-5 md:p-8 overflow-y-auto bg-white/20 custom-scrollbar">
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              
              {activeTab === 'about' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5 mb-6 md:mb-8 text-center md:text-left">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-2xl md:text-3xl font-bold text-white shadow-xl shadow-blue-500/20 border-2 border-white/50">A</div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Anish Dubey</h2>
                      <p className="text-blue-600 font-medium text-xs mt-1 flex items-center justify-center md:justify-start gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        Full Stack Developer
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">I am a Full Stack Web Developer. I enjoy building complete web applications from front-end design to back-end logic. I deliver clean and efficient code.</p>
                </div>
              )}

              {activeTab === 'skills' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-10">
                  {[
                    { name: 'React.js', percentage: '70%' },
                    { name: 'Node.js', percentage: '70%' },
                    { name: 'MongoDB', percentage: '80%' },
                    { name: 'JavaScript', percentage: '75%' },
                    { name: 'Tailwind CSS', percentage: '90%' },
                    { name: 'Html', percentage: '100%' },
                    { name: 'Css', percentage: '95%' },
                    { name: 'Render', percentage: '75%' },
                    { name: 'GitHub', percentage: '80%' },
                  ].map((skill) => (
                    <div key={skill.name} className="bg-white p-3 md:p-4 rounded-xl shadow-sm border border-black/5">
                      <div className="flex justify-between text-xs mb-2"><b>{skill.name}</b> <span className="text-blue-600">{skill.percentage}</span></div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-blue-600" style={{ width: skill.percentage }}></div></div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'contact' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-3 mb-6 bg-black/5 p-4 rounded-xl">
                    <input name="name" placeholder="Name" required className="w-full p-2 text-sm rounded border border-black/10 outline-none focus:ring-1 ring-blue-500" />
                    <input name="email" type="email" placeholder="Email" required className="w-full p-2 text-sm rounded border border-black/10 outline-none focus:ring-1 ring-blue-500" />
                    <textarea name="message" placeholder="Your Message" required className="w-full p-2 text-sm rounded border border-black/10 h-20 outline-none focus:ring-1 ring-blue-500"></textarea>
                    <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2.5 rounded text-xs font-bold hover:bg-blue-700 transition-all active:scale-95">
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                  <div className="flex justify-center md:justify-start gap-6">
                    <a href="mailto:anishdubey655@gmail.com" className="text-xs text-blue-600 font-bold hover:underline">Email Me</a>
                    <a href="https://github.com/anishdubey655" target="_blank" rel="noreferrer" className="text-xs text-gray-600 font-bold hover:underline">GitHub</a>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalWindow;