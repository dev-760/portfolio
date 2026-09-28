type NavItem = {
  id: string;
  label: string;
  href: string;
  enabled?: boolean;
};

type SkillCategory = {
  category: string;
  items: string[];
};

type TimelineEntry = {
  organization: string;
  organizationLink?: string;
  role: string;
  dates: string;
  location?: string;
  tagline?: string;
  skillTags?: string[];
  bullets: string[];
  closing: string;
};

type Achievement = {
  title: string;
  details?: string;
  dates?: string;
};

type Project = {
  title: string;
  link?: string;
  description: string;
  technologies: string[];
};

type Highlight = {
  label: string;
  value: string;
  description: string;
};

type EducationItem = {
  institution: string;
  degree: string;
  field?: string;
  details: string;
};

type Profile = {
  name: string;
  title: string;
  location: string;
  tagline: string;
  personalStatement: string;
  contact: {
    email: string;
    phone?: string;
  };
  languages: {
    name: string;
    level: string;
  }[];
  links: {
    label: string;
    href: string;
    icon?: string;
  }[];
  homeHighlights: Highlight[];
  navigation: NavItem[];
  sections: {
    about: string[];
    education: EducationItem[];
    skills: SkillCategory[];
    experience: TimelineEntry[];
    volunteering: TimelineEntry;
    achievementsIntro?: string;
    achievements: Achievement[];
    contactMessage: string;
    projectsMessage?: string;
  };
  projects: Project[];
};

const profile: Profile = {
  name: "Hassan Karasu",
  title: "Business Administration Student",
  location: "Casablanca, Morocco",
  tagline: "First-year undergraduate at FSJES Aïn Chock, Université Hassan II de Casablanca. Developing foundational discipline in management, general accounting, and quantitative methods.",
  personalStatement:
    "I am an undergraduate student in Business Administration at FSJES Aïn Chock, Université Hassan II de Casablanca.\n\nMy studies combine core management principles, general accounting, micro and macroeconomics, and descriptive statistics with hands-on coordination experience gained on commercial media sets at EL25 Studio and civic youth outreach with the Motatawi3 program.\n\nHaving completed a bilingual Baccalaureate in Physical Science, I approach business questions with an empirical mindset: examining raw figures, verifying balance sheet records, and using spreadsheets to model practical workflows.",
  contact: {
    email: "mail@hasankarasu.me",
  },
  languages: [
    {
      name: "Arabic",
      level: "Native",
    },
    {
      name: "English",
      level: "Full Professional (Bilingual Baccalaureate)",
    },
  ],
  links: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/hassan-karasu-a7485336b",
      icon: "linkedin",
    },
  ],
  homeHighlights: [
    {
      label: "Academic Foundation",
      value: "Management & Economics",
      description:
        "Building core foundations in microeconomics, organizational theory, general accounting, and quantitative methods at FSJES Aïn Chock.",
    },
    {
      label: "Financial & Quantitative",
      value: "Accounting & Analysis",
      description:
        "Working through double-entry bookkeeping, cost accounting basics, descriptive statistics, and spreadsheet modeling.",
    },
    {
      label: "Field Coordination",
      value: "Production Logistics",
      description:
        "On-location camera and lighting support, media ingest in Premiere Pro, and call sheet tracking gained at EL25 Studio.",
    },
  ],
  navigation: [
    { id: "home", label: "Home", href: "/#home" },
    { id: "about", label: "About", href: "/#about" },
    { id: "work", label: "Work", href: "/#work" },
    { id: "skills", label: "Skills", href: "/#skills" },
    { id: "experience", label: "Experience", href: "/#experience" },
    { id: "writing", label: "Monographs", href: "/#writing" },
    { id: "contact", label: "Contact", href: "/#contact" },
  ],
  sections: {
    about: [
      "I am a first-year student pursuing a Licence in Business Administration at the Faculté des Sciences Juridiques, Économiques et Sociales (FSJES) Aïn Chock, Université Hassan II de Casablanca.",
      "My transition from a high school background in physical science into business administration was intentional: I wanted to bring mathematical skepticism and empirical habits to management and financial accounting questions.",
      "In commercial media production at EL25 Studio, I assisted camera setups and managed raw footage ingest, learning firsthand how communication and schedule clarity keep dynamic teams moving forward.",
      "Through the national Motatawi3 volunteer program, I co-facilitated community workshops for secondary students in Casablanca, organizing discussion stations and attendance tracking.",
      "I focus on connecting university lecture theory with practical tools like Microsoft Excel formulas and structured data tables.",
    ],
    education: [
      {
        institution: "Faculté des Sciences Juridiques, Économiques et Sociales (FSJES) Aïn Chock",
        degree: "Licence in Business Administration",
        field: "First-year student",
        details: "Université Hassan II de Casablanca · In Progress",
      },
      {
        institution: "Prince Moulay Abdellah High School",
        degree: "Baccalaureate in Physical Science (English Option)",
        details: "Class of 2026",
      },
    ],
    skills: [
      {
        category: "Quantitative & Accounting",
        items: [
          "General Accounting (Journal & Ledger)",
          "Cost Accounting Basics (Comptabilité Analytique)",
          "Descriptive Statistics & Data Tables",
          "Mathematics for Economics",
          "Cash Flow & Budget Tracking",
        ],
      },
      {
        category: "Productivity & Software",
        items: [
          "Microsoft Excel (Formulas, Pivot Tables, Lookups)",
          "Google Workspace (Docs, Sheets, Drive)",
          "Microsoft PowerPoint (Presentations)",
          "Notion (Knowledge & Workspace Archives)",
          "Digital File Hygiene & Backups",
        ],
      },
      {
        category: "Operational Coordination",
        items: [
          "Call Sheet Scheduling & Timing",
          "Digital Asset Ingest & Audio Sync",
          "Equipment Staging & Checklist Management",
          "Workshop Logistics & Group Coordination",
          "Bilingual Documentation (FR / EN / AR)",
        ],
      },
    ],
    experience: [
      {
        organization: "EL25 Studio",
        role: "Production Trainee — Commercial Ad Production",
        dates: "Jul – Sep 2023",
        location: "Casablanca, Morocco",
        tagline: "Commercial ad production logistics, on-set camera assistance, and post-production ingest.",
        bullets: [
          "Assisted camera and lighting technicians during on-location commercial shoots in Casablanca, staging reflectors, cabling, and lens kits under senior crew direction.",
          "Handled daily digital asset ingest in Premiere Pro: offloaded raw camera cards, verified checksums, synced external audio tracks, and assembled preliminary rough cuts.",
          "Maintained daily call sheet schedules and gear checklists across shoot days to prevent equipment delays between location changes.",
        ],
        closing:
          "Media production coordination instilled accountability, technical precision, and practical discipline under hard broadcast deadlines.",
      },
    ],
    volunteering: {
      organization: "Ministry of Youth, Culture and Communication (MJCC)",
      role: "Volunteer, Motatawi3 Program",
      dates: "Jul – Aug 2024",
      skillTags: ["Civic Outreach", "Youth Mentorship"],
      bullets: [
        "Co-facilitated 4 civic engagement workshops for groups of 20–30 secondary students in Casablanca, preparing printed activity handouts and organizing discussion stations.",
        "Managed on-site student registration and logistics alongside regional program coordinators across weekend sessions.",
        "Led small peer discussion circles on study habits, basic digital tools, and transitioning into university programs.",
      ],
      closing: "",
    },
    achievements: [],
    contactMessage:
      "Seeking a summer 2025/2026 internship in operations, general accounting, or project coordination in Casablanca (available July – September). Open to discussing academic research and business projects.",
    projectsMessage:
      "Coursework models, operational coordination, and structured writing produced during my first year.",
  },
  projects: [],
};

export default profile;

