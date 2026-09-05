"use client";

import { useEffect, useRef } from "react";

const MouseGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.background = `radial-gradient(450px circle at ${e.clientX}px ${e.clientY}px, rgba(139, 111, 247, 0.12), transparent 70%)`;
          glowRef.current.style.opacity = "1";
        }
      });
    };

    const handleMouseLeave = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = "0";
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 opacity-0 transition-opacity duration-300"
    />
  );
};

export default MouseGlow;
