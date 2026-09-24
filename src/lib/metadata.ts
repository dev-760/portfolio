import type { Metadata } from "next";
import profile from "@/data/profile";

export function generateSiteMetadata(): Metadata {
  return {
    title: {
      default: profile.name,
      template: `%s | ${profile.name}`,
    },
    description: profile.tagline,
    keywords: [
      "Business Administration",
      "AI Solutions",
      "Automation",
      "Systems Thinking",
      "Web Development",
      "Productivity",
      profile.location,
    ],
    authors: [{ name: profile.name }],
    creator: profile.name,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://hassankarasu.dev",
      title: profile.name,
      description: profile.tagline,
      siteName: `${profile.name} Portfolio`,
    },
    twitter: {
      card: "summary_large_image",
      title: profile.name,
      description: profile.tagline,
    },
  };
}

export function generatePageMetadata(
  title: string,
  description: string,
  path?: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: path ? `https://hassankarasu.dev${path}` : "https://hassankarasu.dev",
    },
    twitter: {
      title,
      description,
    },
  };
}
