"use client";

import React from "react";
import { motion } from "framer-motion";
import { MOTION_EASINGS, MOTION_DURATIONS } from "@/motion/tokens";

interface SectionDividerProps {
  sectionNumber: string;
  sectionCode: string;
  label: string;
  coordinates?: string;
  id?: string;
}

export function SectionDivider({
  sectionNumber,
  sectionCode,
  label,
  coordinates = "33.5731° N, 7.5898° W",
  id,
}: SectionDividerProps) {
  return (
    <div id={id} className="scroll-mt-20 w-full relative z-20 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 py-6 sm:py-8">
        <div className="flex items-center justify-between text-xs font-mono text-outline mb-2">
          {/* Left: Coordinate telemetry indicator */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: MOTION_DURATIONS.ui, ease: MOTION_EASINGS.sharp }}
            className="flex items-center gap-2.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-semibold text-on-surface">SYS.SEC.{sectionNumber}</span>
            <span className="text-outline-variant font-light">/</span>
            <span className="text-primary font-bold tracking-wider uppercase">{sectionCode}</span>
          </motion.div>

          {/* Right: Section descriptor and geographical coordinates */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: MOTION_DURATIONS.ui, ease: MOTION_EASINGS.sharp }}
            className="hidden sm:flex items-center gap-3 text-[11px] text-outline font-medium tracking-tight"
          >
            <span className="uppercase tracking-wider text-outline-variant">{label}</span>
            <span className="text-outline-variant">•</span>
            <span className="font-mono text-outline">{coordinates}</span>
          </motion.div>
        </div>

        {/* Architectural Divider Vector: Draws from 0 to 100% on viewport arrival */}
        <div className="relative h-px w-full bg-outline-variant/20 overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: MOTION_DURATIONS.section, ease: MOTION_EASINGS.system }}
            style={{ originX: 0 }}
            className="absolute inset-0 bg-gradient-to-r from-primary via-primary-container to-outline-variant/30"
          />
        </div>
      </div>
    </div>
  );
}

export default SectionDivider;
