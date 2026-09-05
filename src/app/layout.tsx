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
      { url: "/icon.svg", type: "image/svg+xml" },
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
