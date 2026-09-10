"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { openCommandPalette } from "@/components/CommandPalette";

const KeyboardShortcuts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const shortcuts = [
    { key: "⌘K / Ctrl+K", description: "Open Command Palette" },
    { key: "ESC", description: "Close active modal or menu" },
    { key: "Tab", description: "Navigate focusable elements" },
    { key: "Enter / ↵", description: "Activate selected item" },
    { key: "↑ / ↓", description: "Navigate command items" },
  ];

  return (
    <>
      {/* Floating Shortcut Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="View keyboard shortcuts"
        title="Keyboard shortcuts"
        className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2 rounded-full bg-white border border-[#e2e4ec] hover:border-[#845400]/40 hover:bg-[#f2f3fa] text-[#514537] hover:text-[#191c21] px-3.5 py-1.5 text-xs font-medium cursor-pointer transition-all shadow-xs"
      >
        <span className="font-semibold text-[#845400]">[?]</span>
        <span>Shortcuts</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="shortcuts-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.15 }}
              className="relative w-full max-w-sm rounded-2xl border border-[#e2e4ec] bg-white shadow-2xl text-[#191c21] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#e2e4ec] px-5 py-4 bg-[#fbfbfe]">
                <h3 id="shortcuts-modal-title" className="text-sm font-bold text-[#191c21]">
                  Keyboard Shortcuts
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-1.5 text-[#514537] hover:bg-[#f2f3fa] hover:text-[#191c21] transition-colors cursor-pointer"
                  aria-label="Close shortcuts"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Shortcuts List */}
              <div className="divide-y divide-[#e2e4ec]/60 p-2">
                {shortcuts.map((shortcut, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[#f2f3fa] transition-colors"
                  >
                    <span className="text-xs text-[#514537]">{shortcut.description}</span>
                    <kbd className="rounded-md bg-[#f2f3fa] px-2 py-0.5 font-mono text-[11px] font-medium text-[#191c21] border border-[#e2e4ec]">
                      {shortcut.key}
                    </kbd>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 border-t border-[#e2e4ec] bg-[#fbfbfe] p-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openCommandPalette();
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#191c21] hover:bg-[#845400] text-white px-3 py-2.5 text-xs font-semibold transition-colors cursor-pointer shadow-xs"
                >
                  <span>Open Command Palette</span>
                  <span className="text-[10px] text-white/70">[⌘K]</span>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded-xl border border-[#e2e4ec] bg-white hover:bg-[#f2f3fa] px-3 py-2 text-xs font-medium text-[#514537] hover:text-[#191c21] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default KeyboardShortcuts;
