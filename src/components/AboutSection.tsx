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
              initial={false}
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
                I&rsquo;m Hassan. I&rsquo;m interested in what happens between having a plan and
                getting the work done.
              </h2>
            </motion.div>

            {/* Right Supporting Paragraphs */}
            <div className="lg:col-span-4 flex flex-col gap-5 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <motion.p
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                I&rsquo;m interested in what happens once a plan meets the reality of getting
                things done. Priorities shift, problems come up, and people have to figure out
                what to do next.
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
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              <h3 className="text-foreground font-display text-2xl font-normal tracking-tight">
                Background
              </h3>

              <div className="text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4 max-w-prose">
                <p>
                  I&rsquo;m pursuing a Bachelor&rsquo;s degree in Business Administration at the{" "}
                  <span className="font-medium text-foreground">
                    Faculty of Legal, Economic and Social Sciences (FSJES) Aïn Chock
                  </span>
                  , Hassan II University of Casablanca.
                </p>
                <p>
                  Studying business has gradually changed the way I look at an organization. I&rsquo;ve
                  learned to look beyond what a company does on the surface and pay attention to
                  what is happening underneath: the market around it, the way its activity is
                  recorded, how resources are managed, how people and decisions affect its
                  direction, and the rules it has to work within.
                </p>
                <p>
                  As I move further into the degree, those different sides start to overlap. Strategy
                  connects with finance, data becomes part of decision-making, and areas like
                  auditing, business intelligence, entrepreneurship, and international management add
                  more context to how a business operates. Rather than looking at each subject
                  separately, I&rsquo;m learning to see how one part of a business can affect
                  another.
                </p>
              </div>
            </motion.div>

            {/* Right: At a Glance Property List */}
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="rounded-md border border-border bg-card p-6 space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <h4 className="text-sm font-semibold text-foreground">Overview &amp; Profile</h4>
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
                        <span className="text-muted-foreground font-mono">Full Professional</span>
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
        <div className="pt-12 border-t border-border space-y-8" id="education">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-normal text-foreground tracking-tight">
              Education
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              A Baccalaureate in Physical Science, then a first-year Bachelor&rsquo;s degree in
              Business Administration at the Faculty of Legal, Economic and Social Sciences
              (FSJES) Aïn Chock.
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
              How I work
            </h2>
          </div>

          <div className="max-w-prose text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              I start with the brief, write down the steps before I begin, and re-check the
              figures against the source before I hand anything over.
            </p>
            <p>
              I am early in my studies, so I treat every piece of coursework and production work as
              practice for the next one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
