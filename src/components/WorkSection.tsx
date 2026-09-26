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
    tag: "DISCIPLINE 01",
    title: "Management & Strategy",
    icon: "account_balance",
    description:
      "Studying organization theory, managerial economics, and operational workflows to understand how enterprises organize personnel and execute strategy.",
    items: [
      "Principles of Management",
      "Organization Theory",
      "Operational Workflows",
      "Human Resource Basics",
    ],
  },
  {
    id: "accounting",
    tag: "DISCIPLINE 02",
    title: "Accounting & Economics",
    icon: "calculate",
    description:
      "Developing financial literacy and quantitative precision through general accounting, cost analysis, and macroeconomic principles.",
    items: [
      "General Accounting",
      "Cost Analysis & Budgeting",
      "Descriptive Statistics",
      "Mathematics for Economics",
    ],
  },
  {
    id: "execution",
    tag: "DISCIPLINE 03",
    title: "Practical Execution",
    icon: "checklist",
    description:
      "Applying academic concepts to tangible outcomes: commercial ad production, filming, editing, and client delivery at EL25 Studio, Excel modeling, and structured project control.",
    items: [
      "Ad Production & Filming",
      "Post-Production Video Editing",
      "Client & Schedule Delivery",
      "Excel Workflow Modeling",
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
              Foundational Areas of Study
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Three pillars combining management theory, accounting rigor, and real-world execution discipline.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-xs font-mono text-muted-foreground flex items-center gap-2"
          >
            <span>FSJES Aïn Chock · Curriculum Framework</span>
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
                  <div className="size-11 rounded bg-muted flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-200">
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
                  Core Competencies
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
