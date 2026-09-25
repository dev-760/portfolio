"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/icons/Icon";
import { MOTION_EASINGS, MOTION_DURATIONS } from "@/motion/tokens";

interface SkillModule {
  id: string;
  name: string;
  description: string;
  metric: string;
}

const problemSolvingSkills: SkillModule[] = [
  {
    id: "analytical-thinking",
    name: "Quantitative & Analytical Thinking",
    description: "Working through economic and accounting data, evaluating cost structures, and verifying figures with disciplined precision.",
    metric: "Data & Analysis",
  },
  {
    id: "process-coordination",
    name: "Process & Schedule Coordination",
    description: "Structuring multi-step tasks, organizing call sheets and shoot schedules, and keeping teams aligned on deadlines.",
    metric: "Workflows",
  },
  {
    id: "structured-problem-solving",
    name: "Structured Problem Solving",
    description: "Deconstructing business case studies and operational challenges into clear, manageable, and actionable steps.",
    metric: "Methodology",
  },
  {
    id: "communication-teamwork",
    name: "Communication & Public Speaking",
    description: "Presenting ideas clearly, engaging in academic debate, and communicating effectively with crew, clients, and peers.",
    metric: "Presentation",
  },
  {
    id: "research-learning",
    name: "Academic Research & Study Skills",
    description: "Synthesizing literature in economics and management, extracting key insights, and maintaining independent study discipline.",
    metric: "Independent Study",
  },
  {
    id: "attention-detail",
    name: "Attention to Detail & Accuracy",
    description: "Precise accounting journal entries, clean data tables, and consistent documentation standards across every deliverable.",
    metric: "Accuracy",
  },
];

const productivityStacks = [
  {
    title: "Microsoft 365 Suite",
    badge: "CORE ENGINE",
    desc: "Excel formulas and data tables for budgets and analysis, Word for academic reports, PowerPoint for structured presentations.",
    tags: ["#Excel", "#PowerPoint", "#Word"],
  },
  {
    title: "General Accounting & Finance",
    badge: "ACADEMIC",
    desc: "Comptabilité générale, cost analysis (comptabilité analytique), income statements, balance sheets, and personal budgeting.",
    tags: ["#Comptabilité", "#CostAnalysis", "#Budgeting"],
  },
  {
    title: "Digital Workspaces & Productivity",
    badge: "WORKSPACES",
    desc: "Notion knowledge organization, Google Workspace collaboration, digital skills, and structured folder taxonomies.",
    tags: ["#Notion", "#GoogleWorkspace", "#DigitalSkills"],
  },
  {
    title: "Production Logistics & Coordination",
    badge: "OPERATIONS",
    desc: "Call sheet preparation, vendor liaison, timeline tracking, and on-set coordination learned through hands-on experience at EL25 Studio.",
    tags: ["#Logistics", "#Coordination", "#EL25Studio"],
  },
];

export function SkillsSection() {
  const [expandedIds, setExpandedIds] = useState<string[]>(["analytical-thinking"]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (expandedIds.length === problemSolvingSkills.length) {
      setExpandedIds([]);
    } else {
      setExpandedIds(problemSolvingSkills.map((s) => s.id));
    }
  };

  const isAllExpanded = expandedIds.length === problemSolvingSkills.length;

  return (
    <section className="py-20 lg:py-24 border-b border-outline-variant/40 bg-surface scroll-mt-16" id="skills">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface">
              Tools for Thinking, Organizing, and Solving
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: MOTION_DURATIONS.standard }}
            className="text-sm text-outline max-w-sm"
          >
            A calibrated toolkit balancing quantitative business foundations with practical software and operational skills.
          </motion.p>
        </div>

        {/* ========================================================
            CATEGORY 1: Problem Solving (Interactive Accordion)
            ======================================================== */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-outline-variant/60 pb-3">
            <div className="flex items-center gap-2">
              <Icon name="psychology" size={20} className="text-primary" />
              <h3 className="text-on-surface text-sm font-bold tracking-wider uppercase">
                Problem Solving
              </h3>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleAll}
                className="text-xs font-mono font-medium text-primary hover:text-secondary underline underline-offset-2 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-expanded={isAllExpanded}
                aria-controls="problem-solving-accordion"
              >
                {isAllExpanded ? "Collapse All" : "Expand All"}
              </button>
              <span className="text-outline-variant font-light" aria-hidden="true">•</span>
              <span className="text-on-surface-variant text-xs font-mono" aria-label="6 modules available">06 Modules</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="problem-solving-accordion" role="region" aria-label="Problem solving skills accordion">
            {problemSolvingSkills.map((skill, index) => {
              const isExpanded = expandedIds.includes(skill.id);
              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: index * 0.05, duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
                  className={`bg-surface-container-lowest border rounded p-4.5 transition-all duration-200 ${
                    isExpanded
                      ? "border-primary/70 shadow-xs"
                      : "border-outline-variant/40 hover:border-primary/40"
                  }`}
                >
                  <button
                    onClick={() => toggleExpand(skill.id)}
                    className="w-full flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xs cursor-pointer py-1"
                    aria-expanded={isExpanded}
                    aria-controls={`desc-${skill.id}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`size-2 rounded-full inline-block transition-colors duration-200 shrink-0 ${
                        isExpanded ? "bg-primary" : "bg-outline-variant"
                      }`} />
                      <span className="text-on-surface font-semibold text-sm hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-mono text-outline uppercase hidden sm:inline">
                        {skill.metric}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ duration: 0.2, ease: MOTION_EASINGS.sharp }}
                        className="text-outline hover:text-primary transition-colors inline-flex items-center"
                      >
                        <Icon name="add" size={18} />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`desc-${skill.id}`}
                        role="region"
                        aria-labelledby={`skill-${skill.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: MOTION_EASINGS.system }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 pt-3 border-t border-surface-container text-xs leading-relaxed text-on-surface-variant bg-surface-container-low/60 p-3 rounded">
                          {skill.description}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            CATEGORY 2: Business & Productivity Stacks
            ======================================================== */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-outline-variant/60 pb-3">
            <div className="flex items-center gap-2">
              <Icon name="work" size={20} className="text-primary" />
              <h3 className="text-on-surface text-sm font-bold tracking-wider uppercase">
                Business &amp; Productivity
              </h3>
            </div>
            <span className="text-on-surface-variant text-xs font-mono">04 Stacks</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {productivityStacks.map((stack, index) => (
              <motion.div
                key={stack.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: index * 0.08, duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
                className="bg-surface-container-lowest border border-outline-variant/40 rounded p-5 flex flex-col justify-between hover:border-primary/50 transition-colors shadow-2xs group"
              >
                <div>
                  <div className="flex items-center justify-between pb-2.5">
                    <h4 className="font-semibold text-sm text-on-surface group-hover:text-primary transition-colors">
                      {stack.title}
                    </h4>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed">
                      {stack.badge}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {stack.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 mt-4 border-t border-surface-container-low">
                  {stack.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-mono text-outline">
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
