"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "@/data/profile";

const CommandPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen((prev) => !prev);
                setSearch("");
            }
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const commands = [
        ...profile.navigation.map((item) => ({
            id: item.id,
            label: item.label,
            category: "Navigation",
            action: () => {
                const element = document.getElementById(item.id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                } else {
                    window.location.href = item.id === "home" ? "/" : `/#${item.id}`;
                }
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

    return (
        <>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                />
            )}

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={
                    isOpen
                        ? { opacity: 1, scale: 1, y: 0 }
                        : { opacity: 0, scale: 0.95, y: -20 }
                }
                transition={{ duration: 0.2 }}
                className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md ${isOpen ? "pointer-events-auto" : "pointer-events-none"
                    }`}
            >
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0306]/95 shadow-2xl backdrop-blur-xl">
                    {/* Search Input */}
                    <div className="border-b border-white/10 p-4">
                        <input
                            type="text"
                            placeholder="Type to search... (⌘K to toggle)"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            autoFocus
                            className="w-full bg-transparent text-white placeholder:text-white/40 outline-none text-sm"
                        />
                    </div>

                    {/* Results */}
                    <div className="max-h-[400px] overflow-y-auto">
                        {filtered.length > 0 ? (
                            <div className="space-y-1 p-2">
                                {filtered.map((cmd, idx) => (
                                    <motion.button
                                        key={cmd.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.02 }}
                                        onClick={cmd.action}
                                        className="group w-full rounded-lg px-3 py-2 text-left text-sm text-white/70 hover:bg-white/10 hover:text-white transition-all flex items-center justify-between"
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
                        <span>Tip: Use ⌘K or Ctrl+K to toggle</span>
                        <span>ESC to close</span>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default CommandPalette;
