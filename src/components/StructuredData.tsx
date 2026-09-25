export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Hassan Karasu",
    "jobTitle": "Business Administration Student",
    "url": "https://hassankarasu.dev",
    "sameAs": [
      "https://linkedin.com/in/hassan-karasu-a7485336b"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Casablanca",
      "addressCountry": "Morocco"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Faculté des Sciences Juridiques, Économiques et Sociales (FSJES) Aïn Chock",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Casablanca",
        "addressCountry": "Morocco"
      }
    },
    "knowsAbout": [
      "Business Administration",
      "Principles of Management",
      "General Accounting",
      "Cost Analysis",
      "Microeconomics",
      "Macroeconomics",
      "Operational Logistics"
    ],
    "description": "Business Administration student at FSJES Aïn Chock, Université Hassan II de Casablanca, focusing on management, accounting, and practical execution."
  };

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hassan Karasu",
    "url": "https://hassankarasu.dev",
    "logo": "https://hassankarasu.dev/logo.svg",
    "sameAs": [
      "https://linkedin.com/in/hassan-karasu-a7485336b"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@hassankarasu.dev",
      "contactType": "customer service",
      "areaServed": "MA",
      "availableLanguage": ["English", "Arabic", "French"]
    }
  };

  const webSiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Hassan Karasu Portfolio",
    "url": "https://hassankarasu.dev",
    "description": "Business Administration student specializing in systems thinking, business strategy, and operational analysis.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://hassankarasu.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Person",
      "name": "Hassan Karasu"
    }
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://hassankarasu.dev"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://hassankarasu.dev/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Work",
        "item": "https://hassankarasu.dev/work"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Skills",
        "item": "https://hassankarasu.dev/skills"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": "https://hassankarasu.dev/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}