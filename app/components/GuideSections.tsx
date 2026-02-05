"use client";

import React, { useState, useEffect } from "react";
import {
  BookMarked,
  Building2,
  Plane,
  FileText,
  HelpCircle,
  BarChart3,
  Star,
  ChevronDown,
  Plus,
  Minus,
  Check,
  Quote,
  Verified,
  ArrowUpRight,
} from "lucide-react";
import {
  FAQ_DATA,
  GLOSSARY_TERMS,
  REVIEWS_DATA,
  COMPARISON_DATA,
} from "../data/seoData";
import FlagIcon from "./FlagIcon";

// ============================================================================
// COLLAPSIBLE SECTION - Reused for guide page
// ============================================================================
interface CollapsibleSectionProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
  variant?: "dark" | "light" | "gradient";
  badge?: string;
  sectionId?: string;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  subtitle,
  icon,
  defaultOpen = true,
  children,
  variant = "light",
  badge,
  sectionId,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  useEffect(() => {
    if (defaultOpen) setIsOpen(true);
  }, []);

  const bgStyles = {
    dark: "bg-slate-900 text-white",
    light: "bg-white text-slate-900",
    gradient:
      "bg-gradient-to-b from-emerald-50 to-white text-slate-900",
  };
  const borderStyles = {
    dark: "border-white/10",
    light: "border-slate-200",
    gradient: "border-emerald-100",
  };
  const buttonBgStyles = {
    dark: "bg-white/10 hover:bg-white/20 text-white",
    light: "bg-slate-100 hover:bg-slate-200 text-slate-700",
    gradient: "bg-emerald-100 hover:bg-emerald-200 text-emerald-700",
  };
  const accentStyles = {
    dark: "border-l-emerald-400",
    light: "border-l-emerald-500",
    gradient: "border-l-emerald-500",
  };

  return (
    <div
      id={sectionId}
      className={`${bgStyles[variant]} border-t ${borderStyles[variant]} scroll-mt-24 rounded-xl overflow-hidden shadow-sm`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full py-5 flex items-center justify-between group border-l-4 ${isOpen ? accentStyles[variant] : "border-l-transparent"} -ml-4 pl-4 transition-all`}
          aria-expanded={isOpen}
          aria-controls={sectionId ? `${sectionId}-content` : undefined}
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-2.5 rounded-xl ${buttonBgStyles[variant]} transition-all duration-300 ${isOpen ? "scale-110 shadow-lg" : "group-hover:scale-105"}`}
            >
              {icon}
            </div>
            <div className="text-left">
              <h2 className="font-black text-base sm:text-lg flex items-center gap-2 flex-wrap">
                {title}
                {badge && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${isOpen ? "bg-emerald-500 text-white" : "bg-slate-200 text-slate-600"} transition-colors`}
                  >
                    {badge}
                  </span>
                )}
              </h2>
              {subtitle && (
                <p
                  className={`text-xs ${variant === "dark" ? "text-slate-400" : "text-slate-500"} hidden sm:block`}
                >
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          <div
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full ${buttonBgStyles[variant]} transition-all duration-300 ${isOpen ? "shadow-inner" : "shadow-sm"}`}
          >
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider hidden sm:inline">
              {isOpen ? "Hide" : "Show"}
            </span>
            <div
              className={`transition-transform duration-500 ease-out ${isOpen ? "rotate-180" : ""}`}
            >
              <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
          </div>
        </button>
        <div
          id={sectionId ? `${sectionId}-content` : undefined}
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[5000px] opacity-100 pb-10" : "max-h-0 opacity-0"}`}
          aria-hidden={!isOpen}
        >
          <div
            className={`transition-transform duration-500 ${isOpen ? "translate-y-0" : "-translate-y-4"}`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const sectionIds = {
  about: "guide-about",
  glossary: "guide-glossary",
  faqs: "guide-faqs",
  compare: "guide-compare",
  reviews: "guide-reviews",
};

export default function GuideSections() {
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(
    () =>
      new Set(Array.from({ length: FAQ_DATA.length }, (_, i) => i))
  );
  const [showAllFaqs, setShowAllFaqs] = useState(true);
  const displayedFaqs = showAllFaqs ? FAQ_DATA : FAQ_DATA.slice(0, 5);

  useEffect(() => {
    if (showAllFaqs && FAQ_DATA.length > 5) {
      setExpandedFaqs((prev) =>
        new Set([
          ...prev,
          ...Array.from(
            { length: FAQ_DATA.length - 5 },
            (_, i) => i + 5
          ),
        ])
      );
    }
  }, [showAllFaqs]);

  return (
    <div className="space-y-6">
      {/* About EEC & Ireland Study */}
      <CollapsibleSection
        title="About EEC & Ireland Study"
        subtitle="Authoritative information for Indian students"
        icon={<BookMarked className="h-5 w-5 text-emerald-400" />}
        variant="dark"
        badge="GEO"
        defaultOpen={true}
        sectionId={sectionIds.about}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          data-speakable="true"
        >
          <div
            className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
            data-geo-type="entity-definition"
            data-quotable="true"
          >
            <h3 className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
              <Building2 className="h-4 w-4" /> About EEC
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong className="text-white">
                EEC (Enbee Education Center Private Limited, CIN:
                U80903GJ2003PTC043131)
              </strong>{" "}
              is Gujarat&apos;s largest and oldest study abroad consultancy,
              established in 1997 with{" "}
              <strong className="text-emerald-400">26 branches</strong> across
              12 cities. EEC is{" "}
              <strong className="text-white">
                India&apos;s only U.S. News Global Education certified agency
              </strong>{" "}
              and holds AIRC membership valid until 2031. For Ireland, EEC
              processes{" "}
              <strong className="text-emerald-400">
                2,400+ applications annually
              </strong>{" "}
              with 95%+ visa success rate.
            </p>
          </div>
          <div
            className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
            data-geo-type="definitive-answer"
            data-quotable="true"
          >
            <h3 className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
              <Plane className="h-4 w-4" /> Stamp 1G Advantage
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong className="text-white">
                Ireland&apos;s Stamp 1G post-study work visa
              </strong>{" "}
              grants Masters graduates{" "}
              <strong className="text-emerald-400">24 months</strong> of
              unrestricted work permission without employer sponsorship. Work in
              any sector at Ireland&apos;s{" "}
              <strong className="text-white">€14.50/hour minimum wage</strong>
              —highest in EU. Stamp 1G time counts toward{" "}
              <strong className="text-emerald-400">5-year citizenship</strong>{" "}
              requirement, making Ireland the fastest EU pathway for Indian
              graduates.
            </p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              value: "1997",
              label: "Established",
              triple: "EEC|established|1997",
            },
            {
              value: "26",
              label: "Branches",
              triple: "EEC|has|26 branches",
            },
            {
              value: "€14.50",
              label: "Min Wage/Hr",
              triple: "Ireland minimum wage 2026|is|€14.50/hour",
            },
            {
              value: "24mo",
              label: "Stamp 1G",
              triple: "Stamp 1G|grants|24 months work",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 hover:scale-105 transition-transform"
              data-triple={stat.triple}
            >
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                {stat.value}
              </div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* Ireland Immigration Glossary */}
      <CollapsibleSection
        title="Ireland Immigration Glossary"
        subtitle="Key terms every Indian student should know"
        icon={<FileText className="h-5 w-5 text-emerald-600" />}
        variant="light"
        badge={`${GLOSSARY_TERMS.length} Terms`}
        defaultOpen={true}
        sectionId={sectionIds.glossary}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          data-geo-type="glossary"
        >
          {GLOSSARY_TERMS.map((g, idx) => (
            <div
              key={idx}
              className="group p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/10 transition-all"
              itemScope
              itemType="https://schema.org/DefinedTerm"
            >
              <dt
                className="font-bold text-emerald-600 text-sm mb-2 flex items-center gap-2 group-hover:text-emerald-700"
                itemProp="name"
              >
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                {g.term}
              </dt>
              <dd
                className="text-slate-600 text-xs leading-relaxed"
                itemProp="description"
              >
                {g.definition}
              </dd>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* Ireland Study Abroad FAQs 2026 */}
      <CollapsibleSection
        title="Ireland Study Abroad FAQs 2026"
        subtitle="Most asked questions by Indian students"
        icon={<HelpCircle className="h-5 w-5 text-emerald-600" />}
        variant="gradient"
        badge={`${FAQ_DATA.length} Q&A`}
        defaultOpen={true}
        sectionId={sectionIds.faqs}
      >
        <div
          className="max-w-4xl mx-auto space-y-3"
          data-speakable="true"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          {displayedFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                type="button"
                onClick={() =>
                  setExpandedFaqs((prev) => {
                    const next = new Set(prev);
                    if (next.has(idx)) next.delete(idx);
                    else next.add(idx);
                    return next;
                  })
                }
                className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <span
                  className="font-semibold text-slate-900 text-sm pr-4 flex items-center gap-2"
                  itemProp="name"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs font-black">
                    {idx + 1}
                  </span>
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${expandedFaqs.has(idx) ? "bg-emerald-100 text-emerald-600 rotate-180" : "bg-slate-100 text-slate-400"}`}
                >
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${expandedFaqs.has(idx) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div
                  className="px-5 pb-4 pl-14"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p
                    className="text-slate-600 text-sm leading-relaxed"
                    itemProp="text"
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {FAQ_DATA.length > 5 && (
          <div className="text-center mt-6">
            <button
              type="button"
              onClick={() => setShowAllFaqs(!showAllFaqs)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 rounded-full font-semibold text-sm transition-all hover:scale-105"
            >
              {showAllFaqs ? (
                <Minus className="h-4 w-4" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
              {showAllFaqs
                ? "Show Less"
                : `Show All ${FAQ_DATA.length} FAQs`}
            </button>
          </div>
        )}
      </CollapsibleSection>

      {/* Ireland vs Other Countries 2026 */}
      <CollapsibleSection
        title="Ireland vs Other Countries 2026"
        subtitle="Compare study abroad destinations at a glance"
        icon={<BarChart3 className="h-5 w-5 text-emerald-600" />}
        variant="light"
        badge="Compare"
        defaultOpen={true}
        sectionId={sectionIds.compare}
      >
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white">
                <th className="px-4 py-4 text-left font-bold">Country</th>
                <th className="px-4 py-4 text-left font-bold">
                  Post-Study Work
                </th>
                <th className="px-4 py-4 text-left font-bold">Min Wage</th>
                <th className="px-4 py-4 text-left font-bold">Work Hours</th>
                <th className="px-4 py-4 text-left font-bold">PR Path</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.irelandVsOthers.map((c, idx) => (
                <tr
                  key={idx}
                  className={`border-b transition-colors ${c.country === "Ireland" ? "bg-emerald-50 hover:bg-emerald-100" : "hover:bg-slate-50"}`}
                >
                  <td className="px-4 py-4 font-semibold">
                    <span className="inline-flex items-center gap-2">
                      <FlagIcon
                        country={
                          c.country === "Ireland"
                            ? "ie"
                            : c.country === "UK"
                              ? "gb"
                              : c.country === "Canada"
                                ? "ca"
                                : c.country === "Australia"
                                  ? "au"
                                  : c.country === "USA"
                                    ? "us"
                                    : c.country === "Germany"
                                      ? "de"
                                      : ""
                        }
                        className="w-6 h-4 rounded-sm shadow-sm"
                      />
                      {c.country}
                    </span>
                    {c.country === "Ireland" && (
                      <span className="ml-2 text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold">
                        BEST
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4 font-medium text-emerald-600">
                    {c.postStudyWork}
                  </td>
                  <td className="px-4 py-4">{c.minWage}</td>
                  <td className="px-4 py-4">{c.workHours}</td>
                  <td className="px-4 py-4">
                    {c.prPathway === "Yes" ||
                    c.prPathway?.startsWith("Yes") ? (
                      <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                        <Check className="h-4 w-4" /> Yes
                      </span>
                    ) : (
                      <span className="text-slate-500">{c.prPathway}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-4 text-center italic">
          Data as of January 2026. Source: Official government immigration
          websites.
        </p>
      </CollapsibleSection>

      {/* Student Reviews */}
      <CollapsibleSection
        title={`Student Reviews ${REVIEWS_DATA.aggregateRating.ratingValue}/5`}
        subtitle={`Based on ${REVIEWS_DATA.aggregateRating.reviewCount.toLocaleString()} verified reviews`}
        icon={
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        }
        variant="light"
        badge="★ Top Rated"
        defaultOpen={true}
        sectionId={sectionIds.reviews}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 p-4 bg-gradient-to-r from-yellow-50 to-emerald-50 rounded-xl border border-yellow-100">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-8 w-8 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <div className="text-center sm:text-left">
            <div className="text-3xl font-black text-slate-900">
              {REVIEWS_DATA.aggregateRating.ratingValue}
              <span className="text-lg text-slate-400">/5</span>
            </div>
            <div className="text-sm text-slate-600">
              {REVIEWS_DATA.aggregateRating.reviewCount.toLocaleString()} reviews
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {REVIEWS_DATA.reviews.slice(0, 3).map((r, idx) => (
            <div
              key={idx}
              className="group bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all"
              itemScope
              itemType="https://schema.org/Review"
            >
              <span
                itemProp="itemReviewed"
                itemScope
                itemType="https://schema.org/LocalBusiness"
                style={{ display: "none" }}
              >
                <meta itemProp="name" content="EEC" />
              </span>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(r.reviewRating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="ml-auto text-xs text-slate-400">
                  {r.reviewRating}.0
                </span>
              </div>
              <Quote className="h-6 w-6 text-emerald-200 mb-2" />
              <p
                className="text-slate-600 text-sm mb-4 leading-relaxed"
                itemProp="reviewBody"
              >
                {r.reviewBody}
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold overflow-hidden">
                  {r.image ? (
                    <img
                      src={r.image}
                      alt={r.author}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    r.author.charAt(0)
                  )}
                </div>
                <div>
                  <div
                    className="font-semibold text-slate-900 text-sm"
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <span itemProp="name">{r.author}</span>
                  </div>
                  <div
                    className="text-xs text-slate-500"
                    itemProp="datePublished"
                  >
                    {new Date(r.datePublished).toLocaleDateString("en-IN", {
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                </div>
                <Verified className="ml-auto h-5 w-5 text-emerald-500" />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a
            href="https://g.page/eec-ahmedabad/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-900 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-yellow-400/30"
          >
            <Star className="h-4 w-4" />
            Leave Your Review on Google
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </CollapsibleSection>
    </div>
  );
}
