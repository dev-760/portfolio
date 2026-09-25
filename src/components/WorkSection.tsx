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
    id: "management",
    number: "01",
    title: "MANAGEMENT & STRATEGY",
    icon: "account_balance",
    description: "Studying organization theory, human resource fundamentals, and operational workflows to understand how enterprises coordinate teams and achieve objectives.",
    items: ["Principles of Management", "Organization Theory", "Operational Workflows"],
  },
  {
    id: "accounting",
    number: "02",
    title: "ACCOUNTING & ECONOMICS",
    icon: "calculate",
    description: "Building quantitative rigor through general accounting (comptabilité générale), cost analysis, descriptive statistics, and micro/macroeconomics.",
    items: ["General Accounting (Comptabilité)", "Cost Analysis & Budgeting", "Descriptive Statistics"],
  },
  {
    id: "execution",
    number: "03",
    title: "PRACTICAL EXECUTION",
    icon: "checklist",
    description: "Applying classroom concepts to tangible outcomes—commercial production coordination at EL25 Studio, Excel modeling, and structured problem-solving.",
    items: ["Production Coordination", "Excel Modeling & Analysis", "Practical Discipline"],
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
      className="group relative bg-surface-container-lowest p-8 rounded-xl border transition-colors duration-300 flex flex-col justify-between h-full border-outline-variant/50 hover:border-primary/70 shadow-xs"
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
                }}
                transition={{
                  delay: isHovered ? itemIdx * 0.06 : 0,
                  duration: 0.22,
                  ease: MOTION_EASINGS.sharp,
                }}
                className={`w-1.5 h-1.5 rounded-full inline-block transition-colors duration-200 ${
                  isHovered ? "bg-accent" : "bg-primary"
                }`}
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

export function WorkSection() {
  return (
    <section className="py-20 lg:py-24 border-b border-outline-variant/40 bg-surface-container-low scroll-mt-16" id="work">
      <div className="max-w-7xl mx-auto px-6">
        {/* Core Pillars */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
            >
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface">
                Core Academic &amp; Practical Disciplines
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: MOTION_DURATIONS.standard }}
              className="text-sm text-outline max-w-sm"
            >
              A grounded foundation combining business management, accounting and economics, and practical execution.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list" aria-label="Core pillars of work">
            {pillars.map((pillar, index) => (
              <PillarCard key={pillar.id} pillar={pillar} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
