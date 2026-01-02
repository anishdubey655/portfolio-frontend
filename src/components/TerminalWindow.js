import { useState } from 'react';

const TerminalWindow = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/10 backdrop-blur-sm">
      <div className="w-[700px] h-[450px] bg-white/80 border border-white/40 rounded-lg overflow-hidden flex flex-col shadow-2xl ring-1 ring-black/5">
        
        <div className="h-9 bg-gray-100/60 flex justify-between items-center select-none border-b border-black/5">
          <div className="flex items-center gap-2 ml-3">
            <span className="text-blue-600">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
            </span>
            <span className="text-xs text-gray-600 font-medium">WhoAmI</span>
          </div>
          
          <div className="flex h-full">
            <div className="px-4 flex items-center hover:bg-black/5 transition-colors cursor-default border-r border-black/5">
              <div className="w-3 h-[1px] bg-gray-800"></div>
            </div>
            <div className="px-4 flex items-center hover:bg-black/5 transition-colors cursor-default border-r border-black/5">
              <div className="w-2.5 h-2.5 border border-gray-800"></div>
            </div>
            <div onClick={onClose} className="px-4 flex items-center hover:bg-[#e81123] hover:text-white transition-colors cursor-default group">
              <svg className="stroke-gray-800 group-hover:stroke-white" width="10" height="10" viewBox="0 0 24 24" fill="none" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
          </div>
        </div>

        <div className="flex flex-1">

          <div className="w-48 bg-gray-50/50 p-2 flex flex-col gap-1 border-r border-black/5">
            <button onClick={() => setActiveTab('about')} className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all ${activeTab === 'about' ? 'bg-black/5 text-black font-semibold' : 'text-gray-500 hover:bg-black/5'}`}>
              <span className="text-base">👤</span> About Me
            </button>
            <button onClick={() => setActiveTab('skills')} className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all ${activeTab === 'skills' ? 'bg-black/5 text-black font-semibold' : 'text-gray-500 hover:bg-black/5'}`}>
              <span className="text-blue-600 font-bold text-[10px]">{"</>"}</span> Tech Stack
            </button>
            <button onClick={() => setActiveTab('contact')} className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all ${activeTab === 'contact' ? 'bg-black/5 text-black font-semibold' : 'text-gray-500 hover:bg-black/5'}`}>
              <span className="text-base">📧</span> Contact
            </button>
          </div>

          <div className="flex-1 p-8 overflow-y-auto bg-white/20">
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              
              {activeTab === 'about' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-blue-500/20 border-2 border-white/50">
                      A
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Anish Dubey</h2>
                      <p className="text-blue-600 font-medium text-sm mt-1 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        Full Stack Web Developer
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-blue-600/30 rounded-full"></div>
                    <p className="text-gray-600 leading-relaxed text-sm pl-2">
                      I am a Full Stack Web Developer with a strong foundation in web technologies.
                      I enjoy building complete web applications from front-end design to back-end logic.
                      I am eager to learn, grow, and work on real-world projects while delivering clean and efficient code.
                    </p>
                  </div>

                  <div className="mt-10 flex flex-col gap-3">
                    <a href="https://www.linkedin.com/in/anish-dubey-8358b12a9/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-fit px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-lg text-blue-600 hover:bg-blue-600/20 transition-all group">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      <span className="text-sm font-semibold group-hover:underline">LinkedIn</span>
                    </a>
                  </div>
                </div>
              )}

              {activeTab === 'skills' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-400 h-[320px] overflow-y-auto pr-2 custom-scrollbar">
                  <div className="mb-6 flex items-center gap-2">
                    <span className="text-blue-600 text-xl font-bold">{"</>"}</span>
                    <h2 className="text-xl font-semibold text-gray-800">Tech Stack</h2>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pb-10">
                    {[
                      { name: 'React.js', percentage: '70%', status: 'Learning' },
                      { name: 'Node.js', percentage: '70%', status: 'Learning' },
                      { name: 'MongoDB', percentage: '80%', status: 'Learning' },
                      { name: 'JavaScript (ES6+)', percentage: '75%', status: 'Learning' },
                      { name: 'Tailwind CSS', percentage: '90%', status: 'Learning' },
                      { name: 'HTML5 / CSS3', percentage: '95%', status: '2 Yrs' },
                    ].map((skill) => (
                      <div key={skill.name} className="bg-white p-4 rounded-2xl shadow-sm border border-black/5 space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-gray-800">{skill.name}</span>
                          <span className="text-sm font-black text-blue-600">{skill.percentage}</span>
                        </div>
                        <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full" 
                            style={{ width: skill.percentage }}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center pt-1">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Experience</span>
                          <span className="text-[10px] px-2 py-0.5 bg-gray-50 border border-gray-100 rounded-md text-gray-500">
                            {skill.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'contact' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 tracking-tight">Connect with Anish</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-black/[0.02] border border-black/5 rounded-xl group hover:bg-black/[0.04] transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600 border border-blue-600/10">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 font-bold uppercase">Email Address</p>
                          <p className="text-sm text-gray-700 font-medium">anishdubey655@gmail.com</p>
                        </div>
                      </div>
                      <a href="mailto:anishdubey655@gmail.com" className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md transition-all active:scale-95 shadow-md shadow-blue-500/20">Send</a>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-black/[0.02] border border-black/5 rounded-xl group hover:bg-black/[0.04] transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-green-600/10 flex items-center justify-center text-green-600 border border-green-600/10">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 font-bold uppercase">Phone Number</p>
                          <p className="text-sm text-gray-700 font-medium">+91 8294672029</p>
                        </div>
                      </div>

                      <a href="tel:+918294672029" className="px-4 py-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold rounded-md transition-all active:scale-95 shadow-md shadow-green-500/20">Call</a>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-black/5">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3 ml-1">Other Platforms</p>
                    <div className="flex gap-3">
                      <a href="https://github.com/anishdubey655" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 bg-black/5 border border-black/5 rounded-md text-gray-600 hover:bg-black/10 hover:text-black transition-all group">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        <span className="text-xs font-semibold">GitHub</span>
                      </a>
                      <a href="https://www.instagram.com/anishdubey176/?next=%2F" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 bg-black/5 border border-black/5 rounded-md text-gray-600 hover:bg-black/10 hover:text-pink-600 transition-all group">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        <span className="text-xs font-semibold">Instagram</span>
                      </a>
                    </div>
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