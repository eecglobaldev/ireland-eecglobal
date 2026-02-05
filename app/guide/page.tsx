import type { Metadata } from "next";
import Link from "next/link";
import { getPathSEOConfig } from "../lib/seoConfig";
import GuideSections from "../components/GuideSections";
import { BookMarked, FileText, HelpCircle, BarChart3, Star } from "lucide-react";

const baseUrl = "https://ireland.eecglobal.com";

export const metadata: Metadata = (() => {
  const seo = getPathSEOConfig("/guide");
  return {
    title: seo.title,
    description: seo.description,
    keywords: [
      "Ireland study guide 2026",
      "study in Ireland for Indian students",
      "Ireland student visa FAQ",
      "Ireland immigration glossary",
      "Ireland vs UK Canada Australia study",
      "EEC Ireland consultant",
      "Ireland study abroad FAQs",
      "Stamp 1G Ireland",
      "Ireland student reviews",
      "study abroad Ireland from India",
      "Ireland universities Indian students",
      "Ireland visa requirements 2026",
    ],
    alternates: {
      canonical: `${baseUrl}${seo.canonicalPath}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${baseUrl}/guide`,
      siteName: "EEC Ireland Guide 2026",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
    robots: { index: true, follow: true },
  };
})();

const quickLinks = [
  { label: "About", href: "/guide#guide-about", icon: BookMarked },
  { label: "Glossary", href: "/guide#guide-glossary", icon: FileText },
  { label: "FAQs", href: "/guide#guide-faqs", icon: HelpCircle },
  { label: "Compare", href: "/guide#guide-compare", icon: BarChart3 },
  { label: "Reviews", href: "/guide#guide-reviews", icon: Star },
];

export default function GuidePage() {
  return (
    <article className="min-h-screen">
      {/* SEO-optimized hero with primary keyword */}
      <header className="bg-gradient-to-b from-emerald-600 to-emerald-700 text-white rounded-2xl shadow-xl mb-8 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3">
            Ireland Study Guide 2026 for Indian Students
          </h1>
          <p className="text-emerald-100 text-lg sm:text-xl max-w-3xl mb-6">
            FAQs, immigration glossary, Ireland vs other countries comparison,
            and verified student reviews. One place for everything you need to
            know about studying in Ireland.
          </p>
          <nav
            className="flex flex-wrap gap-2"
            aria-label="Jump to section"
          >
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 hover:bg-white/25 rounded-full text-sm font-semibold transition-colors"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <GuideSections />
    </article>
  );
}
