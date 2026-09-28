"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/icons/Icon";

interface PillarItem {
  id: string;
  tag: string;
  title: string;
  icon: string;
  description: string;
  items: string[];
}

const pillars: PillarItem[] = [
  {
    id: "management",
    tag: "YEAR 1 · COURSEWORK",
    title: "Management & Organizations",
    icon: "account_balance",
    description:
      "How organizations are structured, staffed, and run. So far this is mostly theory and case studies; the application comes later.",
    items: [
      "Principles of Management",
      "Organization Theory",
      "Human Resource Basics",
      "Project Coordination",
    ],
  },
  {
    id: "accounting",
    tag: "YEAR 1 · COURSEWORK",
    title: "Accounting & Economics",
    icon: "calculate",
    description:
      "The part of the degree where an answer is either right or it is not. Journal entries, cost analysis, and the math underneath markets.",
    items: [
      "General Accounting",
      "Cost Analysis",
      "Descriptive Statistics",
      "Mathematics for Economics",
    ],
  },
  {
    id: "execution",
    tag: "YEAR 1 · COURSEWORK",
    title: "Law & Communication",
    icon: "forum",
    description:
      "Business law fundamentals, and the parts of the degree that happen out loud: debate, presentations, and writing reports people can follow.",
    items: [
      "Business Law Fundamentals",
      "Academic Debate & Public Speaking",
      "Reports & Documentation",
      "Excel for Assignments",
    ],
  },
];

export function WorkSection() {
  return (
    <section className="section border-b border-border bg-surface scroll-mt-16" id="work">
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
              What I&rsquo;m Studying
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The first-year curriculum, organized around the three directions I care most about.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-xs font-mono text-muted-foreground flex items-center gap-2"
          >
            <span>FSJES Aïn Chock · First-Year Coursework</span>
          </motion.div>
        </div>

        {/* 3-Column Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-md border border-border bg-card p-6 sm:p-7 flex flex-col justify-between hover:border-foreground/30 transition-all duration-300 shadow-xs hover:shadow-sm group"
            >
              <div className="space-y-5">
                {/* Header with Icon and Tag */}
                <div className="flex items-center justify-between">
                  <div className="size-11 rounded bg-muted border border-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-200">
                    <Icon name={pillar.icon} size={22} className="text-foreground" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-semibold px-2 py-0.5 rounded bg-muted/70 border border-border/80">
                    {pillar.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-normal text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Focus Areas List */}
              <div className="pt-6 mt-6 border-t border-border/70 space-y-2.5">
                <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest block">
                  Courses This Covers
                </span>
                <ul className="space-y-1.5 text-xs text-foreground">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-foreground/60 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
