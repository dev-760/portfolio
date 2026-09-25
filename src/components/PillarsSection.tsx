"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/icons/Icon";
import { MOTION_EASINGS, MOTION_DURATIONS } from "@/motion/tokens";

interface PillarItem {
  id: string;
  number: string;
  title: string;
  icon: string;
  description: string;
  items: string[];
}

const pillars: PillarItem[] = [
  {
    id: "business",
    number: "01",
    title: "BUSINESS",
    icon: "account_balance",
    description: "Administration, Financial intuition, Organizational design, and resource allocation models constructed for durability.",
    items: ["Financial Forecasting", "Organizational Topology", "Governance & Protocol"],
  },
  {
    id: "thinking",
    number: "02",
    title: "THINKING",
    icon: "query_stats",
    description: "Systems & Analysis, Bottleneck identification, Data synthesis, and isolating root-cause friction within workflows.",
    items: ["Root Cause Diagnosis", "Synthesis of Multi-source Data", "System Feedback Loops"],
  },
  {
    id: "execution",
    number: "03",
    title: "EXECUTION",
    icon: "rocket_launch",
    description: "Creative Production, High-leverage workflows, Rapid delivery, and pragmatic digital asset orchestration.",
    items: ["High-Leverage Workflows", "Iterative Prototyping", "Clear Stakeholder Comms"],
  },
];

const PillarCard: React.FC<{ pillar: PillarItem; index: number }> = ({ pillar, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: 0.12 + index * 0.1,
        duration: MOTION_DURATIONS.standard,
        ease: MOTION_EASINGS.system,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-surface-container-lowest p-8 rounded border transition-colors duration-300 flex flex-col justify-between h-full border-outline-variant/50 hover:border-primary/70 shadow-xs"
    >
      <div>
        {/* Top Header: Metadata Number & Icon */}
        <div className="flex items-center justify-between pb-8">
          <span
            className={`font-mono text-2xl font-bold transition-colors duration-200 ${
              isHovered ? "text-primary" : "text-outline-variant"
            }`}
          >
            {pillar.number}
          </span>
          <motion.div
            animate={{
              rotate: isHovered ? 6 : 0,
              y: isHovered ? -1 : 0,
            }}
            transition={{ duration: 0.24, ease: MOTION_EASINGS.sharp }}
            className={`transition-colors duration-200 inline-flex items-center ${
              isHovered ? "text-primary" : "text-outline"
            }`}
          >
            <Icon name={pillar.icon} size={24} />
          </motion.div>
        </div>

        {/* Title & Description with subtle 2px spatial response */}
        <h3
          className={`text-xl font-bold text-on-surface mb-3 tracking-tight transition-transform duration-200 ${
            isHovered ? "translate-x-0.5 text-primary" : ""
          }`}
        >
          {pillar.title}
        </h3>
        <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
          {pillar.description}
        </p>
      </div>

      {/* Internal Divider with Extension Animation */}
      <div>
        <div className="relative h-px w-full bg-outline-variant/30 overflow-hidden mb-5">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.35, ease: MOTION_EASINGS.system }}
            style={{ originX: 0 }}
            className="absolute inset-0 bg-primary/70"
          />
        </div>

        {/* Sequential List Markers */}
        <ul className="space-y-2 text-xs font-mono text-outline">
          {pillar.items.map((item, itemIdx) => (
            <li key={item} className="flex items-center gap-2">
              <motion.span
                animate={{
                  scale: isHovered ? [1, 1.4, 1] : 1,
                  backgroundColor: isHovered ? "#3157ff" : "#003ae4",
                }}
                transition={{
                  delay: isHovered ? itemIdx * 0.06 : 0,
                  duration: 0.22,
                  ease: MOTION_EASINGS.sharp,
                }}
                className="w-1 h-1 rounded-full bg-primary inline-block"
              />
              <span
                className={`transition-colors duration-200 ${
                  isHovered ? "text-on-surface" : "text-outline"
                }`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export function PillarsSection() {
  return (
    <section className="py-20 lg:py-24 border-b border-outline-variant/40 bg-surface-container-low" id="pillars">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header: Structure before content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-outline">
              02 — CORE PILLARS
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface mt-2">
              Structured Execution Disciplines
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: MOTION_DURATIONS.standard }}
            className="text-sm text-outline max-w-sm"
          >
            A tri-part foundation combining business fundamentals, rigorous systems analysis, and hands-on execution.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PillarsSection;
