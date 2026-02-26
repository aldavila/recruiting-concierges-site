import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Recruiting Concierges | Elite LATAM Tech Talent, US Standards",
  description:
    "Hire pre-vetted LATAM software engineers at 40-60% less than US rates. React, React Native, Node.js, UX designers. Your first candidate in 72 hours.",
  keywords: [
    "nearshore developers",
    "LATAM software engineers",
    "hire developers Colombia",
    "nearshore staffing",
    "remote developers",
    "React Native developers",
    "nearshore recruiting",
  ],
  openGraph: {
    title: "Recruiting Concierges | Elite LATAM Tech Talent",
    description:
      "Pre-vetted LATAM software engineers at 40-60% less than US rates. Your first candidate in 72 hours.",
    url: "https://recruitingconcierges.com",
    siteName: "Recruiting Concierges",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recruiting Concierges | Elite LATAM Tech Talent",
    description:
      "Pre-vetted LATAM software engineers at 40-60% less than US rates.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white antialiased">{children}</body>
    </html>
  );
}
