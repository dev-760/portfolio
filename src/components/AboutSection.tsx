"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TimelineAnimate } from "@/components/ui/timeline-animate";
import { Icon } from "@/components/icons/Icon";
import {
  getEducation,
  fallbackEducation,
  isSanityConfigured,
  type EducationData,
} from "@/sanity/lib/client";

interface KeywordHighlightProps {
  word: string;
  delay: number;
}

const KeywordHighlight: React.FC<KeywordHighlightProps> = ({ word, delay }) => {
  return (
    <span className="relative inline-block text-foreground font-medium">
      <span>{word}</span>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          delay,
          duration: 0.38,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ originX: 0 }}
        className="absolute left-0 -bottom-[2px] w-full h-[1.5px] bg-foreground/50"
      />
    </span>
  );
};

const operatingPrinciples = [
  {
    tag: "EMPIRICAL DISCIPLINE",
    icon: "calculate",
    title: "Data Before Assumptions",
    description:
      "Verify ledger records, unit costs, and raw figures in accounting and economics coursework before jumping to conclusions or preparing summary reports.",
  },
  {
    tag: "FIELD OBSERVATION",
    icon: "search_insights",
    title: "Observe Informal Habits First",
    description:
      "On media shoots at EL25 Studio and in group projects, watch how teams coordinate informally before attempting to introduce new tools or restructure schedules.",
  },
];

export interface AboutSectionProps {
  initialEducation?: EducationData[];
}

export function AboutSection({ initialEducation }: AboutSectionProps = {}) {
  const [education, setEducation] = useState<EducationData[]>(
    initialEducation || fallbackEducation
  );

  useEffect(() => {
    if (isSanityConfigured) {
      getEducation().then((data) => {
        if (data && data.length > 0) {
          setEducation(data);
        }
      });
    }
  }, []);

  return (
    <section className="section border-b border-border bg-surface scroll-mt-16" id="about">
      <div className="container space-y-20">
        {/* ========================================================
            PART 1: Editorial Introduction Statement
            ======================================================== */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal tracking-tight text-foreground leading-[1.15]">
                &ldquo;I study business administration in Casablanca, focusing on how{" "}
                <KeywordHighlight word="figures" delay={0.35} />,{" "}
                <KeywordHighlight word="workflows" delay={0.6} />, and{" "}
                <KeywordHighlight word="communication" delay={0.85} /> connect in practice.&rdquo;
              </h2>
            </motion.div>

            {/* Right Supporting Paragraph */}
            <div className="lg:col-span-4 flex flex-col gap-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                Undergraduate at FSJES Aïn Chock, Université Hassan II de Casablanca. Combining academic discipline in management and accounting with commercial media coordination.
              </motion.p>
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 2: Narrative Bio vs. At a Glance Card
            ======================================================== */}
        <div className="pt-12 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: Narrative Bio */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              <h3 className="text-foreground font-display text-2xl font-normal tracking-tight">
                Academic Background &amp; Intent
              </h3>

              <div className="text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  My academic path started in the sciences. Completing a bilingual Baccalaureate in Physical Science gave me an appreciation for mathematical modeling, hypothesis testing, and empirical verification. When I chose to pursue business administration at FSJES Aïn Chock, it was to apply that analytical discipline to commercial operations and accounting questions.
                </p>
                <p>
                  Rather than treating management as purely theoretical, I look for how organizations function on the ground. Assisting commercial shoots at EL25 Studio showed me that even the tightest production schedule depends on clear communication and real-time adjustment. I am spending my undergraduate years building competence across general accounting, cost structures, and operational workflows.
                </p>
                <blockquote className="italic text-foreground p-4 border-l-2 border-foreground/30 bg-muted/40 rounded-r text-sm sm:text-base leading-relaxed mt-2">
                  “Sound business practice starts with understanding the figures and the people behind them, followed by consistent execution.”
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
              <div className="rounded-md border border-border bg-card p-6 space-y-4 shadow-xs hover:border-foreground/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <h4 className="text-sm font-semibold text-foreground">Overview &amp; Profile</h4>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-muted text-foreground border border-border uppercase tracking-wider">
                    <span className="size-1.5 rounded-full bg-foreground/60" />
                    Enrolled
                  </span>
                </div>

                <dl className="space-y-4 text-xs sm:text-sm">
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                      Full Name
                    </dt>
                    <dd className="text-foreground font-medium">Hassan Karasu</dd>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <dt className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                      Degree Program
                    </dt>
                    <dd className="text-foreground">
                      Licence in Business Administration (FSJES Aïn Chock)
                    </dd>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <dt className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                      Location &amp; Timezone
                    </dt>
                    <dd className="text-foreground flex items-center gap-1.5">
                      <Icon name="location_on" size={14} className="text-muted-foreground" />
                      Casablanca, Morocco (UTC+1)
                    </dd>
                  </div>

                  <div className="flex flex-col gap-1.5 pt-2 border-t border-border">
                    <dt className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-1">
                      Languages
                    </dt>
                    <dd className="text-foreground flex flex-col gap-2">
                      <div className="flex justify-between items-baseline text-xs">
                        <span className="font-medium">Arabic</span>
                        <span className="text-muted-foreground font-mono text-[11px]">Native</span>
                      </div>
                      <div className="flex flex-col gap-0.5 text-xs">
                        <div className="flex justify-between items-baseline">
                          <span className="font-medium">English</span>
                          <span className="text-muted-foreground font-mono text-[11px]">Full Professional</span>
                        </div>
                        <span className="text-[11px] text-muted-foreground">Bilingual Baccalaureate Option</span>
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
        <div className="pt-12 border-t border-border space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-normal text-foreground tracking-tight">
              Education &amp; Quantitative Foundation
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Academic preparation bridging quantitative analytical methods, scientific problem-solving, and core business administration principles.
            </p>
          </div>

          <TimelineAnimate
            data={education.map(({ id, company, role, period, status, stack, description }) => ({
              index: id,
              content: (
                <div className="rounded-md border border-border bg-card p-6 sm:p-7 shadow-xs hover:border-foreground/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-4">
                  <div className="mb-2 flex gap-3 sm:items-center">
                    <div className="icon-chip size-11 shrink-0">
                      <Icon name="graduation" size={20} className="text-foreground" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs sm:text-sm">{company}</p>
                      <h3 className="text-base sm:text-xl font-semibold text-foreground">{role}</h3>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <p className="flex items-center gap-2">
                      <Icon name="calendar_today" size={14} className="text-muted-foreground" />
                      <span>
                        {period}
                        {status && (
                          <span className="ml-1.5 font-medium text-foreground">
                            · {status}
                          </span>
                        )}
                      </span>
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {stack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded px-2.5 py-0.5 text-[11px] font-medium border border-border bg-muted/80 text-foreground font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">{description}</p>
                </div>
              ),
            }))}
          />
        </div>

        {/* ========================================================
            PART 4: Operating Habits & Methods (Disciplined 2-Column Grid)
            ======================================================== */}
        <div className="pt-12 border-t border-border space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-normal text-foreground tracking-tight">
              Practical Habits
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Approaches developed across scientific coursework and field media production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {operatingPrinciples.map((principle, index) => (
              <motion.div
                key={principle.tag}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-md border border-border bg-card p-6 sm:p-7 flex flex-col justify-between hover:border-foreground/50 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="icon-chip size-10 group-hover:scale-105 transition-transform duration-200">
                      <Icon name={principle.icon} size={20} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-semibold px-2 py-0.5 rounded bg-muted/80 border border-border">
                      {principle.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-normal text-foreground tracking-tight">
                    {principle.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
