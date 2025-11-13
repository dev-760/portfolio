import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: `${profile.name} | ${profile.title}`,
  description: profile.tagline,
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
      </body>
    </html>
  );
}
