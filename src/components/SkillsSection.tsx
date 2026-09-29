"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Lightbulb, Rocket, Wrench, type LucideIcon } from "lucide-react";

interface PracticeArea {
  title: string;
  description: string;
  tags?: string[];
  icon: LucideIcon;
}

const practiceAreas: PracticeArea[] = [
  {
    title: "Studying Business",
    description:
      "My degree moves between subjects that look at business from very different angles. I might spend one week working through an accounting problem, then move to an economics question, a management case, or a presentation. Over time, I’m starting to see how these subjects relate to the same situations from different sides.",
    tags: ["Accounting", "Economics", "Management", "Finance", "Marketing", "Law", "Data"],
    icon: GraduationCap,
  },
  {
    title: "Working on Ideas",
    description:
      "I like taking something I’m given and working out what to do with it. That might mean researching a topic, breaking down a case, organizing information, writing a report, or preparing something to present. The final result matters, but so does the process of getting there.",
    tags: ["Research", "Analysis", "Writing", "Presentations"],
    icon: Lightbulb,
  },
  {
    title: "Learning Through Projects",
    description:
      "Projects give me a reason to use what I study instead of leaving it in a notebook. I use them to test ideas, learn unfamiliar tools, and get better at explaining something clearly.",
    icon: Rocket,
  },
  {
    title: "The Tools I Use",
    description:
      "I keep the setup fairly simple. Excel is useful when I need to work with numbers or organize information. Word and PowerPoint handle most of my written and presentation work, while Google Workspace and Notion help me keep everything together.",
    tags: ["Excel", "Word", "PowerPoint", "Google Workspace", "Notion"],
    icon: Wrench,
  },
];

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

        {/* Practice Area Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {practiceAreas.map(({ title, description, tags, icon: AreaIcon }, index) => (
            <motion.article
              key={title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-md border border-border bg-card p-6 sm:p-7 hover:border-foreground/30 transition-colors duration-200 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-accent/10 text-accent">
                  <AreaIcon className="h-4 w-4" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-medium tracking-tight text-foreground">{title}</h3>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                {description}
              </p>

              {tags && (
                <p className="text-xs font-medium text-foreground mt-auto pt-2">{tags.join(" · ")}</p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
