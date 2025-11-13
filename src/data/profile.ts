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
    skills: SkillCategory[];
    volunteering: TimelineEntry;
    experience: TimelineEntry;
    achievements: Achievement[];
    contactMessage: string;
  };
  projects: Project[];
};

export const profile: Profile = {
  name: "Hassan Karasu",
  title: "Aspiring Mechatronics Engineer",
  location: "Casablanca, Morocco",
  tagline:
    "Aspiring mechatronics engineer passionate about robotics, drones, and intelligent systems. I explore the intersection of mechanics, electronics, and code to build meaningful solutions.",
  contact: {
    email: "h770694e@gmail.com",
    phone: "+212 779898873",
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
      label: "Email",
      href: "mailto:h770694e@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hassan-karasu-a7485336b",
    },
  ],
  homeHighlights: [
    {
      label: "Robotics & Mechatronics",
      value: "6+ builds",
      description:
        "Hands-on experience designing custom drones, autonomous devices, and intelligent control systems.",
    },
    {
      label: "Community Impact",
      value: "8+ programs",
      description:
        "Workshops, volunteering, and mentorship that introduce robotics and STEM thinking to young learners.",
    },
    {
      label: "Competitions",
      value: "Regional finalist",
      description:
        "Recognized across Oman robotics challenges for creative solutions and resilient prototyping.",
    },
  ],
  navigation: [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "experience", label: "Experience", href: "/experience" },
    { id: "contact", label: "Contact", href: "/contact" },
    { id: "projects", label: "Projects", href: "/projects", enabled: false },
  ],
  sections: {
    about: [
      "I am an aspiring Mechatronics Engineer driven by curiosity, creativity, and a strong desire to build systems that blend mechanics, electronics, and intelligent control. Ever since I was introduced to robotics and drone systems, I’ve been fascinated by how machines can learn, adapt, and solve real-world problems.",
      "My journey combines technical experimentation, hands-on robotics challenges, and meaningful community involvement. Whether I’m assembling mechanical components, planning a team project, mentoring youth, or navigating a drone in competition, I aim to learn deeply and create real impact.",
      "I value teamwork, responsibility, and continuous improvement. I’m passionate about exploring new technologies and contributing to engineering projects that push boundaries and empower communities.",
    ],
    skills: [
      {
        category: "Programming & Technical",
        items: [
          "Python Programming",
          "Technical Setup & Equipment Configuration",
          "CAD Software (3D Design & Prototyping)",
        ],
      },
      {
        category: "Robotics & Engineering",
        items: [
          "Drone Navigation & Control",
          "Mechanical Design & Assembly",
          "Electrical Design & Assembly",
          "Troubleshooting & Optimization",
          "Real-Time Problem Solving",
        ],
      },
      {
        category: "Project & Team Skills",
        items: [
          "Project Planning",
          "Team Collaboration & Management",
          "Communication",
          "Event & Workshop Facilitation",
          "Content Strategy",
        ],
      },
    ],
    volunteering: {
      organization: "Motatawi3 Program – MJCC (وزارة الشباب والثقافة والتواصل)",
      role: "Social Services Volunteer",
      dates: "Jul 2024 – Aug 2024 (2 months)",
      bullets: [
        "Participated in a nationwide youth-focused initiative aimed at empowering communities and expanding access to educational and social development programs.",
        "Assisted in planning and facilitating workshops, mentorship sessions, and awareness campaigns in underserved areas.",
        "Collaborated with local organizations and volunteers to promote civic responsibility, essential skills, and youth leadership.",
        "Engaged directly with young learners, providing support in creative thinking, learning activities, and early career exploration.",
      ],
      closing:
        "This experience strengthened my sense of responsibility and showed me how engineering, education, and community service can work together to create change.",
    },
    experience: {
      organization: "EL25 Studio Production",
      role: "Trainee",
      dates: "Jul 2023 – Sep 2023 (3 months)",
      location: "Casablanca, Morocco",
      bullets: [
        "Worked in a fast-paced media production environment, supporting content creation for brands and digital influencers.",
        "Contributed to concept development, scriptwriting, and planning visual content.",
        "Assisted with camera setup, lighting, and on-set coordination.",
        "Helped review footage, support editing workflows, and maintain visual continuity.",
        "Collaborated with creative directors and technical teams under tight deadlines.",
      ],
      closing:
        "This experience improved my creative communication, teamwork under pressure, and understanding of how technical precision applies in different industries—including engineering storytelling.",
    },
    achievements: [
      {
        title: "Oman Robotics Olympiad 2021–2022 – Final Round",
        details:
          "Organized by the General Directorate of Education in North Al Batinah, Luwa Center for Science & Innovation.",
      },
      {
        title:
          "Robotics and Artificial Intelligence Competition 2021–2022 – Final Round",
        details:
          "Organized by the General Directorate of Education in North Al Batinah, Luwa Center for Science & Innovation.",
      },
      {
        title: "Oman Science Festival – 3rd Edition (Drone Competitions), 2022",
        details: "Drone competitions spotlight during the national science festival.",
      },
    ],
    contactMessage:
      "Interested in collaborating, discussing robotics, or exploring mechatronics projects? Feel free to reach out.",
  },
  projects: [
    // {
    //   title: "Autonomous Drone Navigation",
    //   description: "Coming soon...",
    //   technologies: ["Python", "ROS", "Computer Vision"],
    // },
  ],
};

export default profile;
