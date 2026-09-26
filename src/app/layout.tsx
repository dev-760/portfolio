import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hassankarasu.dev"),
  title: {
    default: "Hassan Karasu",
    template: "%s | Hassan Karasu",
  },
  description: "Business Administration student at FSJES Aïn Chock, Casablanca. Exploring management principles, accounting rigor, and systems-driven execution.",
  keywords: [
    "Business Administration",
    "Systems Thinking",
    "Business Strategy",
    "Process Improvement",
    "Financial Analysis",
    "Accounting",
    "Operational Efficiency",
    "Casablanca",
    "Morocco",
    "FSJES Aïn Chock",
    "Production Coordination",
    "Hassan Karasu"
  ],
  authors: [{ name: "Hassan Karasu", url: "https://hassankarasu.dev" }],
  creator: "Hassan Karasu",
  publisher: "Hassan Karasu",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hassankarasu.dev/",
    title: "Hassan Karasu",
    description: "Business Administration student at FSJES Aïn Chock, Casablanca. Exploring management principles, accounting rigor, and systems-driven execution.",
    siteName: "Hassan Karasu",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hassan Karasu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Karasu",
    description: "Business Administration student at FSJES Aïn Chock, Casablanca. Exploring management principles, accounting rigor, and systems-driven execution.",
    images: ["/og-image.png"],
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
  icons: {
    icon: [
      {
        url: "/icon-light.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon-light.ico",
        sizes: "any",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.ico",
        sizes: "any",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.ico",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/icon-light.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable}`} suppressHydrationWarning>
      <head>
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
