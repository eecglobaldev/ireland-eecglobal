"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PATH_BREADCRUMB_LABELS } from "../lib/seoConfig";
import { ChevronRight } from "lucide-react";

const RELATED_BY_PATH: Record<string, { path: string; label: string }[]> = {
  "/": [
    { path: "/guide", label: "Guide" },
    { path: "/money", label: "Money" },
    { path: "/visa", label: "Visa" },
  ],
  "/money": [
    { path: "/cities", label: "Cities" },
    { path: "/pay", label: "Pay" },
    { path: "/visa", label: "Visa" },
  ],
  "/cities": [
    { path: "/money", label: "Money" },
    { path: "/apply", label: "Apply" },
    { path: "/visa", label: "Visa" },
  ],
  "/apply": [
    { path: "/visa", label: "Visa" },
    { path: "/pay", label: "Pay" },
    { path: "/cities", label: "Cities" },
  ],
  "/visa": [
    { path: "/apply", label: "Apply" },
    { path: "/pay", label: "Pay" },
    { path: "/stay", label: "Stay" },
  ],
  "/pay": [
    { path: "/visa", label: "Visa" },
    { path: "/money", label: "Money" },
    { path: "/apply", label: "Apply" },
  ],
  "/family": [
    { path: "/stay", label: "Stay" },
    { path: "/visa", label: "Visa" },
    { path: "/apply", label: "Apply" },
  ],
  "/stay": [
    { path: "/visa", label: "Visa" },
    { path: "/family", label: "Family" },
    { path: "/money", label: "Money" },
  ],
  "/guide": [
    { path: "/visa", label: "Visa" },
    { path: "/apply", label: "Apply" },
    { path: "/stay", label: "Stay" },
  ],
};

export default function RelatedLinks() {
  const pathname = usePathname();
  const currentPath = pathname || "/";
  const related = RELATED_BY_PATH[currentPath];
  if (!related || related.length === 0) return null;

  return (
    <nav
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 content-visibility-auto"
      aria-label="Related pages"
    >
      <div className="border-t border-slate-200 pt-8">
        <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
          You might also like
        </h2>
        <ul className="flex flex-wrap gap-3 sm:gap-4">
          {related.map(({ path, label }) => (
            <li key={path}>
              <Link
                href={path}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors"
              >
                <span>{PATH_BREADCRUMB_LABELS[path] ?? label}</span>
                <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
