import type { Metadata } from "next";
import profile from "@/data/profile";

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
