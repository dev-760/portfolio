"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { showToast } from "@/components/Toast";
import { Icon } from "@/components/icons/Icon";
import profile from "@/data/profile";
import { MOTION_EASINGS, MOTION_DURATIONS } from "@/motion/tokens";

interface TemplateInquiry {
  id: string;
  label: string;
  subject: string;
  body: string;
}

const templates: TemplateInquiry[] = [
  {
    id: "internship",
    label: "Internship Opportunity",
    subject: "[Internship] Business Administration & Operations Opportunity",
    body: `Hello Hassan,\n\nWe have reviewed your profile and academic monographs and would like to discuss an internship opportunity with our organization.\n\nRole Focus:\nOrganization / Company:\nTimeline:`,
  },
  {
    id: "operations",
    label: "Operations & Logistics",
    subject: "[Project] Operational Process & Workflow Inquiry",
    body: `Hello Hassan,\n\nWe would like to connect regarding an operational challenge / production coordination project.\n\nProject Scope:\nKey Objectives:`,
  },
  {
    id: "academic",
    label: "Academic & Research",
    subject: "[Academic] FSJES Research & Monograph Collaboration",
    body: `Hello Hassan,\n\nI read your monograph on operational systems and would like to discuss coursework / academic research.\n\nTopic:`,
  },
  {
    id: "general",
    label: "General Discussion",
    subject: "[General] Professional Introduction — Hassan Karasu",
    body: `Hello Hassan,\n\nI would like to connect and discuss your background in business administration and practical execution.\n\nMessage:`,
  },
];

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string>("internship");

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

  const handleDownloadCV = () => {
    showToast("Opening Hassan Karasu Academic CV...", "info");
    window.print();
  };

  const currentTemplate = templates.find((t) => t.id === selectedTemplate) ?? templates[0];
  const mailtoUrl = `mailto:${profile.contact.email}?subject=${encodeURIComponent(
    currentTemplate.subject
  )}&body=${encodeURIComponent(currentTemplate.body)}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-surface-container-lowest text-on-surface pt-20 pb-12 border-t border-outline-variant/40 scroll-mt-16 relative"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* ========================================================
            SECTION HEADER
            ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant/30 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
            className="space-y-2"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 uppercase tracking-wider">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Internships
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface">
              Direct Correspondence
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: MOTION_DURATIONS.standard }}
            className="flex flex-col items-start md:items-end gap-1.5 text-sm text-outline max-w-sm"
          >
            <p className="leading-relaxed">
              Open for business administration internships, operational modeling, and academic collaborations.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-outline/80 pt-1">
              <Icon name="location_on" size={13} />
              <span>Casablanca, Morocco (UTC+1)</span>
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            BALANCED DIRECT CORRESPONDENCE SUITE
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: DIRECT INBOX & VERIFIED CHANNELS (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-outline mb-1">
              Verified Channels &amp; Network
            </h3>

            {/* Direct Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
              className="rounded-xl border border-outline-variant/60 bg-surface p-5 sm:p-6 shadow-2xs hover:border-primary/50 transition-all duration-200 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                  <Icon name="mail" size={15} />
                  <span>DIRECT INBOX</span>
                </div>
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" title="Active inbox" />
              </div>

              <div className="flex items-center justify-between gap-3 pt-1">
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="text-base font-bold text-on-surface hover:text-primary transition-colors truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs"
                >
                  {profile.contact.email}
                </a>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="rounded-md bg-surface-container hover:bg-surface-container-high px-2.5 py-1.5 text-xs font-mono font-medium text-on-surface border border-outline-variant/40 transition-colors cursor-pointer flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Icon name="check" size={13} className="text-emerald-600" />
                        <span className="text-emerald-700 dark:text-emerald-300">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Icon name="content_copy" size={13} className="text-outline" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="rounded-md bg-primary hover:bg-secondary px-2.5 py-1.5 text-xs font-medium text-on-primary transition-colors flex items-center gap-1 cursor-pointer"
                    title="Send Email"
                  >
                    <Icon name="arrow_outward" size={13} />
                  </a>
                </div>
              </div>

              <p className="text-xs text-outline leading-relaxed pt-1">
                Guaranteed reply within 24 hours. Monitored directly by Hassan Karasu.
              </p>
            </motion.div>

            {/* LinkedIn Network Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: 0.08, duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
              className="rounded-xl border border-outline-variant/60 bg-surface p-5 sm:p-6 shadow-2xs hover:border-primary/50 transition-all duration-200 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                  <Icon name="share" size={15} />
                  <span>PROFESSIONAL NETWORK</span>
                </div>
                <span className="text-[11px] font-mono text-outline">Verified Profile</span>
              </div>

              <div className="pt-1">
                <a
                  href="https://linkedin.com/in/hassan-karasu-a7485336b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors group border border-outline-variant/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="text-sm font-semibold text-on-surface flex items-center gap-2.5">
                    <span className="font-mono text-xs px-2 py-0.5 rounded-sm bg-primary text-on-primary">
                      in
                    </span>
                    LinkedIn · Hassan Karasu
                  </span>
                  <div className="flex items-center gap-1 text-xs font-medium text-primary group-hover:translate-x-0.5 transition-transform">
                    <span>Connect</span>
                    <Icon name="arrow_outward" size={14} />
                  </div>
                </a>
              </div>

              <p className="text-xs text-outline leading-relaxed pt-1">
                Open for internship discussions, network connections, and endorsements.
              </p>
            </motion.div>

            {/* Academic Coordinates Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: 0.12, duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
              className="rounded-xl border border-outline-variant/60 bg-surface p-5 sm:p-6 shadow-2xs space-y-2"
            >
              <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                <Icon name="school" size={15} />
                <span>INSTITUTIONAL LOCATION</span>
              </div>
              <p className="text-xs font-semibold text-on-surface">
                FSJES Aïn Chock, Université Hassan II de Casablanca
              </p>
              <p className="text-xs text-outline">
                Route d&apos;El Jadida, B.P. 8110 Oasis, Casablanca, Morocco
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: TRANSPARENT DIRECT CORRESPONDENCE LEDGER (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: 0.12, duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
              className="rounded-xl border border-outline-variant/60 bg-surface-container-lowest p-6 sm:p-8 lg:p-9 shadow-xs space-y-6"
            >
              <div>
                <div className="flex items-center gap-2 mb-2 text-primary font-semibold text-xs tracking-wider uppercase font-mono">
                  <Icon name="notes" size={16} />
                  <span>TRANSPARENT DIRECT DISPATCH</span>
                </div>
                <h3 className="text-2xl font-bold text-on-surface">
                  Initiate Correspondence
                </h3>
                <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                  Direct communication without intermediary forms. Choose your subject to generate an immediate, pre-formatted proposal draft in your preferred mail client.
                </p>
              </div>

              {/* Inquiry Reason Selector Pills */}
              <div className="space-y-3">
                <label className="text-xs font-sans font-semibold uppercase tracking-wider text-on-surface-variant block">
                  Select Inquiry Topic
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {templates.map((template) => {
                    const isSelected = selectedTemplate === template.id;

                    return (
                      <button
                        key={template.id}
                        type="button"
                        onClick={() => setSelectedTemplate(template.id)}
                        className={`p-3 rounded-lg text-left text-xs font-medium transition-all duration-150 cursor-pointer flex items-center justify-between border ${
                          isSelected
                            ? "bg-primary text-on-primary border-primary shadow-2xs font-semibold"
                            : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant border-outline-variant/40"
                        }`}
                      >
                        <span>{template.label}</span>
                        {isSelected ? (
                          <Icon name="check" size={14} className="text-on-primary" />
                        ) : (
                          <Icon name="arrow_outward" size={13} className="text-outline" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Draft Preview Box */}
              <div className="p-4 sm:p-5 rounded-lg bg-surface border border-outline-variant/40 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-outline pb-2 border-b border-outline-variant/20">
                  <span className="flex items-center gap-1.5">
                    <Icon name="edit_note" size={14} />
                    <span>PREVIEW SUBJECT &amp; OUTLINE</span>
                  </span>
                  <span className="text-[11px] text-primary font-semibold uppercase">Direct Draft</span>
                </div>

                <div className="text-xs font-mono space-y-1.5 text-on-surface">
                  <p>
                    <span className="text-outline">To:</span> {profile.contact.email}
                  </p>
                  <p className="font-semibold text-primary truncate">
                    <span className="text-outline font-normal">Subject:</span> {currentTemplate.subject}
                  </p>
                </div>

                <pre className="text-xs font-mono text-on-surface-variant bg-surface-container-low p-3 rounded border border-outline-variant/20 whitespace-pre-wrap leading-relaxed">
                  {currentTemplate.body}
                </pre>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={mailtoUrl}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-primary hover:bg-secondary text-on-primary text-xs font-semibold uppercase tracking-wider transition-all shadow-xs hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Icon name="mail" size={16} />
                  <span>Open in Mail Client</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 bg-surface-container hover:bg-surface-container-high border border-outline-variant text-on-surface text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {copiedEmail ? (
                    <>
                      <Icon name="check" size={15} className="text-emerald-600" />
                      <span className="text-emerald-700 dark:text-emerald-300">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Icon name="content_copy" size={15} />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleDownloadCV}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 bg-surface-container-low hover:bg-surface-container border border-outline-variant/60 text-secondary text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  title="Print / Save Academic CV"
                >
                  <Icon name="article" size={15} />
                  <span>Curriculum Vitae</span>
                </button>
              </div>

              <p className="text-[11px] text-outline leading-tight">
                No third-party forms, tracking pixels, or data collection. All inquiries are received directly in Hassan Karasu&apos;s personal inbox.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ========================================================
            FOOTER DIRECTORY & CITATIONS
            ======================================================== */}
        <div className="pt-12 border-t border-outline-variant/30 space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Logo & Academic Byline */}
            <div className="space-y-1.5">
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
              <p className="text-xs text-outline font-mono">
                Licence in Business Administration · FSJES Aïn Chock, Université Hassan II de Casablanca
              </p>
            </div>

            {/* Quick Navigation Directory */}
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-on-surface-variant" aria-label="Footer navigation">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#work" className="hover:text-primary transition-colors">Work</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#writing" className="hover:text-primary transition-colors">Writing</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>

          {/* Bottom Copyright & Back to Top */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-outline-variant/20 text-xs text-outline font-mono">
            <p>© {new Date().getFullYear()} Hassan Karasu. All rights reserved.</p>
            
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer"
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

export default ContactSection;
