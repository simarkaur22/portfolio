'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const BackgroundEffect: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Cursor Spotlight */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full transition-transform duration-300 ease-out opacity-10 dark:opacity-30 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 70%)',
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`
        }}
      />

      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Ambient Gradient Orbs (Dark Mode Only for Rich Depth) */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-sky-400/5 dark:bg-sky-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-indigo-400/5 dark:bg-violet-600/10 blur-3xl"
      />
    </div>
  );
};
