import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import profile from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hassankarasu.dev"),
  title: `${profile.name} | ${profile.title}`,
  description: profile.tagline,
  keywords: [
    "Software Builder",
    "Business Administration",
    "Software Development",
    "Artificial Intelligence",
    "Automation",
    "Workflow Automation",
    "AI Tools",
    "Business & Technology",
    profile.name,
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hassankarasu.dev",
    title: `${profile.name} | ${profile.title}`,
    description: profile.tagline,
    siteName: profile.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Hassan Karasu — Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title}`,
    description: profile.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-[#050208]">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} bg-[#050208] text-white antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              mainEntity: {
                "@type": "Person",
                name: profile.name,
                jobTitle: profile.title,
                url: "https://hassankarasu.dev",
                sameAs: profile.links.map((link) => link.href),
                knowsAbout: [
                  "Software Development",
                  "AI",
                  "Automation",
                  "Business Administration",
                ],
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Casablanca",
                  addressCountry: "MA",
                },
              },
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
