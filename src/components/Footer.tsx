"use client";

import { motion } from "framer-motion";
import profile from "@/data/profile";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative border-t border-white/10 bg-gradient-to-b from-transparent via-[#0a0306]/50 to-[#050208] py-12 sm:py-16"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col gap-3"
                    >
                        <div className="flex items-center gap-2">
                            <span className="h-4 w-5 rounded-md bg-white/70" />
                            <span className="h-4 w-3 rounded-full border border-white/50" />
                        </div>
                        <p className="text-sm font-medium text-white">{profile.name}</p>
                        <p className="text-xs text-white/50">{profile.location}</p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col gap-3"
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                            Navigate
                        </p>
                        <ul className="space-y-2 text-sm text-white/60">
                            {profile.navigation.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={item.href}
                                        className="transition-colors hover:text-white"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col gap-3"
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                            Connect
                        </p>
                        <ul className="space-y-2 text-sm text-white/60">
                            {profile.links.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col gap-3"
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                            Contact
                        </p>
                        <ul className="space-y-2 text-sm text-white/60">
                            <li>
                                <a
                                    href={`mailto:${profile.contact.email}`}
                                    className="transition-colors hover:text-white"
                                >
                                    Email
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
                        <p>© {year} {profile.name}. All rights reserved.</p>
                        <p>Crafted with intention and shipped with care.</p>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
