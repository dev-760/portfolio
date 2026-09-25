"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MOTION_EASINGS, MOTION_DURATIONS } from "@/motion/tokens";

export function ContactFooter() {
  return (
    <footer className="bg-surface-container-lowest py-16 relative overflow-hidden" id="contact">
      {/* 1. Terminal State Line-Extension Animation: ──────── CONTACT ──────── */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="relative flex items-center justify-center">
          {/* Left extending boundary */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: MOTION_DURATIONS.section, ease: MOTION_EASINGS.system }}
            style={{ originX: 1 }}
            className="flex-1 h-px bg-outline-variant/40"
          />

          {/* Central Terminal Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: MOTION_DURATIONS.fast, ease: MOTION_EASINGS.sharp }}
            className="px-4 text-[10px] font-mono font-bold tracking-[0.25em] text-outline uppercase flex items-center gap-2"
          >
            <span className="size-1 rounded-full bg-primary" />
            <span>TERMINAL · CONTACT</span>
            <span className="size-1 rounded-full bg-primary" />
          </motion.div>

          {/* Right extending boundary */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: MOTION_DURATIONS.section, ease: MOTION_EASINGS.system }}
            style={{ originX: 0 }}
            className="flex-1 h-px bg-outline-variant/40"
          />
        </div>
      </div>

      {/* 2. Settled Supporting Metadata / Content */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
        >
          <Link href="/" className="flex items-center group" aria-label="Hassan Karasu - Home">
            <Image
              src="/logo-light.svg"
              alt="Hassan Karasu"
              width={160}
              height={48}
              className="h-7 w-auto object-contain logo-light-img dark:hidden"
            />
            <Image
              src="/logo-dark.svg"
              alt="Hassan Karasu"
              width={160}
              height={48}
              className="h-7 w-auto object-contain logo-dark-img hidden dark:block"
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
          className="flex flex-wrap items-center gap-6 text-xs font-mono text-on-surface-variant"
        >
          <a className="hover:text-primary transition-colors py-1" href="mailto:contact@hassankarasu.com">
            EMAIL
          </a>
          <a className="hover:text-primary transition-colors py-1" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LINKEDIN
          </a>
          <a className="hover:text-primary transition-colors py-1" href="https://substack.com" target="_blank" rel="noopener noreferrer">
            SUBSTACK
          </a>
          <a className="hover:text-primary transition-colors py-1" href="#home">
            SYSTEM_SPEC
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: MOTION_DURATIONS.standard }}
          className="text-xs font-mono text-outline"
        >
          © 2026 ALL RIGHTS RESERVED
        </motion.div>
      </div>
    </footer>
  );
}

export default ContactFooter;
