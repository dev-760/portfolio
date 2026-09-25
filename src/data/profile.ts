export type NavItem = {
  id: string;
  label: string;
  href: string;
  enabled?: boolean;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type TimelineEntry = {
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

export type Achievement = {
  title: string;
  details?: string;
  dates?: string;
};

export type Project = {
  title: string;
  link?: string;
  description: string;
  technologies: string[];
};

export type Highlight = {
  label: string;
  value: string;
  description: string;
};

export type EducationItem = {
  institution: string;
  degree: string;
  field?: string;
  details: string;
};

export type Profile = {
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

export const profile: Profile = {
  name: "Hassan Karasu",
  title: "Business Administration Student",
  location: "Casablanca, Morocco",
  tagline: "First-year Business Administration student at FSJES Aïn Chock, passionate about management, accounting, and practical execution.",
  personalStatement:
    "I am an undergraduate student pursuing a Licence in Business Administration at FSJES Aïn Chock, Université Hassan II de Casablanca.\n\nMy studies focus on building strong foundations across management principles, general accounting, micro and macroeconomics, quantitative methods, and business law.\n\nAlongside my academic coursework, I have hands-on experience in production logistics and coordination from EL25 Studio, as well as community engagement through the national Motatawi3 volunteer program.\n\nI am driven by a practical mindset: understanding how organizations work, analyzing figures with precision, and using modern tools like spreadsheets and digital workflows to solve real operational problems.",
  contact: {
    email: "me@hassankarasu.dev",
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
        "Mastering general accounting (comptabilité générale), cost analysis, descriptive statistics, and financial modeling in Excel.",
    },
    {
      label: "Operational Experience",
      value: "Production & Coordination",
      description:
        "Real-world logistics, vendor management, and schedule delivery gained through hands-on traineeship at EL25 Studio.",
    },
  ],
  navigation: [
    { id: "home", label: "Home", href: "/#home" },
    { id: "about", label: "About", href: "/#about" },
    { id: "work", label: "Work", href: "/#work" },
    { id: "skills", label: "Skills", href: "/#skills" },
    { id: "experience", label: "Experience", href: "/#experience" },
    { id: "writing", label: "Writing", href: "/#writing" },
    { id: "contact", label: "Contact", href: "/#contact" },
  ],
  sections: {
    about: [
      "I am a first-year student pursuing a Licence in Business Administration at the Faculté des Sciences Juridiques, Économiques et Sociales (FSJES) Aïn Chock, Université Hassan II de Casablanca.",
      "My academic program covers the essential pillars of modern commerce: management principles, general accounting, micro and macroeconomics, mathematics for economics, statistics, and business law.",
      "Before starting university, I completed my Baccalaureate in Physical Science (English Option) at Prince Moulay Abdellah High School, which gave me strong quantitative discipline and fluency in English.",
      "Outside the lecture hall, I have worked as a Production Trainee at EL25 Studio in Casablanca, coordinating logistics, call sheets, and client deliverables for commercial video shoots under tight deadlines.",
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
          "Comptabilité Générale (General Accounting)",
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
        role: "Production Trainee",
        dates: "Jul – Sep 2023",
        location: "Casablanca, Morocco",
        tagline: "Commercial content production for brands and digital influencers.",
        bullets: [
          "Supported pre-production, on-set logistics, and post-production prep for digital ads, branded videos, and influencer campaigns",
          "Contributed to concept development, scriptwriting, and visual planning tailored to each client's brand identity and audience",
          "Assisted with camera and lighting setup and coordinated on set with creative directors, technical crew, and clients",
          "Helped with footage review, editing preparation, and continuity checks",
          "Delivered under tight timelines using a four-phase workflow: Idea → Plan → Produce → Deliver",
        ],
        closing:
          "Production taught me to manage moving parts, vendors, and deadlines, the same discipline I now bring to scoping and delivering automation projects.",
      },
    ],
    volunteering: {
      organization: "Ministry of Youth, Culture and Communication (MJCC)",
      role: "Volunteer, Motatawi3 Program",
      dates: "Jul – Aug 2024",
      skillTags: ["Mentorship", "Youth Education"],
      bullets: [
        "Took part in a national volunteer initiative for youth empowerment and community outreach",
        "Helped plan and run workshops, mentorship activities, and awareness campaigns in underserved communities",
        "Worked with local organizations and volunteers to deliver programs on civic responsibility and skill development",
        "Supported youth in learning, creative thinking, and career exploration",
      ],
      closing: "",
    },
    achievements: [],
    contactMessage:
      "Open to business administration internships, project inquiries, and academic or professional collaborations. Feel free to get in touch.",
    projectsMessage:
      "Practical tools and applications built to solve everyday student and operational problems.",
  },
  projects: [],
};

export default profile;

