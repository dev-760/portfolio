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

export default function Home() {
  return (
    <div className="bg-background text-foreground antialiased font-sans min-h-screen" suppressHydrationWarning>
      {/* ========================================================
          Section 00: Hero (Editorial Ledger Aesthetic)
          ======================================================== */}
      <section
        id="home"
        className="min-h-[75vh] flex flex-col justify-center border-b border-border relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex-1 flex flex-col justify-center relative z-10 py-16 lg:py-24">
          <div className="max-w-3xl flex flex-col gap-6 sm:gap-8">
            {/* Headline: Editorial serif */}
            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-normal tracking-tight leading-[1.05] text-foreground text-balance"
            >
              Studying how organizations actually work.<br />
              <span className="italic text-foreground/85">Then checking whether the numbers agree.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl font-normal leading-relaxed text-pretty"
            >
              First-year Business Administration student at FSJES Aïn Chock, Casablanca. This
              term I am working through{" "}
              <TypingEffect
                words={[
                  "mathematics for economics",
                  "microeconomics",
                  "management principles",
                  "business law fundamentals",
                ]}
                className="text-foreground font-medium underline underline-offset-4 decoration-border"
                pauseDuration={4000}
              />
              . I write about the concepts, questions, and connections between them.
            </motion.p>

            {/* Action Affordances */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 bg-foreground hover:bg-foreground/90 text-background text-xs font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none"
              >
                <Icon name="mail" size={15} />
                <span>Email me</span>
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 bg-card hover:bg-muted border border-border text-foreground text-xs font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none"
              >
                <Icon name="checklist" size={15} />
                <span>My Studies</span>
              </a>

              <a
                href="#writing"
                className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 bg-transparent hover:bg-muted text-muted-foreground hover:text-foreground text-xs font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none"
              >
                <Icon name="article" size={15} />
                <span>Read the notes</span>
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
