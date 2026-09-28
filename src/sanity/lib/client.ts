import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../env";
import { educationQuery, experienceQuery, monographsQuery, featuredMonographQuery } from "./queries";

export const isSanityConfigured = Boolean(projectId && projectId.trim() !== "");

export const client = createClient({
  apiVersion,
  dataset,
  projectId: projectId || "placeholder",
  useCdn,
});

export interface EducationData {
  id: string;
  company: string;
  role: string;
  period: string;
  status?: string;
  stack: string[];
  description: string;
  order?: number;
}

export interface ExperienceData {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  status?: string;
  stack: string[];
  description: string;
  order?: number;
}

export interface MonographSection {
  heading: string;
  paragraphs: string[];
}

export interface MonographData {
  id: string;
  slug: string;
  isFeatured?: boolean;
  category: "operations" | "management" | "finance" | "academics";
  categoryLabel: string;
  categoryBadgeClass?: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  thesis: string;
  tags: string[];
  keyTakeaways: string[];
  academicContext: string;
  sections: MonographSection[];
  order?: number;
}

// Fallback Education Data (Default Verified Content)
export const fallbackEducation: EducationData[] = [
  {
    id: "01",
    company: "Prince Moulay Abdellah High School",
    role: "Baccalaureate in Physical Science (English Option)",
    period: "Class of 2026",
    status: "Completed",
    stack: [
      "Calculus & Applied Mathematics",
      "Physical Sciences",
      "Scientific Problem Solving",
      "English Bilingual Proficiency",
      "Empirical Data Analysis",
    ],
    description:
      "Graduated with distinction with a specialized scientific focus in Physics and Chemistry combined with the English International Option. Cultivated rigorous mathematical problem-solving, analytical discipline, and bilingual fluency.",
    order: 1,
  },
  {
    id: "02",
    company: "Faculté des Sciences Juridiques, Économiques et Sociales (FSJES) Aïn Chock · Université Hassan II",
    role: "Licence in Business Administration",
    period: "2026 — Present",
    status: "Current Enrollment · First-Year",
    stack: [
      "General Accounting",
      "Principles of Management",
      "Micro & Macroeconomics",
      "Descriptive Statistics",
      "Mathematics for Economics",
      "Business Law & Governance",
      "Operational Workflows",
    ],
    description:
      "Developing foundational rigor across enterprise management, organizational dynamics, quantitative financial modeling, and commerce. Balancing academic theory with real-world execution discipline.",
    order: 2,
  },
];

// Fallback Experience Data (Default Verified Content)
export const fallbackExperience: ExperienceData[] = [
  {
    id: "01",
    company: "EL25 Studio",
    role: "Production Trainee — Commercial Ad Production",
    period: "Jul — Sep 2023",
    location: "Casablanca, Morocco",
    stack: [
      "Commercial Ad Logistics",
      "Camera & Lighting Staging",
      "Premiere Pro Ingest",
      "Audio Sync",
      "Call Sheet Scheduling",
    ],
    description:
      "Assisted camera and lighting technicians during on-location commercial shoots in Casablanca, staging reflectors, cabling, and lens kits under senior crew direction. Handled daily digital asset ingest in Premiere Pro: offloaded raw camera cards, verified checksums, synced external audio tracks, and assembled preliminary rough cuts.",
    order: 1,
  },
  {
    id: "02",
    company: "Ministry of Youth, Culture and Communication (MJCC)",
    role: "Volunteer, Motatawi3 National Program",
    period: "Jul — Aug 2024",
    location: "Casablanca, Morocco",
    status: "Civic Outreach",
    stack: [
      "Workshop Logistics",
      "Youth Outreach",
      "Attendance Tracking",
      "Peer Facilitation",
    ],
    description:
      "Co-facilitated 4 civic engagement workshops for groups of 20–30 secondary students in Casablanca, preparing printed activity handouts and organizing discussion stations. Managed on-site student registration and logistics alongside regional program coordinators across weekend sessions.",
    order: 2,
  },
];

// Fallback Featured Monograph
export const fallbackFeaturedMonograph: MonographData = {
  id: "feat-systems",
  slug: "what-commercial-sets-taught-me-about-process-optimization",
  isFeatured: true,
  category: "operations",
  categoryLabel: "OPERATIONS & FIELD OBSERVATION",
  categoryBadgeClass: "bg-muted text-foreground border-border",
  date: "SEP 2026",
  readTime: "6 MIN READ",
  title: "What Commercial Sets Taught Me About Process Optimization",
  description:
    "Why informal habits keep production crews moving faster than rigid spreadsheets, and what business students should observe before proposing new systems.",
  thesis:
    "Operational leverage begins with observing informal human coordination rather than decreeing new software tools. On a fast-paced set or in a warehouse, unglamorous observation reveals the micro-friction that summary dashboards obscure.",
  tags: ["Systems Thinking", "Operations Management", "Workflow Design", "Field Observation"],
  keyTakeaways: [
    "Premature tool introduction digitizes existing bottlenecks instead of resolving them.",
    "Frontline teams rely on informal glance signals and direct trust when deadlines tighten.",
    "Understanding the reason behind an existing habit prevents costly restructuring errors.",
  ],
  academicContext:
    "Field reflection connecting coursework in Principles of Management with media coordination at EL25 Studio.",
  sections: [
    {
      heading: "1. The Premature Tool Trap",
      paragraphs: [
        "In management coursework, we study flowcharting and standardized procedures. But in real operations, there is an instinctive urge to solve friction by introducing another tool—a new spreadsheet, a messaging channel, or extra signoffs.",
        "On commercial production sets, premature intervention is one of the quickest ways to stall momentum. When a process involves multiple people under time pressure, adding software layers before understanding why delays happen only increases friction.",
      ],
    },
    {
      heading: "2. The Informal Coordination Highway",
      paragraphs: [
        "Every working team operates on two levels: the formal process described in handbooks, and the informal habits that actually keep tasks moving.",
        "During commercial shoots at EL25 Studio, when call sheet schedules tightened before sunset, the crew did not stop to re-format spreadsheets. They relied on quick hand signals and direct trust between camera assistants, gaffers, and directors. A coordinator's job was not to impose artificial complexity, but to ensure equipment and batteries were physically ready where needed.",
      ],
    },
    {
      heading: "3. Observing Before Proposing Changes",
      paragraphs: [
        "Chesterton's principle reminds us that if you encounter an apparent bottleneck in a workflow, you must first learn why it was put there before deciding to remove it. An extra verification step may seem tedious until you realize it prevents expensive reshoots or billing discrepancies.",
        "As business administration students, our priority during internships should be quiet, rigorous observation. We learn more by tracking where handoffs fail and asking operators about their daily friction than by preparing theoretical slide decks from behind a desk.",
      ],
    },
  ],
};

// Fallback Monographs List
export const fallbackMonographs: MonographData[] = [
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

// Asynchronous getters with automatic fallback
export async function getEducation(): Promise<EducationData[]> {
  if (!isSanityConfigured) return fallbackEducation;
  try {
    const data = await client.fetch<EducationData[]>(educationQuery);
    return data && data.length > 0 ? data : fallbackEducation;
  } catch (error) {
    console.warn("Failed to fetch education from Sanity, falling back to static data:", error);
    return fallbackEducation;
  }
}

export async function getExperience(): Promise<ExperienceData[]> {
  if (!isSanityConfigured) return fallbackExperience;
  try {
    const data = await client.fetch<ExperienceData[]>(experienceQuery);
    return data && data.length > 0 ? data : fallbackExperience;
  } catch (error) {
    console.warn("Failed to fetch experience from Sanity, falling back to static data:", error);
    return fallbackExperience;
  }
}

export async function getMonographs(): Promise<MonographData[]> {
  if (!isSanityConfigured) return fallbackMonographs;
  try {
    const data = await client.fetch<MonographData[]>(monographsQuery);
    return data && data.length > 0 ? data : fallbackMonographs;
  } catch (error) {
    console.warn("Failed to fetch monographs from Sanity, falling back to static data:", error);
    return fallbackMonographs;
  }
}

export async function getFeaturedMonograph(): Promise<MonographData> {
  if (!isSanityConfigured) return fallbackFeaturedMonograph;
  try {
    const data = await client.fetch<MonographData>(featuredMonographQuery);
    return data || fallbackFeaturedMonograph;
  } catch (error) {
    console.warn("Failed to fetch featured monograph from Sanity, falling back to static data:", error);
    return fallbackFeaturedMonograph;
  }
}

export function getCategoryBadgeClass(category: string): string {
  return "border border-border bg-muted/80 text-foreground";
}
