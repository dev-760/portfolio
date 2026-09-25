import type { Metadata } from "next";
import profile from "@/data/profile";

export function generateSiteMetadata(): Metadata {
  return {
    metadataBase: new URL("https://hassankarasu.dev"),
    title: {
      default: "Hassan Karasu — Business Administration & Strategy",
      template: `%s | ${profile.name}`,
    },
    description: "Business Administration student at FSJES Aïn Chock, Casablanca. Exploring management principles, accounting rigor, and systems-driven execution.",
    keywords: [
      "Business Administration",
      "FSJES Aïn Chock",
      "Université Hassan II de Casablanca",
      "Management",
      "Accounting",
      "Economics",
      "Systems Thinking",
      "Operational Strategy",
      profile.location,
    ],
    authors: [{ name: profile.name, url: "https://hassankarasu.dev" }],
    creator: profile.name,
    publisher: profile.name,
    alternates: {
      canonical: "https://hassankarasu.dev/",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://hassankarasu.dev/",
      title: "Hassan Karasu — Business Administration & Strategy",
      description: "Business Administration student at FSJES Aïn Chock, Casablanca. Exploring management principles, accounting rigor, and systems-driven execution.",
      siteName: "Hassan Karasu",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Hassan Karasu — Business Administration & Strategy",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Hassan Karasu — Business Administration & Strategy",
      description: "Business Administration student at FSJES Aïn Chock, Casablanca. Exploring management principles, accounting rigor, and systems-driven execution.",
      images: ["/og-image.png"],
      creator: "@hassankarasu",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/icon.svg",
    },
  };
}

export function generatePageMetadata(
  title: string,
  description: string,
  path?: string
): Metadata {
  const normalizedPath = path
    ? path.endsWith("/")
      ? path
      : `${path}/`
    : "/";
  const url = `https://hassankarasu.dev${normalizedPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      title: `${title} | ${profile.name}`,
      description,
      url,
      siteName: "Hassan Karasu",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${title} — Hassan Karasu`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${profile.name}`,
      description,
      images: ["/og-image.png"],
      creator: "@hassankarasu",
    },
  };
}
