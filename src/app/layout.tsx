import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { WebVitals } from "@/components/WebVitals";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hassankarasu.dev"),
  title: {
    default: "Hassan Karasu — Business Administration & Strategy",
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
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
        {/* Guard against browser extensions (e.g. Urban VPN) injecting attributes before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var o=Element.prototype.setAttribute;Element.prototype.setAttribute=function(n,v){if(n==='bis_skin_checked'||n==='bis_register'||(typeof n==='string'&&n.indexOf('__processed_')===0))return;return o.apply(this,arguments);};}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <WebVitals />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
