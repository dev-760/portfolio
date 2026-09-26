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
      "Commercial Ad Production",
      "On-Set Filming",
      "Video Editing",
      "Client Collaboration",
      "Timeline Delivery",
    ],
    description:
      "Hands-on experience in commercial ad production for brand campaigns. Assisted in on-set filming and camera logistics, carried out post-production video editing, and worked directly with clients to ensure creative deliverables matched campaign briefs under tight broadcast deadlines.",
    order: 1,
  },
  {
    id: "02",
    company: "Ministry of Youth, Culture and Communication (MJCC)",
    role: "Volunteer, Motatawi3 National Program",
    period: "Jul — Aug 2024",
    location: "Morocco",
    status: "Civic Outreach",
    stack: [
      "Youth Mentorship",
      "Community Outreach",
      "Workshop Planning",
      "Civic Engagement",
    ],
    description:
      "Participated in a national volunteer initiative for youth empowerment and community engagement. Organized workshops, mentorship activities, and awareness sessions in local communities. Collaborated with organizations to deliver practical skill development programs.",
    order: 2,
  },
];

// Fallback Featured Monograph
export const fallbackFeaturedMonograph: MonographData = {
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

// Fallback Monographs List
export const fallbackMonographs: MonographData[] = [
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
  switch (category) {
    case "operations":
      return "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/25";
    case "management":
      return "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/25";
    case "finance":
      return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25";
    case "academics":
      return "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/25";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
}
