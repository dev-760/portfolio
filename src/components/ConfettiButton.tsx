"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MOTION_EASINGS } from "@/motion/tokens";

interface ConfettiButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function ConfettiButton({ children, onClick, className = "" }: ConfettiButtonProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; rotation: number; color: string }>>([]);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick();
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const colors = ['#003ae4', '#3a4eca', '#982e00', '#ba1a1a'];
    
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: centerX + (Math.random() - 0.5) * 40,
      y: centerY + (Math.random() - 0.5) * 40,
      rotation: Math.random() * 360,
      color: colors[i % colors.length]
    }));
    
    setParticles(newParticles);
    
    setTimeout(() => setParticles([]), 600);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
    >
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ 
              x: 0, 
              y: 0, 
              scale: 0,
              opacity: 1
            }}
            animate={{
              x: particle.x - 40,
              y: particle.y - 20,
              scale: [0, 1, 0],
              opacity: [1, 1, 0],
              rotate: particle.rotation
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: MOTION_EASINGS.sharp }}
            className="absolute w-2 h-2 rounded-full pointer-events-none"
            style={{
              backgroundColor: particle.color
            }}
          />
        ))}
      </AnimatePresence>
      {children}
    </button>
  );
}