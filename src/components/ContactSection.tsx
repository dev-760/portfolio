"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Icon } from "@/components/icons/Icon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import profile from "@/data/profile";
import { showToast } from "@/components/Toast";

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
      showToast("Email address copied to clipboard", "success");
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      showToast(profile.contact.email, "info");
    }
  };

  return (
    <footer
      className="bg-surface text-foreground pt-20 pb-12 border-t border-border scroll-mt-16 relative"
      id="contact"
    >
      <div className="container space-y-16">
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
            <h2 className="text-3xl lg:text-4xl font-display font-normal tracking-tight text-foreground">
              Get in Touch
            </h2>
            <p className="text-sm text-muted-foreground">
              I am looking for a first internship &mdash; summer 2027, ideally in accounting or operations, Casablanca or remote.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex flex-col items-start md:items-end gap-1.5 text-xs text-muted-foreground"
          >
            <span className="font-mono flex items-center gap-1.5">
              <Icon name="location_on" size={13} />
              Casablanca, Morocco (UTC+1)
            </span>
            <span className="text-muted-foreground/80">
              I read this inbox myself and reply within 24 hours
            </span>
          </motion.div>
        </div>

        {/* ========================================================
            DIRECT CORRESPONDENCE CARDS
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {/* Direct Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-md border border-border bg-card p-6 sm:p-7 hover:border-foreground/30 transition-all duration-200 flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                  <Icon name="mail" size={14} />
                  Direct Email
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-foreground animate-pulse" />
                  Active
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="text-base font-medium text-foreground hover:text-accent transition-colors truncate focus-visible:outline-none"
                >
                  {profile.contact.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="rounded px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-foreground bg-muted hover:bg-muted/80 border border-border transition-colors cursor-pointer flex items-center justify-center gap-1.5 focus-visible:outline-none shrink-0"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Icon name="check" size={13} className="text-emerald-600" />
                      <span className="text-emerald-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Icon name="content_copy" size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>


          </motion.div>

          {/* LinkedIn Network Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-md border border-border bg-card p-6 sm:p-7 hover:border-foreground/30 transition-all duration-200 flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                  <Icon name="share" size={14} />
                  Professional Network
                </span>

              </div>

              <div className="pt-1">
                <a
                  href="https://linkedin.com/in/hassan-karasu-a7485336b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-md bg-muted hover:bg-muted/80 transition-colors group border border-border focus-visible:outline-none"
                >
                  <span className="text-sm font-semibold text-foreground flex items-center gap-2.5">
                    <LinkedinIcon size={16} color="currentColor" strokeWidth={2} />
                    Hassan Karasu on LinkedIn
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider text-foreground group-hover:text-accent transition-colors">
                    <span>Connect</span>
                    <Icon name="arrow_outward" size={13} />
                  </div>
                </a>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed pt-3 border-t border-border">
              Open to internship conversations and student networking.
            </p>
          </motion.div>
        </div>

        {/* ========================================================
            FOOTER DIRECTORY & CITATIONS
            ======================================================== */}
        <div className="pt-12 border-t border-border space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Logo & Academic Byline */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/icon-light.svg"
                  alt="Hassan Karasu"
                  width={24}
                  height={24}
                  className="size-6 object-contain dark:hidden"
                  loading="lazy"
                />
                <Image
                  src="/icon-dark.svg"
                  alt="Hassan Karasu"
                  width={24}
                  height={24}
                  className="size-6 object-contain hidden dark:block"
                  loading="lazy"
                />
                <span className="font-sans font-medium text-sm tracking-tight text-foreground">
                  Hassan Karasu
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-mono">
                Licence in Business Administration · FSJES Aïn Chock, Université Hassan II de Casablanca
              </p>
            </div>

            {/* Quick Navigation Directory */}
            <nav
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
              aria-label="Footer navigation"
            >
              <a href="#home" className="hover:text-foreground transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-foreground transition-colors">
                About
              </a>
              <a href="#work" className="hover:text-foreground transition-colors">
                Work
              </a>
              <a href="#skills" className="hover:text-foreground transition-colors">
                Skills
              </a>
              <a href="#experience" className="hover:text-foreground transition-colors">
                Experience
              </a>
              <a href="#writing" className="hover:text-foreground transition-colors">
                Monographs
              </a>
              <a href="#contact" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Bottom Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
            <p>© {new Date().getFullYear()} Hassan Karasu. All rights reserved.</p>
            <p className="normal-case font-mono text-[11px]">Casablanca, Morocco</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ContactSection;
