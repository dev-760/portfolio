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
      className="grid gap-6 rounded-[24px] sm:rounded-[32px] border border-white/10 bg-[#151019]/70 p-6 sm:p-8 shadow-[0_20px_70px_rgba(4,0,10,0.5)] backdrop-blur text-white will-change-transform md:grid-cols-3"
    >
      {profile.homeHighlights.map((highlight, index) => (
        <motion.article
          key={highlight.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-black/20 p-5 text-white transition-shadow hover:shadow-[0_10px_40px_rgba(123,93,255,0.15)]"
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
