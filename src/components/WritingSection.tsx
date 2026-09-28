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

const defaultFeaturedEssay: ArticleItem = {
  id: "feat-systems",
  slug: "what-commercial-sets-taught-me-about-process-optimization",
  isFeatured: true,
  category: "operations",
  categoryLabel: "OPERATIONS & FIELD PRACTICE",
  categoryBadgeClass: "bg-muted text-foreground border-border",
  date: "SEP 2026",
  readTime: "5 MIN READ",
  title: "What Commercial Sets Taught Me About Process Optimization",
  description:
    "Observations from commercial shoots at EL25 Studio: why rigid theoretical schedules fail without informal crew coordination, and how physical staging mirrors assembly logistics.",
  thesis:
    "Workflow efficiency on dynamic sets relies on informal coordination bridges and physical staging discipline rather than rigid theoretical spreadsheets.",
  tags: ["Field Operations", "Process Observation", "Commercial Media", "Workflow Coordination"],
  keyTakeaways: [
    "Unplanned micro-delays compound exponentially when equipment handoffs lack designated physical staging zones.",
    "Crew members solve friction through informal glancing signals, not formal hierarchy charts.",
    "Observing frontline habits before drafting standardized procedures prevents costly operational friction.",
  ],
  academicContext:
    "Reflective essay connecting commercial media production coordination at EL25 Studio with foundational operations management principles at FSJES Aïn Chock.",
  sections: [
    {
      heading: "1. The Disconnect Between Schedule and Floor",
      paragraphs: [
        "In production planning, call sheets look immaculate: timestamps down to five-minute increments, equipment lists mapped to vehicles, and designated roles for every technician. Yet within the first hour on set, delays almost always emerge.",
        "The breakdown rarely stems from unmotivated crew or faulty equipment. It happens at handoff boundaries: a lens kit placed outside line-of-sight, a battery charger missing a labeled power outlet, or an audio engineer waiting on a director's verbal cue that never arrives.",
      ],
    },
    {
      heading: "2. Physical Staging as Inventory Control",
      paragraphs: [
        "The single most effective fix we tested was not rewriting the schedule, but physically standardizing the camera cart and media offload table. Camera operators knew exactly where exposed CFast cards were placed, and checksum ingest began instantly upon receipt.",
        "This is basic 5S and lean inventory control in practice: reducing search time and handoff ambiguity eliminates more wasted minutes than pushing people to work faster.",
      ],
    },
    {
      heading: "3. Lessons for Future Business Administration",
      paragraphs: [
        "As a first-year student studying management frameworks, this field experience was invaluable. Management theories are essential compasses, but operational reality is shaped by physical layout, informal communication, and continuous quiet observation.",
      ],
    },
  ],
};

const defaultNoteArticles: ArticleItem[] = [
  {
    id: "art-1",
    slug: "why-process-improvement-starts-with-observation",
    category: "operations",
    categoryLabel: "OPERATIONS",
    categoryBadgeClass: "border border-border bg-muted/80 text-foreground",
    date: "SEP 24, 2026",
    readTime: "6 MIN READ",
    title: "Why Process Improvement Starts With Observation",
    description:
      "Before restructuring workflows or introducing new tools, spend dedicated time observing how work actually happens in real settings.",
    thesis:
      "Direct on-site observation reveals the micro-delays that executive summary dashboards systematically smooth away.",
    tags: ["Process Mapping", "Gemba Walks", "Workflow Triage", "Operational Discipline"],
    keyTakeaways: [
      "Summary dashboards abstract away human micro-hesitations and workarounds.",
      "Frontline workers develop brilliant local hacks that should inform future systems.",
      "Collaborative diagnostic interviews build trust and guarantee buy-in for future changes.",
    ],
    academicContext:
      "Coursework Reflection: Operations & Process Management, FSJES Aïn Chock.",
    sections: [
      {
        heading: "The Disconnect Between Theory and the Floor",
        paragraphs: [
          "Standard operational textbooks emphasize flowcharts, KPI matrices, and Lean frameworks. While essential, these frameworks risk breeding an illusion of control if practiced solely from behind a desk.",
          "When observing live workflows—whether managing inventory in a storage room or coordinating equipment loading before sunrise—the real bottleneck is rarely a shortage of software. It is ambiguous handoffs, incomplete asset tagging, or conflicting priorities between team members.",
        ],
      },
      {
        heading: "Actionable Takeaway for Business Students",
        paragraphs: [
          "As business administration students, our greatest competitive advantage in internship or management roles is our willingness to perform unglamorous observation. Walk the process yourself before proposing a slide deck.",
        ],
      },
    ],
  },
  {
    id: "art-4",
    slug: "from-physical-science-to-economics",
    category: "academics",
    categoryLabel: "ACADEMICS",
    categoryBadgeClass: "border border-border bg-muted/80 text-foreground",
    date: "NOV 18, 2026",
    readTime: "4 MIN READ",
    title: "From Physical Science to Economics: Continuity of Analytical Thinking",
    description:
      "How an analytical foundation in high school physical science translates into quantitative reasoning for microeconomics, statistics, and business.",
    thesis:
      "The mathematical discipline honed in physical sciences—deriving equilibrium, modeling rates of change, and testing hypotheses—provides an extraordinary mental model for economics.",
    tags: ["Quantitative Rigor", "Microeconomics", "Mathematical Modeling", "Scientific Method"],
    keyTakeaways: [
      "Physical equilibrium concepts directly mirror market clearing prices and supply/demand curves.",
      "Marginal analysis in economics is rate-of-change calculus applied to human incentives.",
      "Scientific hypothesis testing prevents managers from mistaking correlation for causality.",
    ],
    academicContext:
      "Academic Monograph: Bridging Baccalauréat Physical Sciences with University Microeconomics & Statistics.",
    sections: [
      {
        heading: "A Shared Language of Systems",
        paragraphs: [
          "Transitioning from the French-track Moroccan Baccalauréat in Physical Sciences to a Business Administration degree revealed a profound synergy. Many students view economics as purely qualitative, but its core engines—marginal utility, elasticity, cost optimization—are fundamentally mathematical.",
          "When studying chemical equilibria in physics, Le Chatelier's principle states that a system in balance counteracts external perturbations. In microeconomics, competitive markets respond to price shocks through remarkably analogous balancing feedback loops.",
        ],
      },
      {
        heading: "The Quantitative Edge in Management",
        paragraphs: [
          "Approaching business challenges with a scientist's skepticism ensures that decisions are rooted in measurable evidence rather than anecdotal optimism. Quantitative literacy is a foundational leadership superpower.",
        ],
      },
    ],
  },
];

export function WritingSection({
  initialMonographs,
  initialFeaturedMonograph,
}: WritingSectionProps = {}) {
  const [featuredEssay, setFeaturedEssay] = useState<ArticleItem>(
    initialFeaturedMonograph || fallbackFeaturedMonograph || defaultFeaturedEssay
  );
  const [noteArticles, setNoteArticles] = useState<ArticleItem[]>(
    initialMonographs || fallbackMonographs || defaultNoteArticles
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalArticle, setActiveModalArticle] = useState<ArticleItem | null>(null);
  const [hoveredArticle, setHoveredArticle] = useState<string | null>(null);
  const [copiedArticleId, setCopiedArticleId] = useState<string | null>(null);

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

  const categories = useMemo(
    () =>
      [
        { key: "all", label: "ALL DISCIPLINES", count: noteArticles.length, icon: "dashboard" },
        {
          key: "operations",
          label: "OPERATIONS",
          count: noteArticles.filter((a) => a.category === "operations").length,
          icon: "precision_manufacturing",
        },
        {
          key: "management",
          label: "MANAGEMENT",
          count: noteArticles.filter((a) => a.category === "management").length,
          icon: "account_balance",
        },
        {
          key: "finance",
          label: "FINANCE",
          count: noteArticles.filter((a) => a.category === "finance").length,
          icon: "calculate",
        },
        {
          key: "academics",
          label: "ACADEMICS",
          count: noteArticles.filter((a) => a.category === "academics").length,
          icon: "school",
        },
      ].filter((cat) => cat.key === "all" || cat.count > 0),
    [noteArticles]
  );

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

  // Filter and search
  const filteredNoteArticles = useMemo(() => {
    return noteArticles.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();

      if (!query) return matchesCategory;

      const matchesText =
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        item.categoryLabel.toLowerCase().includes(query);

      return matchesCategory && matchesText;
    });
  }, [selectedCategory, searchQuery, noteArticles]);

  const handleCopyArticleLink = useCallback((article: ArticleItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const url = `${window.location.origin}/#writing-${article.slug}`;

    setCopiedArticleId(article.id);
    setTimeout(() => {
      setCopiedArticleId((current) => (current === article.id ? null : current));
    }, 2500);

    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        showToast("Monograph link copied to clipboard!", "success");
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
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-normal tracking-tight text-foreground">
              Ideas &amp; Observations
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex flex-col items-start md:items-end gap-1.5 text-sm text-muted-foreground max-w-sm"
          >
            <p className="leading-relaxed">
              Syntheses exploring business administration, operations modeling, financial discipline, and compound learning.
            </p>
          </motion.div>
        </div>

        {/* ========================================================
            PART 1: FEATURED FLAGSHIP ESSAY CARD
            ======================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative group bg-card border border-border hover:border-foreground/50 rounded-md p-8 lg:p-10 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 overflow-hidden cursor-pointer"
          onClick={() => handleOpenArticle(featuredEssay)}
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="space-y-5 max-w-3xl">
              {/* Metadata row */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-widest uppercase px-2 py-0.5 rounded-sm bg-foreground text-background font-mono">
                  <Icon name="sparkles" size={13} />
                  FEATURED
                </span>
                <span className="text-muted-foreground text-xs font-mono">
                  {featuredEssay.date} · {featuredEssay.readTime}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-normal text-foreground leading-[1.1] tracking-tight group-hover:text-foreground transition-colors">
                  {featuredEssay.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mt-4 leading-relaxed max-w-2xl">
                  {featuredEssay.description}
                </p>
              </div>

              {/* Core Thesis Highlight Quote Box */}
              <div className="pl-4 border-l-2 border-foreground/70 text-foreground text-sm sm:text-base italic leading-relaxed py-2 mt-2 max-w-2xl">
                <span className="text-[10px] font-medium not-italic uppercase tracking-widest text-muted-foreground block mb-1 font-mono">
                  Core Thesis:
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
                className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 bg-foreground hover:bg-foreground/90 text-background text-xs font-semibold uppercase tracking-widest transition-all cursor-pointer focus-visible:outline-none w-full lg:w-48"
              >
                <span>Read Essay</span>
                <Icon name="arrow_forward" size={16} />
              </button>

              <button
                type="button"
                onClick={(e) => handleCopyArticleLink(featuredEssay, e)}
                className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 bg-muted/70 hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-widest transition-colors border border-border cursor-pointer focus-visible:outline-none w-full lg:w-48"
              >
                <Icon name={copiedArticleId === featuredEssay.id ? "check" : "share"} size={14} />
                <span>{copiedArticleId === featuredEssay.id ? "Copied!" : "Share"}</span>
              </button>
            </div>
          </div>
        </motion.article>

        {/* ========================================================
            PART 2: DISCIPLINE FILTER TABS & SEARCH
            ======================================================== */}
        <div className="space-y-8 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2" role="group">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setSelectedCategory(cat.key)}
                    aria-pressed={isActive}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-[10px] font-medium uppercase tracking-widest transition-all duration-200 cursor-pointer focus-visible:outline-none border ${
                      isActive
                        ? "bg-foreground text-background border-foreground"
                        : "bg-surface text-muted-foreground hover:text-foreground border-border"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`ml-0.5 opacity-60`}>
                      ({cat.count})
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full sm:w-64">
              <Icon
                name="search"
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search notes..."
                className="w-full pl-9 pr-8 py-2 rounded-sm bg-surface border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5 cursor-pointer"
                >
                  <Icon name="close" size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Grid of Articles */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 pt-2">
            <AnimatePresence>
              {filteredNoteArticles.map((article) => {
                const isHovered = hoveredArticle === article.id;

                return (
                  <motion.article
                    key={article.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => setHoveredArticle(article.id)}
                    onMouseLeave={() => setHoveredArticle(null)}
                    onClick={() => handleOpenArticle(article)}
                    className="flex flex-col justify-between p-6 sm:p-8 bg-card border border-border hover:border-foreground/50 rounded-md transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 group cursor-pointer"
                  >
                    <div>
                      {/* Top metadata */}
                      <div className="flex items-center justify-between text-xs mb-4">
                        <span className="text-muted-foreground font-mono">
                          {article.date} · {article.readTime}
                        </span>
                        <span className="inline-flex items-center rounded px-2 py-0.5 text-[10px] font-mono border border-border bg-muted/80 text-foreground">
                          {article.categoryLabel}
                        </span>
                      </div>

                      {/* Title & Abstract */}
                      <h4 className="text-lg sm:text-xl font-display font-normal text-foreground group-hover:text-foreground transition-colors leading-snug mb-3">
                        {article.title}
                      </h4>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {article.description}
                      </p>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-[10px] font-medium uppercase tracking-widest text-foreground flex items-center gap-1.5 transition-colors font-mono">
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
          <div className="p-8 sm:p-10 bg-card border border-border rounded-md shadow-xs relative overflow-hidden">
            <div className="max-w-2xl relative">
              <h3 className="text-2xl sm:text-3xl font-display font-normal text-foreground mb-3 tracking-tight">
                Engage with these notes
              </h3>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                Interested in discussing coursework methodology, operational observations, or business research? Reach out directly via email or LinkedIn.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-foreground hover:bg-foreground/90 text-background text-xs font-semibold uppercase tracking-widest rounded-md transition-colors whitespace-nowrap cursor-pointer inline-flex items-center gap-2 focus-visible:outline-none"
                >
                  <Icon name="mail" size={15} />
                  <span>Get in Touch</span>
                </a>
                <a
                  href="https://linkedin.com/in/hassan-karasu-a7485336b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-muted/70 hover:bg-muted border border-border text-foreground text-xs font-semibold uppercase tracking-widest rounded-md transition-colors whitespace-nowrap cursor-pointer inline-flex items-center gap-2 focus-visible:outline-none"
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
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-3xl bg-card border border-border rounded-md overflow-hidden my-auto max-h-[90vh] flex flex-col shadow-xl"
              >
                {/* Modal Top Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-card shrink-0">
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground text-xs font-mono">
                      {activeModalArticle.date} · {activeModalArticle.readTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleCopyArticleLink(activeModalArticle)}
                      className="p-2 rounded-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                      title={copiedArticleId === activeModalArticle.id ? "Copied!" : "Copy link"}
                    >
                      <Icon name={copiedArticleId === activeModalArticle.id ? "check" : "share"} size={16} />
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
                <div className="px-6 sm:px-10 py-10 overflow-y-auto space-y-8 bg-card">
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
                  <div className="pl-4 border-l-2 border-foreground/80 text-foreground max-w-2xl">
                    <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground block mb-2 font-mono">
                      Thesis Statement:
                    </span>
                    <p className="text-sm sm:text-base italic leading-relaxed">
                      &ldquo;{activeModalArticle.thesis}&rdquo;
                    </p>
                  </div>

                  {/* Key Takeaways */}
                  <div className="p-6 bg-muted/60 border border-border rounded-md space-y-3 max-w-2xl">
                    <span className="text-[10px] font-medium uppercase tracking-widest text-foreground block mb-2 font-mono">
                      Core Insights &amp; Principles:
                    </span>
                    <ul className="space-y-2 text-sm text-muted-foreground list-none pl-0">
                      {activeModalArticle.keyTakeaways.map((takeaway, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-foreground/60 shrink-0" />
                          <span className="leading-relaxed">{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Multi-Section Article Prose */}
                  <div className="space-y-8 pt-4">
                    {activeModalArticle.sections.map((section, idx) => (
                      <div key={idx} className="space-y-4">
                        <h4 className="text-xl sm:text-2xl font-display font-normal text-foreground tracking-tight">
                          {section.heading}
                        </h4>
                        {section.paragraphs.map((p, pIdx) => (
                          <p
                            key={pIdx}
                            className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Academic Context Footnote */}
                  <div className="pt-8 border-t border-border text-xs text-muted-foreground space-y-1 max-w-2xl font-mono">
                    <p className="font-medium text-foreground">Academic Citation &amp; Context:</p>
                    <p>{activeModalArticle.academicContext}</p>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="px-6 py-4 border-t border-border bg-card flex items-center justify-between shrink-0">
                  <button
                    type="button"
                    onClick={() => handleCopyArticleLink(activeModalArticle)}
                    className="inline-flex items-center gap-1.5 text-[10px] font-medium text-foreground hover:text-muted-foreground uppercase tracking-widest cursor-pointer transition-colors font-mono"
                  >
                    <Icon name={copiedArticleId === activeModalArticle.id ? "check" : "share"} size={14} />
                    <span>{copiedArticleId === activeModalArticle.id ? "Copied!" : "Copy Link"}</span>
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
