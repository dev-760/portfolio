"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], defaultSection: string = "") {
  const [activeSection, setActiveSection] = useState<string>(defaultSection);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Check if user is at the top of the page
        if (scrollPosition < 80 && sectionIds.length > 0) {
          setActiveSection(sectionIds[0]);
          ticking = false;

          return;
        }

        // Check if user is at the bottom of the page
        if (scrollPosition + windowHeight >= documentHeight - 60 && sectionIds.length > 0) {
          setActiveSection(sectionIds[sectionIds.length - 1]);
          ticking = false;

          return;
        }

        // Otherwise find the section that currently intersects the viewing threshold
        const headerOffset = 100;
        let currentSection = activeSection;

        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const id = sectionIds[i];
          const element = document.getElementById(id);

          if (element) {
            const rect = element.getBoundingClientRect();

            if (rect.top <= headerOffset + 60) {
              currentSection = id;
              break;
            }
          }
        }

        if (currentSection) {
          setActiveSection(currentSection);
        }

        ticking = false;
      });
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Support direct hash navigation
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (hash && sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener("hashchange", handleHash);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHash);
    };
  }, [sectionIds, defaultSection, activeSection]);

  return [activeSection, setActiveSection] as const;
}
