"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/icons/Icon";

export function SkillsSection() {
  return (
    <section className="section border-b border-border bg-surface scroll-mt-16" id="skills">
      <div className="container space-y-16">
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
              What I Do
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Most of my time goes into studying, working on assignments, and making things that
              help me understand what I&rsquo;m learning.
            </p>
          </motion.div>

          <motion.p
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-xs font-mono text-muted-foreground"
          >
            Study · Assignments · Projects
          </motion.p>
        </div>

        {/* ========================================================
            PART 1: Studying Business
            ======================================================== */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <Icon name="graduation" size={16} />
              Studying Business
            </h3>
          </div>

          <div className="max-w-prose text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              My degree moves between subjects that look at business from very different angles. I
              might spend one week working through an accounting problem, then move to an
              economics question, a management case, or a presentation. Over time, I&rsquo;m
              starting to see how these subjects relate to the same situations from different
              sides.
            </p>
          </div>

          <p className="text-xs font-medium text-foreground">
            Accounting · Economics · Management · Finance · Marketing · Law · Data
          </p>
        </div>

        {/* ========================================================
            PART 2: Working on Ideas
            ======================================================== */}
        <div className="space-y-4 pt-6 border-t border-border">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <Icon name="lightbulb_tip" size={16} />
              Working on Ideas
            </h3>
          </div>

          <div className="max-w-prose text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              I like taking something I&rsquo;m given and working out what to do with it. That
              might mean researching a topic, breaking down a case, organizing information,
              writing a report, or preparing something to present. The final result matters, but
              so does the process of getting there.
            </p>
          </div>

          <p className="text-xs font-medium text-foreground">
            Research · Analysis · Writing · Presentations
          </p>
        </div>

        {/* ========================================================
            PART 3: Learning Through Projects
            ======================================================== */}
        <div className="space-y-4 pt-6 border-t border-border">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <Icon name="rocket" size={16} />
              Learning Through Projects
            </h3>
          </div>

          <div className="max-w-prose text-muted-foreground text-sm sm:text-base leading-relaxed">
            <p>
              Projects give me a reason to use what I study instead of leaving it in a notebook. I
              use them to test ideas, learn unfamiliar tools, and get better at explaining
              something clearly.
            </p>
          </div>
        </div>

        {/* ========================================================
            PART 4: The Tools I Use
            ======================================================== */}
        <div className="space-y-4 pt-6 border-t border-border">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <Icon name="wrench" size={16} />
              The Tools I Use
            </h3>
          </div>

          <div className="max-w-prose text-muted-foreground text-sm sm:text-base leading-relaxed">
            <p>
              I keep the setup fairly simple. Excel is useful when I need to work with numbers or
              organize information. Word and PowerPoint handle most of my written and
              presentation work, while Google Workspace and Notion help me keep everything
              together.
            </p>
          </div>

          <p className="text-xs font-medium text-foreground">
            Excel · Word · PowerPoint · Google Workspace · Notion
          </p>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
