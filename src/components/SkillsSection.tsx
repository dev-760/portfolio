"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/icons/Icon";
import {
  fallbackSkills,
  getSkills,
  isSanityConfigured,
  type SkillData,
} from "@/sanity/lib/client";

export function SkillsSection() {
  const [skills, setSkills] = useState<SkillData[]>(fallbackSkills);

  useEffect(() => {
    if (isSanityConfigured) {
      getSkills().then(setSkills);
    }
  }, []);

  const problemSolvingSkills = skills.filter((skill) => skill.group === "analysis");
  const productivityStacks = skills.filter((skill) => skill.group === "software");

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
              Coursework and tools I use for analysis, organization, and communication.
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
              Analytical &amp; Problem-Solving
            </h3>
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
                    <div className="size-9 rounded bg-muted border border-border flex items-center justify-center text-foreground group-hover:scale-105 transition-transform">
                      <Icon name={skill.icon ?? "check_circle"} size={18} />
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
              Software I Use
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productivityStacks.map((stack, index) => (
              <motion.div
                key={stack.id}
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
                      {stack.name}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {stack.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-5 mt-5 border-t border-border/70">
                  {(stack.tags ?? []).map((tag) => (
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
