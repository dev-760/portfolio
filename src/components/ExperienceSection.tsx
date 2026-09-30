"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Calendar, Clapperboard, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { experience, type ExperienceData } from "@/data/content";

export interface ExperienceSectionProps {
  initialExperience?: ExperienceData[];
}

const entryIcons = [Clapperboard, Users, Building2];

export function ExperienceSection({ initialExperience }: ExperienceSectionProps = {}) {
  const experienceEntries = initialExperience || experience;

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
        </div>

        {/* Timeline */}
        <div className="relative ml-4">
          {/* Timeline line */}
          <div className="absolute inset-y-0 left-0 border-l-2 border-border" />

          {experienceEntries.map(
            ({ company, role, period, location, stack, description }, index) => {
              const Icon = entryIcons[index % entryIcons.length];
              return (
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
                  className="relative pb-12 pl-10 last:pb-0"
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-px flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-accent ring-8 ring-surface">
                    <Icon className="h-5 w-5 text-background" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3 pt-2 sm:pt-1">
                    <p className="text-base font-medium text-foreground">{company}</p>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-normal tracking-tight text-foreground">
                        {role}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 shrink-0" strokeWidth={2} />
                        <span>
                          {period}
                          {location ? ` · ${location}` : ""}
                        </span>
                      </div>
                    </div>

                    <p className="text-pretty text-sm sm:text-base text-muted-foreground leading-relaxed max-w-prose">
                      {description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {stack.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="rounded-full border-border bg-muted/60 font-medium text-foreground hover:bg-muted"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
