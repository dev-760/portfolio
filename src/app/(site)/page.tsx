"use client";

import React from "react";
import { motion } from "framer-motion";
import { AboutSection } from "@/components/AboutSection";
import { WorkSection } from "@/components/WorkSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { WritingSection } from "@/components/WritingSection";
import { ContactSection } from "@/components/ContactSection";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { TypingEffect } from "@/components/TypingEffect";
import { Icon } from "@/components/icons/Icon";
import { MOTION_EASINGS, MOTION_DURATIONS } from "@/motion/tokens";

export default function Home() {
  return (
    <div className="bg-background text-foreground antialiased font-sans min-h-screen selection:bg-accent selection:text-on-accent" suppressHydrationWarning>
      {/* ========================================================
          Section 00: Hero (SYSTEM FLOW Signature Experience)
          ======================================================== */}
      <section 
        id="home" 
        className="min-h-[70vh] flex flex-col justify-between border-b border-border relative overflow-hidden"
      >
        {/* Ambient Subtle Grid Activation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: MOTION_DURATIONS.section, ease: MOTION_EASINGS.system }}
          className="absolute inset-0 grid-lines pointer-events-none opacity-40"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-between relative z-10">
          {/* Content */}
          <div className="max-w-3xl py-12 lg:py-20 flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              {/* 1. Coordinate / Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: MOTION_DURATIONS.ui, ease: MOTION_EASINGS.sharp }}
                className="inline-flex items-center gap-2"
              >
                <div className="w-3.5 h-3.5 text-primary shrink-0">
                  <svg className="h-full w-full" fill="none" viewBox="0 0 48 48">
                    <path
                      clipRule="evenodd"
                      d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs text-primary font-bold uppercase tracking-[0.14em]">
                  BUSINESS ADMINISTRATION STUDENT
                </span>
              </motion.div>

              {/* 2. Headline: Revealed by System Activation */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: MOTION_DURATIONS.section, ease: MOTION_EASINGS.system }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-on-surface text-balance"
              >
                Building strong business foundations.<br />
                <span className="text-primary-container">Solving problems with discipline.</span>
              </motion.h1>

              {/* 3. Description: Subtle Delayed Movement */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
                className="text-body-lg text-on-surface-variant max-w-xl font-normal leading-relaxed pt-2 text-pretty"
              >
                First-year Business Administration student at FSJES Aïn Chock, exploring how <TypingEffect 
                  words={["management principles", "accounting & finance", "practical execution"]} 
                  className="text-primary font-semibold"
                  pauseDuration={5000}
                /> create real value.
              </motion.p>

              {/* 4. Action Affordances: Direct Correspondence & CV */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.54, duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
                className="flex flex-wrap items-center gap-3 pt-2"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-primary hover:bg-secondary text-on-primary text-xs font-semibold uppercase tracking-wider transition-all shadow-xs hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Icon name="mail" size={15} />
                  <span>Direct Correspondence</span>
                </a>

                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 bg-surface-container hover:bg-surface-container-high border border-outline-variant text-on-surface text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Icon name="checklist" size={15} />
                  <span>Explore Pillars</span>
                </a>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 bg-surface-container-low hover:bg-surface-container border border-outline-variant/60 text-secondary text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  title="Print / Save Academic CV"
                >
                  <Icon name="article" size={15} />
                  <span>Curriculum Vitae</span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          Section 01: ABOUT
          ======================================================== */}
      <AboutSection />

      {/* ========================================================
          Section 02: WORK
          ======================================================== */}
      <WorkSection />

      {/* ========================================================
          Section 03: SKILLS
          ======================================================== */}
      <SkillsSection />

      {/* ========================================================
          Section 04: EXPERIENCE
          ======================================================== */}
      <ExperienceSection />

      {/* ========================================================
          Section 05: WRITING
          ======================================================== */}
      <WritingSection />

      {/* ========================================================
          Section 06: CONTACT
          ======================================================== */}
      <ContactSection />
      
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}
