"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "@/data/profile";
import { scrollToSection } from "@/utils/scroll";

const CommandPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const listRef = useRef<HTMLDivElement>(null);

    const commands = [
        ...profile.navigation.map((item) => ({
            id: item.id,
            label: item.label,
            category: "Navigation",
            action: () => {
                scrollToSection(item.id);
                setIsOpen(false);
            },
        })),
        ...profile.links.map((link) => ({
            id: link.label,
            label: link.label,
            category: "Social",
            action: () => {
                window.open(link.href, "_blank");
                setIsOpen(false);
            },
        })),
    ];

    const filtered = search
        ? commands.filter(
            (cmd) =>
                cmd.label.toLowerCase().includes(search.toLowerCase()) ||
                cmd.category.toLowerCase().includes(search.toLowerCase())
        )
        : commands;

    // Reset selected index when search changes
    useEffect(() => {
        setSelectedIndex(0);
    }, [search]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen((prev) => !prev);
                setSearch("");
                setSelectedIndex(0);
                return;
            }

            if (!isOpen) return;

            switch (e.key) {
                case "Escape":
                    e.preventDefault();
                    setIsOpen(false);
                    break;
                case "ArrowDown":
                    e.preventDefault();
                    setSelectedIndex((prev) => (prev + 1) % filtered.length);
                    break;
                case "ArrowUp":
                    e.preventDefault();
                    setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
                    break;
                case "Enter":
                    e.preventDefault();
                    if (filtered[selectedIndex]) {
                        filtered[selectedIndex].action();
                    }
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, filtered, selectedIndex]);

    // Scroll selected item into view
    useEffect(() => {
        if (isOpen && listRef.current) {
            const selectedElement = listRef.current.children[selectedIndex] as HTMLElement;
            if (selectedElement) {
                selectedElement.scrollIntoView({ block: "nearest" });
            }
        }
    }, [selectedIndex, isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                        aria-hidden="true"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md pointer-events-auto"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Command Palette"
                    >
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0306]/95 shadow-2xl backdrop-blur-xl">
                            {/* Search Input */}
                            <div className="border-b border-white/10 p-4">
                                <input
                                    type="text"
                                    placeholder="Type to search... (⌘K to close)"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    autoFocus
                                    className="w-full bg-transparent text-white placeholder:text-white/40 outline-none text-sm"
                                    role="combobox"
                                    aria-expanded="true"
                                    aria-controls="command-palette-options"
                                    aria-activedescendant={filtered[selectedIndex]?.id}
                                />
                            </div>

                            {/* Results */}
                            <div 
                                className="max-h-[400px] overflow-y-auto p-2"
                                role="listbox"
                                id="command-palette-options"
                                ref={listRef}
                            >
                                {filtered.length > 0 ? (
                                    <div className="space-y-1">
                                        {filtered.map((cmd, idx) => (
                                            <motion.button
                                                key={cmd.id}
                                                id={cmd.id}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.02 }}
                                                onClick={() => {
                                                    setSelectedIndex(idx);
                                                    cmd.action();
                                                }}
                                                onMouseMove={() => setSelectedIndex(idx)}
                                                className={`group w-full rounded-lg px-3 py-2 text-left text-sm transition-all flex items-center justify-between ${
                                                    selectedIndex === idx
                                                        ? "bg-white/10 text-white"
                                                        : "text-white/70 hover:bg-white/5 hover:text-white"
                                                }`}
                                                role="option"
                                                aria-selected={selectedIndex === idx}
                                            >
                                                <span>{cmd.label}</span>
                                                <span className="text-xs text-white/40 font-medium">
                                                    {cmd.category}
                                                </span>
                                            </motion.button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="px-4 py-8 text-center text-sm text-white/50">
                                        No commands found
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="border-t border-white/10 bg-black/20 px-4 py-3 text-xs text-white/50 flex items-center justify-between">
                                <span>Tip: Use ↑↓ to navigate, Enter to select</span>
                                <span>ESC to close</span>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
