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
                &ldquo;I&rsquo;m Hassan, a Business Administration student trying to understand how{" "}
                <KeywordHighlight word="people" delay={0.35} />,{" "}
                <KeywordHighlight word="organizations" delay={0.6} />, and{" "}
                <KeywordHighlight word="numbers" delay={0.85} /> fit together &mdash; and what happens when they don&rsquo;t.&rdquo;
              </h2>
            </motion.div>

            {/* Right Supporting Paragraphs */}
            <div className="lg:col-span-4 flex flex-col gap-5 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                Before university, I spent two months on commercial sets at EL25 Studio in Casablanca &mdash; a useful counterweight to classroom theory.
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

              <div className="text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4 max-w-prose">
                <p>
                  I am a first-year student pursuing a Licence in Business Administration at the{" "}
                  <span className="font-medium text-foreground">
                    Faculté des Sciences Juridiques, Économiques et Sociales (FSJES) Aïn Chock
                  </span>
                  , Université Hassan II de Casablanca. What I want from the degree is a working picture of how organizations actually run: how decisions get made, how accounting keeps track of whether they were good ones, and how the daily work gets coordinated.
                </p>
                <p>
                  The first year covers the basics: micro and macroeconomics, general accounting, cost analysis, descriptive statistics, and business law. The part I keep coming back to is the accounting &mdash; it is the one subject where an answer is either right or it is not.
                </p>
                <p>
                  Outside class, volunteering with the national{" "}
                  <span className="font-medium text-foreground">Motatawi3</span> youth program meant planning workshops and working with local organizers in communities that do not get many of them. Both experiences point the same way as my coursework: keep the records straight, meet the deadline, leave things tidy for whoever comes next.
                </p>
                <blockquote className="italic text-foreground p-4 border-l-2 border-foreground/30 bg-muted/40 rounded-r text-sm sm:text-base leading-relaxed mt-2">
                  Two months on a film set taught me more about deadlines than any syllabus has: someone is always waiting on your part of the work.
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
              <div className="rounded-md border border-border bg-card p-6 space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <h4 className="text-sm font-semibold text-foreground">Overview &amp; Profile</h4>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground border border-border uppercase tracking-wider">
                    <span className="size-1.5 rounded-full bg-foreground animate-pulse" />
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

                  <div className="flex flex-col gap-0.5 pt-2 border-t border-border">
                    <dt className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-1">
                      Languages
                    </dt>
                    <dd className="text-foreground flex flex-col gap-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium">Arabic</span>
                        <span className="text-muted-foreground font-mono">Native</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium">English</span>
                        <span className="text-muted-foreground font-mono">Full Professional (Bilingual Baccalaureate)</span>
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
              Rigorous academic preparation bridging quantitative analytical methods, scientific problem-solving, and core business administration principles.
            </p>
          </div>

          <TimelineAnimate
            data={education.map(({ id, company, role, period, status, stack, description }) => ({
              index: id,
              content: (
                <div className="space-y-4">
                  <div className="mb-2 flex gap-3 sm:items-center">
                    <div className="bg-muted border border-border flex size-11 shrink-0 items-center justify-center rounded">
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
                          className="inline-flex items-center rounded px-2.5 py-0.5 text-[11px] font-medium border border-border bg-muted/60 text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                </div>
              ),
            }))}
          />
        </div>

        {/* ========================================================
            PART 4: Operating Principles & Mindset (Crisp 3-Column Grid)
            ======================================================== */}
        <div className="pt-12 border-t border-border space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-normal text-foreground tracking-tight">
              How I try to work
            </h2>
          </div>

          <div className="max-w-prose text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              I read the figures before I propose anything, and I keep files and call sheets the way I keep journal entries &mdash; dated and balanced.
            </p>
            <p>
              I am still early in all of this. The plan is to let the coursework, and whatever internships come next, keep correcting me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
