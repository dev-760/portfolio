import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import profile from "@/data/profile";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hassankarasu.dev"),
  title: `${profile.name} | ${profile.title}`,
  description: profile.tagline,
  keywords: [
    "AI Operator",
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
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title}`,
    description: profile.tagline,
  },
  alternates: {
    canonical: "/",
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
    <html lang="en" suppressHydrationWarning className={`bg-[#f8f9ff] text-[#191c21] ${plusJakartaSans.variable}`}>
      <body
        suppressHydrationWarning
        className={`bg-[#f8f9ff] text-[#191c21] font-sans antialiased min-h-screen selection:bg-[#ffddb7] selection:text-[#191c21]`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
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
