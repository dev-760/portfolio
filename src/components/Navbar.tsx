"use client";

import { useState, useCallback, memo, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { clsx } from "clsx";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Writing", href: "/blog" },
  { name: "Contact", href: "#contact" },
];

const NavLink = memo(({ link }: { link: typeof navLinks[0] }) => (
  <Link
    href={link.href}
    className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant hover:text-primary transition-all duration-200 relative group"
  >
    {link.name}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
  </Link>
));

NavLink.displayName = "NavLink";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-surface/95 backdrop-blur-lg border-b border-outline-variant/50 shadow-sm"
          : "bg-surface/90 backdrop-blur-md border-b border-outline-variant/30"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 90, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
          >
            <svg className="h-full w-full" fill="none" viewBox="0 0 48 48">
              <path
                clipRule="evenodd"
                d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </motion.div>
          <span className="text-sm sm:text-base font-bold tracking-tight text-on-surface">
            Hassan Karasu
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink key={link.name} link={link} />
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="#contact"
            className="hidden sm:inline-flex bg-primary hover:bg-secondary text-on-primary text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            Let&apos;s Talk
          </Link>
          
          <button
            className="flex size-10 sm:size-9 items-center justify-center rounded-lg md:hidden bg-surface-container hover:bg-surface-container-high transition-colors"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="material-symbols-outlined text-on-surface"
            >
              {isMobileMenuOpen ? "close" : "menu"}
            </motion.span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden border-b border-outline-variant bg-surface/95 backdrop-blur-lg overflow-hidden"
            role="menu"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block text-base font-medium text-on-surface-variant hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-surface-container"
                    role="menuitem"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="pt-4 border-t border-outline-variant/30"
              >
                <Link
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-primary-container hover:bg-primary text-on-primary text-sm font-semibold uppercase tracking-wider py-3 shadow-sm transition-all"
                  role="menuitem"
                >
                  Let&apos;s Talk
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
