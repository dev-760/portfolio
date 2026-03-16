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
    volunteering: TimelineEntry;
    experience: TimelineEntry[];
    achievements: Achievement[];
    contactMessage: string;
  };
  projects: Project[];
};

export const profile: Profile = {
  name: "Hassan Karasu",
  title: "Cybersecurity Enthusiast",
  location: "Casablanca, Morocco",
  tagline:
    "Driven by a genuine curiosity for how complex systems operate and a relentless fascination with discovering how they can be broken.",
  contact: {
    email: "dev760@outlook.com",
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
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/hassan-karasu",
    },
    {
      label: "Portfolio",
      href: "https://hassankarasu.vercel.app",
    },
  ],
  homeHighlights: [
    {
      label: "Offensive Security",
      value: "HTB & THM",
      description:
        "Building a foundation independently through platforms like Hack The Box and TryHackMe. Driven by experimentation and solving real-world problems.",
    },
    {
      label: "Blue Team Operations",
      value: "Flawless Triage",
      description:
        "Executed foundational incident response and alert triage, achieving and sustaining a flawless 100% True Positive Rate (TPR) in the identification and analysis of active threats.",
    },
    {
      label: "Robotics & AI",
      value: "National Level",
      description:
        "National level competitor designing autonomous systems, driven by resilient and multi disciplinary thinking.",
    },
  ],
  navigation: [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "experience", label: "Experience", href: "/experience" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "contact", label: "Contact", href: "/contact" },
  ],
  sections: {
    about: [
      "Cybersecurity is not something I stumbled into, it is something I was drawn to by genuine curiosity and a fascination with how systems work and, more importantly, how they can be broken. Offensive security in particular captivates me: the mindset it requires, the creativity involved, and the real-world impact it has.",
      "I have spent time outside of formal education building that foundation independently, working through platforms like Hack The Box and TryHackMe not because I had to, but because I wanted to. That self-driven approach experimenting, getting things wrong, and figuring out why is how I learn best.",
      "I have also competed at national level in robotics and AI, which taught me that technical problems rarely have a single clean solution.",
      "I am applying to university to take that curiosity further, gain the depth and structure that independent study cannot fully provide, and work toward a career in offensive security where I can do what I find genuinely meaningful.",
    ],
    education: {
      degree: "2nd Year Baccalaureate – In Progress",
      details: "Physical Sciences, English Track · Morocco · Expected 2026",
    },
    skills: [
      {
        category: "Technical Skills",
        items: [
          "Linux & Windows Environments",
          "Network Infrastructure",
          "Defensive Security Operations",
          "Offensive Security Operations",
          "Threat Analysis & Intelligence",
          "Applied AI Security",
          "Autonomous Systems & Robotics",
          "Drone Systems",
        ],
      },
      {
        category: "Soft Skills",
        items: [
          "Autonomous Learning",
          "Critical Problem Solving",
          "Team Collaboration",
          "Effective Leadership & Decision Making",
          "Methodical Precision & Attention to Detail",
          "Intercultural Communication",
        ],
      },
    ],
    volunteering: {
      organization: "Motatawi3 Program – Ministry of Youth, Culture & Communication, Morocco",
      role: "Volunteer",
      dates: "Jul – Aug 2024",
      bullets: [
        "Facilitated workshops, mentorship sessions, and awareness campaigns in underserved communities",
        "Promoted youth leadership and civic responsibility alongside local organisations",
        "Supported young learners in creative thinking and early career exploration",
      ],
      closing: "",
    },
    experience: [
      {
        organization: "hassankarasu.vercel.app",
        organizationLink: "https://hassankarasu.vercel.app",
        role: "Independent Visual & Technical Practice",
        dates: "2024 – Present",
        bullets: [
          "Conceived, designed, and deployed a bilingual (Arabic/English) visual art portfolio as a fully independent project. The work explores photography through the lens of observation, transitional space, and atmosphere — themes that mirror the kind of careful, methodical attention that technical disciplines demand. Building and shipping the site end-to-end — from concept to deployment on Vercel — reflects the same instinct that drives my interest in security: understanding systems deeply enough to make something real with them.",
        ],
        closing: "",
      },
      {
        organization: "EL25 Studio",
        role: "Production Trainee",
        dates: "Jul – Sep 2023",
        location: "Casablanca, Morocco",
        bullets: [
          "Supported content production for brands and digital influencers in a fast-paced environment",
          "Contributed to scriptwriting, concept development, and visual planning",
          "Developed technical precision, teamwork under pressure, and cross-functional communication",
        ],
        closing: "",
      },
    ],
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
      "Interested in discussing cybersecurity, offensive security projects, or potential opportunities? Feel free to reach out.",
  },
  projects: [
    {
      title: "NextLab (nxtscan)",
      link: "https://github.com/dev-760/nxtscan",
      description: "An open-source web security scanner featuring AI-powered remediation (Llama 3), continuous monitoring, real-time alerts, and executive bilingual PDF reports.",
      technologies: ["Vulnerability Scanning", "Threat Detection", "AI", "Python", "Shodan"],
    },
  ],
};

export default profile;
