import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../env";
import {
  educationQuery,
  experienceQuery,
  monographsQuery,
  featuredMonographQuery,
  skillsQuery,
} from "./queries";

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

export interface SkillData {
  id: string;
  group: "analysis" | "software";
  name: string;
  description: string;
  icon?: string;
  tags?: string[];
  order?: number;
}

export const fallbackSkills: SkillData[] = [
  {
    id: "analytical-thinking",
    group: "analysis",
    name: "Quantitative & Analytical Thinking",
    description: "I work through accounting, economics, mathematics, and statistics exercises by showing the steps and checking the totals.",
    icon: "calculate",
    order: 1,
  },
  {
    id: "process-coordination",
    group: "analysis",
    name: "Process & Schedule Coordination",
    description: "I keep tasks, handoffs, and deadlines visible across coursework and commercial production work.",
    icon: "schedule",
    order: 2,
  },
  {
    id: "structured-problem-solving",
    group: "analysis",
    name: "Structured Problem Solving",
    description: "I break management case studies and quantitative exercises into steps I can check one by one.",
    icon: "account_tree",
    order: 3,
  },
  {
    id: "communication-teamwork",
    group: "analysis",
    name: "Communication & Academic Debate",
    description: "I practice debate and presentations in class and work with clients and production staff when a brief needs clarification.",
    icon: "forum",
    order: 4,
  },
  {
    id: "research-learning",
    group: "analysis",
    name: "Academic Research & Synthesis",
    description: "I read management and economics material, then turn notes into short monographs and coursework reflections.",
    icon: "menu_book",
    order: 5,
  },
  {
    id: "attention-detail",
    group: "analysis",
    name: "Accuracy and Checking",
    description: "I check totals, tables, filenames, and citations before treating an assignment or document as finished.",
    icon: "check_circle",
    order: 6,
  },
  {
    id: "microsoft-365",
    group: "software",
    name: "Microsoft 365",
    description: "I use Excel for formulas and tables, Word for reports, and PowerPoint for structured presentations.",
    tags: ["Excel Formulas", "Data Tables", "PowerPoint", "Word Documentation"],
    order: 7,
  },
  {
    id: "digital-workspaces",
    group: "software",
    name: "Digital Workspaces",
    description: "I use Notion and Google Workspace to organize notes, files, and shared work.",
    tags: ["Notion", "Google Workspace", "Digital Files"],
    order: 8,
  },
];

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
      "Completed a Baccalaureate in Physical Science (English Option). TODO(hassan): Which subjects, result, or assessed work should this entry include?",
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
      "Current first-year Licence in Business Administration. Coursework includes management, general accounting, microeconomics, macroeconomics, statistics, mathematics for economics, and business law.",
    order: 2,
  },
];

// Fallback Experience Data (Default Verified Content)
export const fallbackExperience: ExperienceData[] = [
  {
    id: "01",
    company: "EL25 Studio",
    role: "Production Trainee — Commercial Ad Production",
    period: "Jul – Sep 2023",
    location: "Casablanca, Morocco",
    stack: [
      "Commercial Ad Production",
      "On-Set Filming",
      "Video Editing",
      "Client Collaboration",
    ],
    description:
      "What it was: a production traineeship at EL25 Studio in Casablanca from Jul – Sep 2023. My role: support commercial ad production across filming, editing, and client collaboration. What I did: assisted on set, edited video, and worked with clients on production deliverables. Outcome: TODO(hassan): What specific deliverable, responsibility, or result can you verify from this traineeship?",
    order: 1,
  },
  {
    id: "02",
    company: "Ministry of Youth, Culture and Communication (MJCC)",
    role: "Volunteer, Motatawi3 National Program",
    period: "Jul – Aug 2024",
    location: "Morocco",
    status: "Civic Outreach",
    stack: [
      "Youth Mentorship",
      "Community Outreach",
      "Workshop Planning",
      "Civic Engagement",
    ],
    description:
      "What it was: volunteer work in the national Motatawi3 program under the Ministry of Youth, Culture and Communication from Jul – Aug 2024. My role: support youth empowerment and community outreach activities. What I did: helped organize workshops and worked with local organizers and volunteers. Outcome: TODO(hassan): Which workshop, activity, or participant outcome can you verify?",
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
  readTime: "3 MIN READ",
  title: "Understanding Systems Before Improving Them",
  description:
    "A reflection on why process changes should begin with observation, based on notes from commercial shoots and first-year management coursework.",
  thesis:
    "Before changing a workflow, observe how people use it and why its steps exist.",
  tags: ["Systems Thinking", "Operations Management", "Workflow Design", "Chesterton's Fence"],
  keyTakeaways: [
    "Observe a process before proposing a new tool.",
    "Ask what a workaround protects before removing it.",
    "Record informal handoffs alongside the formal workflow.",
  ],
  academicContext:
    "Written alongside first-year coursework: Principles of Management and Descriptive Statistics, FSJES Aïn Chock.",
  sections: [
    {
      heading: "1. The Premature Optimization Trap",
      paragraphs: [
        "Management writing has a bias toward intervention. When a team hits delays, handoff errors, or rising costs, the standard reflex, one I recognize in myself, is to restructure immediately: add a software tool, mandate daily meetings, redraw the reporting lines.",
        "Systems writing warns about the opposite: intervening in a complex process before understanding its informal stabilizers tends to fix one local symptom while creating two new problems somewhere else.",
      ],
    },
    {
      heading: "2. Mapping the Informal Highway",
      paragraphs: [
        "Every functioning organization operates on two parallel planes: the formal organizational chart (the theoretical workflow described in handbooks) and the informal highway (the direct human relationships, ad-hoc WhatsApp groups, and tacit agreements that actually move work forward).",
        "While assisting on commercial shoots at EL25 Studio, I watched this happen. When shoot schedules tightened, the crew did not consult formal contingency binders; they relied on nuanced glance signals between camera operators, gaffers, and directors. If an overzealous coordinator attempted to force strict adherence to a rigid theoretical spreadsheet, production cadence immediately collapsed.",
      ],
    },
    {
      heading: "3. Chesterton's Fence in Business Operations",
      paragraphs: [
        "The philosopher G.K. Chesterton formulated a famous operational rule: if you encounter a fence in the middle of a road and cannot discern why it was erected, the one thing you must never do is tear it down. First discover why the fence was put there in the first place; once you understand its purpose, you may judge whether it is obsolete.",
        "In operations, process 'bottlenecks' often serve as Chesterton's fences. A tedious two-person signoff step that appears to slow down invoicing may actually be the sole barrier preventing costly billing discrepancies. Removing the friction without understanding the vulnerability invites catastrophe.",
      ],
    },
    {
      heading: "4. An Observation Checklist I'm Testing",
      paragraphs: [
        "Before changing a workflow, this is the checklist I would try, borrowed from the Gemba walk literature:",
        "1. Gemba Shadowing: Spend dedicated, non-evaluative hours sitting directly with the operators. Observe where work stalls, where papers are stacked, and where digital tools are circumvented.",
        "2. Friction Logging: Ask frontline team members: 'What single task in your morning feels most unnecessarily exhausting?' The answer almost never matches what leadership suspects.",
        "3. Structural Interrogation: Map the feedback loops. When variable X increases, what dampens it? What amplifies it? Only after this causal loop diagram is clear should tool evaluation begin.",
        "The test I would apply: does the improved system still work a month later, without someone firefighting it every day?",
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
    readTime: "4 MIN READ",
    title: "Why Process Improvement Starts With Observation",
    description:
      "Before restructuring workflows or introducing new tools, spend dedicated time observing how work actually happens in real settings.",
    thesis:
      "Summary dashboards smooth away the micro-delays that only show up when you watch the work happen.",
    tags: ["Process Mapping", "Gemba Walks", "Workflow Triage", "Operational Discipline"],
    keyTakeaways: [
      "Summary dashboards abstract away human micro-hesitations and workarounds.",
      "Frontline workers develop brilliant local hacks that should inform future systems.",
      "Diagnostic interviews with the people doing the work make later changes easier to accept.",
    ],
    academicContext:
      "Coursework reflection connected to Principles of Management, FSJES Aïn Chock.",
    sections: [
      {
        heading: "The Disconnect Between Theory and the Floor",
        paragraphs: [
          "Standard operational textbooks emphasize flowcharts, KPI matrices, and Lean frameworks. Used only from behind a desk, they can create an illusion of control.",
          "When observing live workflows—whether managing inventory in a storage room or coordinating equipment loading before sunrise—the real bottleneck is rarely a shortage of software. It is ambiguous handoffs, incomplete asset tagging, or conflicting priorities between team members.",
        ],
      },
      {
        heading: "Actionable Takeaway for Business Students",
        paragraphs: [
          "The one thing a first-year student can offer on an internship is unglamorous observation. Walk the process yourself before proposing the slide deck.",
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
    date: "SEP 2026",
    readTime: "3 MIN READ",
    title: "From Physical Science to Economics: Continuity of Analytical Thinking",
    description:
      "A reflection on links between physical science coursework and quantitative business subjects.",
    thesis:
      "Physical science and economics both ask how systems respond to changing conditions. This note compares the questions, not the subjects themselves.",
    tags: ["Quantitative Rigor", "Microeconomics", "Mathematical Modeling", "Scientific Method"],
    keyTakeaways: [
      "Equilibrium is a useful comparison point when studying supply and demand.",
      "Rates of change help explain why marginal analysis matters.",
      "Testing a claim is different from assuming that two events are related.",
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
          "A scientist's habit of asking how you would test a claim is a useful check against anecdotal optimism in business decisions. I am still building that toolkit; this essay is partly about why I bother.",
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

export async function getSkills(): Promise<SkillData[]> {
  if (!isSanityConfigured) return fallbackSkills;
  try {
    const data = await client.fetch<SkillData[]>(skillsQuery);
    return data && data.length > 0 ? data : fallbackSkills;
  } catch (error) {
    console.warn("Failed to fetch skills from Sanity, falling back to static data:", error);
    return fallbackSkills;
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
