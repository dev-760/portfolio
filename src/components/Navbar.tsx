"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { useActiveSection } from "@/motion/useActiveSection";
import { MOTION_EASINGS } from "@/motion/tokens";
import { ThemeToggle } from "@/components/ThemeToggle";
import { DesktopNav } from "@/components/DesktopNav";
import { Icon } from "@/components/icons/Icon";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Studies", href: "#work" },
  { name: "Tools", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Notes", href: "#writing" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const [activeSection] = useActiveSection(
    ["home", "about", "work", "skills", "experience", "writing", "contact"],
    "home"
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  // Escape closes the menu and returns focus to the trigger. Tab is trapped
  // inside the drawer so focus cannot reach the obscured page behind it.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const drawer = drawerRef.current;
    drawer?.querySelector<HTMLElement>(focusableSelector)?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (e.key !== "Tab" || !drawer) return;

      const items = Array.from(drawer.querySelectorAll<HTMLElement>(focusableSelector));
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Returning focus on close is handled above for Escape; this covers the
  // click-outside and link-click paths, where the event target is not focused.
  useEffect(() => {
    if (!mobileMenuOpen) menuButtonRef.current?.focus({ preventScroll: true });
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLElement>, href: string) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
        setMobileMenuOpen(false);
      }
    },
    []
  );

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xs focus:bg-foreground focus:px-4 focus:py-2 focus:text-background focus:text-xs focus:font-semibold focus:uppercase focus:tracking-wider"
      >
        Skip to content
      </a>
      <motion.header
        className={clsx(
          "sticky top-0 z-50 transition-colors duration-300 border-b",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-border"
            : "bg-background border-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          {/* Text wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-display text-base font-normal tracking-tight text-foreground cursor-pointer"
          >
            Hassan Karasu
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center">
            <DesktopNav
              navLinks={navLinks}
              activeSection={activeSection}
              onNavClick={handleNavClick}
            />
          </div>

          {/* Controls: Theme Toggle + Mobile Menu Trigger */}
          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden relative size-11 rounded-full flex items-center justify-center text-foreground hover:bg-muted border border-border transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              ref={menuButtonRef}
            >
              {mobileMenuOpen ? (
                <Icon name="close" size={18} />
              ) : (
                <Icon name="menu" size={18} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-background flex flex-col pt-20 px-6 pb-8"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25, ease: MOTION_EASINGS.sharp }}
              onClick={(e) => e.stopPropagation()}
              ref={drawerRef}
              id="mobile-menu"
              className="flex flex-col justify-between flex-1 max-w-sm mx-auto w-full pt-4"
            >
              {/* Navigation Links */}
              <nav
                className="flex flex-col gap-1"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link) => {
                  // Match on href so visible labels can differ from section ids.
                  const isActive = link.href === `#${activeSection}`;

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      aria-current={isActive ? "true" : undefined}
                      className={`flex min-h-11 items-center justify-between px-4 py-3 rounded-md text-base font-medium transition-colors ${isActive
                        ? "bg-foreground text-background font-semibold"
                        : "text-foreground hover:bg-muted"
                        }`}
                    >
                      <span>{link.name}</span>
                      {isActive ? (
                        <span className="text-xs uppercase tracking-widest font-mono text-background/80">
                          Active
                        </span>
                      ) : null}
                    </a>
                  );
                })}
              </nav>

              {/* Mobile Quick Action Footer */}
              <div className="pt-6 border-t border-border">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 bg-foreground text-background text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Icon name="mail" size={15} />
                  <span>Email me</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
