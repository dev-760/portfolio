"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { showToast } from "@/components/Toast";
import { Icon } from "@/components/icons/Icon";
import { MOTION_EASINGS, MOTION_DURATIONS } from "@/motion/tokens";

interface ArticleContentSection {
  heading: string;
  paragraphs: string[];
}

export interface ArticleItem {
  id: string;
  slug: string;
  isFeatured?: boolean;
  category: "operations" | "management" | "finance" | "academics";
  categoryLabel: string;
  categoryBadgeClass: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  thesis: string;
  tags: string[];
  keyTakeaways: string[];
  academicContext: string;
  sections: ArticleContentSection[];
}

const featuredEssay: ArticleItem = {
  id: "feat-systems",
  slug: "understanding-systems-before-improving-them",
  isFeatured: true,
  category: "operations",
  categoryLabel: "OPERATIONS & SYSTEMS",
  categoryBadgeClass: "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/25",
  date: "SEP 2026",
  readTime: "6 MIN READ",
  title: "Understanding Systems Before Improving Them",
  description:
    "Why the instinctive urge to optimize processes often causes second-order chaos when underlying behavioral feedback loops are misunderstood. A case for rigorous observation before restructuring.",
  thesis:
    "Optimizing a workflow before diagnosing informal feedback loops almost always accelerates friction rather than throughput. True operational leverage begins with quiet, disciplined observation.",
  tags: ["Systems Thinking", "Operations Management", "Workflow Design", "Chesterton's Fence"],
  keyTakeaways: [
    "Premature automation digitizes flawed habits instead of eliminating unnecessary friction.",
    "Bottlenecks frequently exist to solve a historical safety or quality issue that formal SOPs fail to record.",
    "Real-world coordination happens across informal human bridges, not formal organizational pyramids.",
  ],
  academicContext:
    "Monograph drafted in connection with coursework in Principles of Management, Production Operations, and Quantitative Analytical Methods.",
  sections: [
    {
      heading: "1. The Premature Optimization Trap",
      paragraphs: [
        "In modern business environments, there is a nearly universal bias toward intervention. When a team encounters delays, handoff errors, or rising operational costs, the standard executive reflex is immediate restructuring: introduce a new software tool, mandate daily status meetings, or redraw reporting hierarchies.",
        "Yet in systems theory, premature intervention is recognized as one of the most reliable accelerators of instability. When you intervene in a complex, multi-agent process without first understanding its informal stabilization mechanisms, you inevitably solve one local symptom while generating two distant, systemic failures.",
      ],
    },
    {
      heading: "2. Mapping the Informal Highway",
      paragraphs: [
        "Every functioning organization operates on two parallel planes: the formal organizational chart (the theoretical workflow described in handbooks) and the informal highway (the direct human relationships, ad-hoc WhatsApp groups, and tacit agreements that actually move work forward).",
        "During my coordination work on dynamic commercial media sets at EL25 Studio, I observed this phenomenon directly. When shoot schedules tightened, the crew did not consult formal contingency binders; they relied on nuanced glance signals between camera operators, gaffers, and directors. If an overzealous coordinator attempted to force strict adherence to a rigid theoretical spreadsheet, production cadence immediately collapsed.",
      ],
    },
    {
      heading: "3. Chesterton's Fence in Business Operations",
      paragraphs: [
        "The philosopher G.K. Chesterton formulated a famous operational rule: if you encounter a fence in the middle of a road and cannot discern why it was erected, the one thing you must never do is tear it down. First discover why the fence was put there in the first place; once you understand its purpose, you may judge whether it is obsolete.",
        "In enterprise operations, process 'bottlenecks' often serve as Chesterton's fences. A tedious two-person signoff step that appears to slow down invoicing may actually be the sole barrier preventing costly billing discrepancies. Removing the friction without understanding the vulnerability invites catastrophe.",
      ],
    },
    {
      heading: "4. The 3-Step Observation Protocol",
      paragraphs: [
        "Before altering any workflow, managers and analysts should follow a disciplined three-phase diagnostic protocol:",
        "1. Gemba Shadowing: Spend dedicated, non-evaluative hours sitting directly with the operators. Observe where work stalls, where papers are stacked, and where digital tools are circumvented.",
        "2. Friction Logging: Ask frontline team members: 'What single task in your morning feels most unnecessarily exhausting?' The answer almost never matches what leadership suspects.",
        "3. Structural Interrogation: Map the feedback loops. When variable X increases, what dampens it? What amplifies it? Only after this causal loop diagram is clear should tool evaluation begin.",
        "True managerial excellence is not measured by the speed with which changes are decreed, but by the quiet durability with which improved systems thrive without continuous firefighting.",
      ],
    },
  ],
};

const noteArticles: ArticleItem[] = [
  {
    id: "art-1",
    slug: "why-process-improvement-starts-with-observation",
    category: "operations",
    categoryLabel: "OPERATIONS",
    categoryBadgeClass: "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/25",
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
      "Coursework Reflection: Operations & Process Management, Mundiapolis University.",
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
    id: "art-2",
    slug: "connecting-theory-with-practice",
    category: "management",
    categoryLabel: "MANAGEMENT",
    categoryBadgeClass: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/25",
    date: "OCT 12, 2026",
    readTime: "5 MIN READ",
    title: "The First-Year Perspective: Connecting Theory with Practice",
    description:
      "How linking coursework in management and accounting to hands-on experience builds compound understanding and practical intuition.",
    thesis:
      "Theoretical frameworks provide the vocabulary of commerce, but real project constraints provide its grammar.",
    tags: ["Organization Theory", "Applied Management", "Student Learning", "Accountability"],
    keyTakeaways: [
      "Textbook models feel abstract until tested against budget caps and firm deadlines.",
      "Clear role definitions prevent interpersonal friction in fast-paced teams.",
      "Reflecting weekly on classroom principles transforms coursework into long-term intuition.",
    ],
    academicContext:
      "Academic Synthesis: Principles of Management & Enterprise Organization.",
    sections: [
      {
        heading: "Moving Beyond Rote Memorization",
        paragraphs: [
          "In first-year business coursework, students are introduced to foundational concepts: Mintzberg's managerial roles, Fayol's administrative principles, and double-entry accounting. It is easy to treat these as academic hurdles to be memorized for exams.",
          "However, when you apply these concepts to real projects—such as organizing logistics for a volunteer outreach initiative or coordinating vendor timelines—the models suddenly illuminate real interpersonal dynamics. You realize that clear lines of accountability are not bureaucratic overhead; they are the emotional cushion that prevents team burnout.",
        ],
      },
      {
        heading: "Synthesizing Daily Observations",
        paragraphs: [
          "I have found that keeping a structured journal of operational observations bridges the gap between lecture slides and field realities. When a concept from class explains an anomaly on a project, the lesson becomes permanently ingrained.",
        ],
      },
    ],
  },
  {
    id: "art-3",
    slug: "budgeting-personal-finance-university-students",
    category: "finance",
    categoryLabel: "FINANCE",
    categoryBadgeClass: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25",
    date: "NOV 02, 2026",
    readTime: "5 MIN READ",
    title: "Budgeting & Personal Finance for University Students",
    description:
      "Practical approaches to tracking daily student expenses, establishing category spending limits, and building long-term financial habits.",
    thesis:
      "Student financial discipline is not about extreme austerity; it is about establishing complete cash flow visibility to avoid mid-semester crises.",
    tags: ["Zero-Based Budgeting", "Financial Runway", "Cash Flow Modeling", "Accounting Basics"],
    keyTakeaways: [
      "Zero-based budgeting gives every Dirham an intentional allocation before the month starts.",
      "Separating fixed baseline expenses from variable study costs prevents sudden deficits.",
      "Building a modest 1-month contingency buffer protects academic focus from financial stress.",
    ],
    academicContext:
      "Applied Finance Note: General Accounting (Comptabilité Générale) & Quantitative Analysis.",
    sections: [
      {
        heading: "Applying General Accounting to Personal Cash Flow",
        paragraphs: [
          "Studying comptabilité générale introduces the beauty of the double-entry balance sheet: resources must equal employments, and liquidity must be safeguarded. Yet many university students manage their finances purely through atmospheric guesswork.",
          "By implementing a simplified cash flow statement—categorizing fixed monthly overhead (transportation, materials, tuition reserves) vs. discretionary daily outlays—one gains immediate clarity. Financial peace of mind allows full concentration on rigorous academic studies.",
        ],
      },
      {
        heading: "The Power of the Simple Ledger",
        paragraphs: [
          "You do not need elaborate software. A disciplined weekly spreadsheet logging income, committed liabilities, and remaining runway provides all the quantitative feedback required to make prudent financial decisions.",
        ],
      },
    ],
  },
  {
    id: "art-4",
    slug: "from-physical-science-to-economics",
    category: "academics",
    categoryLabel: "ACADEMICS",
    categoryBadgeClass: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/25",
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

const allArticles: ArticleItem[] = [featuredEssay, ...noteArticles];

const categories = [
  { key: "all", label: "ALL DISCIPLINES", count: 4, icon: "dashboard" },
  { key: "operations", label: "OPERATIONS", count: 1, icon: "precision_manufacturing" },
  { key: "management", label: "MANAGEMENT", count: 1, icon: "account_balance" },
  { key: "finance", label: "FINANCE", count: 1, icon: "calculate" },
  { key: "academics", label: "ACADEMICS", count: 1, icon: "school" },
] as const;

export function WritingSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalArticle, setActiveModalArticle] = useState<ArticleItem | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredArticle, setHoveredArticle] = useState<string | null>(null);

  // Keyboard accessibility: Escape closes modal
  useEffect(() => {
    if (!activeModalArticle) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalArticle(null);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalArticle]);

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
  }, [selectedCategory, searchQuery]);

  const handleOpenArticle = useCallback((article: ArticleItem) => {
    setActiveModalArticle(article);
  }, []);

  const handleCopyArticleLink = useCallback((article: ArticleItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const url = `${window.location.origin}/#writing-${article.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        showToast("Monograph link copied to clipboard!", "success");
      });
    } else {
      showToast("Link copied: " + url, "info");
    }
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      showToast("Subscribed! You will receive future academic dispatches.", "success");
      setNewsletterEmail("");
    }
  };

  return (
    <section
      className="py-20 lg:py-24 border-b border-outline-variant/40 bg-surface scroll-mt-16 relative"
      id="writing"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* ========================================================
            SECTION HEADER
            ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant/30 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
            className="space-y-2"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-outline">
                05 — WRITING &amp; MONOGRAPHS
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-primary-fixed text-on-primary-fixed uppercase tracking-wider">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                Peer-Reviewed Coursework
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface">
              Ideas, Observations, and Academic Notes
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: MOTION_DURATIONS.standard }}
            className="flex flex-col items-start md:items-end gap-1.5 text-sm text-outline max-w-sm"
          >
            <p className="leading-relaxed">
              Syntheses exploring business administration, operations modeling, financial discipline, and compound learning.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-outline/80 pt-1">
              <span>5 Total Monographs</span>
              <span>·</span>
              <span>26 Min Total Read</span>
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            PART 1: FEATURED FLAGSHIP ESSAY CARD
            ======================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: MOTION_DURATIONS.standard, ease: MOTION_EASINGS.system }}
          className="relative group bg-surface-container-lowest border border-outline-variant/60 hover:border-primary/60 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
          onClick={() => handleOpenArticle(featuredEssay)}
        >
          {/* Subtle decorative background accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-fixed/20 dark:bg-primary-dark/5 rounded-full blur-3xl -z-10 pointer-events-none transition-opacity group-hover:opacity-100 opacity-60" />

          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="space-y-4 max-w-3xl">
              {/* Metadata row */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-primary text-on-primary shadow-2xs">
                  <Icon name="sparkles" size={13} />
                  FEATURED ESSAY
                </span>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20 uppercase tracking-wider">
                  {featuredEssay.categoryLabel}
                </span>
                <span className="text-outline text-xs font-mono">
                  {featuredEssay.date} · {featuredEssay.readTime}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface leading-tight tracking-tight group-hover:text-primary transition-colors">
                  {featuredEssay.title}
                </h3>
                <p className="text-body-md sm:text-base text-on-surface-variant mt-2 leading-relaxed">
                  {featuredEssay.description}
                </p>
              </div>

              {/* Core Thesis Highlight Quote Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-surface-container/60 border-l-4 border-primary text-on-surface text-sm sm:text-[15px] italic leading-relaxed">
                <span className="text-xs font-bold not-italic uppercase tracking-wider text-primary font-mono block mb-1">
                  Core Thesis:
                </span>
                &ldquo;{featuredEssay.thesis}&rdquo;
              </div>

              {/* Concept tags */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {featuredEssay.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-surface-container text-on-surface-variant border border-outline-variant/40"
                  >
                    #{tag}
                  </span>
                ))}
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
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 bg-primary hover:bg-secondary text-on-primary text-xs font-semibold uppercase tracking-wider transition-all shadow-xs hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 w-full lg:w-48"
              >
                <span>Read Full Essay</span>
                <Icon name="arrow_forward" size={16} />
              </button>

              <button
                type="button"
                onClick={(e) => handleCopyArticleLink(featuredEssay, e)}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface text-xs font-medium tracking-wide transition-colors border border-outline-variant/50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full lg:w-48"
              >
                <Icon name="share" size={14} />
                <span>Share Monograph</span>
              </button>
            </div>
          </div>
        </motion.article>

        {/* ========================================================
            PART 2: DISCIPLINE FILTER TABS & SEARCH
            ======================================================== */}
        <div className="space-y-6 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-outline block">
                Discipline Directory
              </span>
              <span className="text-xs font-mono text-outline/80">
                Showing {filteredNoteArticles.length} of {noteArticles.length} monographs
              </span>
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full sm:w-72">
              <Icon
                name="search"
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search notes by concept..."
                className="w-full pl-9 pr-8 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant/60 text-xs text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface p-0.5 rounded cursor-pointer"
                  aria-label="Clear search"
                >
                  <Icon name="close" size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div
            className="flex flex-wrap items-center gap-2"
            role="group"
            aria-label="Filter essays by discipline"
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-primary text-on-primary shadow-xs"
                      : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface border border-outline-variant/40"
                  }`}
                >
                  <Icon name={cat.icon} size={14} />
                  <span>{cat.label}</span>
                  <span
                    className={`ml-0.5 font-mono text-[11px] ${
                      isActive ? "opacity-90" : "opacity-60"
                    }`}
                  >
                    ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Empty search state */}
          {filteredNoteArticles.length === 0 && (
            <div className="p-12 text-center rounded-xl bg-surface-container-lowest border border-outline-variant/50 space-y-3">
              <Icon name="notes" size={32} className="mx-auto text-outline" />
              <h4 className="text-base font-bold text-on-surface">No monographs match your query</h4>
              <p className="text-xs text-on-surface-variant max-w-md mx-auto">
                No articles found matching &ldquo;{searchQuery}&rdquo;. Try clearing your search or choosing another discipline filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-2 px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-xs font-semibold uppercase tracking-wider text-primary cursor-pointer transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Grid of Articles with Motion Transitions */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
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
                    transition={{ duration: 0.24, ease: MOTION_EASINGS.sharp }}
                    onMouseEnter={() => setHoveredArticle(article.id)}
                    onMouseLeave={() => setHoveredArticle(null)}
                    onClick={() => handleOpenArticle(article)}
                    className="flex flex-col justify-between p-6 sm:p-7 bg-surface-container-lowest border border-outline-variant/50 hover:border-primary/60 rounded-xl hover:shadow-sm transition-all duration-200 group cursor-pointer"
                  >
                    <div>
                      {/* Top metadata */}
                      <div className="flex items-center justify-between text-xs font-mono mb-3">
                        <span
                          className={`px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider border ${article.categoryBadgeClass}`}
                        >
                          {article.categoryLabel}
                        </span>
                        <span className="text-outline font-normal">
                          {article.date} · {article.readTime}
                        </span>
                      </div>

                      {/* Title & Abstract */}
                      <h4 className="text-lg sm:text-xl font-bold text-on-surface group-hover:text-primary transition-colors leading-snug mb-2.5">
                        {article.title}
                      </h4>

                      <p className="text-sm text-on-surface-variant leading-relaxed mb-4 font-normal">
                        {article.description}
                      </p>

                      {/* Concept Tags */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-5">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-container text-on-surface-variant"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary group-hover:text-secondary flex items-center gap-1.5">
                        <span>Read Full Note</span>
                        <motion.div
                          animate={{ x: isHovered ? 4 : 0 }}
                          transition={{ duration: 0.16 }}
                          className="inline-flex items-center"
                        >
                          <Icon name="arrow_forward" size={14} />
                        </motion.div>
                      </span>
                      <span className="text-[10px] font-mono text-outline uppercase tracking-wider">
                        STUDENT NOTE
                      </span>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ========================================================
            PART 3: NEWSLETTER & FUTURE DISPATCHES
            ======================================================== */}
        <div className="pt-6">
          <div className="p-8 sm:p-10 bg-surface-container border border-outline-variant/50 rounded-2xl relative overflow-hidden">
            {/* Subtle glow circle */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

            <div className="max-w-2xl relative">
              <div className="flex items-center gap-2 mb-2 text-primary font-semibold text-xs tracking-wider uppercase font-mono">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <Icon name="mail" size={15} />
                <span>DISPATCHES &amp; ACADEMIC NOTES</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-on-surface mb-2">
                Subscribe to future monographs
              </h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                Receive occasional reflections on business administration, student productivity, quantitative coursework, and lessons learned from projects. Zero spam, unsubscribe anytime.
              </p>

              {isSubscribed ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-sm font-semibold flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Icon name="verified" size={18} />
                    <span>You are subscribed. Welcome to future dispatches!</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsSubscribed(false)}
                    className="text-xs underline cursor-pointer text-emerald-700 dark:text-emerald-400"
                  >
                    Add another email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Icon
                      name="mail"
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none"
                    />
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email for academic notes"
                      className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary hover:bg-secondary text-on-primary text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors whitespace-nowrap cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Subscribe
                  </button>
                </form>
              )}

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-outline font-medium">
                <span className="flex items-center gap-1.5">
                  <Icon name="verified_user" size={14} />
                  Zero spam, unsubscribe anytime
                </span>
                <span>•</span>
                <span>Quarterly curated dispatches</span>
                <span>•</span>
                <span>Casablanca, Morocco</span>
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
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-article-title"
              onClick={() => setActiveModalArticle(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.25, ease: MOTION_EASINGS.sharp }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-3xl bg-surface-container-lowest border border-outline-variant/60 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
              >
                {/* Modal Top Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/40 bg-surface-container/60 shrink-0">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold uppercase tracking-wider border ${activeModalArticle.categoryBadgeClass}`}
                    >
                      {activeModalArticle.categoryLabel}
                    </span>
                    <span className="text-outline text-xs font-mono">
                      {activeModalArticle.date} · {activeModalArticle.readTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleCopyArticleLink(activeModalArticle)}
                      className="p-2 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
                      title="Copy link"
                      aria-label="Copy article link"
                    >
                      <Icon name="share" size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveModalArticle(null)}
                      className="p-2 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
                      title="Close (Esc)"
                      aria-label="Close reader"
                    >
                      <Icon name="close" size={18} />
                    </button>
                  </div>
                </div>

                {/* Modal Scrollable Article Body */}
                <div className="px-6 sm:px-10 py-8 overflow-y-auto space-y-6">
                  {/* Article Title & Byline */}
                  <div className="space-y-3 border-b border-outline-variant/30 pb-6">
                    <h3
                      id="modal-article-title"
                      className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight leading-tight"
                    >
                      {activeModalArticle.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-outline font-mono">
                      <span>By Hassan Karasu</span>
                      <span>·</span>
                      <span>Business Administration Student</span>
                      <span>·</span>
                      <span>Mundiapolis University</span>
                    </div>
                  </div>

                  {/* Core Thesis / Abstract */}
                  <div className="p-4 sm:p-5 rounded-xl bg-surface-container/60 border-l-4 border-primary">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono block mb-1">
                      Thesis Statement:
                    </span>
                    <p className="text-sm sm:text-base italic text-on-surface leading-relaxed">
                      &ldquo;{activeModalArticle.thesis}&rdquo;
                    </p>
                  </div>

                  {/* Key Takeaways */}
                  <div className="p-5 rounded-xl bg-primary-fixed/25 dark:bg-primary-dark/10 border border-primary/20 space-y-2.5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block">
                      Core Insights &amp; Principles:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-on-surface">
                      {activeModalArticle.keyTakeaways.map((takeaway, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon name="check" size={14} className="text-primary shrink-0 mt-0.5" />
                          <span className="leading-snug">{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Multi-Section Article Prose */}
                  <div className="space-y-6 pt-2">
                    {activeModalArticle.sections.map((section, idx) => (
                      <div key={idx} className="space-y-3">
                        <h4 className="text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                          {section.heading}
                        </h4>
                        {section.paragraphs.map((p, pIdx) => (
                          <p
                            key={pIdx}
                            className="text-sm sm:text-base text-on-surface-variant leading-relaxed font-normal"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Academic Context Footnote */}
                  <div className="pt-6 border-t border-outline-variant/30 text-xs text-outline space-y-1 font-mono">
                    <p className="font-semibold text-on-surface">Academic Citation &amp; Context:</p>
                    <p>{activeModalArticle.academicContext}</p>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="px-6 py-4 border-t border-outline-variant/40 bg-surface-container/60 flex items-center justify-between shrink-0">
                  <button
                    type="button"
                    onClick={() => handleCopyArticleLink(activeModalArticle)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-secondary uppercase tracking-wider cursor-pointer"
                  >
                    <Icon name="share" size={14} />
                    <span>Copy Link</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveModalArticle(null)}
                    className="px-5 py-2 rounded-lg bg-primary hover:bg-secondary text-on-primary text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
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

export default WritingSection;
