import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aclaud.com"),
  title: {
    default: "aclaud | Production Engineering for Software and AI",
    template: "%s | aclaud",
  },
  description:
    "aclaud helps federal programs, prime contractors, and enterprise teams move ambitious software and AI initiatives into secure, reliable production.",
  applicationName: "aclaud",
  authors: [{ name: "Aclaud Technologies LLC", url: "https://aclaud.com" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://aclaud.com",
    siteName: "aclaud",
    title: "Build what comes next. Operate it with confidence.",
    description: "Production engineering for secure, reliable software and AI systems.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "aclaud — production engineering for software and AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build what comes next. Operate it with confidence.",
    description: "Production engineering for secure, reliable software and AI systems.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aclaud.com/#organization",
      name: "Aclaud Technologies LLC",
      alternateName: "aclaud",
      url: "https://aclaud.com",
      email: "admin@aclaud.com",
      telephone: "+1-571-721-1791",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://aclaud.com/#service",
      name: "aclaud",
      url: "https://aclaud.com",
      parentOrganization: { "@id": "https://aclaud.com/#organization" },
      areaServed: "United States",
      description: "Production engineering for software, data, cloud, and AI systems.",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
