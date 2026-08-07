import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simarjeet Kaur | Full Stack Developer & AI-Augmented Engineer",
  description: "Portfolio of Simarjeet Kaur, Full Stack Developer with 2+ years experience building scalable React, Next.js, Laravel, Node.js applications, enterprise portals, and Shopify / Medusa.js eCommerce storefronts.",
  keywords: [
    "Simarjeet Kaur",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Node.js Developer",
    "Shopify Developer",
    "Medusa.js Developer",
    "eCommerce Developer",
    "AI Augmented Engineer",
    "Jalandhar Punjab Developer"
  ],
  authors: [{ name: "Simarjeet Kaur", url: "https://yourmedicals.co.uk" }],
  openGraph: {
    title: "Simarjeet Kaur | Full Stack Developer",
    description: "Full Stack Developer specializing in React.js, Next.js, Laravel, Node.js, and Shopify/Medusa.js eCommerce platforms.",
    type: "website",
    locale: "en_US",
    siteName: "Simarjeet Kaur Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Simarjeet Kaur | Full Stack Developer",
    description: "AI-Augmented Full Stack Engineer specializing in React, Next.js, Laravel & Shopify."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Simarjeet Kaur",
    jobTitle: "Full Stack Developer",
    url: "https://yourmedicals.co.uk",
    sameAs: [
      "https://github.com",
      "https://linkedin.com"
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "Laravel",
      "Node.js",
      "Shopify Liquid",
      "Medusa.js",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "PostgreSQL"
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Lovely Professional University"
      },
      {
        "@type": "EducationalOrganization",
        name: "Guru Nanak Dev University"
      }
    ]
  };

  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
