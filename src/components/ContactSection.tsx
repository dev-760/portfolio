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
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-normal tracking-tight text-foreground">
              Get in Touch
            </h2>
            <p className="text-sm text-muted-foreground max-w-prose">
              I&rsquo;m looking for a first internship for{" "}
              <strong className="font-semibold text-foreground">summer 2027</strong>, with a
              particular interest in{" "}
              <strong className="font-semibold text-foreground">accounting and operations</strong>.
              I&rsquo;m based in Casablanca and open to remote opportunities as well.
            </p>
            <p className="text-sm text-muted-foreground max-w-prose">
              I read my messages myself and will get back to you as soon as I can.
            </p>
            <p className="text-sm text-muted-foreground max-w-prose">
              If you&rsquo;re working in one of these areas, have an internship opportunity, or
              simply want to talk, you can reach me directly.
            </p>
          </motion.div>
        </div>

        {/* ========================================================
            DIRECT CORRESPONDENCE PANEL
            ======================================================== */}
        <div className="grid w-full grid-cols-1 gap-1 rounded-md border border-border bg-muted p-1 *:rounded-sm *:border *:border-border *:bg-card *:p-6 sm:grid-cols-3">
          {/* Email */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-md border border-border bg-muted text-foreground">
              <Icon name="mail" size={20} />
            </div>
            <h3 className="mt-6 font-display text-xl font-normal tracking-tight text-foreground">
              Email
            </h3>
            <p className="my-2.5 text-sm text-muted-foreground">
              The quickest way to reach me. I read messages myself.
            </p>
            <a
              href={`mailto:${profile.contact.email}`}
              className="font-medium text-accent hover:underline break-all focus-visible:outline-none"
            >
              {profile.contact.email}
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="mt-4 self-start rounded-sm px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-foreground bg-muted hover:bg-muted/80 border border-border transition-colors cursor-pointer flex items-center justify-center gap-1.5 focus-visible:outline-none"
              aria-label="Copy email address"
            >
              {copiedEmail ? (
                <>
                  <Icon name="check" size={13} />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Icon name="content_copy" size={13} />
                  <span>Copy email</span>
                </>
              )}
            </button>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-md border border-border bg-muted text-foreground">
              <LinkedinIcon size={20} color="currentColor" strokeWidth={2} />
            </div>
            <h3 className="mt-6 font-display text-xl font-normal tracking-tight text-foreground">
              LinkedIn
            </h3>
            <p className="my-2.5 text-sm text-muted-foreground">
              Open to student networking and conversations about operations.
            </p>
            <a
              href="https://linkedin.com/in/hassan-karasu-a7485336b"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent hover:underline focus-visible:outline-none"
            >
              Hassan Karasu
            </a>
            <a
              href="https://linkedin.com/in/hassan-karasu-a7485336b"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 self-start inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider text-foreground bg-muted hover:bg-muted/80 border border-border rounded-sm px-2.5 py-1.5 transition-colors focus-visible:outline-none"
            >
              <span>Connect on LinkedIn</span>
              <Icon name="arrow_outward" size={13} />
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: 0.16, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-md border border-border bg-muted text-foreground">
              <Icon name="location_on" size={20} />
            </div>
            <h3 className="mt-6 font-display text-xl font-normal tracking-tight text-foreground">
              Location
            </h3>
            <p className="my-2.5 text-sm text-muted-foreground">
              Based in Casablanca, and happy to work remotely.
            </p>
            <span className="font-mono text-sm text-foreground">Casablanca, Morocco</span>
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
                <span className="font-display text-base font-normal tracking-tight text-foreground">
                  Hassan Karasu
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-mono">
                Bachelor&rsquo;s degree in Business Administration · FSJES Aïn Chock, Hassan II
                University of Casablanca
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
              <a href="#education" className="hover:text-foreground transition-colors">
                Education
              </a>
              <a href="#skills" className="hover:text-foreground transition-colors">
                Practice
              </a>
              <a href="#experience" className="hover:text-foreground transition-colors">
                Experience
              </a>
              <a href="#writing" className="hover:text-foreground transition-colors">
                Notes
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
