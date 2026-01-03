import { useState } from 'react';

const TerminalWindow = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('about');
  const [loading, setLoading] = useState(false);

  // Form handle karne ka function
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
        alert("✅ Message Sent Successfully!");
        e.target.reset();
      } else {
        alert("❌ Failed to send message.");
      }
    } catch (err) {
      alert("❌ Server Error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/10 backdrop-blur-sm">
      <div className="w-[700px] h-[450px] bg-white/80 border border-white/40 rounded-lg overflow-hidden flex flex-col shadow-2xl ring-1 ring-black/5">
        
        {/* Title Bar */}
        <div className="h-9 bg-gray-100/60 flex justify-between items-center select-none border-b border-black/5">
          <div className="flex items-center gap-2 ml-3">
            <span className="text-blue-600">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
            </span>
            <span className="text-xs text-gray-600 font-medium">WhoAmI</span>
          </div>
          <div className="flex h-full">
            <div className="px-4 flex items-center hover:bg-black/5 transition-colors cursor-default border-r border-black/5"><div className="w-3 h-[1px] bg-gray-800"></div></div>
            <div className="px-4 flex items-center hover:bg-black/5 transition-colors cursor-default border-r border-black/5"><div className="w-2.5 h-2.5 border border-gray-800"></div></div>
            <div onClick={onClose} className="px-4 flex items-center hover:bg-[#e81123] hover:text-white transition-colors cursor-default group">
              <svg className="stroke-gray-800 group-hover:stroke-white" width="10" height="10" viewBox="0 0 24 24" fill="none" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-48 bg-gray-50/50 p-2 flex flex-col gap-1 border-r border-black/5">
            <button onClick={() => setActiveTab('about')} className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all ${activeTab === 'about' ? 'bg-black/5 text-black font-semibold' : 'text-gray-500 hover:bg-black/5'}`}>👤 About Me</button>
            <button onClick={() => setActiveTab('skills')} className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all ${activeTab === 'skills' ? 'bg-black/5 text-black font-semibold' : 'text-gray-500 hover:bg-black/5'}`}>{"</>"} Tech Stack</button>
            <button onClick={() => setActiveTab('contact')} className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all ${activeTab === 'contact' ? 'bg-black/5 text-black font-semibold' : 'text-gray-500 hover:bg-black/5'}`}>📧 Contact</button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-8 overflow-y-auto bg-white/20 custom-scrollbar">
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              
              {/* About Tab */}
              {activeTab === 'about' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-blue-500/20 border-2 border-white/50">A</div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800">Anish Dubey</h2>
                      <p className="text-blue-600 font-medium text-sm mt-1 flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>Full Stack Web Developer</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">I am a Full Stack Web Developer. I enjoy building complete web applications from front-end design to back-end logic. I delivery clean and efficient code.</p>
                </div>
              )}

              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <div className="grid grid-cols-2 gap-4 pb-10">
                  {[
                    { name: 'React.js', percentage: '70%' },
                    { name: 'Node.js', percentage: '70%' },
                    { name: 'MongoDB', percentage: '80%' },
                    { name: 'JavaScript', percentage: '75%' },
                    { name: 'Tailwind CSS', percentage: '90%' },
                  ].map((skill) => (
                    <div key={skill.name} className="bg-white p-4 rounded-xl shadow-sm border border-black/5">
                      <div className="flex justify-between text-sm mb-2"><b>{skill.name}</b> <span className="text-blue-600">{skill.percentage}</span></div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-blue-600" style={{ width: skill.percentage }}></div></div>
                    </div>
                  ))}
                </div>
              )}

              {/* Contact Tab with Form */}
              {activeTab === 'contact' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Send a Message</h2>
                  
                  {/* LIVE FORM */}
                  <form onSubmit={handleSubmit} className="space-y-3 mb-6 bg-black/5 p-4 rounded-xl">
                    <input name="name" placeholder="Name" required className="w-full p-2 text-sm rounded border border-black/10 outline-none focus:ring-1 ring-blue-500" />
                    <input name="email" type="email" placeholder="Email" required className="w-full p-2 text-sm rounded border border-black/10 outline-none focus:ring-1 ring-blue-500" />
                    <textarea name="message" placeholder="Your Message" required className="w-full p-2 text-sm rounded border border-black/10 h-20 outline-none focus:ring-1 ring-blue-500"></textarea>
                    <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded text-xs font-bold hover:bg-blue-700 transition-all">
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    <a href="mailto:anishdubey655@gmail.com" className="text-xs text-blue-600 font-bold hover:underline">Email Me</a>
                    <a href="https://github.com/anishdubey655" className="text-xs text-gray-600 font-bold hover:underline">GitHub</a>
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