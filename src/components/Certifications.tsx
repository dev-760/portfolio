"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

const Certifications = () => {
    const certifications = [
        {
            title: "Hack The Box (HTB) – Active",
            issuer: "Hack The Box",
            date: "Ongoing",
            skills: ["Offensive Security"],
        },
        {
            title: "TryHackMe – Active",
            issuer: "TryHackMe",
            date: "Ongoing",
            skills: ["Security Tools"],
        },
        {
            title: "National Robotics Olympiad – Finalist",
            issuer: "General Directorate of Education",
            date: "2022",
            skills: ["Problem Solving"],
        },
    ];

    return (
        <Section id="certifications" title="Certifications & Achievements">
            <div className="grid gap-4 lg:grid-cols-2">
                {certifications.map((cert, index) => (
                    <motion.article
                        key={cert.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur hover:border-white/20 transition-all duration-300"
                    >
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7b5dff]/0 to-[#af8cff]/0 group-hover:from-[#7b5dff]/5 group-hover:to-[#af8cff]/5 transition-all duration-300 pointer-events-none" />

                        {/* Badge */}
                        <div className="absolute top-4 right-4">
                            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70 group-hover:bg-white/15 transition-colors">
                                {index < 2 ? "🔄 Active" : "✓ Complete"}
                            </span>
                        </div>

                        <div className="relative z-10 space-y-2">
                            <h3 className="text-lg font-semibold text-white leading-tight pr-20">
                                {cert.title}
                            </h3>
                            <p className="text-sm text-white/60">{cert.issuer}</p>
                            <p className="text-xs text-white/40">{cert.date}</p>

                            <div className="pt-3 flex flex-wrap gap-2">
                                {cert.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/60 border border-white/10 group-hover:border-white/20 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </Section>
    );
};

export default Certifications;
