"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import profile from "@/data/profile";

const About = () => {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex-1 space-y-4">
          {profile.sections.about.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-white/80 leading-relaxed hover:text-white transition-colors"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 text-sm text-white/70 hover:border-white/20 transition-all duration-300 hover:shadow-[0_15px_50px_rgba(123,93,255,0.1)]"
        >
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-white/50 font-medium">
              Languages
            </p>
            <ul className="space-y-2">
              {profile.languages.map((language) => (
                <motion.li
                  key={language.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 group/lang"
                >
                  <span className="block h-1.5 w-1.5 rounded-full bg-white/40 group-hover/lang:bg-[#7b5dff] transition-colors" />
                  <div>
                    <span className="font-semibold text-white group-hover/lang:text-[#af8cff] transition-colors">
                      {language.name}
                    </span>{" "}
                    <span className="text-xs text-white/50">– {language.level}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/10 group-hover:border-white/20 transition-colors pt-4">
            <p className="text-xs uppercase tracking-[0.5em] text-white/50 font-medium mb-3">
              Currently in
            </p>
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="text-lg font-semibold text-white"
            >
              {profile.location}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
