"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { showToast } from "@/components/Toast";
import { Icon } from "@/components/icons/Icon";
import profile from "@/data/profile";
import { MOTION_EASINGS, MOTION_DURATIONS } from "@/motion/tokens";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      setCopied(true);
      showToast("Email address copied to clipboard!", "success");
      setTimeout(() => setCopied(false), 2200);
    } catch {
      showToast("Failed to copy email", "error");
    }
  };

  return (
    <footer className="bg-surface-container-lowest text-on-surface pt-20 pb-12 border-t border-outline-variant/40 scroll-mt-16" id="contact">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-outline">
              06 — CONTACT
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface mt-2">
              Get in Touch
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: MOTION_DURATIONS.standard }}
            className="text-sm text-outline max-w-sm"
          >
            Open for business administration internships, project inquiries, and academic or professional collaborations.
          </motion.p>
        </div>

        {/* Contact Suite: Clean Direct Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
          {/* Direct Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
            className="rounded-xl border border-outline-variant/60 bg-surface p-6 shadow-2xs space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                EMAIL
              </span>
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="flex items-center justify-between gap-3 pt-1">
              <a
                href={`mailto:${profile.contact.email}`}
                className="text-base font-semibold text-on-surface hover:text-primary transition-colors truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs"
              >
                {profile.contact.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="rounded bg-surface-container-high hover:bg-surface-container-highest px-3 py-1.5 text-xs font-mono font-medium text-on-surface border border-outline-variant/40 transition-colors shrink-0 cursor-pointer flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Icon name="check" size={14} className="text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Icon name="content_copy" size={14} className="text-outline" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-outline leading-relaxed pt-1">
              Typical response time: within 24 hours.
            </p>
          </motion.div>

          {/* Professional Network Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: 0.1, duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
            className="rounded-xl border border-outline-variant/60 bg-surface p-6 shadow-2xs space-y-3 flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary block mb-1">
                NETWORKS
              </span>
              <p className="text-xs text-outline leading-relaxed">
                Connect for academic or professional inquiries.
              </p>
            </div>

            <div className="pt-1">
              <a
                href="https://linkedin.com/in/hassan-karasu-a7485336b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded bg-surface-container-low hover:bg-surface-container transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="text-xs font-medium text-on-surface flex items-center gap-2">
                  <Icon name="share" size={14} className="text-outline group-hover:text-primary transition-colors" />
                  LinkedIn
                </span>
                <Icon name="arrow_outward" size={13} className="text-outline group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4">
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
            © {new Date().getFullYear()} Hassan Karasu. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default ContactSection;
