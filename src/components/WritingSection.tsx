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
  const [hoveredArticle, setHoveredArticle] = useState<string | null>(null);

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
  }, [selectedCategory, searchQuery]);

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

  return (
    <section
      className="py-24 border-b border-border bg-surface scroll-mt-16 relative"
      id="writing"
    >
      <div className="max-w-5xl mx-auto px-6 space-y-16">
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
            <h2 className="text-3xl lg:text-4xl font-display font-medium tracking-tight text-foreground">
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
          className="relative group bg-surface border border-border hover:border-foreground/30 rounded-md p-8 lg:p-10 transition-all duration-300 overflow-hidden cursor-pointer"
          onClick={() => handleOpenArticle(featuredEssay)}
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="space-y-5 max-w-3xl">
              {/* Metadata row */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-widest uppercase px-2 py-0.5 rounded-sm bg-accent text-white">
                  <Icon name="sparkles" size={13} />
                  FEATURED
                </span>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-sm bg-muted text-foreground border border-border uppercase tracking-widest">
                  {featuredEssay.categoryLabel}
                </span>
                <span className="text-muted-foreground text-xs">
                  {featuredEssay.date} · {featuredEssay.readTime}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-foreground leading-[1.1] tracking-tight group-hover:text-accent transition-colors">
                  {featuredEssay.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mt-4 leading-relaxed">
                  {featuredEssay.description}
                </p>
              </div>

              {/* Core Thesis Highlight Quote Box */}
              <div className="pl-4 border-l-2 border-accent text-foreground text-sm sm:text-base italic leading-relaxed py-2 mt-2">
                <span className="text-[10px] font-medium not-italic uppercase tracking-widest text-muted-foreground block mb-1">
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
                className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 bg-foreground hover:bg-foreground/90 text-background text-xs font-medium uppercase tracking-widest transition-all cursor-pointer focus-visible:outline-none w-full lg:w-48"
              >
                <span>Read Essay</span>
                <Icon name="arrow_forward" size={16} />
              </button>

              <button
                type="button"
                onClick={(e) => handleCopyArticleLink(featuredEssay, e)}
                className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 bg-surface hover:bg-muted text-foreground text-xs font-medium uppercase tracking-widest transition-colors border border-border cursor-pointer focus-visible:outline-none w-full lg:w-48"
              >
                <Icon name="share" size={14} />
                <span>Share</span>
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
                    className="flex flex-col justify-between p-6 sm:p-8 bg-surface border border-border hover:border-foreground/30 rounded-md transition-colors group cursor-pointer"
                  >
                    <div>
                      {/* Top metadata */}
                      <div className="flex items-center justify-between text-xs mb-4">
                        <span
                          className={`px-2 py-0.5 rounded-sm text-[10px] font-medium uppercase tracking-widest border border-border bg-muted text-foreground`}
                        >
                          {article.categoryLabel}
                        </span>
                        <span className="text-muted-foreground">
                          {article.date} · {article.readTime}
                        </span>
                      </div>

                      {/* Title & Abstract */}
                      <h4 className="text-lg sm:text-xl font-display font-medium text-foreground group-hover:text-accent transition-colors leading-snug mb-3">
                        {article.title}
                      </h4>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {article.description}
                      </p>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-[10px] font-medium uppercase tracking-widest text-foreground group-hover:text-accent flex items-center gap-1.5 transition-colors">
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
          <div className="p-8 sm:p-10 bg-surface border border-border rounded-md relative overflow-hidden">
            <div className="max-w-2xl relative">
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-foreground mb-3 tracking-tight">
                Engage with these notes
              </h3>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                Interested in discussing coursework methodology, operational case studies, or receiving future student monographs? Reach out directly via the verified correspondence channels.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-foreground hover:bg-foreground/90 text-background text-xs font-medium uppercase tracking-widest rounded-md transition-colors whitespace-nowrap cursor-pointer inline-flex items-center gap-2 focus-visible:outline-none"
                >
                  <Icon name="mail" size={15} />
                  <span>Direct Correspondence</span>
                </a>
                <a
                  href="https://linkedin.com/in/hassan-karasu-a7485336b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-surface hover:bg-muted border border-border text-foreground text-xs font-medium uppercase tracking-widest rounded-md transition-colors whitespace-nowrap cursor-pointer inline-flex items-center gap-2 focus-visible:outline-none"
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
                className="w-full max-w-3xl bg-surface border border-border rounded-md overflow-hidden my-auto max-h-[90vh] flex flex-col"
              >
                {/* Modal Top Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface shrink-0">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2 py-0.5 rounded-sm text-[10px] font-medium uppercase tracking-widest border border-border bg-muted text-foreground`}
                    >
                      {activeModalArticle.categoryLabel}
                    </span>
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
                      className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-foreground tracking-tight leading-[1.1]"
                    >
                      {activeModalArticle.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-mono">
                      <span>By Hassan Karasu</span>
                      <span>·</span>
                      <span>Business Administration Student</span>
                      <span>·</span>
                      <span>FSJES Aïn Chock</span>
                    </div>
                  </div>

                  {/* Core Thesis / Abstract */}
                  <div className="pl-4 border-l-2 border-accent text-foreground">
                    <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground block mb-2">
                      Thesis Statement:
                    </span>
                    <p className="text-sm sm:text-base italic leading-relaxed">
                      &ldquo;{activeModalArticle.thesis}&rdquo;
                    </p>
                  </div>

                  {/* Key Takeaways */}
                  <div className="p-6 bg-muted border border-border rounded-md space-y-3">
                    <span className="text-[10px] font-medium uppercase tracking-widest text-foreground block mb-2">
                      Core Insights &amp; Principles:
                    </span>
                    <ul className="space-y-2 text-sm text-muted-foreground list-none pl-0">
                      {activeModalArticle.keyTakeaways.map((takeaway, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 w-1 h-1 rounded-full bg-accent shrink-0" />
                          <span className="leading-relaxed">{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Multi-Section Article Prose */}
                  <div className="space-y-8 pt-4">
                    {activeModalArticle.sections.map((section, idx) => (
                      <div key={idx} className="space-y-4">
                        <h4 className="text-xl sm:text-2xl font-display font-medium text-foreground tracking-tight">
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
                      </div>
                    ))}
                  </div>

                  {/* Academic Context Footnote */}
                  <div className="pt-8 border-t border-border text-xs text-muted-foreground space-y-1">
                    <p className="font-medium text-foreground">Academic Citation &amp; Context:</p>
                    <p>{activeModalArticle.academicContext}</p>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="px-6 py-4 border-t border-border bg-surface flex items-center justify-between shrink-0">
                  <button
                    type="button"
                    onClick={() => handleCopyArticleLink(activeModalArticle)}
                    className="inline-flex items-center gap-1.5 text-[10px] font-medium text-foreground hover:text-accent uppercase tracking-widest cursor-pointer transition-colors"
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
