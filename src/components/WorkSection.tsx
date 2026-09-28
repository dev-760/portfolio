"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/icons/Icon";

interface DeliverableItem {
  id: string;
  tag: string;
  title: string;
  icon: string;
  description: string;
  items: string[];
}

const deliverables: DeliverableItem[] = [
  {
    id: "finance-models",
    tag: "DELIVERABLE 01",
    title: "Financial Ledgers & Cost Models",
    icon: "calculate",
    description:
      "Built double-entry journal templates, balance sheet balancing sheets, and personal expense tracking models in Microsoft Excel with clean formula structures.",
    items: [
      "Double-Entry Journal & Ledger Sheets",
      "Income Statement & Balance Reconciliations",
      "Cost Allocation Worksheets (Comptabilité Analytique)",
      "Documented Lookup & Summary Formulas",
    ],
  },
  {
    id: "production-logistics",
    tag: "DELIVERABLE 02",
    title: "Commercial Production Logistics",
    icon: "checklist",
    description:
      "Coordinated call sheet timing, equipment checklists, and daily camera card ingest during commercial media production at EL25 Studio under broadcast turnarounds.",
    items: [
      "Daily Multi-Location Call Sheet Schedules",
      "Camera & Lighting Gear Staging Checklists",
      "Premiere Pro Media Ingest & Checksum Verification",
      "Multi-Track External Audio Syncing",
    ],
  },
  {
    id: "analytical-writing",
    tag: "DELIVERABLE 03",
    title: "Applied Analytical Writing",
    icon: "article",
    description:
      "Authored structured monographs analyzing real-world workflows, process bottlenecks, and the continuity between physical science principles and microeconomics.",
    items: [
      "Field Notes: Informal Habits vs. Software Tools",
      "Analysis: Physical Sciences into Economics",
      "Operational Study: Chesterton's Fence in Business",
      "Quantitative Argument Synthesis",
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
              Applied Work &amp; Deliverables
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tangible models, field coordination schedules, and analytical writing produced during my first year.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-xs font-mono text-muted-foreground flex items-center gap-2"
          >
            <span>Student Portfolio · Tangible Outputs</span>
          </motion.div>
        </div>

        {/* 3-Column Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-md border border-border bg-card p-6 sm:p-7 flex flex-col justify-between hover:border-foreground/50 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1.5 group"
            >
              <div className="space-y-5">
                {/* Header with Icon and Tag */}
                <div className="flex items-center justify-between">
                  <div className="icon-chip size-11 group-hover:scale-105 transition-transform duration-200">
                    <Icon name={item.icon} size={22} className="text-foreground" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-semibold px-2 py-0.5 rounded bg-muted/80 border border-border">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-normal text-foreground tracking-tight transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Focus Areas List */}
              <div className="pt-6 mt-6 border-t border-border/70 space-y-2.5">
                <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest block font-mono">
                  Tangible Components
                </span>
                <ul className="space-y-1.5 text-xs text-foreground">
                  {item.items.map((subItem) => (
                    <li key={subItem} className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-foreground/60 shrink-0" />
                      <span>{subItem}</span>
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
