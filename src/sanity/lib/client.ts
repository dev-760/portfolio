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
  bullets?: string[];
  trailing?: string[];
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
  keyTakeaways?: string[];
  academicContext?: string;
  intro?: string[];
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
    description:
      "I write out my steps before I trust a result, and re-check the figures on accounting, economics, mathematics, and statistics exercises.",
    icon: "calculate",
    order: 1,
  },
  {
    id: "process-coordination",
    group: "analysis",
    name: "Process & Schedule Coordination",
    description:
      "I keep tasks, handoffs, and deadlines visible to everyone involved, from coursework deadlines to shoot days at EL25 Studio.",
    icon: "schedule",
    order: 2,
  },
  {
    id: "structured-problem-solving",
    group: "analysis",
    name: "Structured Problem Solving",
    description:
      "I take a management case apart into steps I can verify one at a time, then answer the question it is actually asking.",
    icon: "account_tree",
    order: 3,
  },
  {
    id: "communication-teamwork",
    group: "analysis",
    name: "Communication & Academic Debate",
    description:
      "I practice debate and presentations in class, and I have worked with clients and production staff when a brief needed clarifying.",
    icon: "forum",
    order: 4,
  },
  {
    id: "research-learning",
    group: "analysis",
    name: "Academic Research & Synthesis",
    description:
      "I read management and economics material, then turn my notes into short written pieces instead of leaving them scattered.",
    icon: "menu_book",
    order: 5,
  },
  {
    id: "attention-detail",
    group: "analysis",
    name: "Accuracy and Checking",
    description:
      "I check totals, tables, filenames, and citations before I treat any assignment or document as finished.",
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
      "Completed a Baccalaureate in Physical Science (English Option).",
    order: 1,
  },
  {
    id: "02",
    company:
      "Faculty of Legal, Economic and Social Sciences (FSJES) Aïn Chock, Hassan II University of Casablanca.",
    role: "Licence in Business Administration",
    period: "2026 to present",
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
    role: "Production Trainee · Commercial Advertising",
    period: "Jul – Sep 2023",
    location: "Casablanca, Morocco",
    stack: [
      "Call Sheets",
      "Production Support",
      "Video Editing",
      "Client Communication",
    ],
    description:
      "During a three-month traineeship, I worked through different parts of commercial production. I prepared call sheets and equipment lists before shoots, assisted with on-set work, edited footage afterwards, and stayed in contact with clients and the production team as projects moved toward delivery.",
    order: 1,
  },
  {
    id: "02",
    company: "Ministry of Youth, Culture and Communication",
    role: "Volunteer · Motatawi3 National Program",
    period: "Jul – Aug 2024",
    location: "Morocco",
    stack: [
      "Youth Activities",
      "Workshop Support",
      "Community Outreach",
      "Teamwork",
    ],
    description:
      "I volunteered with the Motatawi3 National Program, helping with activities aimed at young people in local communities. My role included supporting workshops, taking part in awareness sessions, and working with organizers and other volunteers throughout the program.",
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
    "A look at process changes through two things I’ve encountered so far: commercial production and management coursework. The question behind the note is simple: what do you miss when you try to improve something before understanding how it already works?",
  thesis:
    "Before changing a workflow, observe how people use it and why its steps exist.",
  tags: ["Systems Thinking", "Operations Management", "Workflow Design", "Chesterton's Fence"],
  intro: [
    "I keep coming back to this idea when I study management. It is easy to look at a process from the outside and immediately see things that could be changed. A meeting seems unnecessary. A form takes too long. Two people are involved where one might be enough.",
    "But seeing a step does not always mean understanding it.",
  ],
  sections: [
    {
      heading: "Look at the Work Before the Process",
      paragraphs: [
        "A workflow on paper can look very different from the way people actually use it.",
        "During my time in commercial production, I noticed that work did not always move according to the sequence written down beforehand. People communicated directly, adjusted to what was happening on set, and sometimes found quicker ways to pass information between each other.",
        "That made me think differently about process design. A workaround is not automatically a sign that a system is badly designed. Sometimes it exists because the official process does not account for something that happens in real work.",
      ],
    },
    {
      heading: "The Reason Behind the Extra Step",
      paragraphs: [
        "This is where I find the idea behind Chesterton’s Fence useful.",
        "If a step looks unnecessary, the first question should be why it is there. A second approval might slow something down, but it could also exist because an earlier mistake was expensive. A manual check might seem outdated, but it may catch something that an automated process does not.",
        "That does not mean every old process should stay in place. It means the reason for a process should be understood before deciding what to remove.",
      ],
    },
    {
      heading: "What I’m Learning to Look For",
      paragraphs: [
        "When I work through a management case or observe a real workflow, I’m starting to pay attention to a few things:",
      ],
      bullets: [
        "Where does the work actually slow down?",
        "Which steps are written down, and which ones happen through informal communication?",
        "What do people do when the normal process does not work?",
        "Why does a particular check or handoff exist?",
        "Does a proposed improvement solve the original problem without creating another one?",
      ],
      trailing: [
        "I’m not treating these as a finished method. They are questions I’m learning to ask.",
        "For me, that is the more interesting part of process improvement. Before trying to make a system faster or simpler, I want to understand what the people inside that system are already doing and what the existing process is trying to achieve.",
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
      "A short note on why it helps to watch how work actually happens before changing the process around it.",
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
          "When observing live workflows, whether managing inventory in a storage room or coordinating equipment loading before sunrise, the real bottleneck is rarely a shortage of software. It is ambiguous handoffs, incomplete asset tagging, or conflicting priorities between team members.",
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
      "Some thoughts on the similarities I’ve noticed between studying physical science and working through quantitative subjects in business.",
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
          "Transitioning from the French-track Moroccan Baccalauréat in Physical Sciences to a Business Administration degree revealed a profound overlap. Many students view economics as purely qualitative, but its core engines (marginal utility, elasticity, cost optimization) are fundamentally mathematical.",
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
