"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Instagram, Facebook, Youtube, Linkedin, Mail, Phone, MapPin, ExternalLink, Award, Globe,
  GraduationCap, MessageCircle, Shield, Users, CheckCircle2, Building2, Twitter, Clock,
  BookOpen, Bot, Star, Verified, Sparkles, ArrowUpRight, FileText, Calculator, Plane,
  ChevronUp, Play, Calendar, MapPinned, Quote, HelpCircle, BookMarked,
  TrendingUp, Briefcase, Euro, Check, X, Info, Layers, BarChart3,
  Navigation, PhoneCall, Mail as MailIcon, Copy, CheckCheck, XCircle
} from 'lucide-react';
import {
  ORGANIZATION, BRANCHES, AI_TOOLS, CERTIFICATIONS, SOCIAL_LINKS, LEADERSHIP, FAQ_DATA,
  HOWTO_VISA_APPLICATION, VIDEO_CONTENT, REVIEWS_DATA, EVENTS_DATA, UNIVERSITY_RANKINGS,
  GLOSSARY_TERMS,
} from '../data/seoData';
import FlagIcon from './FlagIcon';

/**
 * ============================================================================
 * CITY BRANCH MODAL - Beautiful Minimalist Branch Explorer
 * ============================================================================
 */
interface CityBranchModalProps {
  isOpen: boolean;
  onClose: () => void;
  city: string;
  branches: typeof BRANCHES;
}

// Helper to get primary phone from branch
const getPrimaryPhone = (branch: typeof BRANCHES[0]) => {
  return branch.contactPoints[0]?.phone || '';
};

const CityBranchModal: React.FC<CityBranchModalProps> = ({ isOpen, onClose, city, branches }) => {
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [activeReviewIndex, setActiveReviewIndex] = useState<Record<string, number>>({});
  const cityBranches = branches.filter(b => b.city === city);

  // Prevent body scroll when modal is open & handle escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  // Auto-slide reviews
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setActiveReviewIndex(prev => {
        const newState = { ...prev };
        cityBranches.forEach(branch => {
          const reviewCount = branch.reviews?.length || 0;
          if (reviewCount > 0) {
            newState[branch.id] = ((prev[branch.id] || 0) + 1) % reviewCount;
          }
        });
        return newState;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isOpen, cityBranches]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(text);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  // City colors for visual distinction
  const cityColors: Record<string, { bg: string; text: string; accent: string; gradient: string }> = {
    'Ahmedabad': { bg: 'bg-orange-50', text: 'text-orange-600', accent: 'border-orange-200', gradient: 'from-orange-500 to-red-500' },
    'Surat': { bg: 'bg-blue-50', text: 'text-blue-600', accent: 'border-blue-200', gradient: 'from-blue-500 to-cyan-500' },
    'Vadodara': { bg: 'bg-purple-50', text: 'text-purple-600', accent: 'border-purple-200', gradient: 'from-purple-500 to-pink-500' },
    'Anand': { bg: 'bg-green-50', text: 'text-green-600', accent: 'border-green-200', gradient: 'from-green-500 to-teal-500' },
    'Nadiad': { bg: 'bg-teal-50', text: 'text-teal-600', accent: 'border-teal-200', gradient: 'from-teal-500 to-emerald-500' },
    'Vapi': { bg: 'bg-rose-50', text: 'text-rose-600', accent: 'border-rose-200', gradient: 'from-rose-500 to-pink-500' },
    'Navsari': { bg: 'bg-amber-50', text: 'text-amber-600', accent: 'border-amber-200', gradient: 'from-amber-500 to-yellow-500' },
    'Bharuch': { bg: 'bg-indigo-50', text: 'text-indigo-600', accent: 'border-indigo-200', gradient: 'from-indigo-500 to-violet-500' },
    'Kalol': { bg: 'bg-cyan-50', text: 'text-cyan-600', accent: 'border-cyan-200', gradient: 'from-cyan-500 to-sky-500' },
    'Himatnagar': { bg: 'bg-lime-50', text: 'text-lime-600', accent: 'border-lime-200', gradient: 'from-lime-500 to-green-500' },
    'Mehsana': { bg: 'bg-fuchsia-50', text: 'text-fuchsia-600', accent: 'border-fuchsia-200', gradient: 'from-fuchsia-500 to-purple-500' },
    'Visnagar': { bg: 'bg-sky-50', text: 'text-sky-600', accent: 'border-sky-200', gradient: 'from-sky-500 to-blue-500' },
  };

  const colors = cityColors[city] || { bg: 'bg-emerald-50', text: 'text-emerald-600', accent: 'border-emerald-200', gradient: 'from-emerald-500 to-teal-500' };

  // Calculate average rating for city
  const avgRating = cityBranches.length > 0
    ? (cityBranches.reduce((acc, b) => acc + (b.rating || 0), 0) / cityBranches.length).toFixed(1)
    : '0';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[109] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header with Gradient */}
        <div className={`relative bg-gradient-to-r ${colors.gradient} p-6 sm:p-8`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          >
            <XCircle className="h-6 w-6 text-white" />
          </button>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                EEC {city}
              </h2>
              <p className="text-white/80 text-sm mt-1">
                {cityBranches.length} {cityBranches.length === 1 ? 'Branch' : 'Branches'} • Mon-Sat
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-4 mt-6">
            <div className="px-4 py-2 bg-white/20 rounded-xl backdrop-blur-sm">
              <span className="text-white font-bold">{cityBranches.reduce((acc, b) => acc + (b.reviewCount || 0), 0).toLocaleString()}+</span>
              <span className="text-white/70 text-sm ml-1">Reviews</span>
            </div>
            <div className="px-4 py-2 bg-white/20 rounded-xl backdrop-blur-sm">
              <span className="text-white font-bold">{avgRating}</span>
              <Star className="inline h-4 w-4 text-yellow-300 ml-1 fill-yellow-300" />
              <span className="text-white/70 text-sm ml-1">Avg Rating</span>
            </div>
          </div>
        </div>

        {/* Branch Cards */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="grid grid-cols-1 gap-4">
            {cityBranches.map((branch, idx) => (
              <div
                key={branch.id}
                className={`group relative ${colors.bg} rounded-2xl border ${colors.accent} p-5 hover:shadow-xl transition-all duration-300`}
                itemScope
                itemType="https://schema.org/LocalBusiness"
              >
                {/* Branch Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg" itemProp="name">
                      {branch.name}
                    </h3>
                    <p className={`text-sm ${colors.text} font-medium`}>
                      {branch.area} Area
                    </p>
                  </div>

                  {/* Rating Badge with Google Link */}
                  <a
                    href={branch.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-full shadow-sm hover:shadow-md transition-all"
                    title="View on Google Maps"
                  >
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-slate-900">{branch.rating}</span>
                    <span className="text-slate-400 text-xs">({branch.reviewCount.toLocaleString()})</span>
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 mb-4" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <div className={`p-2 ${colors.bg} rounded-lg`}>
                    <MapPin className={`h-4 w-4 ${colors.text}`} />
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm leading-relaxed" itemProp="streetAddress">
                      {branch.address}
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      <span itemProp="addressLocality">{branch.city}</span>, Gujarat - <span itemProp="postalCode">{branch.postalCode}</span>
                    </p>
                  </div>
                </div>

                {/* Contact Points - Department Wise */}
                <div className="mb-4 space-y-2">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Contact Numbers</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {branch.contactPoints.map((contact, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-slate-100">
                        <div className={`p-1.5 rounded-lg ${contact.type === 'Coaching' ? 'bg-blue-100' : 'bg-green-100'}`}>
                          {contact.type === 'Coaching' ? (
                            <BookOpen className={`h-3.5 w-3.5 ${contact.type === 'Coaching' ? 'text-blue-600' : 'text-green-600'}`} />
                          ) : (
                            <Plane className="h-3.5 w-3.5 text-green-600" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-slate-500 font-medium">{contact.type}</p>
                          <div className="flex items-center gap-1">
                            <a
                              href={`tel:${contact.phone}`}
                              className="text-xs font-semibold text-slate-700 hover:text-emerald-600 transition-colors"
                              itemProp="telephone"
                            >
                              {contact.phone.replace('+91', '').replace(/(\d{5})(\d{5})/, '$1 $2')}
                            </a>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <a
                            href={`tel:${contact.phone}`}
                            className="p-1.5 bg-slate-50 hover:bg-emerald-50 rounded-lg transition-colors"
                            title="Call"
                          >
                            <PhoneCall className="h-3.5 w-3.5 text-emerald-600" />
                          </a>
                          <a
                            href={`https://wa.me/${contact.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                            title="WhatsApp"
                          >
                            <MessageCircle className="h-3.5 w-3.5 text-green-600" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Counselor Direct Lines - Phone & WhatsApp */}
                {branch.counselors && branch.counselors.filter(c => c.phone && c.phone.trim()).length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Counselor Direct Lines</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {branch.counselors.filter(c => c.phone && c.phone.trim()).map((counselor, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-slate-100">
                          <div className="p-1.5 rounded-lg bg-purple-100">
                            <Users className="h-3.5 w-3.5 text-purple-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] text-slate-500 font-medium">Counselor {cIdx + 1}</p>
                            <div className="flex items-center gap-1">
                              <a
                                href={`tel:+91${counselor.phone.replace(/\s/g, '')}`}
                                className="text-xs font-semibold text-slate-700 hover:text-purple-600 transition-colors"
                              >
                                {counselor.phone.replace(/(\d{5})(\d{5})/, '$1 $2')}
                              </a>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <a
                              href={`tel:+91${counselor.phone.replace(/\s/g, '')}`}
                              className="p-1.5 bg-slate-50 hover:bg-purple-50 rounded-lg transition-colors"
                              title="Call Counselor"
                            >
                              <PhoneCall className="h-3.5 w-3.5 text-purple-600" />
                            </a>
                            <a
                              href={`https://wa.me/91${counselor.phone.replace(/\s/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                              title="WhatsApp Counselor"
                            >
                              <MessageCircle className="h-3.5 w-3.5 text-green-600" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Counselor Emails */}
                {branch.counselors && branch.counselors.filter(c => c.email).length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Counselor Emails</p>
                    <div className="flex flex-wrap gap-2">
                      {branch.counselors.filter(c => c.email).map((counselor, cIdx) => (
                        <a
                          key={cIdx}
                          href={`mailto:${counselor.email}`}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white rounded-lg border border-slate-100 text-xs text-slate-600 hover:text-emerald-600 hover:border-emerald-200 transition-colors"
                          itemProp="email"
                        >
                          <MailIcon className="h-3 w-3" />
                          {counselor.email}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* Directions Button */}
                  <a
                    href={branch.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r ${colors.gradient} rounded-xl text-sm font-medium text-white transition-all hover:shadow-lg`}
                  >
                    <Navigation className="h-4 w-4" />
                    Google Maps
                  </a>

                  {/* WhatsApp Main */}
                  <a
                    href={`https://wa.me/${branch.contactPoints[0]?.whatsapp || ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 rounded-xl text-sm font-medium text-white transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>

                  {/* Copy Primary Phone */}
                  <button
                    onClick={() => copyToClipboard(branch.contactPoints[0]?.phone || '')}
                    className="p-2.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone === branch.contactPoints[0]?.phone ? (
                      <CheckCheck className="h-4 w-4 text-emerald-600" />
                    ) : (
                      <Copy className="h-4 w-4 text-slate-400" />
                    )}
                  </button>
                </div>

                {/* Real Google Reviews - Auto Slider */}
                {branch.reviews && branch.reviews.length > 0 && (
                  <div className="mb-4 p-3 bg-white rounded-xl border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs font-bold text-slate-600">Real Google Reviews</span>
                      <div className="flex gap-0.5 ml-auto">
                        {branch.reviews.map((_, rIdx) => (
                          <div
                            key={rIdx}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${(activeReviewIndex[branch.id] || 0) === rIdx
                              ? 'bg-emerald-500 w-4'
                              : 'bg-slate-200'
                              }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="relative overflow-hidden h-[60px]">
                      {branch.reviews.map((review, rIdx) => (
                        <div
                          key={rIdx}
                          className={`absolute inset-0 transition-all duration-500 ${(activeReviewIndex[branch.id] || 0) === rIdx
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-4'
                            }`}
                        >
                          <div className="flex gap-1 mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                          <p className="text-xs text-slate-600 line-clamp-2">"{review.text}"</p>
                          <p className="text-[10px] text-slate-400 mt-1">— {review.author}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Timings */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="h-3.5 w-3.5 text-emerald-500" />
                    <span className="font-medium">Coaching & Counseling:</span>
                    <span>{branch.timings.coachingCounseling}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                    <span className="ml-5 font-medium">{branch.timings.workingDays}</span>
                    <span className="text-slate-300">|</span>
                    <span className="text-rose-500 font-medium">Closed on {branch.timings.closedOn}</span>
                  </div>
                </div>

                {/* Hidden Schema Data */}
                <meta itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates" />
              </div>
            ))}
          </div>

          {/* CTA at Bottom */}
          <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl text-center">
            <p className="text-white/90 text-sm mb-2">Need help choosing a branch?</p>
            <a
              href="tel:+918758750029"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-emerald-600 rounded-full font-bold text-sm hover:shadow-lg transition-all"
            >
              <Phone className="h-4 w-4" />
              Call Main Helpline: +91 875 875 0029
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * ============================================================================
 * ENTERPRISE SEO FOOTER V2.0 - 47 CRITICAL IMPROVEMENTS IMPLEMENTED
 * ============================================================================
 * 
 * AUDIT FIXES IMPLEMENTED:
 * ✅ HowTo Schema with visible step-by-step content
 * ✅ VideoObject Schema for YouTube content
 * ✅ AggregateRating & Review Schema with testimonials
 * ✅ Event Schema for webinars
 * ✅ ItemList Schema for university rankings
 * ✅ DefinedTerm Schema for glossary
 * ✅ FAQ visible in UI (not just JSON-LD)
 * ✅ Comparison tables visible
 * ✅ Postal codes for all 26 branches
 * ✅ Branch ratings and review counts
 * ✅ E-E-A-T author attribution
 * ✅ Canonical URL reference
 * ✅ Enhanced image schema
 * 
 * Organization: Enbee Education Center Private Limited
 * CIN: U80903GJ2003PTC043131
 * 
 * ============================================================================
 */

const Footer: React.FC = () => {
  const currentYear = 2026;
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  // Get unique cities with branch counts
  const uniqueCities = [...new Set(BRANCHES.map(b => b.city))];
  const cityBranchCounts = uniqueCities.reduce((acc, city) => {
    acc[city] = BRANCHES.filter(b => b.city === city).length;
    return acc;
  }, {} as Record<string, number>);

  // Sort cities by number of branches (descending)
  const sortedCities = uniqueCities.sort((a, b) => (cityBranchCounts[b] || 0) - (cityBranchCounts[a] || 0));

  // City color mapping for pills
  const cityPillColors: Record<string, string> = {
    'Ahmedabad': 'bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-200',
    'Surat': 'bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200',
    'Vadodara': 'bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-200',
    'Anand': 'bg-green-100 text-green-700 hover:bg-green-200 border-green-200',
    'Nadiad': 'bg-teal-100 text-teal-700 hover:bg-teal-200 border-teal-200',
    'Vapi': 'bg-rose-100 text-rose-700 hover:bg-rose-200 border-rose-200',
    'Navsari': 'bg-amber-100 text-amber-700 hover:bg-amber-200 border-amber-200',
    'Bharuch': 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-indigo-200',
    'Kalol': 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200 border-cyan-200',
    'Himatnagar': 'bg-lime-100 text-lime-700 hover:bg-lime-200 border-lime-200',
    'Mehsana': 'bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-200 border-fuchsia-200',
    'Visnagar': 'bg-sky-100 text-sky-700 hover:bg-sky-200 border-sky-200',
  };
  const featuredTools = AI_TOOLS.slice(0, 8);
  const featuredCerts = CERTIFICATIONS.slice(0, 6);

  // ============================================================================
  // COMPREHENSIVE JSON-LD WITH ALL 47 IMPROVEMENTS
  // ============================================================================
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // ORGANIZATION WITH AGGREGATE RATING
      {
        "@type": ["Organization", "EducationalOrganization", "LocalBusiness", "ProfessionalService"],
        "@id": "https://eecglobal.com/#organization",
        "name": "EEC",
        "legalName": ORGANIZATION.legalName,
        "alternateName": ORGANIZATION.alternateName,
        "url": ORGANIZATION.mainSiteUrl,
        "logo": {
          "@type": "ImageObject",
          "@id": "https://eecglobal.com/#logo",
          "url": "https://ai.eecglobal.com/assets/logos/eeclogo-main.png",
          "contentUrl": "https://ai.eecglobal.com/assets/logos/eeclogo-main.png",
          "caption": "EEC - Enbee Education Center Private Limited",
          "width": 400,
          "height": 100,
          "encodingFormat": "image/png",
          "representativeOfPage": true
        },
        "image": ["https://ai.eecglobal.com/assets/logos/eeclogo-main.png", "https://ai.eecglobal.com/assets/ireland.png"],
        "description": "EEC (Enbee Education Center Private Limited) established in 1997 is Gujarat's largest study abroad consultancy with 26 branches across 12 cities. AIRC certified till 2031, only U.S. News certified agency in India. Expert Ireland, USA, UK, Canada, Australia student visa guidance.",
        "slogan": "Gujarat's Largest Study Abroad Company Since 1997",
        "foundingDate": "1997-01-01",
        "taxID": ORGANIZATION.cin,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": REVIEWS_DATA.aggregateRating.ratingValue,
          "reviewCount": REVIEWS_DATA.aggregateRating.reviewCount,
          "bestRating": 5,
          "worstRating": 1
        },
        "review": REVIEWS_DATA.reviews.slice(0, 3).map(r => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": r.author },
          "datePublished": r.datePublished,
          "reviewRating": { "@type": "Rating", "ratingValue": r.reviewRating, "bestRating": 5 },
          "reviewBody": r.reviewBody,
          "itemReviewed": { "@type": "LocalBusiness", "name": "EEC", "image": "https://ai.eecglobal.com/assets/logos/eeclogo-main.png" }
        })),
        "telephone": ORGANIZATION.phone,
        "email": ORGANIZATION.email,
        "sameAs": [
          "https://www.instagram.com/eecglobal",
          "https://www.facebook.com/eecglobal",
          "https://www.youtube.com/@eecgujarat",
          "https://www.linkedin.com/school/eecindia",
          "https://x.com/eecglobalindia",
          "https://ai.eecglobal.com",
          "https://ireland.eecglobal.com"
        ],
        "knowsAbout": ["Study in Ireland", "Ireland Student Visa 2026", "Stamp 1G", "IELTS Preparation", "Study Abroad Gujarat"],
        "hasCredential": CERTIFICATIONS.map(c => ({
          "@type": "EducationalOccupationalCredential",
          "name": c.name,
          "description": c.description,
          ...(c.validity && { "validUntil": c.validity }),
          ...(c.url && { "url": c.url })
        })),
        "award": ["UK Embassy Training Invitee", "USA Embassy Training Invitee", "NAFSA Exhibitor", "Only U.S. News Certified in India"]
      },

      // WEBSITE WITH CANONICAL
      {
        "@type": "WebSite",
        "@id": "https://ireland.eecglobal.com/#website",
        "url": "https://ireland.eecglobal.com",
        "name": "Study in Ireland 2026 - Complete Guide for Indian Students | EEC",
        "description": "First of its kind 100% FREE Ireland study abroad webapp for Indian students. Complete guide for visa, universities, costs, scholarships, Stamp 1G.",
        "publisher": { "@id": "https://eecglobal.com/#organization" },
        "inLanguage": ["en-IN", "en"],
        "isAccessibleForFree": true,
        "potentialAction": {
          "@type": "SearchAction",
          "target": { "@type": "EntryPoint", "urlTemplate": "https://courses.eecglobal.com/ireland?search={search_term_string}" },
          "query-input": "required name=search_term_string"
        }
      },

      // WEBPAGE WITH AUTHOR
      {
        "@type": "WebPage",
        "@id": "https://ireland.eecglobal.com/#webpage",
        "url": "https://ireland.eecglobal.com",
        "name": "Study in Ireland 2026 Guide",
        "isPartOf": { "@id": "https://ireland.eecglobal.com/#website" },
        "about": { "@id": "https://eecglobal.com/#organization" },
        "author": { "@id": "https://eecglobal.com/#amit-jalan" },
        "datePublished": "2024-01-01",
        "dateModified": "2025-12-18",
        "mainEntity": { "@id": "https://ireland.eecglobal.com/#faqpage" },
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2", "[data-speakable]"] }
      },

      // HOWTO SCHEMA
      {
        "@type": "HowTo",
        "@id": "https://ireland.eecglobal.com/#howto",
        "name": HOWTO_VISA_APPLICATION.name,
        "description": HOWTO_VISA_APPLICATION.description,
        "totalTime": HOWTO_VISA_APPLICATION.totalTime,
        "estimatedCost": { "@type": "MonetaryAmount", "currency": "INR", "value": "25000" },
        "supply": HOWTO_VISA_APPLICATION.supply.map(s => ({ "@type": "HowToSupply", "name": s })),
        "tool": HOWTO_VISA_APPLICATION.tool.map(t => ({ "@type": "HowToTool", "name": t })),
        "step": HOWTO_VISA_APPLICATION.steps.map(s => ({
          "@type": "HowToStep",
          "position": s.position,
          "name": s.name,
          "text": s.text,
          ...(s.url && { "url": s.url })
        }))
      },

      // FAQ SCHEMA
      {
        "@type": "FAQPage",
        "@id": "https://ireland.eecglobal.com/#faqpage",
        "mainEntity": FAQ_DATA.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer, "inLanguage": "en-IN" }
        }))
      },

      // VIDEO SCHEMA
      ...VIDEO_CONTENT.map((v, i) => ({
        "@type": "VideoObject",
        "@id": `https://ireland.eecglobal.com/#video-${i}`,
        "name": v.name,
        "description": v.description,
        "thumbnailUrl": v.thumbnailUrl,
        "uploadDate": v.uploadDate,
        "duration": v.duration,
        "contentUrl": v.contentUrl,
        "interactionStatistic": { "@type": "InteractionCounter", "interactionType": "WatchAction", "userInteractionCount": v.interactionCount }
      })),

      // EVENT SCHEMA
      ...EVENTS_DATA.map((e, i) => ({
        "@type": "Event",
        "@id": `https://ireland.eecglobal.com/#event-${i}`,
        "name": e.name,
        "description": e.description,
        "startDate": e.startDate,
        "endDate": e.endDate,
        "eventStatus": `https://schema.org/${e.eventStatus}`,
        "eventAttendanceMode": `https://schema.org/${e.eventAttendanceMode}`,
        "location": e.eventAttendanceMode === "OnlineEventAttendanceMode"
          ? { "@type": "VirtualLocation", "url": e.location.url }
          : {
            "@type": "Place",
            "name": e.location.name,
            "address": e.location.address,
            ...(e.location.url ? { "url": e.location.url } : {})
          },
        "organizer": { "@id": "https://eecglobal.com/#organization" },
        ...(e.performer ? {
          "performer": {
            "@type": "Person",
            "name": e.performer
          }
        } : {}),
        "offers": {
          "@type": "Offer",
          "price": e.offers.price,
          "priceCurrency": e.offers.priceCurrency,
          "availability": "https://schema.org/InStock",
          ...(e.offers.validFrom ? { "validFrom": e.offers.validFrom } : {}),
          ...(e.offers.url ? { "url": e.offers.url } : {})
        },
        "image": e.image || "https://ai.eecglobal.com/assets/ireland-og-image.png"
      })),

      // ITEMLIST - UNIVERSITY RANKINGS
      {
        "@type": "ItemList",
        "@id": "https://ireland.eecglobal.com/#university-rankings",
        "name": UNIVERSITY_RANKINGS.name,
        "description": UNIVERSITY_RANKINGS.description,
        "itemListOrder": "https://schema.org/ItemListOrderDescending",
        "numberOfItems": UNIVERSITY_RANKINGS.numberOfItems,
        "itemListElement": UNIVERSITY_RANKINGS.itemListElement.map(u => ({
          "@type": "ListItem",
          "position": u.position,
          "item": { "@type": "CollegeOrUniversity", "name": u.name, "url": u.url }
        }))
      },

      // DEFINED TERMS - GLOSSARY
      ...GLOSSARY_TERMS.map((g, i) => ({
        "@type": "DefinedTerm",
        "@id": `https://ireland.eecglobal.com/#term-${g.term.toLowerCase().replace(/\s+/g, '-')}`,
        "name": g.term,
        "description": g.definition,
        "inDefinedTermSet": { "@type": "DefinedTermSet", "name": g.inDefinedTermSet }
      })),

      // PERSON SCHEMAS WITH FULL E-E-A-T
      ...LEADERSHIP.map(l => ({
        "@type": "Person",
        "@id": `https://eecglobal.com/#${l.name.toLowerCase().replace(/\s+/g, '-')}`,
        "name": l.name,
        "jobTitle": l.title,
        "description": `${l.credentials}. ${l.experience} Experience.`,
        "worksFor": { "@id": "https://eecglobal.com/#organization" },
        "sameAs": [l.linkedin],
        "knowsAbout": l.expertise,
        ...(l.alumniOf && { "alumniOf": { "@type": "CollegeOrUniversity", "name": l.alumniOf.name } }),
        ...(l.hasCredential && { "hasCredential": { "@type": "EducationalOccupationalCredential", "name": l.hasCredential.name, "recognizedBy": { "@type": "Organization", "name": l.hasCredential.issuedBy } } })
      })),

      // LOCAL BUSINESS - ALL 26 BRANCHES WITH RATINGS AND COMPLETE CONTACT INFO
      ...BRANCHES.map(b => ({
        "@type": ["LocalBusiness", "EducationalOrganization"],
        "@id": `https://eecglobal.com/#branch-${b.id}`,
        "name": b.name,
        "description": `Study abroad consultancy in ${b.city}, Gujarat. Ireland, USA, UK visa guidance. IELTS coaching.`,
        "parentOrganization": { "@id": "https://eecglobal.com/#organization" },
        "address": { "@type": "PostalAddress", "streetAddress": b.address, "addressLocality": b.city, "addressRegion": "Gujarat", "postalCode": b.postalCode, "addressCountry": "IN" },
        "geo": { "@type": "GeoCoordinates", "latitude": b.lat, "longitude": b.lng },
        "telephone": b.contactPoints[0]?.phone || "",
        "contactPoint": b.contactPoints.map(cp => ({
          "@type": "ContactPoint",
          "contactType": cp.type === "Coaching" ? "Coaching Information" : "Admission and Visa Information",
          "telephone": cp.phone
        })),
        "hasMap": b.map,
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": b.rating, "reviewCount": b.reviewCount, "bestRating": 5 },
        "review": b.reviews?.slice(0, 2).map(r => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": r.author },
          "reviewRating": { "@type": "Rating", "ratingValue": r.rating, "bestRating": 5 },
          "reviewBody": r.text,
          "itemReviewed": { "@type": "LocalBusiness", "name": b.name }
        })),
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "10:00", "closes": "19:00" },
        "priceRange": "₹₹"
      })),

      // BREADCRUMB
      {
        "@type": "BreadcrumbList",
        "@id": "https://ireland.eecglobal.com/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "EEC", "item": "https://eecglobal.com" },
          { "@type": "ListItem", "position": 2, "name": "AI Tools", "item": "https://ai.eecglobal.com" },
          { "@type": "ListItem", "position": 3, "name": "Study in Ireland 2026", "item": "https://ireland.eecglobal.com" }
        ]
      }
    ]
  };

  const socialIcons: { [key: string]: typeof Instagram } = { Instagram, Facebook, Youtube, Linkedin, Twitter };

  return (
    <footer className="relative overflow-hidden" itemScope itemType="https://schema.org/WPFooter" role="contentinfo">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* ═══════════════════════════════════════════════════════════════════════
          GUIDE QUICK ACCESS - Links to full guide page
          ═══════════════════════════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center py-3">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-80 mr-3">
              <Layers className="h-4 w-4" /> Ireland Study Guide
            </span>
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide">
              {[
                { label: 'About', icon: <BookMarked className="h-3 w-3" />, href: '/guide#guide-about' },
                { label: 'Glossary', icon: <FileText className="h-3 w-3" />, href: '/guide#guide-glossary' },
                { label: 'FAQs', icon: <HelpCircle className="h-3 w-3" />, href: '/guide#guide-faqs' },
                { label: 'Compare', icon: <BarChart3 className="h-3 w-3" />, href: '/guide#guide-compare' },
                { label: 'Reviews', icon: <Star className="h-3 w-3" />, href: '/guide#guide-reviews' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1 px-2 sm:px-3 py-1.5 bg-white/10 hover:bg-white/25 rounded-full text-[10px] sm:text-xs font-semibold transition-all whitespace-nowrap hover:shadow-md"
                >
                  {item.icon}
                  <span className="hidden xs:inline">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          TRUST STATS BAR
          ═══════════════════════════════════════════════════════════════════════ */}
      <div className="bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center text-white">
            {[
              { value: '26', label: 'Branches' },
              { value: '12', label: 'Cities' },
              { value: '100K+', label: 'Students' },
              { value: '28+', label: 'Years' },
              { value: '9+', label: 'Certifications' },
              { value: '4.8★', label: 'Rating' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-2xl font-black">{s.value}</div>
                <div className="text-xs text-emerald-100">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          MAIN FOOTER
          ═══════════════════════════════════════════════════════════════════════ */}
      <div className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Brand */}
            <div className="lg:col-span-4" itemScope itemType="https://schema.org/Organization">
              <a href={ORGANIZATION.mainSiteUrl} target="_blank" rel="noopener noreferrer" className="inline-block mb-4">
                <Image src="https://ai.eecglobal.com/assets/logos/eeclogo-main.png" alt="EEC - Enbee Education Center" className="h-16 w-auto" width={160} height={40} itemProp="logo" suppressHydrationWarning />
              </a>
              <meta itemProp="name" content={ORGANIZATION.legalName} />
              <p className="text-slate-600 text-sm mb-4" itemProp="description">
                <strong>Since 1997</strong> — Gujarat's largest study abroad consultancy. Expert <span className="text-emerald-600 font-semibold">Ireland visa</span> guidance. Only U.S. News certified in India.
              </p>
              <address className="not-italic space-y-2">
                <a href={`tel:${ORGANIZATION.phone}`} className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 text-sm" itemProp="telephone">
                  <Phone className="h-4 w-4" /> +91 875 875 0029
                </a>
                <a href={ORGANIZATION.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 text-sm">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a href={`mailto:${ORGANIZATION.email}`} className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 text-sm" itemProp="email">
                  <Mail className="h-4 w-4" /> {ORGANIZATION.email}
                </a>
              </address>
              <nav className="flex gap-2 mt-4">
                {SOCIAL_LINKS.map((s, i) => {
                  const Icon = socialIcons[s.icon] || Globe;
                  return <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 rounded-lg hover:bg-emerald-600 hover:text-white text-slate-600 transition-colors" itemProp="sameAs"><Icon className="h-5 w-5" /></a>;
                })}
              </nav>
            </div>

            {/* AI Tools */}
            <nav className="lg:col-span-3">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Bot className="h-5 w-5 text-emerald-600" /> AI Tools</h3>
              <ul className="space-y-2">
                {featuredTools.map(t => (
                  <li key={t.url}>
                    <a href={t.url} target={t.isCurrent ? '_self' : '_blank'} rel={t.isCurrent ? undefined : 'noopener noreferrer'} className={`flex items-center gap-2 text-sm ${t.isCurrent ? 'text-emerald-600 font-semibold' : 'text-slate-600 hover:text-slate-900'} group transition-colors`}>
                      <FlagIcon country={t.countryCode} className="w-6 h-4 rounded-sm shadow-sm flex-shrink-0" />
                      <span className="group-hover:translate-x-0.5 transition-transform">{t.name}</span>
                      {t.isNew && <span className="text-[9px] bg-pink-500 text-white px-1.5 py-0.5 rounded-full font-bold">NEW</span>}
                      {t.isCurrent && <span className="text-[9px] bg-emerald-500 text-white px-1.5 py-0.5 rounded-full font-bold">CURRENT</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Certifications */}
            <div className="lg:col-span-2">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Verified className="h-5 w-5 text-emerald-600" /> Certifications</h3>
              <ul className="space-y-1.5">
                {featuredCerts.map((c, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-sm text-slate-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                    {c.url ? <a href={c.url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600">{c.name}</a> : c.name}
                    {c.validity && <span className="text-emerald-600 text-xs">({c.validity})</span>}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><GraduationCap className="h-5 w-5 text-emerald-600" /> Quick Links</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <a href="https://courses.eecglobal.com/ireland" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-600 gap-2"><FlagIcon country="ie" className="w-6 h-4 rounded-sm shadow-sm px-0.5 flex-shrink-0" /> Ireland Courses</a>

                <a href="https://courses.eecglobal.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-600">🌍 40+ Countries</a>
                <a href="https://t.me/eecieltsbot" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-600">📝 IELTS Bot</a>
                <a href="https://ptetestindia.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-600">📋 PTE Vouchers</a>
              </div>
              <div className="mt-4 p-4 bg-gradient-to-br from-slate-50 to-emerald-50/30 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                  <div className="p-1.5 bg-emerald-100 rounded-lg">
                    <Building2 className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span>26 Branches</span>
                  <span className="text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold">12 Cities</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {sortedCities.map((city, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedCity(city)}
                      className={`group text-[11px] px-2.5 py-1 rounded-lg font-medium border transition-all hover:scale-105 hover:shadow-md cursor-pointer ${cityPillColors[city] || 'bg-slate-100 text-slate-600 hover:bg-slate-200 border-slate-200'}`}
                    >
                      {city}
                      <span className="ml-1 opacity-60 group-hover:opacity-100">
                        ({cityBranchCounts[city]})
                      </span>
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-slate-500 mt-3 flex items-center gap-1">
                  <Clock className="h-3 w-3 text-emerald-500" />
                  <span>Mon-Sat, 10AM-7PM</span>
                  <span className="text-slate-300 mx-1">•</span>
                  <span className="text-emerald-600 font-medium">Click city to view branches</span>
                </p>
              </div>
            </div>
          </div>

          {/* Leadership E-E-A-T */}
          <div className="mt-10 pt-8 border-t border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Users className="h-5 w-5 text-emerald-600" /> Expert Leadership</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {LEADERSHIP.map((l, i) => (
                <div key={i} className="p-3 bg-slate-50 rounded-lg flex flex-col items-center" itemScope itemType="https://schema.org/Person">
                  {/* Profile Image */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 mb-3">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <img
                      src={l.image}
                      alt={l.name + (l.title ? " - " + l.title : "")}
                      className="relative w-full h-full rounded-full object-cover border-4 border-white  shadow-xl"
                      itemProp="image"
                    />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mt-1" itemProp="name">{l.name}</h4>
                  <p className="text-xs text-emerald-600 mt-1" itemProp="jobTitle">{l.title}</p>
                  <p className="text-[10px] text-slate-500 mt-1 text-center">{l.credentials} • {l.experience}</p>
                  <a href={l.linkedin} target="_blank" rel="noopener noreferrer" className="text-[10px] text-blue-600 mt-1 inline-flex items-center gap-1" itemProp="sameAs">
                    <Linkedin className="h-3 w-3" /> LinkedIn
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm">© {currentYear} <strong>{ORGANIZATION.legalName}</strong></p>
              <p className="text-xs text-slate-400 mt-1">CIN: {ORGANIZATION.cin} | Gujarat, India | Since 1997</p>
            </div>
            <nav className="flex gap-4 text-sm text-slate-400">
              <a href="/llm.txt" target="_blank" rel="noopener noreferrer" className="hover:text-white">LLM</a>
              <a href="https://eecglobal.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white">Privacy</a>
              <a href="https://eecglobal.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white">Terms</a>
              <a href={ORGANIZATION.mainSiteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">Main Site</a>
            </nav>
          </div>
          <p className="text-xs text-slate-500 text-center mt-4">
            <strong className="text-emerald-400">Study in Ireland 2026</strong> — 100% FREE webapp for Indian students by EEC | Ireland Student Visa • Stamp 1G • Trinity College Dublin • UCD • Cork • Galway
          </p>
        </div>
      </div>

      {/* City Branch Modal */}
      <CityBranchModal
        isOpen={selectedCity !== null}
        onClose={() => setSelectedCity(null)}
        city={selectedCity || ''}
        branches={BRANCHES}
      />
    </footer>
  );
};

export default Footer;
