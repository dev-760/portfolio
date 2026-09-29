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
      "A report can tell you where a process is slow. Watching the work can show you why.",
    tags: ["Process Mapping", "Gemba Walks", "Workflow Triage", "Operational Discipline"],
    intro: [
      "When I first started studying process improvement, I naturally looked for the things that could be measured: time, output, costs, errors. Those numbers are useful, but they only show part of what is happening.",
      "A process can look efficient in a report and still be frustrating to the person doing the work.",
    ],
    sections: [
      {
        heading: "What the Numbers Leave Out",
        paragraphs: [
          "A dashboard might show that a task takes ten minutes. It does not necessarily show that the person doing it spends two of those minutes looking for missing information, waiting for a response, or figuring out which version of a file to use.",
          "Those small delays are easy to overlook because they rarely appear as their own category in a report.",
          "This is why I find direct observation useful. It adds details that are difficult to capture in a summary.",
        ],
      },
      {
        heading: "The Workarounds Are Information",
        paragraphs: [
          "People also adapt to the systems they work with.",
          "They create shortcuts, keep their own notes, send a quick message instead of using a formal channel, or maintain a second way of doing something because the first one is inconvenient.",
          "I used to see these workarounds mainly as signs that a process was not being followed properly. I now think they can also tell you something about the process itself. If several people have developed the same workaround, there may be a reason worth understanding.",
        ],
      },
      {
        heading: "A Simple Lesson",
        paragraphs: [
          "For me, the lesson is straightforward: **look at the work before trying to redesign it.**",
          "Ask the people doing it where they lose time. Watch what happens between the steps. Notice what gets written down, what gets remembered, and what gets communicated informally.",
          "The goal is not to replace measurement with observation. It is to use both. Numbers can show where to look. Observation can help explain what you find.",
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
      "Changing subjects did not mean starting from zero. Some ways of thinking stayed with me.",
    tags: ["Quantitative Rigor", "Microeconomics", "Mathematical Modeling", "Scientific Method"],
    intro: [
      "Moving from the French-track Moroccan Baccalauréat in Physical Sciences to Business Administration changed what I was studying, but not everything about how I approached a problem.",
      "In physical science, I was used to breaking a problem into variables, looking at how they affect each other, and asking what would happen if one of them changed. I started noticing a similar habit in economics, even though the systems and questions are different.",
    ],
    sections: [
      {
        heading: "Looking at What Changes",
        paragraphs: [
          "Supply and demand gave me one of the first clear examples. A change in price, supply, or demand does not happen in isolation. Something changes, other parts of the system respond, and the result depends on the relationships between them.",
          "That way of thinking felt familiar.",
          "The comparison has limits, of course. A market is not a physical system, and people do not behave like particles or chemical reactions. The useful part of the comparison is the habit of asking what changes, what responds, and what assumptions are being made.",
        ],
      },
      {
        heading: "From Calculations to Questions",
        paragraphs: [
          "The quantitative side of business also felt less unfamiliar than I expected. Mathematics and statistics are used differently from physics, but they still require me to work carefully with variables, relationships, and evidence.",
          "That has made me more interested in the question behind a calculation. What is being measured? What does the result actually tell me? What would make the conclusion change?",
          "I’m still developing this way of thinking through economics, statistics, accounting, and mathematics. For now, the main connection I see is not between the subjects themselves, but between the habits they ask me to develop.",
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
