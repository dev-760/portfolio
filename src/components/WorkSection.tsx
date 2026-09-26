"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/icons/Icon";
import { MOTION_EASINGS, MOTION_DURATIONS } from "@/motion/tokens";

interface PillarItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  items: string[];
}

const pillars: PillarItem[] = [
  {
    id: "management",
    title: "Management & Strategy",
    icon: "account_balance",
    description: "Studying organization theory, human resource fundamentals, and operational workflows to understand how enterprises coordinate teams and achieve objectives.",
    items: ["Principles of Management", "Organization Theory", "Operational Workflows"],
  },
  {
    id: "accounting",
    title: "Accounting & Economics",
    icon: "calculate",
    description: "Building quantitative rigor through general accounting (comptabilité générale), cost analysis, descriptive statistics, and micro/macroeconomics.",
    items: ["General Accounting (Comptabilité)", "Cost Analysis & Budgeting", "Descriptive Statistics"],
  },
  {
    id: "execution",
    title: "Practical Execution",
    icon: "checklist",
    description: "Applying classroom concepts to tangible outcomes—commercial production coordination at EL25 Studio, Excel modeling, and structured problem-solving.",
    items: ["Production Coordination", "Excel Modeling & Analysis", "Practical Discipline"],
  },
];

export function WorkSection() {
  return (
    <section className="py-24 border-b border-border bg-surface scroll-mt-16" id="work">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left: Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-medium tracking-tight text-foreground text-balance">
                Core Disciplines
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
                A grounded foundation combining business management, accounting, and execution.
              </p>
            </motion.div>
          </div>

          {/* Right: Vertical Ledger List */}
          <div className="lg:col-span-8 flex flex-col">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group border-t border-border py-8 first:border-t-0 lg:first:pt-0"
              >
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                  <div className="shrink-0 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    <Icon name={pillar.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-foreground tracking-tight mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-6">
                      {pillar.description}
                    </p>
                    
                    <ul className="flex flex-wrap gap-2">
                      {pillar.items.map((item) => (
                        <li 
                          key={item} 
                          className="px-3 py-1 bg-surface-container text-xs font-medium text-foreground rounded-md border border-border/50"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
