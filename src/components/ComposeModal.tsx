import { 
  PenSquare, 
  Trophy, 
  Calendar, 
  Video,
  X,
  Send,
  Upload,
  DollarSign,
  Image as ImageIcon,
  Link as LinkIcon,
  AtSign,
  Hash,
  Plus,
  Check,
  MapPin,
  Users,
  Settings,
  Repeat,
  Globe,
  Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RocketLaunch } from './RocketLaunch';
import { useState } from 'react';

interface EventFormData {
  title: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  timezone: string;
  location: string;
  isVirtual: boolean;
  description: string;
  privacy: 'public' | 'private';
  coHosts: string[];
  isRecurring: boolean;
}

interface ComposeOption {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
}

interface ComposeModalProps {
  isOpen: boolean;
  onClose: () => void;
  options: ComposeOption[];
  selectedType: string | null;
  setSelectedType: (type: string | null) => void;
  onSuccess: () => void;
}

export const ComposeModal: React.FC<ComposeModalProps> = ({
  isOpen,
  onClose,
  options,
  selectedType,
  setSelectedType,
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    title: '',
    requirements: '',
    amount: '100',
  });
  const [isLaunching, setIsLaunching] = useState(false);
  const [buttonState, setButtonState] = useState<'idle' | 'posting' | 'done'>('idle');
  const [showRocket, setShowRocket] = useState(false);
  const [eventForm, setEventForm] = useState<EventFormData>({
    title: '',
    startDate: new Date().toISOString().split('T')[0],
    startTime: '12:00',
    endDate: new Date().toISOString().split('T')[0],
    endTime: '13:00',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    location: '',
    isVirtual: false,
    description: '',
    privacy: 'public',
    coHosts: [],
    isRecurring: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLaunching(true);
    setButtonState('posting');
    setShowRocket(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setButtonState('done');

    // Wait for rocket animation to complete
    await new Promise(resolve => setTimeout(resolve, 1300));
    setShowRocket(false);
    setIsLaunching(false);
    setButtonState('idle');
    onSuccess();
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 20,
      transition: {
        duration: 0.2
      }
    }
  };

  const optionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }),
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const iconButtonVariants = {
    hover: {
      scale: 1.2,
      rotate: 15,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.8
    }
  };

  const renderEventForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Event Title */}
      <div className="space-y-1">
        <label className="block text-sm text-white/60">
          Event name
        </label>
        <input
          type="text"
          value={eventForm.title}
          onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
          className="w-full px-3 py-2 bg-[#1A1A1A] rounded-lg border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#FF3D00]"
          placeholder="Give your event a name"
          required
        />
      </div>

      {/* Date and Time */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="block text-sm text-white/60">Start date</label>
          <input
            type="date"
            value={eventForm.startDate}
            onChange={(e) => setEventForm({ ...eventForm, startDate: e.target.value })}
            className="w-full px-3 py-2 bg-[#1A1A1A] rounded-lg border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#FF3D00]"
            required
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm text-white/60">Start time</label>
          <input
            type="time"
            value={eventForm.startTime}
            onChange={(e) => setEventForm({ ...eventForm, startTime: e.target.value })}
            className="w-full px-3 py-2 bg-[#1A1A1A] rounded-lg border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#FF3D00]"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="block text-sm text-white/60">End date</label>
          <input
            type="date"
            value={eventForm.endDate}
            onChange={(e) => setEventForm({ ...eventForm, endDate: e.target.value })}
            className="w-full px-3 py-2 bg-[#1A1A1A] rounded-lg border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#FF3D00]"
            required
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm text-white/60">End time</label>
          <input
            type="time"
            value={eventForm.endTime}
            onChange={(e) => setEventForm({ ...eventForm, endTime: e.target.value })}
            className="w-full px-3 py-2 bg-[#1A1A1A] rounded-lg border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#FF3D00]"
            required
          />
        </div>
      </div>

      {/* Location */}
      <div className="space-y-1">
        <label className="block text-sm text-white/60">
          Location
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input
            type="text"
            value={eventForm.location}
            onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
            className="w-full pl-9 pr-3 py-2 bg-[#1A1A1A] rounded-lg border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#FF3D00]"
            placeholder="Add location or link"
          />
        </div>
      </div>

      {/* Description */}
      <div className="space-y-1">
        <label className="block text-sm text-white/60">
          Description
        </label>
        <textarea
          value={eventForm.description}
          onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
          className="w-full px-3 py-2 bg-[#1A1A1A] rounded-lg border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#FF3D00] min-h-[80px] resize-none"
          placeholder="Tell people what your event is about"
          required
        />
      </div>

      {/* Privacy */}
      <div className="space-y-1">
        <label className="block text-sm text-white/60">
          Privacy
        </label>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setEventForm({ ...eventForm, privacy: 'public' })}
            className={`flex-1 px-3 py-2 rounded-lg border ${
              eventForm.privacy === 'public'
                ? 'bg-[#FF3D00] border-[#FF3D00] text-white'
                : 'bg-[#1A1A1A] border-white/10 text-white/60'
            } flex items-center justify-center gap-2 transition-colors text-sm`}
          >
            <Globe className="w-4 h-4" />
            <span>Public</span>
          </button>
          <button
            type="button"
            onClick={() => setEventForm({ ...eventForm, privacy: 'private' })}
            className={`flex-1 px-3 py-2 rounded-lg border ${
              eventForm.privacy === 'private'
                ? 'bg-[#FF3D00] border-[#FF3D00] text-white'
                : 'bg-[#1A1A1A] border-white/10 text-white/60'
            } flex items-center justify-center gap-2 transition-colors text-sm`}
          >
            <Lock className="w-4 h-4" />
            <span>Private</span>
          </button>
        </div>
      </div>

      {/* Co-hosts */}
      <button
        type="button"
        onClick={() => {/* Add co-host logic */}}
        className="w-full px-3 py-2 bg-[#1A1A1A] rounded-lg border border-white/10 text-white/60 hover:bg-[#252525] transition-colors flex items-center gap-2 text-sm"
      >
        <Users className="w-4 h-4" />
        <span>Add co-hosts</span>
      </button>

      {/* Recurring Event */}
      <button
        type="button"
        onClick={() => setEventForm({ ...eventForm, isRecurring: !eventForm.isRecurring })}
        className="w-full px-3 py-2 bg-[#1A1A1A] rounded-lg border border-white/10 text-white/60 hover:bg-[#252525] transition-colors flex items-center gap-2 text-sm"
      >
        <Repeat className="w-4 h-4" />
        <span>Make it recurring</span>
      </button>

      {/* Submit Button */}
      <motion.div 
        className="flex justify-end pt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.button
          type="submit"
          disabled={isLaunching}
          className={`
            px-6 h-10 bg-[#FF3D00] text-white font-medium rounded-lg text-sm
            transition-all flex items-center justify-center gap-2
            disabled:opacity-50 disabled:cursor-not-allowed
            success-btn
            ${isLaunching ? 'success-btn--running' : ''}
            ${buttonState === 'done' ? 'success-btn--done' : ''}
          `}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="success-btn__progress" />
          <div className="success-btn__content">
            {buttonState === 'idle' && (
              <>
                <Calendar className="w-4 h-4" />
                <span>Create Event</span>
              </>
            )}
            {buttonState === 'posting' && (
              <span>Creating</span>
            )}
            {buttonState === 'done' && (
              <Check className="w-4 h-4 success-btn__check" />
            )}
          </div>
        </motion.button>
      </motion.div>
    </form>
  );

  const renderBountyForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Title */}
      <motion.div 
        className="space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <label className="block text-sm text-white/60">
          Bounty title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-4 py-3 bg-[#2C2C2C] rounded-lg border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#7000FF]"
          placeholder="Share my TikTok with people"
          required
        />
      </motion.div>

      {/* Requirements */}
      <motion.div 
        className="space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label className="block text-sm text-white/60">
          Requirements
        </label>
        <textarea
          value={formData.requirements}
          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
          className="w-full px-4 py-3 bg-[#2C2C2C] rounded-lg border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#7000FF] min-h-[100px] resize-none"
          placeholder="Describe how a user can successfully complete this bounty"
          required
        />
      </motion.div>

      {/* Upload File Button */}
      <motion.button
        type="button"
        className="w-full px-4 py-3 bg-[#2C2C2C] rounded-lg border border-white/10 text-white/80 hover:bg-[#353535] transition-colors flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Upload className="w-5 h-5" />
        Upload file
      </motion.button>

      {/* Amount */}
      <motion.div 
        className="space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label className="block text-sm text-white/60">
          How much do you want to pay?
        </label>
        <div className="flex gap-3 items-end">
          <div className="flex-1">
            <span className="block text-xs text-white/60 mb-1">Amount</span>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input
                type="text"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="w-full pl-10 pr-4 py-3 bg-[#2C2C2C] rounded-lg border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#7000FF]"
                required
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="px-4 py-3 bg-[#2C2C2C] rounded-lg border border-white/10 text-white/60">
              <span className="block text-xs mb-1">per</span>
              <div className="flex items-center justify-between">
                <span>Views</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div 
        className="flex gap-2 pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          type="button"
          className="flex-1 h-12 bg-[#2C2C2C] hover:bg-[#353535] rounded-lg text-white/80 transition-colors flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center">
            <span className="text-black text-sm">$</span>
          </div>
          Bounty
        </motion.button>
        <motion.button
          type="submit"
          disabled={isLaunching}
          className={`
            flex-1 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg text-white
            transition-colors flex items-center justify-center gap-2
            disabled:opacity-50 disabled:cursor-not-allowed
            relative overflow-hidden
          `}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">
            {buttonState === 'idle' && 'Post'}
            {buttonState === 'posting' && 'Posting'}
            {buttonState === 'done' && 'Done'}
          </span>
          {showRocket && <RocketLaunch />}
        </motion.button>
      </motion.div>
    </form>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-[#0A0A0A] rounded-2xl shadow-2xl w-full max-w-lg my-4 overflow-hidden relative border border-white/10"
          >
            {/* Header */}
            <motion.div 
              className="flex items-center justify-between p-4 border-b border-white/10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-white text-sm font-medium">AD</span>
                </motion.div>
                <div>
                  <h3 className="text-white text-sm font-medium">Amani Dixon</h3>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <span>WHOP</span>
                    <span className="bg-[#1A1A1A] px-1.5 py-0.5 rounded text-xs">AD</span>
                  </div>
                </div>
              </div>
              <motion.button
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-4 h-4 text-white/60" />
              </motion.button>
            </motion.div>

            {/* Content */}
            <div className="p-4">
              {!selectedType ? (
                <div className="grid grid-cols-2 gap-4">
                  {options.map((option, i) => (
                    <motion.button
                      key={option.id}
                      custom={i}
                      variants={optionVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => setSelectedType(option.id)}
                      className="flex flex-col gap-3 p-4 rounded-2xl bg-[#1A1A1A] border border-white/10 hover:border-[#FF3D00] transition-colors text-left group"
                    >
                      <div className={`w-10 h-10 rounded-xl ${option.color} flex items-center justify-center`}>
                        <option.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-base font-semibold text-white mb-1">{option.label}</h2>
                        <p className="text-xs text-white/60">
                          {option.id === 'post' && 'Share updates with your community'}
                          {option.id === 'bounty' && 'Create tasks and reward contributors'}
                          {option.id === 'event' && 'Schedule and host community events'}
                          {option.id === 'livestream' && 'Start streaming to your audience'}
                        </p>
                      </div>
                      <div className="mt-auto flex justify-end">
                        <motion.div
                          className="w-6 h-6 rounded-full bg-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ scale: 1.1 }}
                        >
                          <motion.div
                            initial={{ rotate: -45 }}
                            animate={{ rotate: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Plus className="w-4 h-4 text-[#FF3D00]" />
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              ) : selectedType === 'event' ? (
                renderEventForm()
              ) : selectedType === 'bounty' ? (
                renderBountyForm()
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.textarea
                    className="w-full px-4 py-3 bg-[#1A1A1A] rounded-lg border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#FF3D00] resize-none min-h-[120px]"
                    placeholder={
                      selectedType === 'post' 
                        ? "What's on your mind?" 
                        : selectedType === 'event'
                        ? "Share the details of your event..."
                        : "Tell everyone about your upcoming stream..."
                    }
                    rows={4}
                    required
                  />

                  <motion.div 
                    className="flex justify-end"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.button
                      type="submit"
                      disabled={isLaunching}
                      className={`
                        px-8 h-12 bg-[#FF3D00] text-white font-medium rounded-lg
                        transition-all flex items-center justify-center
                        disabled:opacity-50 disabled:cursor-not-allowed
                        success-btn
                        ${isLaunching ? 'success-btn--running' : ''}
                        ${buttonState === 'done' ? 'success-btn--done' : ''}
                      `}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="success-btn__progress" />
                      <div className="success-btn__content">
                        {buttonState === 'idle' && (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Post</span>
                          </>
                        )}
                        {buttonState === 'posting' && (
                          <span>Posting</span>
                        )}
                        {buttonState === 'done' && (
                          <Check className="w-5 h-5 success-btn__check" />
                        )}
                      </div>
                    </motion.button>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};