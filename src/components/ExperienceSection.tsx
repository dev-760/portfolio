"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/icons/Icon";
import { MOTION_EASINGS, MOTION_DURATIONS } from "@/motion/tokens";

const deliverables = [
  "Supported pre-production, on-set logistics, and post-production prep for digital ads, branded videos, and influencer campaigns",
  "Contributed to concept development, scriptwriting, and visual planning tailored to each client's brand identity and audience",
  "Assisted with camera and lighting setup and coordinated on set with creative directors, technical crew, and clients",
  "Helped with footage review, editing preparation, and continuity checks",
  "Delivered under tight timelines using a four-phase workflow: Idea → Plan → Produce → Deliver",
];

const volunteeringBullets = [
  "Took part in a national volunteer initiative for youth empowerment and community outreach",
  "Helped plan and run workshops, mentorship activities, and awareness campaigns in underserved communities",
  "Worked with local organizations and volunteers to deliver programs on civic responsibility and skill development",
  "Supported youth in learning, creative thinking, and career exploration",
];


export function ExperienceSection() {
  const [isDeliverablesExpanded, setIsDeliverablesExpanded] = useState(true);

  return (
    <section className="py-24 border-b border-border bg-surface scroll-mt-16" id="experience">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-medium tracking-tight text-foreground">
              Practical Execution
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-sm text-muted-foreground max-w-sm"
          >
            Real operations, live stage cadence, and multi-stakeholder management.
          </motion.p>
        </div>

        {/* ========================================================
            PART 1: EL25 Studio Experience Card
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-surface border border-border rounded-md p-8 lg:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-border pb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-sm text-[10px] font-medium bg-muted text-foreground uppercase tracking-widest border border-border">
                  Production Trainee
                </span>
                <span className="text-xs text-muted-foreground">· On-Site</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-foreground tracking-tight">EL25 Studio</h3>
              <p className="text-xs text-muted-foreground pt-1 flex items-center gap-1.5">
                <Icon name="location_on" size={14} className="text-muted-foreground" />
                Casablanca, Morocco
              </p>
            </div>

            <div className="text-left md:text-right">
              <span className="inline-block px-3 py-1 bg-muted border border-border text-foreground text-xs rounded-sm font-medium">
                Jul — Sep 2023
              </span>
            </div>
          </div>

          {/* Scope and Deliverables Section */}
          <div className="mt-6">
            <button
              type="button"
              onClick={() => setIsDeliverablesExpanded(!isDeliverablesExpanded)}
              className="w-full flex items-center justify-between cursor-pointer py-2 select-none text-left focus-visible:outline-none"
              aria-expanded={isDeliverablesExpanded}
            >
              <span className="text-xs font-medium uppercase tracking-widest text-foreground flex items-center gap-2">
                <Icon name="list_alt" size={16} />
                Key Scope &amp; Deliverables
              </span>
              <div className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <span>{isDeliverablesExpanded ? "Collapse" : "Expand"}</span>
                <motion.div
                  animate={{ rotate: isDeliverablesExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center"
                >
                  <Icon name="expand_more" size={16} />
                </motion.div>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isDeliverablesExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 list-none pl-0">
                    {deliverables.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1 w-1 h-1 rounded-full bg-accent shrink-0" />
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {bullet}
                        </p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Takeaway */}
          <div className="mt-8 pt-4 border-t border-border">
            <p className="text-sm italic text-muted-foreground leading-relaxed">
              <span className="font-medium not-italic text-foreground mr-1">Takeaway:</span>
              Production taught me to manage moving parts, vendors, and deadlines, the same discipline I now bring to scoping and executing operational projects.
            </p>
          </div>
        </motion.div>

        {/* ========================================================
            PART 2: Volunteering Card
            ======================================================== */}
        <div className="pt-6">
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-sm font-medium text-foreground tracking-tight">
              Volunteering &amp; Community
            </h3>
            <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium border border-border px-2 py-0.5 rounded-sm">National</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-surface border border-border rounded-md p-8 lg:p-10"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-border pb-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-sm text-[10px] font-medium bg-muted text-foreground uppercase tracking-widest border border-border">
                    Volunteer
                  </span>
                  <span className="text-xs text-muted-foreground">· Motatawi3</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-foreground tracking-tight">
                  Ministry of Youth
                </h3>
              </div>

              <div className="text-left md:text-right">
                <span className="inline-block px-3 py-1 bg-muted border border-border text-foreground text-xs rounded-sm font-medium">
                  Jul — Aug 2024
                </span>
              </div>
            </div>

            {/* Scope and Deliverables */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {volunteeringBullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 w-1 h-1 rounded-full bg-accent shrink-0" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
