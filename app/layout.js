import "./globals.css";
import { Header, Footer, JsonLd } from "../components/ui";
import { SITE_URL, site } from "../lib/site";

const desc = "NAVICORE OS is a business operating system: one platform for projects, tasks, time tracking, CRM and people, with finance, documents, AI and automation to follow. Secure, multi-tenant, English and Bangla.";
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "NAVICORE OS: the business operating system for projects, customers and teams", template: "%s | NAVICORE OS" },
  description: desc,
  applicationName: "NAVICORE OS",
  keywords: ["business operating system", "project management", "CRM", "time tracking", "multi-tenant SaaS", "Bangla business software", "company management platform", "Navicore Software"],
  authors: [{ name: "Navicore Software", url: site.org }, { name: "Najmul Hasan", url: site.portfolio }],
  creator: "Navicore Software", publisher: "Navicore Software",
  alternates: { canonical: process.env.NEXT_PUBLIC_CANONICAL_URL ? process.env.NEXT_PUBLIC_CANONICAL_URL + "/" : "/" },
  openGraph: { type: "website", siteName: "NAVICORE OS", locale: "en_US", url: "/", title: "NAVICORE OS: one building, many rooms, everything a company needs", description: desc },
  twitter: { card: "summary_large_image", title: "NAVICORE OS", description: desc },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
  category: "technology",
};
export const viewport = { themeColor: "#080D17", colorScheme: "dark", width: "device-width", initialScale: 1 };

const org = { "@context": "https://schema.org", "@graph": [
  { "@type": "Organization", "@id": SITE_URL + "/#org", name: "Navicore Software", url: site.org, email: site.email,
    founder: [{ "@type": "Person", name: "Najmul Hasan", url: site.portfolio, jobTitle: "Founder, CEO & Chief Product Officer" }, { "@type": "Person", name: "Nusrat Jahan Bably", jobTitle: "Co-Founder & Managing Director" }],
    areaServed: "Worldwide", sameAs: [site.org, site.software, site.main, site.portfolio] },
  { "@type": "WebSite", "@id": SITE_URL + "/#site", url: SITE_URL, name: "NAVICORE OS", description: desc, inLanguage: "en", publisher: { "@id": SITE_URL + "/#org" } },
] };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" />
      </head>
      <body><JsonLd data={org} /><Header /><main>{children}</main><Footer /></body>
    </html>
  );
}
