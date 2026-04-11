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
  title: "Cognitive Science & Artificial Intelligence",
  location: "Casablanca, Morocco",
  tagline:
    "Driven by a genuine curiosity for how minds work — human and artificial — and what it means for intelligence to emerge, perceive, and understand.",
  personalStatement:
    "My work exists at the intersection of computational logic and cognitive theory. I am dedicated to exploring how artificial systems can be informed by the biological complexities of the human mind. With a background in competitive robotics and a self-directed focus on cognitive psychology, I aim to build and analyze systems that don't just process data, but simulate the nuanced ways in which intelligence perceives and interacts with the world. My goal is to contribute to the next generation of AI by grounding technical development in a deep understanding of cognitive architecture.",
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
      label: "Cognitive Science",
      value: "Research Focus",
      description:
        "Exploring how intelligence emerges, how minds perceive, process, fail, and make meaning — bridging human cognition and AI systems.",
    },
    {
      label: "Robotics & AI",
      value: "National Level",
      description:
        "National level competitor designing autonomous systems. Complex problems rarely have one clean solution — that's what makes them worth solving.",
    },
    {
      label: "Observation & Perception",
      value: "Parallel Practice",
      description:
        "Maintaining a parallel practice in observation and spatial awareness — careful seeing and careful thinking are the same thing expressed differently.",
    },
  ],
  navigation: [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "statement", label: "Statement", href: "/statement" },
    { id: "skills", label: "Skills", href: "/skills" },
    { id: "experience", label: "Experience", href: "/experience" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "contact", label: "Contact", href: "/contact" },
  ],
  sections: {
    about: [
      "I've always been drawn to understanding things at their root — not just how they work on the surface, but what's actually happening underneath.",
      "That instinct led me toward artificial intelligence and cognitive science: the formal study of how intelligence emerges, how minds perceive, process, fail, and make meaning. I find the overlap between human cognition and AI systems genuinely fascinating — particularly where the two diverge in ways that reveal something important about both.",
      "Outside of that, I compete at national level in robotics and AI, which taught me early that complex problems rarely have one clean solution. I also maintain a parallel practice in observation and spatial awareness — because I think careful seeing and careful thinking are the same thing expressed differently.",
      "I'm currently pursuing university study in Cognitive Science or Psychology with an AI focus, building my understanding independently, and thinking seriously about where human and artificial intelligence are heading together.",
    ],
    education: {
      degree: "2nd Year Baccalaureate – In Progress",
      details: "Physical Sciences, English Track · Morocco · Expected 2026",
    },
    skills: [
      {
        category: "AI & Logic",
        items: [
          "Machine Learning Fundamentals",
          "Neural Network Concepts",
          "Cognitive Modeling",
        ],
      },
      {
        category: "Systems & Robotics",
        items: [
          "Autonomous Navigation",
          "Drone Systems (PX4/ArduPilot)",
          "Robotics Kinematics",
        ],
      },
      {
        category: "Development",
        items: [
          "Python (Scientific Stack)",
          "Linux Environments",
          "Shell Scripting",
          "Git Version Control",
        ],
      },
      {
        category: "Infrastructure",
        items: [
          "Network Architecture",
          "System Optimization",
          "Deployment Pipelines (Vercel/Cloud)",
        ],
      },
    ],
    experience: [
      {
        organization: "Independent Research",
        role: "AI & Cognitive Systems",
        dates: "2024 – Present",
        bullets: [
          "Conducting independent research on cognitive frameworks and autonomous system architecture",
          "Exploring the intersection of human cognition and artificial intelligence systems",
          "Building understanding of how intelligence emerges, perceives, and understands across biological and artificial substrates",
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
      "Interested in discussing cognitive science, AI research, or potential collaboration? Feel free to reach out.",
  },
  projects: [],
};

export default profile;
