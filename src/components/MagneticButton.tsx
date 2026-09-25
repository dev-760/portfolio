"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MOTION_EASINGS } from "@/motion/tokens";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  variant = "primary",
  size = "md"
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    
    x.set(mouseX * 0.3);
    y.set(mouseY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses = "inline-flex items-center justify-center rounded font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-primary-container hover:bg-primary text-on-primary shadow-sm hover:shadow-md",
    secondary: "bg-surface-container hover:bg-surface-container-high text-on-surface border border-outline-variant/60 hover:border-primary/50",
    outline: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-on-primary"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  const ButtonComponent = href ? motion.a : motion.button;
  const buttonProps = href ? { href } : { type: "button" as const };

  return (
    <ButtonComponent
      ref={ref as unknown as React.Ref<HTMLButtonElement & HTMLAnchorElement>}
      {...buttonProps}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: MOTION_EASINGS.sharp }}
    >
      {children}
    </ButtonComponent>
  );
}