"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  contentClassName?: string;
};

const Section = ({
  id,
  title,
  children,
  contentClassName = "space-y-4 text-base leading-relaxed text-white/75",
}: SectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Create opacity ranges - only visible when centered in viewport
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0, 0.3, 1, 0.3, 0]
  );

  // Scale effect - grows when in view
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0.85, 0.9, 1, 0.9, 0.85]
  );

  // Y-axis translation for smooth movement
  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [50, 20, 0, -20, -50]
  );

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      style={{
        opacity,
        scale,
        y,
      }}
      className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/6 bg-gradient-to-br from-[#16101f]/80 via-[#1a1425]/60 to-[#0f0a15]/80 p-8 sm:p-10 text-white shadow-[0_24px_80px_rgba(139,111,247,0.12),inset_0_1px_1px_rgba(255,255,255,0.04)] will-change-transform backdrop-blur"
    >
      <motion.div
        className="pointer-events-none absolute -right-10 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#8b6ff7]/15 to-[#b8a3ff]/5 blur-[120px]"
        style={{ opacity: useTransform(opacity, [0, 1], [0, 0.4]) }}
      />
      <motion.header
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6 flex items-center justify-between text-white/50"
      >
        <div className="flex items-center gap-2">
          <span className="h-3 w-5 rounded-md bg-white/60" />
          <span className="h-3 w-3 rounded-full border border-white/40" />
        </div>
        <h2 className="text-xs font-semibold uppercase tracking-[0.5em]">
          {title}
        </h2>
      </motion.header>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={contentClassName}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default Section;
