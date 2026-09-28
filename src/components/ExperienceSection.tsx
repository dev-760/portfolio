"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TimelineAnimate } from "@/components/ui/timeline-animate";
import { Icon } from "@/components/icons/Icon";
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
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 max-w-xl"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-normal tracking-tight text-foreground">
              Experience &amp; Community Service
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Commercial production and community work alongside first-year business coursework.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-xs font-mono text-muted-foreground"
          >
            Casablanca · Field Experience
          </motion.div>
        </div>

        {/* Timeline */}
        <TimelineAnimate
          data={experience.map(
            ({ id, company, role, period, location, status, stack, description }) => ({
              index: id,
              content: (
                <div className="space-y-4">
                  <div className="mb-2 flex gap-3 sm:items-center">
                    <div className="bg-muted border border-border flex size-11 shrink-0 items-center justify-center rounded">
                      <Icon name="work" size={20} className="text-foreground" />
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

                    {location && (
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="location_on" size={14} />
                        <span>{location}</span>
                      </p>
                    )}

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
            })
          )}
        />
      </div>
    </section>
  );
}

export default ExperienceSection;
