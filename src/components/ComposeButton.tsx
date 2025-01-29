import React from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface ComposeButtonProps {
  onClick: () => void;
}

export const ComposeButton: React.FC<ComposeButtonProps> = ({ onClick }) => {
  return (
    <div className="relative">
      {/* Animated glow rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full"
          style={{
            background: `linear-gradient(45deg, #FF3D00, #FF5D33)`,
            opacity: 0.15 - i * 0.05,
          }}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2"
          style={{
            background: '#FF3D00',
            borderRadius: '50%',
            filter: 'blur(1px)',
          }}
          initial={{ scale: 0, x: 0, y: 0 }}
          animate={{
            scale: [0, 1, 0],
            x: [0, (i - 2) * 30],
            y: [-20 * (i + 1), -50 * (i + 1)],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Main button */}
      <motion.button
        onClick={onClick}
        className="relative w-20 h-20 bg-[#FF3D00] rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {/* Inner gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Plus icon container */}
        <motion.div
          className="relative z-10 bg-black rounded-full p-3"
          whileHover={{ rotate: 180 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Plus className="w-8 h-8 text-white" />
        </motion.div>
      </motion.button>
    </div>
  );
};