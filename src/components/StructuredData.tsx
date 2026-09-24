import profile from "@/data/profile";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.tagline,
    url: "https://hassankarasu.dev",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressCountry: "Morocco",
    },
    knowsAbout: [
      "Business Administration",
      "AI Solutions",
      "Automation",
      "Systems Thinking",
      "Web Development",
      "Productivity",
    ],
    sameAs: profile.links.map((link) => link.href),
    email: profile.contact.email,
    telephone: profile.contact.phone,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
