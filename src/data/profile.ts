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
  bullets: string[];
  closing: string;
};

export type Achievement = {
  title: string;
  details?: string;
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
    phone: string;
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
  tagline: "Solving practical business problems with AI and automation.",
  personalStatement:
    "My work sits at the intersection of business, artificial intelligence, and automation.\n\nAs a Business Administration student, I'm interested in understanding practical problems and turning them into useful systems by leveraging AI.\n\nI enjoy solving problems I encounter, experimenting with AI to improve workflows, and exploring how technology can make everyday work more efficient.\n\nMy goal is to continue developing both sides of that equation: understanding the business problem and having the ability to implement AI solutions.",
  contact: {
    email: "me@hassankarasu.dev",
    phone: "+212 779 898 873",
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
    {
      name: "French",
      level: "Working Proficiency",
    },
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/dev-760",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/hassan-karasu-a7485336b",
      icon: "linkedin",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/v6.i6_",
      icon: "instagram",
    },
  ],
  homeHighlights: [
    {
      label: "AI Solutions",
      value: "AI & Tools Integration",
      description:
        "Building practical workflows and tools around real problems, using AI to turn concepts into functional systems without traditional coding.",
    },
    {
      label: "Automation",
      value: "Workflow Efficiency",
      description:
        "Using AI, automation, and modern low-code tools to simplify processes, reduce repetitive work, and improve productivity.",
    },
    {
      label: "Application",
      value: "Business Strategy",
      description:
        "Exploring how emerging tech and AI can be applied directly to real business operations and everyday problem-solving.",
    },
  ],
  navigation: [
    { id: "home", label: "Home", href: "/#home" },
    { id: "about", label: "About", href: "/#about" },
    { id: "statement", label: "Statement", href: "/#statement" },
    { id: "skills", label: "Skills", href: "/#skills" },
    { id: "experience", label: "Experience", href: "/#experience" },
    { id: "projects", label: "Projects", href: "/#projects" },
    { id: "contact", label: "Contact", href: "/#contact" },
  ],
  sections: {
    about: [
      "I like solving problems by building things.",
      "I'm currently studying Business Administration, while my interests sit at the intersection of business and technology — particularly artificial intelligence, automation, and productivity.",
      "When I encounter a problem that can be solved with a tool, I prefer to build it.",
      "That might mean creating a personal finance application, automating a repetitive workflow, connecting different services, or using AI to make a process faster and more useful.",
      "I enjoy taking an idea from a simple problem to a working solution — figuring out what needs to be built, designing the system, implementing it, and improving it through use.",
      "My focus is increasingly on the space between business problems and technical solutions: understanding how something works, identifying what can be improved, and building systems that makes a practical difference.",
      "I'm currently developing my understanding of business while continuing to build AI tools, experiment with AI, and explore new ways technology can improve how people and businesses work.",
    ],
    education: [
      {
        institution: "FSJES Aïn Chock",
        degree: "Licence in Business Administration",
        field: "First-year student",
        details: "Morocco · In Progress",
      },
      {
        institution: "Prince Moulay Abdellah High School",
        degree: "Baccalaureate",
        field: "Physical Science - English Option",
        details: "2026",
      },
    ],
    skills: [
      {
        category: "AI & Automation",
        items: [
          "AI Tools & Platforms",
          "AI-Assisted Development",
          "Business Process Automation",
          "AI Workflow Design",
          "AI Integration",
          "Prompt Engineering",
        ],
      },
      {
        category: "Systems & Architecture",
        items: [
          "Web Application Development",
          "API Integration",
          "Database Fundamentals",
          "Git & GitHub",
          "Cloud Deployment",
          "Systems Architecture",
        ],
      },
      {
        category: "Business & Productivity",
        items: [
          "Microsoft 365",
          "Excel",
          "Word",
          "PowerPoint",
          "Business Analysis",
          "Process Optimization",
          "Workflow Design",
        ],
      },
      {
        category: "Problem Solving",
        items: [
          "Systems Thinking",
          "Analytical Thinking",
          "Process Improvement",
          "Technical Problem Solving",
          "Research & Independent Learning",
          "Attention to Detail",
        ],
      },
    ],
    experience: [
      {
        organization: "Independent",
        role: "AI Solutions Builder",
        dates: "2024 – Present",
        bullets: [
          "Identify repetitive, inefficient, or underserved problems and turn them into functional solutions",
          "Build web applications and practical tools from concept to deployment",
          "Integrate AI into applications and workflows where it provides practical value",
          "Design automated workflows that reduce repetitive work and improve efficiency",
          "Experiment with emerging AI tools and technologies to discover useful applications for business",
          "Manage projects independently, from defining the problem and designing the solution to implementation and iteration",
        ],
        closing:
          "I build systems around problems I encounter — from personal productivity tools to practical business applications.",
      },
      {
        organization: "EL25 Studio",
        role: "Production Trainee",
        dates: "Jul – Sep 2023",
        location: "Casablanca, Morocco",
        bullets: [
          "Supported content production for brands and digital creators in a fast-paced environment",
          "Contributed to scriptwriting, concept development, and visual planning",
          "Worked across creative and production tasks while managing deadlines and changing requirements",
          "Developed practical experience in communication, organization, teamwork, and execution under pressure",
        ],
        closing: "",
      },
    ],
    volunteering: {
      organization: "Community Technology Initiatives",
      role: "Volunteer Mentor",
      dates: "2023 – Present",
      bullets: [
        "Mentoring students in introductory robotics and problem-solving fundamentals",
        "Supporting hands-on workshops focused on safe experimentation and teamwork",
        "Helping organize small local events to make STEM learning more accessible",
      ],
      closing: "Committed to using technology education as a practical path to opportunity.",
    },
    achievements: [
      {
        title: "Oman Robotics Olympiad – Final Round",
        details:
          "Luwa Center for Science & Innovation · 2021–2022. Organised by the General Directorate of Education, North Al Batinah.",
      },
      {
        title: "Robotics & AI Competition – Final Round",
        details:
          "Luwa Center for Science & Innovation · 2021–2022. National-level AI and robotics competition, final round.",
      },
      {
        title: "Oman Science Festival – Drone Competition",
        details:
          "3rd National Edition · 2022. Selected to compete in drone operations at the national science festival.",
      },
    ],
    contactMessage:
      "Interested in building something, automating a workflow, or exploring how AI can solve a business problem? Feel free to reach out.",
    projectsMessage:
      "Systems I build to solve problems I encounter — from personal tools and productivity systems to AI-powered applications and business automation.",
  },
  projects: [
    {
      title: "Budgetly — Offline-First Personal Finance Platform",
      link: "https://github.com/dev-760",
      description:
        "A modern, offline-first personal finance application built for students with zero-latency local tracking, budget insights, and automatic background cloud synchronization.",
      technologies: [
        "TypeScript",
        "React Native",
        "Expo",
        "SQLite",
        "Zustand",
        "Tailwind CSS",
      ],
    },
  ],
};

export default profile;

