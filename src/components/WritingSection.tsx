"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { showToast } from "@/components/Toast";
import { Icon } from "@/components/icons/Icon";

import {
  getMonographs,
  getFeaturedMonograph,
  fallbackMonographs,
  fallbackFeaturedMonograph,
  isSanityConfigured,
  type MonographData,
  type MonographSection,
} from "@/sanity/lib/client";

export type ArticleItem = MonographData;
export type ArticleContentSection = MonographSection;

export interface WritingSectionProps {
  initialMonographs?: MonographData[];
  initialFeaturedMonograph?: MonographData;
}

export function WritingSection({
  initialMonographs,
  initialFeaturedMonograph,
}: WritingSectionProps = {}) {
  const [featuredEssay, setFeaturedEssay] = useState<ArticleItem>(
    initialFeaturedMonograph || fallbackFeaturedMonograph
  );
  const [noteArticles, setNoteArticles] = useState<ArticleItem[]>(
    initialMonographs || fallbackMonographs
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalArticle, setActiveModalArticle] = useState<ArticleItem | null>(null);
  const [hoveredArticle, setHoveredArticle] = useState<string | null>(null);

  useEffect(() => {
    if (isSanityConfigured) {
      getMonographs().then((data) => {
        if (data && data.length > 0) {
          setNoteArticles(data);
        }
      });
      getFeaturedMonograph().then((data) => {
        if (data) {
          setFeaturedEssay(data);
        }
      });
    }
  }, []);

  const handleOpenArticle = useCallback((article: ArticleItem) => {
    setActiveModalArticle(article);
    window.history.pushState({ modalOpen: true, slug: article.slug }, "", `#essay-${article.slug}`);
  }, []);

  const handleCloseModal = useCallback(() => {
    setActiveModalArticle(null);
    if (window.location.hash.startsWith("#essay-")) {
      window.history.pushState(null, "", "#writing");
    }
  }, []);

  // Keyboard accessibility: Escape closes modal
  useEffect(() => {
    if (!activeModalArticle) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalArticle, handleCloseModal]);

  // Sync browser back button with modal state
  useEffect(() => {
    const handlePopState = () => {
      setActiveModalArticle(null);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const filteredNoteArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return noteArticles;

    return noteArticles.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        item.categoryLabel.toLowerCase().includes(query)
    );
  }, [searchQuery, noteArticles]);

  const handleCopyArticleLink = useCallback((article: ArticleItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const url = `${window.location.origin}/#writing-${article.slug}`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        showToast("Monograph link copied to clipboard", "success");
      });
    } else {
      showToast("Link copied: " + url, "info");
    }
  }, []);

  return (
    <section
      className="section border-b border-border bg-surface scroll-mt-16 relative"
      id="writing"
    >
      <div className="container space-y-16">
        {/* ========================================================
            SECTION HEADER
            ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-normal tracking-tight text-foreground">
              Notes
            </h2>
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex flex-col items-start md:items-end gap-1.5 text-sm text-muted-foreground max-w-sm"
          >
            <p className="leading-relaxed">
              Things I write down when a subject, problem, or idea stays with me longer than the
              lecture does.
            </p>
          </motion.div>
        </div>

        {/* ========================================================
            PART 1: FEATURED FLAGSHIP ESSAY CARD
            ======================================================== */}
        <motion.article
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative group bg-surface border border-border hover:border-primary/30 rounded-sm p-8 lg:p-10 transition-all duration-300 overflow-hidden cursor-pointer"
          onClick={() => handleOpenArticle(featuredEssay)}
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="space-y-5 max-w-3xl">
              {/* Metadata row */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-widest uppercase px-2 py-0.5 rounded-sm bg-primary text-on-primary">
                  <Icon name="sparkles" size={13} />
                  FEATURED
                </span>
                <span className="text-muted-foreground text-xs">
                  {featuredEssay.date} · {featuredEssay.readTime}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-normal text-foreground leading-[1.1] tracking-tight group-hover:text-primary transition-colors">
                  {featuredEssay.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mt-4 leading-relaxed">
                  {featuredEssay.description}
                </p>
              </div>

              {/* Core Thesis Highlight Quote Box */}
              <div className="pl-4 border-l border-primary text-foreground text-sm sm:text-base italic leading-relaxed py-2 mt-2">
                <span className="text-[10px] font-medium not-italic uppercase tracking-widest text-muted-foreground block mb-1">
                  Core Thesis
                </span>
                &ldquo;{featuredEssay.thesis}&rdquo;
              </div>
            </div>

            {/* Action buttons */}
            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto pt-2 lg:pt-0">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenArticle(featuredEssay);
                }}
                className="inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 bg-foreground hover:bg-foreground/90 text-background text-xs font-semibold uppercase tracking-widest transition-all cursor-pointer focus-visible:outline-none w-full lg:w-48"
              >
                <span>Read Essay</span>
                <Icon name="arrow_forward" size={16} />
              </button>

              <button
                type="button"
                onClick={(e) => handleCopyArticleLink(featuredEssay, e)}
                className="inline-flex items-center justify-center gap-2 rounded-sm px-4 py-3 bg-surface hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-widest transition-colors border border-border cursor-pointer focus-visible:outline-none w-full lg:w-48"
              >
                <Icon name="share" size={14} />
                <span>Share</span>
              </button>
            </div>
          </div>
        </motion.article>

        {/* ========================================================
            PART 2: NOTE SEARCH
            ======================================================== */}
        <div className="space-y-8 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Other Notes
            </h3>

            {/* Keyword Search Input */}
            <div className="relative w-full sm:w-64">
              <label htmlFor="notes-search" className="sr-only">
                Search notes by title, summary, or tag
              </label>
              <Icon
                name="search"
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <input
                id="notes-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search notes"
                className="w-full pl-9 pr-8 py-2 rounded-sm bg-surface border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear note search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5 cursor-pointer"
                >
                  <Icon name="close" size={14} />
                </button>
              )}
            </div>
          </div>

          {filteredNoteArticles.length === 0 && (
            <div className="border border-border bg-card p-8 text-center">
              <p className="text-sm text-foreground font-medium">No notes match &ldquo;{searchQuery.trim()}&rdquo;.</p>
              <p className="text-sm text-muted-foreground mt-2">
                Clear the search to see all {noteArticles.length + 1} notes.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mt-4 inline-flex items-center justify-center rounded-sm px-4 py-2 bg-foreground hover:bg-foreground/90 text-background text-xs font-semibold uppercase tracking-widest cursor-pointer"
              >
                Clear search
              </button>
            </div>
          )}

          {/* Grid of Articles */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 pt-2">
            <AnimatePresence>
              {filteredNoteArticles.map((article) => {
                const isHovered = hoveredArticle === article.id;

                return (
                  <motion.article
                    key={article.id}
                    layout
                    initial={false}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => setHoveredArticle(article.id)}
                    onMouseLeave={() => setHoveredArticle(null)}
                    onClick={() => handleOpenArticle(article)}
                    className="flex flex-col justify-between p-6 sm:p-8 bg-surface border border-border hover:border-primary/30 rounded-sm transition-colors group cursor-pointer"
                  >
                    <div>
                      {/* Top metadata */}
                      <div className="flex items-center justify-between text-xs mb-4">
                        <span className="text-muted-foreground">
                          {article.date} · {article.readTime}
                        </span>
                      </div>

                      {/* Title & Abstract */}
                      <h4 className="text-lg sm:text-xl font-display font-normal text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                        {article.title}
                      </h4>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {article.description}
                      </p>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-[10px] font-medium uppercase tracking-widest text-foreground group-hover:text-primary flex items-center gap-1.5 transition-colors">
                        <span>Read Note</span>
                        <motion.div
                          animate={{ x: isHovered ? 4 : 0 }}
                          transition={{ duration: 0.16 }}
                          className="inline-flex items-center"
                        >
                          <Icon name="arrow_forward" size={14} />
                        </motion.div>
                      </span>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ========================================================
            PART 3: ACADEMIC EXCHANGE & MONOGRAPH CORRESPONDENCE
            ======================================================== */}
        <div className="pt-6">
          <div className="p-6 sm:p-10 bg-surface border border-border rounded-sm relative overflow-hidden">
            <div className="max-w-2xl relative">
              <h3 className="text-2xl sm:text-3xl font-display font-normal text-foreground mb-3 tracking-tight">
                Have Something to Add?
              </h3>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                These notes are written while I&rsquo;m still learning, so I expect some of them to
                change. If you&rsquo;ve worked with these subjects or problems longer than I have,
                I&rsquo;m interested in hearing another way of looking at them.
              </p>

              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href="#contact"
                  className="w-full justify-center px-6 py-3 bg-foreground hover:bg-foreground/90 text-background text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors whitespace-nowrap cursor-pointer inline-flex items-center gap-2 focus-visible:outline-none sm:w-auto"
                >
                  <Icon name="mail" size={15} />
                  <span>Get in Touch</span>
                </a>
                <a
                  href="https://linkedin.com/in/hassan-karasu-a7485336b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center px-6 py-3 bg-surface hover:bg-muted border border-border text-foreground text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors whitespace-nowrap cursor-pointer inline-flex items-center gap-2 focus-visible:outline-none sm:w-auto"
                >
                  <Icon name="share" size={15} />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 4: INTERACTIVE FULL ARTICLE READER MODAL
            ======================================================== */}
        <AnimatePresence>
          {activeModalArticle && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-sm overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-article-title"
              onClick={handleCloseModal}
            >
              <motion.div
                initial={false}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-3xl bg-surface border border-border rounded-sm overflow-hidden my-auto max-h-[90vh] flex flex-col"
              >
                {/* Modal Top Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface shrink-0">
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground text-xs">
                      {activeModalArticle.date} · {activeModalArticle.readTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleCopyArticleLink(activeModalArticle)}
                      className="p-2 rounded-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                      title="Copy link"
                    >
                      <Icon name="share" size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="p-2 rounded-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                      title="Close (Esc)"
                    >
                      <Icon name="close" size={18} />
                    </button>
                  </div>
                </div>

                {/* Modal Scrollable Article Body */}
                <div className="px-6 sm:px-10 py-10 overflow-y-auto space-y-8">
                  {/* Article Title & Byline */}
                  <div className="space-y-4 border-b border-border pb-8">
                    <h3
                      id="modal-article-title"
                      className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-foreground tracking-tight leading-[1.1]"
                    >
                      {activeModalArticle.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-mono">
                      <span>By Hassan Karasu</span>
                      <span>·</span>
                      <span>Business Administration Student</span>
                    </div>
                  </div>

                  {/* Core Thesis / Abstract */}
                  <div className="pl-4 border-l-2 border-primary text-foreground">
                    <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground block mb-2">
                      Thesis
                    </span>
                    <p className="text-sm sm:text-base italic leading-relaxed">
                      &ldquo;{activeModalArticle.thesis}&rdquo;
                    </p>
                  </div>

                  {/* Key Takeaways */}
                  {activeModalArticle.keyTakeaways && (
                    <div className="p-6 bg-muted border border-border rounded-md space-y-3">
                      <span className="text-[10px] font-medium uppercase tracking-widest text-foreground block mb-2">
                        Core Insights &amp; Principles:
                      </span>
                      <ul className="space-y-2 text-sm text-muted-foreground list-none pl-0">
                        {activeModalArticle.keyTakeaways.map((takeaway, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1 w-1 h-1 rounded-full bg-primary shrink-0" />
                            <span className="leading-relaxed">{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Article Intro */}
                  {activeModalArticle.intro && (
                    <div className="space-y-4">
                      {activeModalArticle.intro.map((p, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Multi-Section Article Prose */}
                  <div className="space-y-8">
                    {activeModalArticle.sections.map((section, idx) => (
                      <div key={idx} className="space-y-4">
                        <h4 className="text-xl sm:text-2xl font-display font-normal text-foreground tracking-tight">
                          {section.heading}
                        </h4>
                        {section.paragraphs.map((p, pIdx) => (
                          <p
                            key={pIdx}
                            className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                          >
                            {p}
                          </p>
                        ))}
                        {section.bullets && (
                          <ul className="space-y-2 text-sm sm:text-base text-muted-foreground list-none pl-0">
                            {section.bullets.map((b, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                                <span className="leading-relaxed">{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {section.trailing && (
                          <>
                            {section.trailing.map((p, tIdx) => (
                              <p
                                key={tIdx}
                                className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                              >
                                {p}
                              </p>
                            ))}
                          </>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Academic Context Footnote */}
                  {activeModalArticle.academicContext && (
                    <div className="pt-8 border-t border-border text-xs text-muted-foreground space-y-1">
                      <p className="font-medium text-foreground">Academic Citation &amp; Context:</p>
                      <p>{activeModalArticle.academicContext}</p>
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="px-6 py-4 border-t border-border bg-surface flex items-center justify-between shrink-0">
                  <button
                    type="button"
                    onClick={() => handleCopyArticleLink(activeModalArticle)}
                    className="inline-flex items-center gap-1.5 text-[10px] font-medium text-foreground hover:text-primary uppercase tracking-widest cursor-pointer transition-colors"
                  >
                    <Icon name="share" size={14} />
                    <span>Copy Link</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveModalArticle(null)}
                    className="px-6 py-2.5 rounded-md bg-foreground hover:bg-foreground/90 text-background text-[10px] font-medium uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    Close Reader
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
