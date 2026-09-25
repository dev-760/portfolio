import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { WebVitals } from "@/components/WebVitals";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Hassan Karasu",
  "jobTitle": "Business Administration Student",
  "url": "https://hassankarasu.dev",
  "sameAs": [
    "https://linkedin.com/in/hassan-karasu-a7485336b"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Casablanca",
    "addressCountry": "Morocco"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Faculté des Sciences Juridiques, Économiques et Sociales (FSJES) Aïn Chock",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Casablanca",
      "addressCountry": "Morocco"
    }
  },
  "knowsAbout": [
    "Business Administration",
    "Systems Thinking",
    "Financial Analysis",
    "Process Improvement",
    "Operational Strategy",
    "Automation",
    "Web Development"
  ],
  "description": "Business Administration student specializing in systems thinking, business strategy, and operational analysis. Expert in process improvement, financial modeling, and digital automation solutions."
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hassankarasu.dev"),
  title: {
    default: "Hassan Karasu — Business Administration & Systems Strategy | Casablanca, Morocco",
    template: "%s | Hassan Karasu",
  },
  description: "Business Administration student at FSJES Aïn Chock, Casablanca specializing in systems thinking, business strategy, and operational analysis. Expert in process improvement, financial modeling, and digital automation solutions.",
  keywords: [
    "Business Administration",
    "Systems Thinking",
    "Business Strategy",
    "Process Improvement",
    "Financial Analysis",
    "Operational Efficiency",
    "Casablanca",
    "Morocco",
    "FSJES Aïn Chock",
    "Business Student",
    "Automation",
    "Productivity Systems",
    "Organizational Design"
  ],
  authors: [{ name: "Hassan Karasu" }],
  creator: "Hassan Karasu",
  publisher: "Hassan Karasu",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Hassan Karasu — Business Administration & Systems Strategy",
    description: "Business Administration student specializing in systems thinking, business strategy, and operational analysis. Transforming complex business challenges into streamlined solutions.",
    siteName: "Hassan Karasu Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hassan Karasu - Business Administration & Systems Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Karasu — Business Administration & Systems Strategy",
    description: "Business Administration student specializing in systems thinking, business strategy, and operational analysis.",
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
  other: {
    "application/ld+json": JSON.stringify(structuredData),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${poppins.variable}`} suppressHydrationWarning>
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
