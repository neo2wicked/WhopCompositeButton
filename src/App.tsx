import React, { useState } from 'react';
import { 
  PenSquare, 
  Trophy, 
  Calendar, 
  Video,
  X,
  Send,
  Image as ImageIcon,
  Link as LinkIcon,
  AtSign,
  Hash
} from 'lucide-react';
import { ComposeModal } from './components/ComposeModal';
import { ComposeButton } from './components/ComposeButton';
import { useSound } from './hooks/useSound';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const { playPop, playSuccess } = useSound();

  const composeOptions = [
    { id: 'post', label: 'Create Post', icon: PenSquare, color: 'bg-[#FF69F5]' },
    { id: 'bounty', label: 'Post Bounty', icon: Trophy, color: 'bg-[#7000FF]' },
    { id: 'event', label: 'Create Event', icon: Calendar, color: 'bg-[#00E4FF]' },
    { id: 'livestream', label: 'Go Live', icon: Video, color: 'bg-[#FF3D00]' }
  ];

  const handleOpen = () => {
    setIsOpen(true);
    playPop();
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedType(null);
  };

  const handleSuccess = () => {
    playSuccess();
    handleClose();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#2A2A2A] flex items-center justify-center">
      <ComposeButton onClick={handleOpen} />
      
      <ComposeModal 
        isOpen={isOpen}
        onClose={handleClose}
        options={composeOptions}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        onSuccess={handleSuccess}
      />
    </div>
  );
}

export default App;