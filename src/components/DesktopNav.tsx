"use client";

import React from "react";
import { motion } from "framer-motion";

interface DesktopNavProps {
  navLinks: { name: string; href: string }[];
  activeSection: string;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function DesktopNav({ navLinks, activeSection, onNavClick }: DesktopNavProps) {
  return (
    <nav
      aria-label="Primary navigation"
      className="relative flex items-center p-1 rounded-full bg-muted/60 dark:bg-muted/40 border border-border/80 backdrop-blur-md shadow-xs"
    >
      {navLinks.map((link) => {
        const key = link.name.toLowerCase();
        let isActive = false;
        if (key === activeSection || link.href === `#${activeSection}`) isActive = true;
        if (key === "work" && (activeSection === "work" || activeSection === "pillars")) {
          isActive = true;
        }

        return (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => onNavClick(e, link.href)}
            aria-current={isActive ? "page" : undefined}
            className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground select-none ${
              isActive
                ? "text-background font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="desktop-active-pill"
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 32,
                }}
                className="absolute inset-0 bg-foreground rounded-full shadow-xs -z-0"
              />
            )}
            <span className="relative z-10">{link.name}</span>
          </a>
        );
      })}
    </nav>
  );
}

export default DesktopNav;
