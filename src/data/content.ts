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

export const education: EducationData[] = [
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

export const experience: ExperienceData[] = [
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
