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
    <div className="bg-background text-foreground antialiased font-sans min-h-screen" suppressHydrationWarning>
      {/* ========================================================
          Section 00: Hero (SYSTEM FLOW Signature Experience)
          ======================================================== */}
      <section 
        id="home" 
        className="min-h-[70vh] flex flex-col justify-center border-b border-border relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-6 w-full flex-1 flex flex-col justify-center relative z-10 py-16 lg:py-24">
          {/* Content */}
          <div className="max-w-3xl flex flex-col gap-8">
            {/* Headline: Editorial serif */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-medium tracking-tight leading-[1.05] text-foreground text-balance"
            >
              Building strong business foundations.<br />
              <span className="text-secondary italic">Solving problems with discipline.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-body-lg text-muted-foreground max-w-xl font-normal leading-relaxed text-pretty"
            >
              First-year Business Administration student at FSJES Aïn Chock, exploring how <TypingEffect 
                words={["management principles", "accounting & finance", "practical execution"]} 
                className="text-foreground font-medium"
                pauseDuration={5000}
              /> create real value.
            </motion.p>

            {/* Action Affordances: ReUI style buttons (crisp, rectangular) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3 pt-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 bg-foreground hover:bg-foreground/90 text-background text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Icon name="mail" size={16} />
                <span>Direct Correspondence</span>
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 bg-transparent hover:bg-muted border border-border text-foreground text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Icon name="checklist" size={16} />
                <span>Explore Pillars</span>
              </a>
            </motion.div>
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
