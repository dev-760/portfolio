"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SystemTimeline, TimelineMilestone } from "@/components/SystemTimeline";
import { Icon } from "@/components/icons/Icon";
import { MOTION_EASINGS, MOTION_DURATIONS } from "@/motion/tokens";

interface KeywordHighlightProps {
  word: string;
  delay: number;
}

const KeywordHighlight: React.FC<KeywordHighlightProps> = ({ word, delay }) => {
  return (
    <span className="relative inline-block text-primary font-semibold">
      <span>{word}</span>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          delay,
          duration: 0.38,
          ease: MOTION_EASINGS.sharp,
        }}
        style={{ originX: 0 }}
        className="absolute left-0 bottom-0 w-full h-[1.5px] bg-primary/60"
      />
    </span>
  );
};

const academicMilestones: TimelineMilestone[] = [
  {
    id: "fsjes",
    badge: "NOW · 2026 – Present",
    subtitle: "First-year student",
    title: "Licence in Business Administration",
    institution: "Faculté des Sciences Juridiques, Économiques et Sociales (FSJES) Aïn Chock, Université Hassan II de Casablanca",
    isCurrent: true,
  },
  {
    id: "bac",
    badge: "2026",
    title: "Baccalaureate in Physical Science (English Option)",
    institution: "Prince Moulay Abdellah High School",
    isCurrent: false,
    content: (
      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed bg-surface-container-low/60 rounded-md p-3.5 border border-outline-variant/20 mt-2">
        Graduated with a focus in Physical Science (English Option). Developed a strong quantitative, mathematical, and analytical foundation along with English bilingual proficiency.
      </p>
    ),
  },
];

const operatingPrinciples = [
  {
    num: "01",
    title: "Understand the Context",
    track: "Diagnosis & Fundamentals",
    icon: "search_insights",
    desc: "Take the time to examine organizational context, figures, and constraints before proposing changes or jumping into execution.",
  },
  {
    num: "02",
    title: "Structure the Process",
    track: "Organization & Clarity",
    icon: "account_tree",
    desc: "Break down complex projects into clear, manageable steps with organized schedules, documentation, and tools like Excel.",
  },
  {
    num: "03",
    title: "Deliver with Discipline",
    track: "Execution & Consistency",
    icon: "precision_manufacturing",
    desc: "Focus on meeting deadlines, communicating clearly with team members, and taking responsibility for quality output.",
  },
];

export function AboutSection() {
  const [hoveredPrinciple, setHoveredPrinciple] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-24 border-b border-outline-variant/40 bg-surface scroll-mt-16" id="about">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        {/* ========================================================
            PART 1: Editorial Introduction Statement
            ======================================================== */}
        <div>
          {/* Section Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: MOTION_DURATIONS.fast + 0.1, ease: MOTION_EASINGS.sharp }}
            className="pb-8"
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-outline">
              01 — NARRATIVE &amp; FORMATION
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Headline */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: 0.1,
                duration: MOTION_DURATIONS.section,
                ease: MOTION_EASINGS.system,
              }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface leading-[1.2]">
                “I&apos;m Hassan, a Business Administration student interested in understanding how{" "}
                <KeywordHighlight word="people" delay={0.35} />,{" "}
                <KeywordHighlight word="organizations" delay={0.6} />, and{" "}
                <KeywordHighlight word="numbers" delay={0.85} /> work together.”
              </h2>
            </motion.div>

            {/* Right Divider & Supporting Paragraphs */}
            <div className="lg:col-span-5 lg:pl-10 relative flex flex-col gap-6 text-on-surface-variant">
              {/* Architectural Vertical Divider Line */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: MOTION_DURATIONS.section, ease: MOTION_EASINGS.system }}
                style={{ originY: 0 }}
                className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-outline-variant/40"
              />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
                className="text-body-md text-on-surface-variant leading-relaxed"
              >
                First-year undergraduate pursuing a Licence in Business Administration at FSJES Aïn Chock (Université Hassan II de Casablanca), building a strong foundation in management, accounting, economics, and quantitative methods.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.38, duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
                className="text-body-md text-on-surface-variant leading-relaxed"
              >
                Balancing university studies with practical experience from commercial production coordination at EL25 Studio and youth education with the Motatawi3 volunteer program.
              </motion.p>
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 2: Narrative Bio vs. At a Glance Card
            ======================================================== */}
        <div className="pt-10 border-t border-outline-variant/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Narrative Bio (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <Icon name="article" size={20} className="text-primary" />
                <h3 className="text-on-surface text-xl sm:text-2xl font-bold tracking-tight">Narrative Bio</h3>
              </div>

              <div className="text-on-surface-variant text-[15px] sm:text-base leading-relaxed space-y-4 font-normal">
                <p>
                  I am a first-year Licence in Business Administration student at the <span className="font-medium text-on-surface">Faculté des Sciences Juridiques, Économiques et Sociales (FSJES) Aïn Chock</span>, Université Hassan II de Casablanca. I have a genuine interest in understanding how businesses function from the inside out—how management decisions are structured, how accounting keeps companies grounded, and how day-to-day operations deliver results.
                </p>
                <p>
                  My university program establishes the core fundamentals of modern business: micro and macroeconomics, general accounting (comptabilité générale), cost analysis, descriptive statistics, and commercial law. I focus on developing solid analytical rigor and connecting classroom theory to practical problem-solving.
                </p>
                <p>
                  Beyond academics, working as a Production Trainee at <span className="font-medium text-on-surface">EL25 Studio</span> taught me how to manage real client deadlines, logistical coordination, and on-set workflows under pressure. Additionally, participating in the national <span className="font-medium text-on-surface">Motatawi3</span> volunteer initiative helped me develop communication and teamwork skills.
                </p>
                <p className="italic text-on-surface border-l-2 border-primary pl-4 py-2 bg-surface-container-low/70 rounded-r text-sm sm:text-[15px]">
                  “Sound business practice starts with understanding the figures and the people behind them, followed by consistent, disciplined execution.”
                </p>
              </div>
            </motion.div>

            {/* Right: At a Glance Card (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.15, duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
              className="lg:col-span-5"
            >
              <div className="rounded-lg bg-surface-container-lowest border border-outline-variant/60 shadow-xs p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-outline-variant/40">
                  <div className="flex items-center gap-2">
                    <Icon name="badge" size={18} className="text-primary" />
                    <h4 className="text-xs font-bold tracking-widest uppercase text-on-surface">At a Glance</h4>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-primary-fixed text-on-primary-fixed uppercase tracking-wide">
                    Active
                  </span>
                </div>

                <dl className="space-y-3.5 text-xs sm:text-sm">
                  <div className="flex flex-col gap-0.5 pb-2.5 border-b border-outline-variant/20">
                    <dt className="text-[10px] font-semibold uppercase tracking-wider text-outline">Name</dt>
                    <dd className="text-on-surface font-bold text-base">Hassan Karasu</dd>
                  </div>

                  <div className="flex flex-col gap-0.5 pb-2.5 border-b border-outline-variant/20">
                    <dt className="text-[10px] font-semibold uppercase tracking-wider text-outline">Degree &amp; Institution</dt>
                    <dd className="text-on-surface font-medium">Licence in Business Administration · FSJES Aïn Chock</dd>
                  </div>

                  <div className="flex flex-col gap-0.5 pb-2.5 border-b border-outline-variant/20">
                    <dt className="text-[10px] font-semibold uppercase tracking-wider text-outline">Location</dt>
                    <dd className="text-on-surface flex items-center gap-1.5 font-medium">
                      <Icon name="location_on" size={16} className="text-primary" />
                      Casablanca, Morocco
                    </dd>
                  </div>

                  <div className="flex flex-col gap-0.5 pb-2.5 border-b border-outline-variant/20">
                    <dt className="text-[10px] font-semibold uppercase tracking-wider text-outline">Current Status</dt>
                    <dd className="text-on-surface font-medium flex items-center gap-2">
                      <span className="size-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                      First-year student
                    </dd>
                  </div>

                  <div className="flex flex-col gap-0.5 pb-2.5 border-b border-outline-variant/20">
                    <dt className="text-[10px] font-semibold uppercase tracking-wider text-outline">Core Focus</dt>
                    <dd className="text-secondary font-semibold leading-snug">
                      Management, Accounting &amp; Practical Execution
                    </dd>
                  </div>

                  <div className="flex flex-col gap-1 pb-2.5 border-b border-outline-variant/20">
                    <dt className="text-[10px] font-semibold uppercase tracking-wider text-outline">Languages</dt>
                    <dd className="text-on-surface-variant font-normal space-y-1 pt-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-on-surface">Arabic</span>
                        <span className="text-outline text-[11px]">Native</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-on-surface">English</span>
                        <span className="text-outline text-[11px]">Full Professional</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-on-surface">French</span>
                        <span className="text-outline text-[11px]">Working Proficiency</span>
                      </div>
                    </dd>
                  </div>

                  <div className="flex flex-col gap-1.5 pt-1">
                    <dt className="text-[10px] font-semibold uppercase tracking-wider text-outline">Networks</dt>
                    <dd className="flex flex-col gap-2 pt-1">
                      <a
                        className="flex items-center justify-between p-2 rounded bg-surface-container-low hover:bg-surface-container transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        href="https://linkedin.com/in/hassan-karasu-a7485336b"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="flex items-center gap-2 text-xs font-medium text-on-surface">
                          <Icon name="share" size={14} className="text-outline group-hover:text-primary transition-colors" />
                          LinkedIn
                        </span>
                        <Icon name="arrow_outward" size={13} className="text-outline group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ========================================================
            PART 3: Education & Formation Timeline (SYSTEM FLOW Active Progress)
            ======================================================== */}
        <div className="pt-10 border-t border-outline-variant/30">
          <div className="pb-8">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-outline">
              ACADEMIC FORMATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight mt-1">
              Education &amp; Quantitative Foundation
            </h2>
          </div>
          <SystemTimeline milestones={academicMilestones} />
        </div>

        {/* ========================================================
            PART 4: Operating Principles
            ======================================================== */}
        <div className="pt-10 border-t border-outline-variant/30">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-outline">
                METHODOLOGY &amp; CULTURE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight mt-1">
                Operating Principles
              </h2>
            </div>
            <p className="text-xs text-outline font-mono">
              3 GUIDING PRINCIPLES
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {operatingPrinciples.map((item, index) => {
              const isHovered = hoveredPrinciple === index;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: index * 0.1, duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
                  onMouseEnter={() => setHoveredPrinciple(index)}
                  onMouseLeave={() => setHoveredPrinciple(null)}
                  className="group relative rounded-lg border border-outline-variant/40 bg-surface-container-lowest p-6 hover:border-primary/60 transition-all duration-300 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-bold font-mono tracking-wider text-primary px-2.5 py-1 rounded bg-primary-fixed">
                        {item.num}
                      </span>
                      <motion.div
                        animate={{ rotate: isHovered ? 8 : 0, scale: isHovered ? 1.08 : 1 }}
                        transition={{ duration: 0.22 }}
                        className="text-outline group-hover:text-primary transition-colors inline-flex items-center"
                      >
                        <Icon name={item.icon} size={22} />
                      </motion.div>
                    </div>

                    <h4 className="text-lg font-bold text-on-surface tracking-tight mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Internal divider extension */}
                  <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-[11px] uppercase tracking-wider text-outline font-medium">
                    <span>{item.track}</span>
                    <Icon name="arrow_forward" size={13} className="text-outline group-hover:translate-x-1 group-hover:text-primary transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
