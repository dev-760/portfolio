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
    education: {
      degree: string;
      details: string;
    };
    skills: SkillCategory[];
    experience: TimelineEntry[];
    volunteering: TimelineEntry;
    achievements: Achievement[];
    contactMessage: string;
  };
  projects: Project[];
};

export const profile: Profile = {
  name: "Hassan Karasu",
  title: "Software Builder | Business Administration Student",
  location: "Casablanca, Morocco",
  tagline:
    "I build software around problems I encounter — combining technology, AI, and business thinking to create practical tools, automate workflows, and make everyday work more efficient.",
  personalStatement:
    "My work sits at the intersection of business, software, artificial intelligence, and automation.\n\nAs a Business Administration student and independent software builder, I'm interested in understanding practical problems and turning them into useful systems.\n\nI enjoy building tools that solve problems I encounter, experimenting with AI to improve workflows, and exploring how technology can make everyday work more efficient.\n\nMy goal is to continue developing both sides of that equation: understanding the business problem and having the technical ability to build the solution.",
  contact: {
    email: "me@hassankarasu.dev",
    phone: "+212 779 898 873",
  },
  languages: [
    {
      name: "English",
      level: "Full Professional",
    },
    {
      name: "Arabic",
      level: "Native or Bilingual",
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
      label: "Software",
      value: "Software Building",
      description:
        "Building practical applications and tools around real problems, from personal utilities to business-oriented software.",
    },
    {
      label: "Automation",
      value: "AI & Automation",
      description:
        "Using AI, automation, and modern software tools to simplify workflows, reduce repetitive work, and improve productivity.",
    },
    {
      label: "Application",
      value: "Business & Technology",
      description:
        "Exploring how software and AI can be applied to real business problems, operations, and everyday work.",
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
      "I'm currently studying Business Administration, while my interests sit at the intersection of business and technology — particularly software, artificial intelligence, automation, and productivity.",
      "When I encounter a problem that can be solved with a tool, I prefer to build it.",
      "That might mean creating a personal finance application, automating a repetitive workflow, connecting different services, or using AI to make a process faster and more useful.",
      "I enjoy taking an idea from a simple problem to a working solution — figuring out what needs to be built, designing the system, implementing it, and improving it through use.",
      "My focus is increasingly on the space between business problems and technical solutions: understanding how something works, identifying what can be improved, and building software that makes a practical difference.",
      "I'm currently developing my understanding of business while continuing to build software, experiment with AI, and explore new ways technology can improve how people and businesses work.",
    ],
    education: {
      degree: "Business Administration – Student",
      details: "Morocco · In Progress",
    },
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
        category: "Software & Development",
        items: [
          "Web Application Development",
          "API Integration",
          "Database Fundamentals",
          "Git & GitHub",
          "Cloud Deployment",
          "Software Architecture",
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
        role: "Software Builder",
        dates: "2024 – Present",
        bullets: [
          "Identify repetitive, inefficient, or underserved problems and turn them into software solutions",
          "Build web applications and practical tools from concept to deployment",
          "Integrate AI into applications and workflows where it provides practical value",
          "Design automated workflows that reduce repetitive work and improve efficiency",
          "Experiment with emerging AI tools and technologies to discover useful applications for business",
          "Manage projects independently, from defining the problem and designing the solution to implementation and iteration",
        ],
        closing:
          "I build software around problems I encounter — from personal productivity tools to practical business applications.",
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
  },
  projects: [
    {
      title: "Budgetly Sync — Offline-First Personal Finance Platform",
      link: "https://github.com/dev-760/Budgetly-Sync",
      description:
        "A modern, offline-first personal finance application built for students with zero-latency local tracking, budget insights, and automatic background cloud synchronization.",
      technologies: ["TypeScript", "Next.js", "Prisma", "PostgreSQL", "Zustand", "Tailwind CSS"],
    },
    {
      title: "NextLab (nxtscan) — AI-Powered Web Security Scanner",
      link: "https://github.com/dev-760/nxtscan",
      description:
        "An open-source web security scanner featuring AI-powered remediation (Llama 3), continuous monitoring, real-time alerts, and executive bilingual PDF reports.",
      technologies: ["Python", "Linux", "FastAPI", "Next.js", "AI Remediation", "Celery", "Supabase", "Redis"],
    },
    {
      title: "FlowCraft AI — Workflow Automation Engine",
      link: "https://github.com/dev-760",
      description:
        "An automated workflow engine designed to eliminate repetitive operational tasks. Integrates document processing pipelines with LLMs to automate categorization, structured data extraction, and executive reporting.",
      technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "Node.js"],
    },
    {
      title: "Mytho — Latent Reasoning Neural Architecture",
      link: "https://github.com/dev-760/Mytho",
      description:
        "A recurrent latent reasoning model architecture featuring Adaptive Computation Time (ACT), Multi-Latent Attention, dynamic Mixture of Experts (MoE), and verifier heads.",
      technologies: ["Python", "Machine Learning", "PyTorch", "CUDA", "Transformers", "Linux"],
    },
    {
      title: "Autonomous Drone Navigation & Control Systems",
      description:
        "Autonomous flight control algorithms, obstacle avoidance systems, and custom drone prototyping developed for national science and robotics competitions.",
      technologies: ["Robotics", "Autonomous Systems", "Computer Vision", "Python", "Linux"],
    },
    {
      title: "CTF — Security Challenge Environment",
      link: "https://github.com/dev-760/CTF",
      description:
        "A beginner-friendly Capture The Flag environment repository and hands-on Linux security exercises.",
      technologies: ["Security", "Linux", "Shell Scripting", "CTF"],
    },
  ],
};

export default profile;
