"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

const Stats = () => {
    const stats = [
        {
            value: "5+",
            label: "Years Cybersecurity Interest",
            icon: "◆",
        },
        {
            value: "100%",
            label: "True Positive Rate Achieved",
            icon: "✓",
        },
        {
            value: "2",
            label: "Open Source Projects",
            icon: "◇",
        },
        {
            value: "3",
            label: "National-Level Competitions",
            icon: "△",
        },
    ];

    return (
        <Section id="stats" title="By The Numbers">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 backdrop-blur transition-all duration-300 hover:border-white/20 hover:shadow-[0_15px_50px_rgba(123,93,255,0.12)]"
                    >
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7b5dff]/0 to-[#af8cff]/0 group-hover:from-[#7b5dff]/5 group-hover:to-[#af8cff]/5 transition-all duration-300 pointer-events-none" />

                        <div className="relative space-y-3">
                            <div className="text-3xl">{stat.icon}</div>
                            <motion.div
                                initial={{ scale: 0.9 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                                className="text-4xl font-bold text-white"
                            >
                                {stat.value}
                            </motion.div>
                            <p className="text-sm text-white/70 group-hover:text-white/80 transition-colors">
                                {stat.label}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Stats;
