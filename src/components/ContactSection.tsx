"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { showToast } from "@/components/Toast";
import { Icon } from "@/components/icons/Icon";
import profile from "@/data/profile";
import { MOTION_EASINGS, MOTION_DURATIONS } from "@/motion/tokens";

const inquiryTypes = [
  "Internship Opportunity",
  "Operations & Projects",
  "Academic & Research",
  "General Inquiry",
] as const;

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form state
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [inquiryType, setInquiryType] = useState<string>(inquiryTypes[0]);
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      setCopiedEmail(true);
      showToast("Email address copied to clipboard!", "success");
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      showToast("Failed to copy email", "error");
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.phone);
      setCopiedPhone(true);
      showToast("Phone number copied to clipboard!", "success");
      setTimeout(() => setCopiedPhone(false), 2400);
    } catch {
      showToast("Failed to copy phone number", "error");
    }
  };

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formEmail.trim() || !formMessage.trim()) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    setIsSubmitting(true);

    // Simulate sending & generate mailto draft fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast("Inquiry recorded! Preparing message draft.", "success");

      // Open email client with prefilled subject and body
      const subject = encodeURIComponent(`[${inquiryType}] Message from ${formName}`);
      const body = encodeURIComponent(
        `Name: ${formName}\nEmail: ${formEmail}\nReason: ${inquiryType}\n\nMessage:\n${formMessage}`
      );
      window.open(`mailto:${profile.contact.email}?subject=${subject}&body=${body}`, "_blank");
    }, 600);
  };

  const handleResetForm = () => {
    setFormName("");
    setFormEmail("");
    setFormMessage("");
    setIsSubmitted(false);
  };

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
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-outline">
                06 — CONTACT &amp; COLLABORATION
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 uppercase tracking-wider">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Internships
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface">
              Get in Touch
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
              Open for business administration internships, operational modeling, and academic or professional collaborations.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-outline/80 pt-1">
              <Icon name="location_on" size={13} />
              <span>Casablanca, Morocco (UTC+1)</span>
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            BALANCED 2-COLUMN CONTACT SUITE
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: DIRECT CHANNELS (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-outline mb-1">
              Direct Communication Channels
            </h3>

            {/* Email Channel Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
              className="rounded-2xl border border-outline-variant/60 bg-surface p-5 sm:p-6 shadow-2xs hover:border-primary/50 transition-all duration-200 space-y-3"
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
                    className="rounded-lg bg-surface-container hover:bg-surface-container-high px-2.5 py-1.5 text-xs font-mono font-medium text-on-surface border border-outline-variant/40 transition-colors cursor-pointer flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
                    className="rounded-lg bg-primary hover:bg-secondary px-2.5 py-1.5 text-xs font-medium text-on-primary transition-colors flex items-center gap-1 cursor-pointer"
                    title="Send Email"
                  >
                    <Icon name="arrow_outward" size={13} />
                  </a>
                </div>
              </div>

              <p className="text-xs text-outline leading-relaxed pt-1">
                Typical response time: within 24 hours. Monitored daily.
              </p>
            </motion.div>

            {/* LinkedIn Network Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: 0.08, duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
              className="rounded-2xl border border-outline-variant/60 bg-surface p-5 sm:p-6 shadow-2xs hover:border-primary/50 transition-all duration-200 space-y-3"
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
                  className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors group border border-outline-variant/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="text-sm font-semibold text-on-surface flex items-center gap-2.5">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-primary text-on-primary">
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

            {/* Direct Phone & WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: 0.16, duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
              className="rounded-2xl border border-outline-variant/60 bg-surface p-5 sm:p-6 shadow-2xs hover:border-primary/50 transition-all duration-200 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                  <Icon name="location_on" size={15} />
                  <span>LOCATION &amp; DIRECT LINE</span>
                </div>
                <span className="text-[11px] font-mono text-outline">Morocco</span>
              </div>

              <div className="flex items-center justify-between gap-3 pt-1">
                <a
                  href={`tel:${profile.contact.phone.replace(/\s+/g, "")}`}
                  className="text-base font-bold text-on-surface hover:text-primary transition-colors font-mono"
                >
                  {profile.contact.phone}
                </a>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="rounded-lg bg-surface-container hover:bg-surface-container-high px-2.5 py-1.5 text-xs font-mono font-medium text-on-surface border border-outline-variant/40 transition-colors cursor-pointer flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? (
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
                    href="https://wa.me/212779898873"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-emerald-600 hover:bg-emerald-700 px-2.5 py-1.5 text-xs font-medium text-white transition-colors flex items-center gap-1 cursor-pointer"
                    title="Message on WhatsApp"
                  >
                    <span>WhatsApp</span>
                    <Icon name="arrow_outward" size={12} />
                  </a>
                </div>
              </div>

              <p className="text-xs text-outline leading-relaxed pt-1">
                Casablanca, Morocco · Available for scheduled calls and inquiries.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE INQUIRY FORM (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: 0.12, duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
              className="rounded-2xl border border-outline-variant/60 bg-surface-container-lowest p-6 sm:p-8 lg:p-9 shadow-xs space-y-6"
            >
              <div>
                <div className="flex items-center gap-2 mb-2 text-primary font-semibold text-xs tracking-wider uppercase font-mono">
                  <Icon name="notes" size={16} />
                  <span>DIRECT INQUIRY DISPATCH</span>
                </div>
                <h3 className="text-2xl font-bold text-on-surface">
                  Send a Direct Message
                </h3>
                <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                  Have an internship opening, operational challenge, or academic question? Fill out the brief below to start the conversation.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="p-6 sm:p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-4"
                  >
                    <div className="flex items-center gap-3 text-emerald-800 dark:text-emerald-300">
                      <div className="p-2 rounded-full bg-emerald-500/20">
                        <Icon name="verified" size={24} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold">Message Draft Generated</h4>
                        <p className="text-xs text-emerald-700 dark:text-emerald-400">
                          Your email client has opened with the formatted proposal.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-container-lowest border border-emerald-500/20 text-xs font-mono space-y-1.5 text-on-surface">
                      <p>
                        <span className="text-outline">Recipient:</span> {profile.contact.email}
                      </p>
                      <p>
                        <span className="text-outline">Subject:</span> [{inquiryType}] From {formName}
                      </p>
                      <p>
                        <span className="text-outline">Reply-to:</span> {formEmail}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-xs text-outline">
                        Didn&apos;t open? Send directly to{" "}
                        <a href={`mailto:${profile.contact.email}`} className="text-primary underline">
                          {profile.contact.email}
                        </a>
                      </span>
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-xs font-semibold uppercase tracking-wider text-primary cursor-pointer transition-colors"
                      >
                        Send Another
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmitMessage} className="space-y-5">
                    {/* Inquiry Reason Selector Pills */}
                    <div>
                      <label className="text-xs font-mono font-semibold uppercase tracking-wider text-outline block mb-2">
                        Reason for Inquiry
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {inquiryTypes.map((type) => {
                          const isSelected = inquiryType === type;
                          return (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setInquiryType(type)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                                isSelected
                                  ? "bg-primary text-on-primary shadow-2xs font-semibold"
                                  : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant border border-outline-variant/40"
                              }`}
                            >
                              {type}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Name & Email Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono uppercase tracking-wider text-outline block mb-1.5">
                          Your Name <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="e.g. Sarah Mansouri"
                          className="w-full px-4 py-2.5 rounded-xl bg-surface border border-outline-variant text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono uppercase tracking-wider text-outline block mb-1.5">
                          Your Email <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-surface border border-outline-variant text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Message Body */}
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-outline block mb-1.5">
                        Message Details <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="Describe the opportunity, role requirements, or project scope..."
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-y min-h-[100px]"
                      />
                    </div>

                    {/* Submit Row */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
                      <p className="text-[11px] text-outline leading-tight max-w-xs">
                        Confidential dispatch. No tracking, spam, or external marketing.
                      </p>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3 bg-primary hover:bg-secondary text-on-primary text-xs font-semibold uppercase tracking-wider transition-all shadow-xs hover:shadow-md cursor-pointer disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="size-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Icon name="arrow_forward" size={16} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
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
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-wider text-outline" aria-label="Footer navigation">
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
