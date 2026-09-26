"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/icons/Icon";

const problemSolvingSkills = [
  {
    id: "analytical-thinking",
    name: "Quantitative & Analytical Thinking",
    description:
      "Working through economic and accounting figures, evaluating cost structures, and verifying data with mathematical discipline.",
    icon: "calculate",
  },
  {
    id: "process-coordination",
    name: "Process & Schedule Coordination",
    description:
      "Structuring multi-step milestones, organizing call sheets and production timelines, and keeping teams strictly aligned on deadlines.",
    icon: "schedule",
  },
  {
    id: "structured-problem-solving",
    name: "Structured Problem Solving",
    description:
      "Deconstructing management case studies and operational bottlenecks into clear, logical, and actionable phases.",
    icon: "account_tree",
  },
  {
    id: "communication-teamwork",
    name: "Communication & Academic Debate",
    description:
      "Synthesizing arguments clearly, communicating transparently with crew, clients, and faculty, and presenting with confidence.",
    icon: "forum",
  },
  {
    id: "research-learning",
    name: "Academic Research & Synthesis",
    description:
      "Reviewing literature across economics and management, extracting core concepts, and applying systematic study methods.",
    icon: "menu_book",
  },
  {
    id: "attention-detail",
    name: "Attention to Detail & Accuracy",
    description:
      "Precise general accounting journal entries, clean data tables, and disciplined documentation standards across every deliverable.",
    icon: "check_circle",
  },
];

const productivityStacks = [
  {
    title: "Microsoft 365 Suite",
    badge: "CORE ENGINE",
    desc: "Excel formulas and data tables for budgets and analysis, Word for academic reports, and PowerPoint for structured executive presentations.",
    tags: ["Excel Formulas", "Data Tables", "PowerPoint", "Word Documentation"],
  },
  {
    title: "General Accounting & Finance",
    badge: "ACADEMIC",
    desc: "Double-entry bookkeeping, cost analysis (comptabilité analytique), income statements, balance sheets, and personal cash flow management.",
    tags: ["General Accounting", "Cost Analysis", "Balance Sheets", "Budgeting"],
  },
  {
    title: "Digital Workspaces & Productivity",
    badge: "SYSTEMS",
    desc: "Notion knowledge organization, Google Workspace collaboration, digital skills, and structured folder taxonomies.",
    tags: ["Notion Workspaces", "Google Workspace", "Digital Archive", "Structured Files"],
  },
  {
    title: "Commercial Ad Production & Media",
    badge: "OPERATIONS",
    desc: "Hands-on ad production at EL25 Studio: on-set filming, post-production video editing, call sheet management, and working directly with clients.",
    tags: ["Ad Production", "On-Set Filming", "Video Editing", "Client Collaboration"],
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
              Tools for Thinking &amp; Solving
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A disciplined toolkit balancing analytical problem-solving with practical software execution.
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
            PART 1: Quantitative & Problem Solving (3x2 Grid)
            ======================================================== */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <Icon name="psychology" size={16} />
              Analytical &amp; Problem Solving Capabilities
            </h3>
            <span className="text-[10px] font-mono text-muted-foreground">6 Competencies</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                className="rounded-md border border-border bg-card p-6 flex flex-col justify-between hover:border-foreground/30 transition-all duration-200 shadow-xs group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="size-9 rounded bg-muted flex items-center justify-center text-foreground group-hover:scale-105 transition-transform">
                      <Icon name={skill.icon} size={18} />
                    </div>
                    <span className="size-1.5 rounded-full bg-foreground/30 group-hover:bg-foreground transition-colors" />
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
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <Icon name="work" size={16} />
              Applied Software &amp; Operational Toolsets
            </h3>
            <span className="text-[10px] font-mono text-muted-foreground">4 Toolsets</span>
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
                className="rounded-md border border-border bg-card p-6 sm:p-7 flex flex-col justify-between hover:border-foreground/30 transition-all duration-200 shadow-xs group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-display font-normal text-foreground tracking-tight">
                      {stack.title}
                    </h4>
                    <span className="text-[10px] font-mono uppercase tracking-widest font-semibold px-2 py-0.5 rounded bg-muted border border-border text-foreground">
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
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-muted/60 text-muted-foreground border border-border/60"
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
