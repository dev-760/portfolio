"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profile from "@/data/profile";

const Highlights = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0, 0.3, 1, 0.3, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0.85, 0.9, 1, 0.9, 0.85]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [50, 20, 0, -20, -50]
  );

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale, y }}
      className="grid gap-6 rounded-2xl sm:rounded-3xl border border-white/6 bg-gradient-to-br from-[#16101f]/80 via-[#1a1425]/60 to-[#0f0a15]/80 p-8 sm:p-10 shadow-[0_24px_80px_rgba(139,111,247,0.12),inset_0_1px_1px_rgba(255,255,255,0.04)] text-white will-change-transform md:grid-cols-3 backdrop-blur"
    >
      {profile.homeHighlights.map((highlight, index) => (
        <motion.article
          key={highlight.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.04, y: -8 }}
          className="flex flex-col gap-4 rounded-xl border border-white/7 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 text-white transition-all hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.04] hover:border-white/10 hover:shadow-[0_16px_48px_rgba(139,111,247,0.16)] backdrop-blur-sm"
        >
          <span className="text-xs uppercase tracking-[0.5em] text-white/50">
            {highlight.label}
          </span>
          <span className="text-3xl font-semibold text-white">
            {highlight.value}
          </span>
          <p className="text-sm text-white/70">{highlight.description}</p>
        </motion.article>
      ))}
    </motion.section>
  );
};

export default Highlights;
