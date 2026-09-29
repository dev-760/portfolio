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
  tagline: "First-year Business Administration student at FSJES Aïn Chock, studying management, accounting, and practical execution.",
  personalStatement:
    "I am an undergraduate student pursuing a Licence in Business Administration at FSJES Aïn Chock, Université Hassan II de Casablanca.\n\nMy studies focus on management principles, general accounting, micro and macroeconomics, quantitative methods, and business law.\n\nAlongside my coursework, I have experience in commercial ad production, on-set filming, video editing, and client collaboration from EL25 Studio, plus community work through the national Motatawi3 volunteer program.\n\nI work from concrete questions: how organizations make decisions, how accounting records them, and how daily work gets coordinated. I use spreadsheets and digital workflows to study those questions.",
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
      level: "Full Professional",
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
        "Building core competencies in microeconomics, organizational theory, general accounting, and quantitative methods at FSJES Aïn Chock.",
    },
    {
      label: "Financial & Quantitative",
      value: "Accounting & Analysis",
      description:
        "Mastering general accounting, cost analysis, descriptive statistics, and financial modeling in Excel.",
    },
    {
      label: "Operational Experience",
      value: "Ad Production & Media",
      description:
        "Commercial ad production, on-set filming, post-production video editing, and client delivery gained through traineeship at EL25 Studio.",
    },
  ],
  navigation: [
    { id: "home", label: "Home", href: "/#home" },
    { id: "about", label: "About", href: "/#about" },
    { id: "skills", label: "Skills", href: "/#skills" },
    { id: "experience", label: "Experience", href: "/#experience" },
    { id: "writing", label: "Monographs", href: "/#writing" },
    { id: "contact", label: "Contact", href: "/#contact" },
  ],
  sections: {
    about: [
      "I am a first-year student pursuing a Licence in Business Administration at the Faculté des Sciences Juridiques, Économiques et Sociales (FSJES) Aïn Chock, Université Hassan II de Casablanca.",
      "My academic program covers the essential pillars of modern commerce: management principles, general accounting, micro and macroeconomics, mathematics for economics, statistics, and business law.",
      "Before starting university, I completed my Baccalaureate in Physical Science (English Option) at Prince Moulay Abdellah High School, which gave me strong quantitative discipline and fluency in English.",
      "Outside the lecture hall, I have worked as a Production Trainee at EL25 Studio in Casablanca, supporting commercial ad production across on-set filming, video editing, and working directly with clients under tight deadlines.",
      "I also volunteered with the national Motatawi3 youth empowerment program under the Ministry of Youth, Culture and Communication, organizing community workshops and mentoring local youth.",
      "I enjoy combining academic business concepts with practical tools like Microsoft Excel, digital organization systems, and structured workflows to solve real-world problems.",
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
        details: "2026",
      },
    ],
    skills: [
      {
        category: "Management & Business",
        items: [
          "Principles of Management",
          "Organization Theory",
          "Operational Logistics",
          "Human Resource Basics",
          "Business Law Fundamentals",
          "Project Coordination",
        ],
      },
      {
        category: "Accounting & Finance",
        items: [
          "General Accounting",
          "Cost Analysis (Comptabilité Analytique)",
          "Descriptive Statistics",
          "Mathematics for Economics",
          "Personal Budgeting & Expense Tracking",
          "Financial Reporting Basics",
        ],
      },
      {
        category: "Productivity & Software",
        items: [
          "Microsoft Excel (Formulas, Tables, Modeling)",
          "Microsoft PowerPoint (Presentations)",
          "Microsoft Word (Reports & Documentation)",
          "Google Workspace",
          "Notion & Digital Workspaces",
          "Digital Skills & Collaboration Tools",
        ],
      },
      {
        category: "Analytical & Professional Skills",
        items: [
          "Quantitative Problem Solving",
          "Attention to Detail & Accuracy",
          "Schedule & Deadline Management",
          "Team Collaboration",
          "Public Speaking & Debating",
          "Independent Research",
        ],
      },
    ],
    experience: [
      {
        organization: "EL25 Studio",
        role: "Production Trainee, Commercial Ad Production",
        dates: "Jul – Sep 2023",
        location: "Casablanca, Morocco",
        tagline: "Commercial ad production, on-set filming, video editing, and client collaboration.",
        bullets: [
          "Prepared call sheets and equipment lists the day before each shoot",
          "Assisted camera, audio, and lighting setup on set",
          "Edited footage in post against the client brief",
          "Worked with clients and production staff to hit delivery dates",
        ],
        closing: "",
      },
    ],
    volunteering: {
      organization: "Ministry of Youth, Culture and Communication (MJCC)",
      role: "Volunteer, Motatawi3 Program",
      dates: "Jul – Aug 2024",
      skillTags: ["Mentorship", "Youth Education"],
      bullets: [
        "Helped organize workshops in the Motatawi3 program",
        "Ran awareness sessions with local organizers and volunteers",
        "Supported young people working through practical skills",
      ],
      closing: "",
    },
    achievements: [],
    contactMessage:
      "Open to internship conversations (targeting summer 2027, accounting or operations, Casablanca or remote) and academic collaboration.",
    projectsMessage:
      "Practical tools and applications built to solve everyday student and operational problems.",
  },
  projects: [],
};

export default profile;

