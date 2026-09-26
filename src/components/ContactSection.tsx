"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { showToast } from "@/components/Toast";
import { Icon } from "@/components/icons/Icon";
import profile from "@/data/profile";
import { MOTION_EASINGS, MOTION_DURATIONS } from "@/motion/tokens";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(profile.contact.email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = profile.contact.email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopiedEmail(true);
      showToast("Email address copied to clipboard!", "success");
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      showToast("Failed to copy email", "error");
    }
  };


  const currentTemplate = {
    id: "internship",
    label: "Internship Opportunity",
    subject: "[Internship] Business Administration & Operations Opportunity",
    body: `Hello Hassan,\n\nWe have reviewed your profile and academic monographs and would like to discuss an internship opportunity with our organization.\n\nRole Focus:\nOrganization / Company:\nTimeline:`,
  };
  const mailtoUrl = `mailto:${profile.contact.email}?subject=${encodeURIComponent(
    currentTemplate.subject
  )}&body=${encodeURIComponent(currentTemplate.body)}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-surface text-foreground pt-24 pb-12 border-t border-border scroll-mt-16 relative"
      id="contact"
    >
      <div className="max-w-5xl mx-auto px-6 space-y-20">
        {/* ========================================================
            SECTION HEADER
            ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-medium tracking-tight text-foreground flex items-center gap-3">
              Direct Correspondence
              <span className="size-1.5 rounded-full bg-accent animate-pulse" title="Available for Internships" />
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex flex-col items-start md:items-end gap-1.5 text-sm text-muted-foreground max-w-sm"
          >
            <p className="leading-relaxed">
              Open for business administration internships, operational modeling, and academic collaborations.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground/80 pt-1">
              <Icon name="location_on" size={13} />
              <span>Casablanca, Morocco (UTC+1)</span>
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            BALANCED DIRECT CORRESPONDENCE SUITE
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN: DIRECT INBOX & VERIFIED CHANNELS (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-md border border-border bg-surface p-6 hover:border-foreground/30 transition-all duration-200 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-foreground">
                  <Icon name="mail" size={15} />
                  <span>DIRECT INBOX</span>
                </div>
                <span className="size-1.5 rounded-full bg-accent animate-pulse" title="Active inbox" />
              </div>

              <div className="flex items-center justify-between gap-3 pt-2">
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="text-base font-medium text-foreground hover:text-accent transition-colors truncate focus-visible:outline-none"
                >
                  {profile.contact.email}
                </a>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="rounded-sm bg-muted hover:bg-muted/80 px-2 py-1 text-[10px] font-medium uppercase tracking-widest text-foreground border border-border transition-colors cursor-pointer flex items-center gap-1 focus-visible:outline-none"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Icon name="check" size={12} className="text-accent" />
                        <span className="text-accent">Copied</span>
                      </>
                    ) : (
                      <>
                        <Icon name="content_copy" size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-border mt-4">
                Guaranteed reply within 24 hours. Monitored directly by Hassan Karasu.
              </p>
            </motion.div>

            {/* LinkedIn Network Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-md border border-border bg-surface p-6 hover:border-foreground/30 transition-all duration-200 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-foreground">
                  <Icon name="share" size={15} />
                  <span>PROFESSIONAL NETWORK</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Verified Profile</span>
              </div>

              <div className="pt-2">
                <a
                  href="https://linkedin.com/in/hassan-karasu-a7485336b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-md bg-muted hover:bg-muted/80 transition-colors group border border-border focus-visible:outline-none"
                >
                  <span className="text-sm font-medium text-foreground flex items-center gap-2.5">
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded-sm bg-foreground text-background">
                      in
                    </span>
                    LinkedIn
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-widest text-foreground group-hover:text-accent transition-colors">
                    <span>Connect</span>
                    <Icon name="arrow_outward" size={12} />
                  </div>
                </a>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-border mt-4">
                Open for internship discussions, network connections, and endorsements.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: TRANSPARENT DIRECT CORRESPONDENCE LEDGER (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-md border border-border bg-surface p-8 lg:p-10 space-y-8"
            >
              <div>
                <h3 className="text-2xl font-display font-medium text-foreground">
                  Initiate Correspondence
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Direct communication without intermediary forms. Choose your subject to generate an immediate, pre-formatted proposal draft in your preferred mail client.
                </p>
              </div>

              {/* Draft Preview Box */}
              <div className="p-5 rounded-md bg-muted border border-border space-y-4">
                <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-widest text-muted-foreground pb-3 border-b border-border">
                  <span className="flex items-center gap-1.5">
                    <Icon name="edit_note" size={14} />
                    <span>PREVIEW SUBJECT &amp; OUTLINE</span>
                  </span>
                  <span className="text-foreground">Direct Draft</span>
                </div>

                <div className="text-xs font-mono space-y-2 text-foreground">
                  <p>
                    <span className="text-muted-foreground">To:</span> {profile.contact.email}
                  </p>
                  <p className="font-medium truncate">
                    <span className="text-muted-foreground font-normal">Subject:</span> {currentTemplate.subject}
                  </p>
                </div>

                <pre className="text-xs font-mono text-muted-foreground bg-surface p-4 rounded-sm border border-border whitespace-pre-wrap leading-relaxed">
                  {currentTemplate.body}
                </pre>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
                <a
                  href={mailtoUrl}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 bg-foreground hover:bg-foreground/90 text-background text-[10px] font-medium uppercase tracking-widest transition-colors cursor-pointer focus-visible:outline-none"
                >
                  <Icon name="mail" size={14} />
                  <span>Open in Mail Client</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 bg-surface hover:bg-muted border border-border text-foreground text-[10px] font-medium uppercase tracking-widest transition-colors cursor-pointer focus-visible:outline-none"
                >
                  {copiedEmail ? (
                    <>
                      <Icon name="check" size={14} className="text-accent" />
                      <span className="text-accent">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Icon name="content_copy" size={14} />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

            </motion.div>
          </div>
        </div>

        {/* ========================================================
            FOOTER DIRECTORY & CITATIONS
            ======================================================== */}
        <div className="pt-16 border-t border-border space-y-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Logo & Academic Byline */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo-light.svg"
                  alt="Hassan Karasu - Business Administration Student Logo"
                  width={140}
                  height={40}
                  className="h-6 sm:h-7 w-auto object-contain opacity-90 logo-light-img dark:hidden"
                  loading="lazy"
                />
                <Image
                  src="/logo-dark.svg"
                  alt="Hassan Karasu - Business Administration Student Logo"
                  width={140}
                  height={40}
                  className="h-6 sm:h-7 w-auto object-contain opacity-90 logo-dark-img hidden dark:block"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-muted-foreground font-mono">
                Licence in Business Administration · FSJES Aïn Chock, Université Hassan II de Casablanca
              </p>
            </div>

            {/* Quick Navigation Directory */}
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground" aria-label="Footer navigation">
              <a href="#home" className="hover:text-foreground transition-colors">Home</a>
              <a href="#about" className="hover:text-foreground transition-colors">About</a>
              <a href="#work" className="hover:text-foreground transition-colors">Work</a>
              <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
              <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
              <a href="#writing" className="hover:text-foreground transition-colors">Writing</a>
              <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>

          {/* Bottom Copyright & Back to Top */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
            <p>© {new Date().getFullYear()} Hassan Karasu. All rights reserved.</p>
            
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <Icon name="arrow_upward" size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
