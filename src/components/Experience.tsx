"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import profile from "@/data/profile";

const Experience = () => {
  const experience = profile.sections.experience;

  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 backdrop-blur transition-all duration-300 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(123,93,255,0.1)]"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7b5dff]/0 to-[#af8cff]/0 group-hover:from-[#7b5dff]/5 group-hover:to-[#af8cff]/5 transition-all duration-300 pointer-events-none" />

            <div className="relative space-y-4">
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                  <p className="text-xl sm:text-2xl font-semibold text-white group-hover:text-[#af8cff] transition-colors">
                    {exp.role}
                  </p>
                  <p className="text-xs sm:text-sm text-white/60 shrink-0 font-medium">
                    {exp.dates}
                  </p>
                </div>
                <p className="text-sm text-white/60">
                  {exp.organizationLink ? (
                    <a
                      href={exp.organizationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white hover:underline transition-colors"
                    >
                      {exp.organization}
                    </a>
                  ) : (
                    exp.organization
                  )}
                  {exp.location ? ` · ${exp.location}` : ""}
                </p>
              </div>

              {exp.bullets.length === 1 ? (
                <div className="border-t border-white/10 pt-4 group-hover:border-white/20 transition-colors">
                  <p className="text-sm text-white/75 leading-relaxed">
                    {exp.bullets[0]}
                  </p>
                </div>
              ) : (
                <ul className="space-y-3 border-t border-white/10 pt-4 group-hover:border-white/20 transition-colors">
                  {exp.bullets.map((bullet, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="flex gap-3 text-sm text-white/75 group-hover:text-white/85 transition-colors"
                    >
                      <span className="mt-1 inline-flex h-2 w-3 shrink-0 rounded-full bg-[#7b5dff]/60 group-hover:bg-[#af8cff]/80" />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              )}

              {exp.closing && (
                <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                  {exp.closing}
                </p>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
