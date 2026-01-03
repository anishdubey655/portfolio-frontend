import { useState } from 'react';
import DesktopIcon from './components/DesktopIcon';
import Taskbar from './components/Taskbar';
import TerminalWindow from './components/TerminalWindow';
import MessageWindow from './components/MessageWindow';
import BinWindow from './components/BinWindow';
import ChromeWindow from './components/ChromeWindow';
import AdminWindow from './components/AdminWindow'; 
import ExplorerWindow from './components/ExplorerWindow'; 
import GitBashWindow from './components/GitBashWindow'; 
import BootScreen from './components/BootScreen';

function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isBinOpen, setIsBinOpen] = useState(false);
  const [isChromeOpen, setIsChromeOpen] = useState(false);
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);
  const [isGitOpen, setIsGitOpen] = useState(false);
  
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  const [allMessages, setAllMessages] = useState([
    { id: 1, text: "Hey there! 👋 I'm Anish.", sender: 'anish' },
    { id: 2, text: "Drop a message here.", sender: 'anish' }
  ]);

  const handleSendMessage = (text) => {
    const newMessage = { id: Date.now(), text: text, sender: 'User' };
    setAllMessages(prev => [...prev, newMessage]);
  };

  const handleAdminLogin = () => {
    if (passwordInput === "anish123") { 
      setIsAdminOpen(true);
      setShowPasswordPrompt(false);
      setPasswordInput("");
    } else {
      alert("Wrong Password !");
    }
  };

  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <>
      {isBooting ? (
        <BootScreen onBootComplete={() => setIsBooting(false)} />
      ) : (
        <div className="h-[100dvh] w-full bg-cover bg-center overflow-hidden flex flex-col relative" 
             style={{ backgroundImage: "url('https://4kwallpapers.com/images/wallpapers/windows-11-stock-official-blue-background-3840x2160-5630.jpg')" }}>
          
          <div className="flex-1 p-4 md:p-6 grid grid-cols-4 sm:grid-cols-6 md:flex md:flex-col gap-4 md:gap-6 items-start content-start">
            <div onClick={() => setIsTerminalOpen(true)} className="cursor-pointer">
              <DesktopIcon name="Who Am I" iconImg="/whoAmI.png" />
            </div>
            <div onClick={openResume} className="cursor-pointer">
              <DesktopIcon name="resume.pdf" iconImg="/pdf.webp" />
            </div>
          </div>

          <div onClick={() => setShowPasswordPrompt(true)} className="absolute bottom-0 right-0 w-10 h-10 z-[10001]"></div>

          {showPasswordPrompt && (
            <div className="fixed inset-0 flex items-center justify-center z-[10002] bg-black/60 backdrop-blur-md p-4">
              <div className="bg-[#1e1e1e] p-6 rounded-xl border border-white/10 shadow-2xl w-full max-w-[320px] text-white">
                <h2 className="mb-4 text-sm font-bold text-center tracking-widest uppercase">Admin Access</h2>
                <input 
                  type="password" autoFocus value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
                  placeholder="Enter Secret Key"
                  className="w-full p-3 bg-black border border-white/20 rounded-lg mb-4 outline-none focus:border-blue-500 text-center text-lg"
                />
                <div className="flex gap-3">
                  <button onClick={handleAdminLogin} className="flex-1 bg-blue-600 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 active:scale-95 transition-all">Login</button>
                  <button onClick={() => setShowPasswordPrompt(false)} className="flex-1 bg-white/10 py-2.5 rounded-lg text-sm hover:bg-white/20 transition-all">Cancel</button>
                </div>
              </div>
            </div>
          )}

          {isTerminalOpen && <TerminalWindow onClose={() => setIsTerminalOpen(false)} />}
          {isMessageOpen && <MessageWindow onClose={() => setIsMessageOpen(false)} messages={allMessages} onSend={handleSendMessage} />}
          {isBinOpen && <BinWindow onClose={() => setIsBinOpen(false)} />}
          {isChromeOpen && <ChromeWindow onClose={() => setIsChromeOpen(false)} />}
          {isAdminOpen && <AdminWindow onClose={() => setIsAdminOpen(false)} messages={allMessages} setAllMessages={setAllMessages} />} 
          
          {isExplorerOpen && (
            <ExplorerWindow onClose={() => setIsExplorerOpen(false)} onResumeClick={openResume} />
          )}

          {isGitOpen && <GitBashWindow onClose={() => setIsGitOpen(false)} />}

          <Taskbar 
            onStartClick={() => setIsTerminalOpen(!isTerminalOpen)} 
            onMsgClick={() => setIsMessageOpen(!isMessageOpen)} 
            onBinClick={() => setIsBinOpen(!isBinOpen)} 
            onChromeClick={() => setIsChromeOpen(!isChromeOpen)} 
            onExplorerClick={() => setIsExplorerOpen(!isExplorerOpen)}
            onGitClick={() => setIsGitOpen(!isGitOpen)}
          />
        </div>
      )}
    </>
  );
}

export default App;