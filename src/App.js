import { useState } from 'react';
import DesktopIcon from './components/DesktopIcon';
import Taskbar from './components/Taskbar';
import TerminalWindow from './components/TerminalWindow';
import MessageWindow from './components/MessageWindow';
import BinWindow from './components/BinWindow';
import ChromeWindow from './components/ChromeWindow';
import AdminWindow from './components/AdminWindow'; 

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isBinOpen, setIsBinOpen] = useState(false);
  const [isChromeOpen, setIsChromeOpen] = useState(false);
  
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  const handleAdminLogin = () => {
    if (passwordInput === "anish123") { 
      setIsAdminOpen(true);
      setShowPasswordPrompt(false);
      setPasswordInput("");
    } else {
      alert("Wrong Password Bhai!");
    }
  };

  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="h-screen w-full bg-cover bg-center overflow-hidden flex flex-col relative" 
         style={{ backgroundImage: "url('https://4kwallpapers.com/images/wallpapers/windows-11-stock-official-blue-background-3840x2160-5630.jpg')" }}>
      
      <div className="flex-1 p-6 flex flex-col gap-6 items-start">
        <div onClick={() => setIsTerminalOpen(true)}>
          <DesktopIcon name="Who Am I" iconImg="/whoAmi.png" />
        </div>
        <div onClick={openResume}>
          <DesktopIcon name="resume.pdf" iconImg="/pdf.webp" />
        </div>
      </div>

      <div 
        onClick={() => setShowPasswordPrompt(true)}
        className="absolute bottom-12 right-0 w-10 h-10 cursor-default z-[9999]"
        title="Secret Access"
      ></div>

      {showPasswordPrompt && (
        <div className="absolute inset-0 flex items-center justify-center z-[10000] bg-black/50 backdrop-blur-sm">
          <div className="bg-[#1e1e1e] p-6 rounded-lg border border-white/10 shadow-2xl w-80">
            <h2 className="text-white mb-4 text-sm font-bold">Admin Authentication</h2>
            <input 
              type="password" 
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Enter Secret Key"
              className="w-full p-2 bg-black border border-white/20 rounded text-white mb-4 outline-none focus:border-blue-500"
            />
            <div className="flex gap-2">
              <button onClick={handleAdminLogin} className="flex-1 bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700">Login</button>
              <button onClick={() => setShowPasswordPrompt(false)} className="flex-1 bg-gray-700 text-white py-2 rounded text-sm">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {isTerminalOpen && <TerminalWindow onClose={() => setIsTerminalOpen(false)} />}
      {isMessageOpen && <MessageWindow onClose={() => setIsMessageOpen(false)} />}
      {isBinOpen && <BinWindow onClose={() => setIsBinOpen(false)} />}
      {isChromeOpen && <ChromeWindow onClose={() => setIsChromeOpen(false)} />}
      {isAdminOpen && <AdminWindow onClose={() => setIsAdminOpen(false)} />} 

      <Taskbar 
        onStartClick={() => setIsTerminalOpen(!isTerminalOpen)} 
        onMsgClick={() => setIsMessageOpen(!isMessageOpen)} 
        onBinClick={() => setIsBinOpen(!isBinOpen)} 
        onChromeClick={() => setIsChromeOpen(!isChromeOpen)} 
      />
    </div>
  );
}

export default App;