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
import BootScreen from './components/BootScreen'; // Import kiya

function App() {
  const [isBooting, setIsBooting] = useState(true); // Booting state add ki
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
      {/* BootScreen Logic */}
      {isBooting ? (
        <BootScreen onBootComplete={() => setIsBooting(false)} />
      ) : (
        <div className="h-screen w-full bg-cover bg-center overflow-hidden flex flex-col relative" 
             style={{ backgroundImage: "url('https://4kwallpapers.com/images/wallpapers/windows-11-stock-official-blue-background-3840x2160-5630.jpg')" }}>
          
          <div className="flex-1 p-6 flex flex-col gap-6 items-start">
            <div onClick={() => setIsTerminalOpen(true)}>
              <DesktopIcon name="Who Am I" iconImg="/whoami.png" />
            </div>
            <div onClick={openResume}>
              <DesktopIcon name="resume.pdf" iconImg="/pdf.webp" />
            </div>
          </div>

          <div onClick={() => setShowPasswordPrompt(true)} className="absolute bottom-0 right-0 w-12 h-12 z-[10001]"></div>

          {showPasswordPrompt && (
            <div className="absolute inset-0 flex items-center justify-center z-[10002] bg-black/50 backdrop-blur-sm">
              <div className="bg-[#1e1e1e] p-6 rounded-lg border border-white/10 shadow-2xl w-80 text-white">
                <h2 className="mb-4 text-sm font-bold text-center">Admin Access</h2>
                <input 
                  type="password" autoFocus value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter Secret Key"
                  className="w-full p-2 bg-black border border-white/20 rounded mb-4 outline-none focus:border-blue-500 text-center"
                />
                <div className="flex gap-2">
                  <button onClick={handleAdminLogin} className="flex-1 bg-blue-600 py-2 rounded text-sm hover:bg-blue-700 font-medium">Login</button>
                  <button onClick={() => setShowPasswordPrompt(false)} className="flex-1 bg-gray-700 py-2 rounded text-sm">Cancel</button>
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