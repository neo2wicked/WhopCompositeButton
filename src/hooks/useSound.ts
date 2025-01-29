import { useCallback } from 'react';

export const useSound = () => {
  const playSound = useCallback((frequency: number, type: OscillatorType, duration: number) => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  }, []);

  const playPop = useCallback(() => {
    playSound(800, 'sine', 0.1);
  }, [playSound]);

  const playSuccess = useCallback(() => {
    setTimeout(() => playSound(800, 'sine', 0.1), 0);
    setTimeout(() => playSound(1000, 'sine', 0.1), 100);
    setTimeout(() => playSound(1200, 'sine', 0.15), 200);
  }, [playSound]);

  return { playPop, playSuccess };
};