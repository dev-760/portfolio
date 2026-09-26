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
    badge: "CURRENT ENROLLMENT",
    subtitle: "First-Year Undergraduate",
    period: "2026",
    location: "Casablanca, Morocco",
    title: "Licence in Business Administration",
    institution: "Faculté des Sciences Juridiques, Économiques et Sociales (FSJES) Aïn Chock",
    institutionDetail: "Université Hassan II de Casablanca",
    isCurrent: true,
    summary:
      "Developing comprehensive foundational knowledge in enterprise management, organizational dynamics, quantitative financial modeling, and macro-level commerce. Balancing classroom theory with real-world execution discipline.",
    modulesTitle: "Core Academic Curriculum & Quantitative Focus",
    modules: [
      "General Accounting (Comptabilité)",
      "Principles of Management",
      "Microeconomics & Macroeconomics",
      "Descriptive Statistics",
      "Mathematics for Economics",
      "Business Law & Governance",
      "Operational Workflows",
    ],
  },
  {
    id: "bac",
    badge: "COMPLETED",
    subtitle: "English Option Bilingual Stream",
    period: "Class of 2026",
    location: "Casablanca, Morocco",
    title: "Baccalaureate in Physical Science (English Option)",
    institution: "Prince Moulay Abdellah High School",
    isCurrent: false,
    summary:
      "Graduated with distinction with a specialized scientific focus in Physics and Chemistry combined with the English International Option. Cultivated rigorous mathematical problem-solving, analytical discipline, and bilingual fluency.",
    modulesTitle: "Scientific & Analytical Foundation",
    modules: [
      "Advanced Mathematics & Calculus",
      "Physical & Chemical Sciences",
      "Scientific Problem Solving",
      "English Bilingual Proficiency",
      "Empirical Data Analysis",
    ],
  },
];

const operatingPrinciples = [
  {
    title: "Understand the Context",
    track: "Diagnosis & Fundamentals",
    icon: "search_insights",
    desc: "Take the time to examine organizational context, figures, and constraints before proposing changes or jumping into execution.",
  },
  {
    title: "Structure the Process",
    track: "Organization & Clarity",
    icon: "account_tree",
    desc: "Break down complex projects into clear, manageable steps with organized schedules, documentation, and tools like Excel.",
  },
  {
    title: "Deliver with Discipline",
    track: "Execution & Consistency",
    icon: "precision_manufacturing",
    desc: "Focus on meeting deadlines, communicating clearly with team members, and taking responsibility for quality output.",
  },
];

export function AboutSection() {
  const [hoveredPrinciple, setHoveredPrinciple] = useState<number | null>(null);

  return (
    <section className="py-24 border-b border-border bg-surface scroll-mt-16" id="about">
      <div className="max-w-5xl mx-auto px-6 space-y-24">
        
        {/* ========================================================
            PART 1: Editorial Introduction Statement
            ======================================================== */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Headline */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-8"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight text-foreground leading-[1.1]">
                “I&apos;m Hassan, a Business Administration student interested in understanding how{" "}
                <KeywordHighlight word="people" delay={0.35} />,{" "}
                <KeywordHighlight word="organizations" delay={0.6} />, and{" "}
                <KeywordHighlight word="numbers" delay={0.85} /> work together.”
              </h2>
            </motion.div>

            {/* Right Divider & Supporting Paragraphs */}
            <div className="lg:col-span-4 relative flex flex-col gap-6 text-muted-foreground">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm leading-relaxed"
              >
                First-year undergraduate pursuing a Licence in Business Administration at FSJES Aïn Chock, building a strong foundation in management, accounting, economics, and quantitative methods.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm leading-relaxed"
              >
                Balancing university studies with practical experience from commercial production coordination at EL25 Studio.
              </motion.p>
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 2: Narrative Bio vs. At a Glance Card
            ======================================================== */}
        <div className="pt-16 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Narrative Bio */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              <h3 className="text-foreground font-display text-2xl font-medium tracking-tight">Narrative Bio</h3>

              <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                <p>
                  I am a first-year Licence in Business Administration student at the <span className="font-medium text-foreground">Faculté des Sciences Juridiques, Économiques et Sociales (FSJES) Aïn Chock</span>, Université Hassan II de Casablanca. I have a genuine interest in understanding how businesses function from the inside out—how management decisions are structured, how accounting keeps companies grounded, and how day-to-day operations deliver results.
                </p>
                <p>
                  My university program establishes the core fundamentals of modern business: micro and macroeconomics, general accounting (comptabilité générale), cost analysis, descriptive statistics, and commercial law. I focus on developing solid analytical rigor and connecting classroom theory to practical problem-solving.
                </p>
                <p>
                  Beyond academics, working as a Production Trainee at <span className="font-medium text-foreground">EL25 Studio</span> taught me how to manage real client deadlines, logistical coordination, and on-set workflows under pressure. Additionally, participating in the national <span className="font-medium text-foreground">Motatawi3</span> volunteer initiative helped me develop communication and teamwork skills.
                </p>
                <blockquote className="italic text-foreground p-4 border-l-2 border-accent bg-surface-container/50 text-sm leading-relaxed mt-4">
                  “Sound business practice starts with understanding the figures and the people behind them, followed by consistent, disciplined execution.”
                </blockquote>
              </div>
            </motion.div>

            {/* Right: At a Glance Property List */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="rounded-md border border-border bg-surface p-6">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <h4 className="text-sm font-medium text-foreground">At a Glance</h4>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-medium bg-muted text-foreground uppercase tracking-widest border border-border">
                    Active
                  </span>
                </div>

                <dl className="mt-4 space-y-4 text-sm">
                  <div className="flex flex-col gap-1">
                    <dt className="text-xs text-muted-foreground uppercase tracking-wider">Name</dt>
                    <dd className="text-foreground font-medium">Hassan Karasu</dd>
                  </div>

                  <div className="flex flex-col gap-1">
                    <dt className="text-xs text-muted-foreground uppercase tracking-wider">Degree</dt>
                    <dd className="text-foreground">Licence in Business Administration</dd>
                  </div>

                  <div className="flex flex-col gap-1">
                    <dt className="text-xs text-muted-foreground uppercase tracking-wider">Location</dt>
                    <dd className="text-foreground flex items-center gap-1.5">
                      <Icon name="location_on" size={14} className="text-muted-foreground" />
                      Casablanca, Morocco
                    </dd>
                  </div>

                  <div className="flex flex-col gap-1">
                    <dt className="text-xs text-muted-foreground uppercase tracking-wider">Languages</dt>
                    <dd className="text-foreground flex flex-col gap-1 mt-1">
                      <div className="flex justify-between items-center text-xs">
                        <span>Arabic</span>
                        <span className="text-muted-foreground">Native</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span>English</span>
                        <span className="text-muted-foreground">Professional</span>
                      </div>
                    </dd>
                  </div>
                </dl>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ========================================================
            PART 3: Education & Formation Timeline
            ======================================================== */}
        <div className="pt-16 border-t border-border">
          <div className="pb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-foreground tracking-tight">
              Education &amp; Quantitative Foundation
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mt-3 leading-relaxed">
              Rigorous academic preparation bridging quantitative analytical methods, scientific problem-solving, and core business administration principles.
            </p>
          </div>
          <SystemTimeline milestones={academicMilestones} />
        </div>

        {/* ========================================================
            PART 4: Operating Principles (Asymmetric Bento)
            ======================================================== */}
        <div className="pt-16 border-t border-border">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-foreground tracking-tight">
              Operating Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {operatingPrinciples.map((item, index) => {
              const isFirst = index === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHoveredPrinciple(index)}
                  onMouseLeave={() => setHoveredPrinciple(null)}
                  className={`group relative rounded-md border border-border bg-surface p-6 flex flex-col justify-between ${isFirst ? 'md:col-span-8' : 'md:col-span-4'}`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4 text-muted-foreground">
                      <Icon name={item.icon} size={20} />
                      <span className="text-[10px] uppercase tracking-widest font-medium border border-border/50 px-2 py-0.5 rounded-sm">
                        {item.track}
                      </span>
                    </div>

                    <h4 className={`font-medium text-foreground tracking-tight mb-2 ${isFirst ? 'text-2xl' : 'text-lg'}`}>
                      {item.title}
                    </h4>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
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
