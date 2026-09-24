import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hassan Karasu — Systems & Business Strategy",
    template: "%s | Hassan Karasu",
  },
  description: "Business Administration student exploring how analytical thinking, creativity, and structured execution can solve real problems. AI solutions builder and automation specialist.",
  keywords: ["Business Administration", "AI Solutions", "Automation", "Systems Thinking", "Web Development", "Productivity"],
  authors: [{ name: "Hassan Karasu" }],
  creator: "Hassan Karasu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hassankarasu.dev",
    title: "Hassan Karasu — Systems & Business Strategy",
    description: "Business Administration student exploring how analytical thinking, creativity, and structured execution can solve real problems.",
    siteName: "Hassan Karasu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Karasu — Systems & Business Strategy",
    description: "Business Administration student exploring how analytical thinking, creativity, and structured execution can solve real problems.",
    creator: "@hassankarasu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
