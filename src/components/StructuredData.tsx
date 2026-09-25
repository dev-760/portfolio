export function StructuredData() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://hassankarasu.dev/#website",
        "url": "https://hassankarasu.dev/",
        "name": "Hassan Karasu",
        "alternateName": ["Hassan Karasu Portfolio", "HK Portfolio"],
        "description": "Business Administration student at FSJES Aïn Chock, Casablanca specializing in systems thinking, business strategy, and operational analysis.",
        "inLanguage": "en",
        "publisher": {
          "@id": "https://hassankarasu.dev/#person"
        }
      },
      {
        "@type": "ProfilePage",
        "@id": "https://hassankarasu.dev/#profilepage",
        "url": "https://hassankarasu.dev/",
        "name": "Hassan Karasu — Business Administration & Strategy",
        "isPartOf": {
          "@id": "https://hassankarasu.dev/#website"
        },
        "description": "Business Administration student at FSJES Aïn Chock, Casablanca. Exploring management principles, accounting rigor, and systems-driven execution.",
        "breadcrumb": {
          "@id": "https://hassankarasu.dev/#breadcrumb"
        },
        "mainEntity": {
          "@id": "https://hassankarasu.dev/#person"
        }
      },
      {
        "@type": "Person",
        "@id": "https://hassankarasu.dev/#person",
        "name": "Hassan Karasu",
        "alternateName": "HK",
        "jobTitle": "Business Administration Student",
        "url": "https://hassankarasu.dev/",
        "image": "https://hassankarasu.dev/og-image.png",
        "sameAs": [
          "https://linkedin.com/in/hassan-karasu-a7485336b"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Casablanca",
          "addressCountry": "Morocco"
        },
        "alumniOf": [
          {
            "@type": "CollegeOrUniversity",
            "name": "Faculté des Sciences Juridiques, Économiques et Sociales (FSJES) Aïn Chock, Université Hassan II de Casablanca",
            "url": "https://www.univh2c.ma"
          },
          {
            "@type": "EducationalOrganization",
            "name": "Prince Moulay Abdellah High School",
            "description": "Baccalaureate in Physical Science (English Option)"
          }
        ],
        "knowsAbout": [
          "Business Administration",
          "Principles of Management",
          "General Accounting (Comptabilité Générale)",
          "Cost Analysis & Budgeting",
          "Microeconomics & Macroeconomics",
          "Descriptive Statistics",
          "Systems Thinking",
          "Operational Workflows",
          "Production Coordination"
        ],
        "description": "Business Administration student at FSJES Aïn Chock, Université Hassan II de Casablanca, focusing on management principles, accounting, and practical execution."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://hassankarasu.dev/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://hassankarasu.dev/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://hassankarasu.dev/#about"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Work",
            "item": "https://hassankarasu.dev/#work"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Skills",
            "item": "https://hassankarasu.dev/#skills"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Experience",
            "item": "https://hassankarasu.dev/#experience"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Writing",
            "item": "https://hassankarasu.dev/#writing"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "Contact",
            "item": "https://hassankarasu.dev/#contact"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}