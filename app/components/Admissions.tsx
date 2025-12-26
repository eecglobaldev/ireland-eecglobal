"use client";
import React, { useState } from 'react';
import { REGIONS, COURSE_SEARCH_URL } from '../constants';
import {
  GraduationCap, CheckCircle2, Star, Target, Info, ArrowRight,
  BarChart3, AlertCircle, Search, ExternalLink, Clock,
  MessageCircle,
  Phone
} from 'lucide-react';

const Admissions: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<'Bachelor' | 'Master' | 'VET'>('Master');

  return (
    <div className="space-y-12 animate-fade-in pb-12 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-100 shadow-sm">
          <GraduationCap size={14} />
          <span>Entry Rules 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">Applying from India</h1>
        <p className="text-slate-500 text-base sm:text-xl font-light max-w-2xl mx-auto">
          What you need to get into an Irish college in 2026.
        </p>
      </header>

      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-6 sm:p-14 rounded-[2rem] sm:rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
        <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-10">
          <div className="text-center xl:text-left">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight leading-none">Ireland Course Search</h2>
            <p className="text-emerald-100 font-light text-base sm:text-lg max-w-xl">
              Find 3,500+ approved courses and see the fees for 2026.
            </p>
          </div>

          <div className="flex items-center gap-2 justify-center">
            <a
              href={COURSE_SEARCH_URL} target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-[11px] sm:text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all"
            >
              <Search size={20} /> SEARCH TOOL <ExternalLink size={14} />
            </a>


            <a
              href="tel:+918758750029"
              className="inline-flex items-center  text-white px-4 py-2 rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-xl hover:bg-emerald-500 hover:text-white transition-all"
              itemProp="telephone"
            >
              <Phone className="h-6" />
            </a>
            <a
              href="https://Wa.Me/918758750029"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white px-4 py-2 rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-xl hover:bg-green-500 hover:text-white transition-all"
            >
              <MessageCircle className="h-6" />

            </a>
          </div>
        </div>
      </div>

      <div className="flex space-x-3 overflow-x-auto pb-4 justify-center px-4 scrollbar-hide">
        {['Bachelor', 'Master', 'VET'].map((lvl) => (
          <button
            key={lvl}
            onClick={() => setSelectedLevel(lvl as any)}
            className={`flex-shrink-0 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all
               ${selectedLevel === lvl
                ? 'bg-slate-900 text-white shadow-xl scale-105'
                : 'bg-white text-slate-400 border border-slate-100 shadow-sm'}`}
          >
            {lvl}'s
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[3.5rem] shadow-sm border border-slate-100">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-50 pb-8">
            <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
              <Target size={24} />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none uppercase tracking-widest">
              What You Need
            </h2>
          </div>

          <div className="space-y-10">
            {selectedLevel === 'Bachelor' && (
              <div className="grid grid-cols-1 gap-4">
                <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-4">Your School Grades</h4>
                  <p className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed">
                    CBSE/ICSE Class 12: Need 70% for technical colleges, or 85%+ for top universities.
                  </p>
                </div>
                <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-4">English Test</h4>
                  <p className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed">
                    IELTS 6.5 (min 6.0 in each part) or PTE 59+ for most 2026 degrees.
                  </p>
                </div>
              </div>
            )}

            {selectedLevel === 'Master' && (
              <div className="grid grid-cols-1 gap-4">
                <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-4">Your Degree</h4>
                  <p className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed">
                    Need 60% (1st Class). Indian 3-year degrees are okay for most Master's.
                  </p>
                </div>
                <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-4">English Skills</h4>
                  <p className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed">
                    IELTS 6.5 - 7.0 is best to get into good schools and get your visa.
                  </p>
                </div>
              </div>
            )}

            {selectedLevel === 'VET' && (
              <div className="grid grid-cols-1 gap-4">
                <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-4">Basic Rule</h4>
                  <p className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed">
                    Class 12 pass (50%+) from a recognized Indian board.
                  </p>
                </div>
                <div className="p-6 sm:p-8 bg-pink-50 rounded-2xl border border-pink-100 flex items-start gap-4">
                  <AlertCircle className="text-pink-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-black text-pink-900 text-sm mb-2 uppercase">Work Rights Warning</h4>
                    <p className="text-xs text-pink-800 font-bold italic leading-relaxed">
                      These courses usually DO NOT let you stay and work after finishing. Check with the Search Tool first.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 p-6 sm:p-10 bg-slate-900 text-white rounded-[2rem] sm:rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-[60px] opacity-10"></div>
            <h4 className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-6 flex items-center gap-3">
              <Clock size={16} /> Important Dates 2026
            </h4>
            <div className="space-y-6">
              {[
                { t: "Oct - Jan", d: "Apply now for the best scholarships." },
                { t: "Feb - May", d: "Normal time to apply for most colleges." },
                { t: "Jun - Aug", d: "Apply for your visa and get police check." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 sm:gap-6 items-start border-l border-white/10 pl-4 sm:pl-6 pb-2">
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest pt-1">{item.t}</div>
                  <p className="text-[11px] sm:text-sm text-slate-300 font-medium">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6 sm:space-y-8">
          <div className="bg-slate-900 text-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500 rounded-full blur-[80px] opacity-10"></div>
            <h3 className="text-xl sm:text-2xl font-black mb-8 flex items-center gap-3 tracking-tight">
              <BarChart3 className="text-emerald-400" /> Best Schools 2026
            </h3>

            <div className="space-y-4">
              {[
                { l: "Hardest to enter", c: "pink", unis: "Trinity, UCD, UCC" },
                { l: "Popular choices", c: "amber", unis: "UL, DCU, TU Dublin, Galway" },
                { l: "High Acceptance", c: "emerald", unis: "NCI, SETU, Griffith, ATU" }
              ].map((rank, i) => (
                <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-white/10 transition-all">
                  <div className="flex justify-between items-center mb-3">
                    <span className={`font-black text-[9px] text-${rank.c}-400 uppercase tracking-widest`}>{rank.l}</span>
                    <Star size={12} className={`text-${rank.c}-400 fill-${rank.c}-400`} />
                  </div>
                  <p className="text-[11px] sm:text-xs font-bold text-slate-200">{rank.unis}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-slate-100 shadow-xl space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-50 pb-6">
              <Info className="text-indigo-600" size={24} />
              <h3 className="font-black text-lg sm:text-xl tracking-tight uppercase tracking-widest">Apply Tips</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Top schools hate failed exams (backlogs).",
                "Write a strong essay about your goals.",
                "Jobs you had in India help you get in.",
                "The course must be on the official Irish list."
              ].map((tip, i) => (
                <li key={i} className="flex gap-4 items-start text-[11px] sm:text-sm font-bold text-slate-600">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  {tip}
                </li>
              ))}
            </ul>
            <div className="pt-6 flex items-center gap-2 justify-center">

              <a
                href={COURSE_SEARCH_URL} target="_blank"
                className="w-full flex items-center justify-center gap-3 bg-indigo-50 text-indigo-700 p-4 sm:p-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all"
              >
                Check Your Course <ExternalLink size={14} />
              </a>

              <a
                href="tel:+918758750029"
                className="inline-flex items-center  text-emerald-600 px-4 py-2 rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all"
                itemProp="telephone"
              >
                <Phone className="h-8" />
              </a>
              <a
                href="https://Wa.Me/918758750029"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-green-600 px-4 py-2 rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest  hover:bg-green-500 hover:text-white transition-all"
              >
                <MessageCircle className="h-8" />

              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;