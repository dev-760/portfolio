"use client";

import { motion } from "framer-motion";

const pillars = [
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

export function PillarsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 border-b border-outline-variant/40 bg-surface-container-low" id="pillars">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-12 gap-4">
          <div>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-outline">02 — CORE PILLARS</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface mt-2">
              Structured Execution Disciplines
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-outline max-w-sm">
            A tri-part foundation combining business fundamentals, rigorous systems analysis, and hands-on execution.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
              className="group bg-surface-container-lowest p-6 sm:p-8 rounded border border-outline-variant/50 hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between pb-6 sm:pb-8">
                  <motion.span
                    className="font-mono text-xl sm:text-2xl font-bold text-outline-variant group-hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    {pillar.number}
                  </motion.span>
                  <motion.span
                    className="material-symbols-outlined text-outline group-hover:text-primary transition-colors"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    {pillar.icon}
                  </motion.span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-on-surface mb-2 sm:mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4 sm:mb-6">
                  {pillar.description}
                </p>
              </div>
              <ul className="pt-4 sm:pt-6 border-t border-outline-variant/30 space-y-2 text-[10px] sm:text-xs font-mono text-outline">
                {pillar.items.map((item, j) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + j * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <motion.span
                      className="w-1 h-1 bg-primary rounded-full"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
