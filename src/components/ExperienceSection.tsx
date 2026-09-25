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
    <section className="py-20 lg:py-24 border-b border-outline-variant/40 bg-surface-container-low scroll-mt-16" id="experience">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface">
              Hands-on Production Stakes
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: MOTION_DURATIONS.standard }}
            className="text-sm text-outline max-w-sm"
          >
            Real production operations, live stage cadence, and multi-stakeholder management before entering university.
          </motion.p>
        </div>

        {/* ========================================================
            PART 1: EL25 Studio Experience Card
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
          className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-6 sm:p-8 lg:p-10 shadow-xs"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-surface-container pb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-primary-fixed text-on-primary-fixed uppercase tracking-wider">
                  Production Trainee
                </span>
                <span className="text-xs text-on-surface-variant font-medium">· On-Site</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">EL25 Studio</h3>
              <p className="text-xs font-medium text-outline pt-1 flex items-center gap-1.5">
                <Icon name="location_on" size={14} className="text-outline" />
                Casablanca, Morocco
              </p>
              <p className="text-xs sm:text-sm text-on-surface-variant font-medium pt-2">
                Commercial content production for brands and digital influencers.
              </p>
            </div>

            <div className="text-left md:text-right">
              <span className="inline-block px-3 py-1 bg-surface-container text-on-surface-variant font-mono text-xs rounded font-medium">
                Jul — Sep 2023
              </span>
            </div>
          </div>

          {/* Scope and Deliverables Section */}
          <div className="mt-6">
            <button
              type="button"
              onClick={() => setIsDeliverablesExpanded(!isDeliverablesExpanded)}
              className="w-full flex items-center justify-between cursor-pointer py-1.5 select-none text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              aria-expanded={isDeliverablesExpanded}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5 font-mono">
                <Icon name="list_alt" size={16} className="text-secondary" />
                Key Scope &amp; Deliverables
              </span>
              <div className="flex items-center gap-1 text-xs text-outline font-medium hover:text-primary transition-colors">
                <span>{isDeliverablesExpanded ? "Collapse scope" : "Expand scope"}</span>
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
                  transition={{ duration: 0.28, ease: MOTION_EASINGS.system }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {deliverables.map((bullet, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-lg bg-surface-container-low/70 border border-outline-variant/30"
                      >
                        <Icon name="check_circle" size={16} className="text-primary mt-0.5 shrink-0" />
                        <p className="text-xs leading-relaxed text-on-surface">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Takeaway */}
          <div className="mt-6 pt-4 border-t border-surface-container">
            <p className="text-xs italic text-on-surface-variant leading-relaxed">
              <span className="font-semibold not-italic text-outline mr-1">Takeaway:</span>
              Production taught me to manage moving parts, vendors, and deadlines, the same discipline I now bring to scoping and delivering automation projects.
            </p>
          </div>
        </motion.div>

        {/* ========================================================
            PART 2: Volunteering Card
            ======================================================== */}
        <div className="pt-6">
          <div className="flex items-center justify-between pb-6">
            <div className="flex items-center gap-2">
              <Icon name="volunteer_activism" size={18} className="text-primary" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-on-surface">
                Volunteering &amp; Community Outreach
              </h3>
            </div>
            <span className="text-xs text-outline font-mono">National Initiative</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
            className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-6 sm:p-8 lg:p-10 shadow-xs"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-surface-container pb-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-primary-fixed text-on-primary-fixed uppercase tracking-wider">
                    Volunteer
                  </span>
                  <span className="text-xs text-on-surface-variant font-medium">· Motatawi3 Program</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
                  Ministry of Youth, Culture and Communication (MJCC)
                </h3>
                {/* Skill tags */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-surface-container text-on-surface-variant border border-outline-variant/30">
                    Mentorship
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-surface-container text-on-surface-variant border border-outline-variant/30">
                    Youth Education
                  </span>
                </div>
              </div>

              <div className="text-left md:text-right">
                <span className="inline-block px-3 py-1 bg-surface-container text-on-surface-variant font-mono text-xs rounded-md font-medium">
                  Jul — Aug 2024
                </span>
              </div>
            </div>

            {/* Scope and Deliverables */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {volunteeringBullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-lg bg-surface-container-low/70 border border-outline-variant/30"
                >
                  <Icon name="check_circle" size={16} className="text-primary mt-0.5 shrink-0" />
                  <p className="text-xs leading-relaxed text-on-surface">
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

export default ExperienceSection;
