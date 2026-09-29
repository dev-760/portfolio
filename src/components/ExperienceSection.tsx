"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  getExperience,
  fallbackExperience,
  isSanityConfigured,
  type ExperienceData,
} from "@/sanity/lib/client";

export interface ExperienceSectionProps {
  initialExperience?: ExperienceData[];
}

export function ExperienceSection({ initialExperience }: ExperienceSectionProps = {}) {
  const [experience, setExperience] = useState<ExperienceData[]>(
    initialExperience || fallbackExperience
  );

  useEffect(() => {
    if (isSanityConfigured) {
      getExperience().then((data) => {
        if (data && data.length > 0) {
          setExperience(data);
        }
      });
    }
  }, []);
  return (
    <section className="section border-b border-border bg-surface scroll-mt-16" id="experience">
      <div className="container space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 max-w-xl"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-normal tracking-tight text-foreground">
              Experience
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Experiences that gave me an early look at working with people, deadlines, and
              responsibilities outside the classroom.
            </p>
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-xs font-mono text-muted-foreground"
          >
            Casablanca · 2023 to 2024
          </motion.div>
        </div>

        {/* Entries */}
        <div className="space-y-10">
          {experience.map(({ company, role, period, location, stack, description }, index) => (
            <motion.div
              key={company}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-3"
            >
              <h3 className="text-xl sm:text-2xl font-display font-normal text-foreground tracking-tight">
                {company}
              </h3>

              <p className="text-base font-medium text-foreground">{role}</p>

              <p className="text-xs sm:text-sm text-muted-foreground">
                {period}
                {location ? ` · ${location}` : ""}
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-prose">
                {description}
              </p>

              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {stack.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded px-2.5 py-0.5 text-[11px] font-medium border border-border bg-muted/60 text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
