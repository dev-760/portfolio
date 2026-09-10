"use client";

import { useEffect, useState, useRef, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import profile from "@/data/profile";
import { showToast } from "@/components/Toast";

export const openCommandPalette = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  }
};

interface CommandItem {
  id: string;
  label: string;
  category: "Navigation" | "Social" | "Action";
  shortcut?: string;
  action: () => void;
}

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  const handleNav = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.assign(id === "home" ? "/" : `/#${id}`);
    }
    setIsOpen(false);
  };

  const handleOpenMail = () => {
    window.location.assign(`mailto:${profile.contact.email}`);
    setIsOpen(false);
  };

  // Define commands directly from profile
  const commands: CommandItem[] = [
    ...profile.navigation.map((item) => ({
      id: `nav-${item.id}`,
      label: `Go to ${item.label}`,
      category: "Navigation" as const,
      shortcut: "↵",
      action: () => handleNav(item.id),
    })),
    {
      id: "action-copy-email",
      label: `Copy email (${profile.contact.email})`,
      category: "Action" as const,
      shortcut: "C",
      action: async () => {
        try {
          await navigator.clipboard.writeText(profile.contact.email);
          showToast("Email copied to clipboard!", "success");
        } catch {
          showToast("Failed to copy email", "error");
        }
        setIsOpen(false);
      },
    },
    {
      id: "action-send-email",
      label: "Send email (Open mail client)",
      category: "Action" as const,
      shortcut: "M",
      action: handleOpenMail,
    },
    {
      id: "action-scroll-top",
      label: "Scroll to top",
      category: "Action" as const,
      shortcut: "↑",
      action: () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsOpen(false);
      },
    },
    ...profile.links.map((link) => ({
      id: `social-${link.label.toLowerCase()}`,
      label: `Open ${link.label}`,
      category: "Social" as const,
      shortcut: "↗",
      action: () => {
        window.open(link.href, "_blank", "noopener,noreferrer");
        setIsOpen(false);
      },
    })),
  ];

  const filtered = search.trim()
    ? commands.filter(
        (cmd) =>
          cmd.label.toLowerCase().includes(search.toLowerCase()) ||
          cmd.category.toLowerCase().includes(search.toLowerCase())
      )
    : commands;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setSearch("");
        setSelectedIndex(0);
      }
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleOpenEvent = () => {
      setIsOpen(true);
      setSearch("");
      setSelectedIndex(0);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleOpenEvent);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleOpenEvent);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (filtered.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
      }
    }
  };

  useEffect(() => {
    if (!resultsRef.current) return;
    const activeEl = resultsRef.current.querySelector<HTMLElement>(`[data-index="${selectedIndex}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Command Search"
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-xl rounded-2xl border border-[#e2e4ec] bg-white text-[#191c21] shadow-2xl overflow-hidden"
          >
            {/* Search Header */}
            <div className="flex items-center gap-3 border-b border-[#e2e4ec] px-4 py-3.5 bg-white">
              <svg
                className="h-4 w-4 text-[#837565] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                ref={inputRef}
                type="text"
                role="combobox"
                aria-expanded={isOpen}
                aria-autocomplete="list"
                aria-controls={listboxId}
                aria-activedescendant={filtered[selectedIndex] ? `cmd-${filtered[selectedIndex].id}` : undefined}
                placeholder="Type a command or search..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleInputKeyDown}
                className="w-full bg-transparent text-sm text-[#191c21] placeholder:text-[#837565]/60 focus:outline-none"
              />
              {search && (
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedIndex(0);
                  }}
                  className="text-xs text-[#514537] hover:text-[#191c21] px-1.5 py-0.5 rounded bg-[#f2f3fa] cursor-pointer"
                  aria-label="Clear search"
                >
                  Clear
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center rounded bg-[#f2f3fa] px-1.5 py-0.5 text-[11px] font-mono text-[#514537] border border-[#e2e4ec]">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div
              id={listboxId}
              role="listbox"
              aria-label="Commands"
              ref={resultsRef}
              className="max-h-[340px] overflow-y-auto p-2 divide-y divide-[#e2e4ec]/40"
            >
              {filtered.length > 0 ? (
                filtered.map((cmd, idx) => {
                  const isSelected = selectedIndex === idx;
                  return (
                    <div
                      key={cmd.id}
                      id={`cmd-${cmd.id}`}
                      role="option"
                      aria-selected={isSelected}
                      data-index={idx}
                      onClick={() => {
                        cmd.action();
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm cursor-pointer transition-colors ${
                        isSelected
                          ? "bg-[#f2f3fa] text-[#845400] font-semibold"
                          : "text-[#514537] hover:bg-[#f2f3fa]/60 hover:text-[#191c21]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-[#845400] flex items-center justify-center">
                          {cmd.category === "Action" ? (
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          ) : cmd.category === "Navigation" ? (
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          ) : (
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          )}
                        </span>
                        <span>{cmd.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold text-[#837565] tracking-wider px-2 py-0.5 rounded bg-white border border-[#e2e4ec]">
                          {cmd.category}
                        </span>
                        {cmd.shortcut && (
                          <kbd className="rounded px-1.5 py-0.5 font-mono text-[10px] border border-[#e2e4ec] bg-white text-[#514537]">
                            {cmd.shortcut}
                          </kbd>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="py-10 text-center text-sm text-[#514537]">
                  <p className="font-semibold text-[#191c21]">No results found</p>
                  <p className="text-xs text-[#837565] mt-1">
                    Try searching for &quot;About&quot;, &quot;Projects&quot;, or &quot;Email&quot;
                  </p>
                </div>
              )}
            </div>

            {/* Footer Help */}
            <div className="flex items-center justify-between border-t border-[#e2e4ec] bg-[#fbfbfe] px-4 py-2.5 text-xs text-[#514537]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="rounded bg-white border border-[#e2e4ec] px-1.5 py-0.5 text-[10px]">↑</kbd>
                  <kbd className="rounded bg-white border border-[#e2e4ec] px-1.5 py-0.5 text-[10px]">↓</kbd> navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded bg-white border border-[#e2e4ec] px-1.5 py-0.5 text-[10px]">↵</kbd> select
                </span>
              </div>
              <span>⌘K to toggle</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
