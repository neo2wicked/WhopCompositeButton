import React from 'react';
import { motion } from 'framer-motion';

export const RocketLaunch: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes riseOnce {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(2.5em);
          }
        }
        @keyframes riseLoop {
          from {
            transform: translateY(2.5em);
          }
          to {
            transform: translateY(7.5em);
          }
        }
        @keyframes flyStart {
          from {
            clip-path: polygon(0.75em 0em,1.5em 0.45em,1.05em 0.45em,1.05em 0.9em,1.5em 0.9em,1.5em 1em,0.75em 1em,0.75em 1em,0.75em 1em,0em 1em,0em 0.9em,0.45em 0.9em,0.45em 0.45em,0em 0.45em);
            transform: translateY(0);
          }
          17% {
            clip-path: polygon(0.75em 0em,0.975em 0.25em,0.975em 0.45em,0.975em 0.65em,1.125em 0.8em,1.125em 1em,0.9em 1em,0.75em 1em,0.6em 1em,0.375em 1em,0.375em 0.8em,0.525em 0.65em,0.525em 0.45em,0.525em 0.25em);
            transform: translateY(0);
          }
          33% {
            clip-path: polygon(0.75em 0em,0.975em 0.25em,0.975em 0.45em,0.975em 0.65em,1.125em 0.8em,1.125em 1em,0.9em 1em,0.75em 1.5em,0.6em 1em,0.375em 1em,0.375em 0.8em,0.525em 0.65em,0.525em 0.45em,0.525em 0.25em);
            transform: translateY(0);
          }
          to {
            transform: translateY(-10%);
          }
        }
        @keyframes fly {
          from, to {
            transform: translateY(-10%);
          }
          50% {
            transform: translateY(3%);
          }
        }
        @keyframes flyEnd {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-5em);
          }
        }

        .stars {
          background:
            radial-gradient(0.2em 0.2em at 1.2em 0.4em,#fff 45%,#fff0 50%),
            radial-gradient(0.1em 0.1em at 0.6em 0.8em,#fff 45%,#fff0 50%),
            radial-gradient(0.2em 0.2em at 0.4em 1.4em,#fff 45%,#fff0 50%),
            radial-gradient(0.1em 0.1em at 1em 1.3em,#fff 45%,#fff0 50%),
            radial-gradient(0.1em 0.1em at 0.6em 2em,#fff 45%,#fff0 50%),
            radial-gradient(0.1em 0.1em at 1.2em 1.9em,#fff 45%,#fff0 50%),
            radial-gradient(0.2em 0.2em at 0.9em 2.3em,#fff 45%,#fff0 50%),
            radial-gradient(0.2em 0.2em at 0.4em 2.7em,#fff 45%,#fff0 50%),
            radial-gradient(0.1em 0.1em at 1.2em 3.1em,#fff 45%,#fff0 50%),
            radial-gradient(0.2em 0.2em at 0.6em 3.3em,#fff 45%,#fff0 50%),
            radial-gradient(0.1em 0.1em at 1em 3.7em,#fff 45%,#fff0 50%),
            radial-gradient(0.1em 0.1em at 0.4em 4em,#fff 45%,#fff0 50%),
            radial-gradient(0.1em 0.1em at 1.2em 4.7em,#fff 45%,#fff0 50%),
            radial-gradient(0.2em 0.2em at 0.8em 4.4em,#fff 45%,#fff0 50%),
            radial-gradient(0.1em 0.1em at 0.3em 4.8em,#fff 45%,#fff0 50%),
            radial-gradient(0.2em 0.2em at 1.2em 5.4em,#fff 45%,#fff0 50%),
            radial-gradient(0.1em 0.1em at 0.6em 5.8em,#fff 45%,#fff0 50%),
            radial-gradient(0.2em 0.2em at 0.4em 6.4em,#fff 45%,#fff0 50%),
            radial-gradient(0.1em 0.1em at 1em 6.3em,#fff 45%,#fff0 50%),
            radial-gradient(0.1em 0.1em at 0.6em 7em,#fff 45%,#fff0 50%),
            radial-gradient(0.1em 0.1em at 1.2em 6.9em,#fff 45%,#fff0 50%),
            radial-gradient(0.2em 0.2em at 0.9em 7.3em,#fff 45%,#fff0 50%);
          background-repeat: no-repeat;
          bottom: 0;
          left: 2em;
          width: 1.5em;
          height: 10em;
          animation: riseOnce 0.5s 0.3s linear, riseLoop 1s 0.8s linear infinite;
        }

        .rocket {
          background: linear-gradient(#fff 67%,#f4b925 67%);
          clip-path: polygon(0.75em 0em,0.975em 0.25em,0.975em 0.45em,0.975em 0.65em,1.125em 0.8em,1.125em 1em,0.9em 1em,0.75em 1.5em,0.6em 1em,0.375em 1em,0.375em 0.8em,0.525em 0.65em,0.525em 0.45em,0.525em 0.25em);
          width: 1.5em;
          height: 1.5em;
          animation: flyStart 1.3s ease-in-out, fly 2s 1.3s ease-in-out infinite;
        }

        .rocket-container {
          position: absolute;
          top: 0.75em;
          left: 2em;
        }
      `}</style>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          <div className="stars" />
          <div className="rocket-container">
            <div className="rocket" />
          </div>
        </div>
      </div>
    </div>
  );
};