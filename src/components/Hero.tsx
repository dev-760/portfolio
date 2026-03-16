"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profile from "@/data/profile";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 1, 0.2, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 1, 0.9, 0.85]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0, -20, -50]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        opacity,
        scale,
        y,
      }}
      className="relative overflow-hidden rounded-[24px] sm:rounded-[36px] border border-white/5 bg-[#161117]/95 p-6 sm:p-10 text-white shadow-[0_35px_120px_rgba(5,2,8,0.65)] will-change-transform"
    >
      <div className="absolute inset-0 z-0">
        {/* Subtle Tech Grid Background */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"
        />
        
        {/* Animated Glow Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-8 top-0 h-64 w-64 rounded-full bg-[#7b5dff]/40 blur-[80px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#af8cff]/30 blur-[100px]" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-black/80" />
      </div>
      <div className="relative flex flex-col gap-8">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.6em] text-white/50">
          <div className="flex items-center gap-2">
            <span className="h-3 w-5 rounded-md bg-white/70" />
            <span className="h-3 w-3 rounded-full border border-white/50" />
          </div>
          <span>Portfolio</span>
        </div>
        <div className="text-[clamp(2.5rem,8vw,6rem)] font-black uppercase leading-[0.9] tracking-[0.1em] sm:tracking-[0.15em] text-white">
          {profile.name.split(" ").map((part) => (
            <span key={part} className="block">
              {part}
            </span>
          ))}
        </div>
        <p className="max-w-2xl text-lg text-white/80">{profile.tagline}</p>
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.5em] text-white/60">
          <span>Robotics</span>
          <span>·</span>
          <span>Mechatronics</span>
          <span>·</span>
          <span>Community</span>
          <span>·</span>
          <span>Tech</span>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row flex-wrap gap-4 mt-4">
          <button
            onClick={() => scrollToSection("experience")}
            className="group w-full sm:w-auto relative overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-[#1a0f14] transition-all hover:scale-105"
          >
            <span className="relative z-10">see my work</span>
            <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-white via-[#e2d5ff] to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-0 z-0 bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white backdrop-blur-md transition-all hover:border-white/50 hover:bg-white/10 text-center"
          >
            get in touch
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
