"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { showToast } from "@/components/Toast";
import { Icon } from "@/components/icons/Icon";
import { MOTION_EASINGS, MOTION_DURATIONS } from "@/motion/tokens";

interface ArticleItem {
  id: string;
  category: "management" | "finance" | "operations" | "academics";
  categoryLabel: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
}

const allArticles: ArticleItem[] = [
  {
    id: "art-1",
    category: "operations",
    categoryLabel: "OPERATIONS",
    date: "SEP 24, 2026",
    readTime: "6 MIN READ",
    title: "Why Process Improvement Starts With Observation",
    description: "Before restructuring workflows or introducing new tools, spend dedicated time observing how work actually happens in real settings.",
  },
  {
    id: "art-2",
    category: "management",
    categoryLabel: "MANAGEMENT",
    date: "OCT 12, 2026",
    readTime: "5 MIN READ",
    title: "The First-Year Perspective: Connecting Theory with Practice",
    description: "How linking coursework in management and accounting to hands-on experience builds compound understanding and practical intuition.",
  },
  {
    id: "art-3",
    category: "finance",
    categoryLabel: "FINANCE",
    date: "NOV 02, 2026",
    readTime: "5 MIN READ",
    title: "Budgeting & Personal Finance for University Students",
    description: "Practical approaches to tracking daily student expenses, establishing category spending limits, and building long-term financial habits.",
  },
  {
    id: "art-4",
    category: "academics",
    categoryLabel: "ACADEMICS",
    date: "NOV 18, 2026",
    readTime: "4 MIN READ",
    title: "From Physical Science to Economics: Continuity of Analytical Thinking",
    description: "How an analytical foundation in high school physical science translates into quantitative reasoning for microeconomics, statistics, and business.",
  },
];

const categories = [
  { key: "all", label: "ALL", count: 4 },
  { key: "management", label: "MANAGEMENT", count: 1 },
  { key: "finance", label: "FINANCE", count: 1 },
  { key: "operations", label: "OPERATIONS", count: 1 },
  { key: "academics", label: "ACADEMICS", count: 1 },
] as const;

export function WritingSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredArticle, setHoveredArticle] = useState<string | null>(null);

  const filteredArticles = selectedCategory === "all"
    ? allArticles
    : allArticles.filter((item) => item.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      showToast("Subscribed to future dispatches!", "success");
      setNewsletterEmail("");
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  const handleReadEssayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    showToast("Full essay is being archived. In-depth edition publishing soon.", "info");
  };

  return (
    <section className="py-20 lg:py-24 border-b border-outline-variant/40 bg-surface scroll-mt-16" id="writing">
      <div className="max-w-7xl mx-auto px-6 space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-outline">
              05 — WRITING &amp; NOTES
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface mt-2">
              Ideas, Observations, and Academic Notes
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: MOTION_DURATIONS.standard }}
            className="text-sm text-outline max-w-sm"
          >
            Reflections exploring business administration, student productivity, and practical learning.
          </motion.p>
        </div>

        {/* ========================================================
            PART 1: Featured Flagship Essay Card
            ======================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
          className="border border-outline-variant/60 bg-surface-container-lowest rounded-xl p-6 sm:p-8 lg:p-10 shadow-xs hover:border-primary/60 transition-all duration-300"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="inline-block text-primary text-xs font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded bg-primary-fixed">
                  FEATURED ESSAY · 6 MIN READ
                </span>
                <span className="text-outline text-xs font-mono">SEP 2026</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-on-surface leading-tight tracking-tight hover:text-primary transition-colors">
                Understanding Systems Before Improving Them
              </h3>

              <p className="text-body-md sm:text-base text-on-surface-variant leading-relaxed">
                Why the instinctive urge to optimize processes often causes second-order chaos when the underlying behavioral feedback loops are misunderstood. A case for rigorous observation before restructuring.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3 w-full lg:w-auto pt-2 lg:pt-0">
              <button
                type="button"
                onClick={handleReadEssayClick}
                className="inline-flex items-center justify-center gap-2 rounded px-5 py-3 bg-primary-container hover:bg-primary text-on-primary text-xs font-semibold uppercase tracking-wider transition-all shadow-xs w-full lg:w-auto cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span>Read Essay</span>
                <Icon name="arrow_forward" size={16} />
              </button>
            </div>
          </div>
        </motion.article>

        {/* ========================================================
            PART 2: Interactive Category Filter Pills
            ======================================================== */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-outline">
              Filter by Discipline
            </span>
            <span className="text-xs font-mono text-outline">
              Showing {filteredArticles.length} of {allArticles.length} entries
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter essays by category">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  aria-pressed={isActive}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-primary text-on-primary shadow-xs"
                      : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`ml-1 font-mono text-[11px] ${isActive ? "opacity-80" : "opacity-60"}`}>
                    ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grid of Articles with Motion Transitions */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <AnimatePresence>
              {filteredArticles.map((article) => {
                const isHovered = hoveredArticle === article.id;
                return (
                  <motion.article
                    key={article.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.24, ease: MOTION_EASINGS.sharp }}
                    onMouseEnter={() => setHoveredArticle(article.id)}
                    onMouseLeave={() => setHoveredArticle(null)}
                    onClick={handleReadEssayClick}
                    className="flex flex-col justify-between p-6 sm:p-7 bg-surface-container-lowest border border-outline-variant/50 rounded-lg hover:border-primary/60 transition-all duration-200 shadow-2xs group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono mb-3">
                        <span className={`tracking-wider uppercase font-semibold ${
                          isHovered ? "text-primary" : "text-outline"
                        }`}>
                          {article.categoryLabel}
                        </span>
                        <span className="text-outline font-normal">
                          {article.date} · {article.readTime}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug mb-3">
                        {article.title}
                      </h4>

                      <p className="text-sm text-on-surface-variant leading-relaxed mb-6 font-normal">
                        {article.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary group-hover:text-secondary flex items-center gap-1">
                        <span>Read Note</span>
                        <motion.div
                          animate={{ x: isHovered ? 4 : 0 }}
                          transition={{ duration: 0.16 }}
                          className="inline-flex items-center"
                        >
                          <Icon name="arrow_forward" size={14} />
                        </motion.div>
                      </span>
                      <span className="text-[10px] font-mono text-outline">STUDENT NOTE</span>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ========================================================
            PART 3: Newsletter & Updates Component
            ======================================================== */}
        <div className="pt-6">
          <div className="p-8 sm:p-10 bg-surface-container border border-outline-variant/50 rounded-xl relative overflow-hidden">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2 text-primary font-semibold text-xs tracking-wider uppercase font-mono">
                <Icon name="mail" size={16} />
                <span>NEWSLETTER &amp; NOTES</span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-2">Subscribe to future notes</h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                Receive occasional reflections on business administration, student productivity, and lessons learned from projects and coursework. No spam, unsubscribe anytime.
              </p>

              {isSubscribed ? (
                <div className="p-4 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-sm font-semibold flex items-center gap-2">
                  <Icon name="verified" size={18} />
                  <span>Thank you. You have been subscribed to future notes.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-primary hover:bg-secondary text-on-primary text-sm font-semibold uppercase tracking-wider rounded transition-colors whitespace-nowrap cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Subscribe
                  </button>
                </form>
              )}

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-outline font-medium">
                <span className="flex items-center gap-1.5">
                  <Icon name="verified_user" size={14} />
                  Zero spam, unsubscribe anytime
                </span>
                <span>•</span>
                <span>Casablanca, Morocco</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WritingSection;
