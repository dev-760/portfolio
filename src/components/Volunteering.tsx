"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import profile from "@/data/profile";

const Volunteering = () => {
  const volunteering = profile.sections.volunteering;

  return (
    <Section id="volunteering" title="Volunteering">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 backdrop-blur transition-all duration-300 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(123,93,255,0.1)]"
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7b5dff]/0 to-[#af8cff]/0 group-hover:from-[#7b5dff]/5 group-hover:to-[#af8cff]/5 transition-all duration-300 pointer-events-none" />

        <div className="relative space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.5em] text-white/50 font-medium">
              Organization
            </p>
            <p className="text-white/90">
              {volunteering.organizationLink ? (
                <a
                  href={volunteering.organizationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#af8cff] transition-colors hover:underline"
                >
                  {volunteering.organization}
                </a>
              ) : (
                volunteering.organization
              )}
            </p>
          </div>

          <div>
            <p className="text-xl sm:text-2xl font-semibold text-white group-hover:text-[#af8cff] transition-colors">
              {volunteering.role}
            </p>
            <p className="text-sm text-white/60 font-medium mt-1">{volunteering.dates}</p>
          </div>

          <ul className="space-y-3 border-t border-white/10 group-hover:border-white/20 transition-colors pt-4">
            {volunteering.bullets.map((bullet, index) => (
              <motion.li
                key={bullet}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-3 text-sm text-white/75 group-hover:text-white/85 transition-colors"
              >
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#7b5dff]/70 group-hover:bg-[#af8cff]/90 transition-colors shrink-0" />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>

          {volunteering.closing && (
            <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors pt-2">
              {volunteering.closing}
            </p>
          )}
        </div>
      </motion.div>
    </Section>
  );
};

export default Volunteering;
