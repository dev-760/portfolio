"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KeyboardShortcuts = () => {
    const [isOpen, setIsOpen] = useState(false);

    const shortcuts = [
        { key: "⌘K", description: "Open command palette" },
        { key: "ESC", description: "Close any modal" },
        { key: "Scroll", description: "Watch the progress bar" },
        { key: "Click email", description: "Copy email to clipboard" },
    ];

    return (
        <>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 left-8 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-white text-sm font-semibold backdrop-blur"
                title="Keyboard shortcuts"
            >
                ⌨️
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm"
                        >
                            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0306]/95 shadow-2xl backdrop-blur-xl">
                                {/* Header */}
                                <div className="border-b border-white/10 p-6">
                                    <h3 className="text-lg font-semibold text-white">
                                        Keyboard Shortcuts
                                    </h3>
                                </div>

                                {/* Shortcuts */}
                                <div className="space-y-2 p-4">
                                    {shortcuts.map((shortcut, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-white/5 transition-colors"
                                        >
                                            <span className="text-sm text-white/70">
                                                {shortcut.description}
                                            </span>
                                            <kbd className="rounded bg-white/10 px-2 py-1 text-xs font-medium text-white/80 border border-white/20">
                                                {shortcut.key}
                                            </kbd>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="border-t border-white/10 bg-black/20 px-6 py-3">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsOpen(false)}
                                        className="w-full rounded-lg bg-white/10 hover:bg-white/20 px-3 py-2 text-sm font-medium text-white transition-all"
                                    >
                                        Close (ESC)
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default KeyboardShortcuts;
