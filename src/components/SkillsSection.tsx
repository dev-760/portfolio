"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/icons/Icon";

const problemSolvingSkills = [
  {
    id: "quantitative-reasoning",
    name: "Quantitative & Analytical Reasoning",
    description:
      "Working through microeconomic equilibrium models, cost allocation tables, and data series with mathematical discipline.",
    icon: "calculate",
  },
  {
    id: "schedule-discipline",
    name: "Schedule & Milestone Coordination",
    description:
      "Structuring multi-step project phases, tracking call sheet timing, and keeping deliverables aligned with hard deadlines.",
    icon: "schedule",
  },
  {
    id: "ledger-accuracy",
    name: "Accounting Precision & Data Hygiene",
    description:
      "Accurate double-entry journal entries, account balancing, and disciplined tabular documentation standards in spreadsheets.",
    icon: "check_circle",
  },
  {
    id: "research-synthesis",
    name: "Academic Research & Synthesis",
    description:
      "Reviewing management and economic literature, extracting core mechanisms, and preparing structured bilingual summaries.",
    icon: "menu_book",
  },
];

const productivityStacks = [
  {
    title: "Microsoft Excel",
    badge: "MODELING",
    desc: "Multi-sheet workbooks, formula structures (XLOOKUP, SUMIFS), pivot tables, and personal cash-flow models with clear documentation.",
    tags: ["Lookup Formulas", "Pivot Tables", "Cash Flow Models", "Tabular Formatting"],
  },
  {
    title: "General Accounting & Cost Analysis",
    badge: "ACADEMIC",
    desc: "Double-entry bookkeeping, cost allocation tables (comptabilité analytique), income statements, and balance reconciliations.",
    tags: ["General Accounting", "Comptabilité Analytique", "Balance Sheets", "Cost Allocation"],
  },
  {
    title: "Production Logistics & Ingest",
    badge: "FIELD PRACTICE",
    desc: "Call sheet schedules, camera card offloading, checksum verification, and audio-video track syncing in Premiere Pro.",
    tags: ["Call Sheet Timing", "Asset Checksums", "Premiere Pro", "Audio Sync"],
  },
  {
    title: "Knowledge & Workspace Systems",
    badge: "SYSTEMS",
    desc: "Notion knowledge archives, Google Workspace collaboration, structured folder taxonomies, and clear version control.",
    tags: ["Notion Workspaces", "Google Workspace", "Digital Archives", "Structured Taxonomies"],
  },
];

export function SkillsSection() {
  return (
    <section className="section border-b border-border bg-surface scroll-mt-16" id="skills">
      <div className="container space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 max-w-xl"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-normal tracking-tight text-foreground">
              Applied Skills &amp; Software Toolsets
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Analytical methods and software tools applied in coursework, financial models, and field production.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-xs font-mono text-muted-foreground"
          >
            Quantitative · Operational · Digital
          </motion.p>
        </div>

        {/* ========================================================
            PART 1: Analytical & Problem Solving (2x2 Grid)
            ======================================================== */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-2 font-mono">
              <Icon name="psychology" size={16} />
              Analytical &amp; Quantitative Competencies
            </h3>
            <span className="text-[10px] font-mono text-muted-foreground">4 Core Capabilities</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {problemSolvingSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-md border border-border bg-card p-6 flex flex-col justify-between hover:border-foreground/50 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="icon-chip size-9 group-hover:scale-105 transition-transform">
                      <Icon name={skill.icon} size={18} />
                    </div>
                    <span className="size-1.5 rounded-full bg-foreground/40 group-hover:bg-foreground transition-colors" />
                  </div>

                  <h4 className="text-lg font-display font-medium text-foreground tracking-tight leading-snug">
                    {skill.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================
            PART 2: Software & Applied Business Stacks (2x2 Grid)
            ======================================================== */}
        <div className="space-y-6 pt-6 border-t border-border">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-2 font-mono">
              <Icon name="work" size={16} />
              Software &amp; Operational Toolsets
            </h3>
            <span className="text-[10px] font-mono text-muted-foreground">4 Stacks</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productivityStacks.map((stack, index) => (
              <motion.div
                key={stack.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-md border border-border bg-card p-6 sm:p-7 flex flex-col justify-between hover:border-foreground/50 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-display font-normal text-foreground tracking-tight">
                      {stack.title}
                    </h4>
                    <span className="text-[10px] font-mono uppercase tracking-widest font-semibold px-2 py-0.5 rounded bg-muted/80 border border-border text-foreground">
                      {stack.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {stack.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-5 mt-5 border-t border-border/70">
                  {stack.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-muted/80 text-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
