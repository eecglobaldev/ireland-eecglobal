"use client";
import React, { useState } from 'react';
import { REGIONS, COURSE_SEARCH_URL } from '../constants';
import { RegionData, RegionId } from '../types';
import {
  MapPin, Briefcase, GraduationCap, Info, ArrowRight, Zap, Globe,
  Star, Search, ExternalLink, ChevronRight, Sparkles,
  Phone,
  MessageCircle
} from 'lucide-react';

const RegionalExplorer: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<RegionData>(REGIONS[0]);

  return (
    <div className="space-y-8 sm:space-y-12 animate-fade-in pb-12 sm:pb-24 max-w-7xl mx-auto px-2">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-2 sm:px-0 text-center md:text-left">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100 shadow-sm">
            <Globe size={12} />
            <span>Irish Cities 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">Pick Your City</h1>
          <p className="text-slate-500 text-base sm:text-lg font-light max-w-2xl">Learn about different Irish cities to find the best one for your career.</p>
        </div>


        <div className="flex items-center gap-2 justify-center">
          <a
            href={COURSE_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-600 transition-colors shadow-xl shadow-slate-900/10"
          >
            <Search size={18} /> Course Search <ExternalLink size={12} />
          </a>

          <a href="tel:+918758750029"
            className="inline-flex items-center  text-emerald-600 px-4 py-2 rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-xl hover:bg-emerald-500 hover:text-white transition-all" itemProp="telephone"
          >
            <Phone className="h-6" />
          </a>
          <a
            href="https://Wa.Me/918758750029"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-green-600 px-4 py-2 rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-xl hover:bg-green-500 hover:text-white transition-all"
          >
            <MessageCircle className="h-6" /> </a>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-1/3 space-y-4">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2 mb-4">Choose a Location</h3>
          <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-3 scrollbar-hide">
            {REGIONS.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region)}
                className={`flex-shrink-0 lg:flex-shrink-1 w-auto lg:w-full p-4 lg:p-6 rounded-2xl lg:rounded-[2rem] text-left transition-all duration-500 border-2 flex items-center justify-between group
                  ${selectedRegion.id === region.id
                    ? 'bg-slate-900 border-slate-900 text-white shadow-xl translate-x-1 lg:translate-x-2'
                    : 'bg-white border-slate-100 text-slate-600 hover:border-emerald-200 shadow-sm'}`}
              >
                <div>
                  <h4 className="font-black text-sm sm:text-lg tracking-tight whitespace-nowrap lg:whitespace-normal">{region.name}</h4>
                  <p className={`hidden lg:block text-[10px] uppercase font-bold tracking-widest mt-1 ${selectedRegion.id === region.id ? 'text-emerald-400' : 'text-slate-400'}`}>
                    {region.counties.join(', ')}
                  </p>
                </div>
                <ChevronRight size={20} className={`hidden lg:block transition-all ${selectedRegion.id === region.id ? 'translate-x-1 opacity-100' : 'opacity-0'}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-2/3 space-y-8">
          <div className="bg-white rounded-[2rem] sm:rounded-[3.5rem] shadow-sm border border-slate-100 p-8 sm:p-14 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-slate-200">
              <MapPin size={120} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter">{selectedRegion.name}</h2>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">{selectedRegion.gdp}</span>
                </div>
              </div>
              <div className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 w-fit
                ${selectedRegion.housingCost === 'Very High' ? 'bg-red-50 border-red-100 text-red-600' :
                  selectedRegion.housingCost === 'High' ? 'bg-orange-50 border-orange-100 text-orange-600' :
                    'bg-emerald-50 border-emerald-100 text-emerald-600'}`}>
                Rent: {selectedRegion.housingCost}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-slate-900 border-b border-slate-100 pb-4">
                  <Briefcase size={20} className="text-emerald-500" />
                  <h3 className="font-black text-lg sm:text-xl tracking-tight uppercase tracking-widest">Popular Jobs</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {selectedRegion.keyIndustries.map((ind, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-emerald-50 transition-colors">
                      <span className="text-xs font-bold text-slate-700">{ind}</span>
                      <Zap size={14} className="text-emerald-500" />
                    </div>
                  ))}
                </div>
                <a
                  href={COURSE_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] font-black uppercase text-indigo-600 hover:gap-3 transition-all"
                >
                  See courses for this city <ArrowRight size={14} />
                </a>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 text-slate-900 border-b border-slate-100 pb-4">
                  <GraduationCap size={20} className="text-indigo-600" />
                  <h3 className="font-black text-lg sm:text-xl tracking-tight uppercase tracking-widest">Schools</h3>
                </div>
                <div className="space-y-4">
                  {selectedRegion.universities.map((uni, i) => (
                    <div key={i} className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all group">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-black text-slate-800 text-xs sm:text-sm group-hover:text-emerald-600 transition-colors">{uni.name}</h4>
                        <div className="flex items-center text-[7px] font-black uppercase tracking-[0.2em] text-pink-500 whitespace-nowrap ml-2">
                          <Star size={10} className="mr-1 fill-pink-500" /> {uni.admissionDifficulty}
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-400 font-medium leading-relaxed mb-3 line-clamp-2">{uni.campusInfo}</p>
                      <div className="p-3 bg-slate-50 rounded-xl">
                        <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Indian Entry Score</div>
                        <p className="text-[10px] font-bold text-slate-700 leading-tight">{uni.indiaRequirements}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Replaced Rent Alert with positive City Highlight */}
            <div className="mt-12 p-8 bg-emerald-600 rounded-[2rem] sm:rounded-[3rem] text-white flex flex-col md:flex-row items-center gap-8 relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-white/10 shimmer opacity-30"></div>
              <div className="relative z-10 p-5 bg-white/10 rounded-3xl border border-white/20 text-white">
                <Sparkles size={32} />
              </div>
              <div className="relative z-10 text-center md:text-left">
                <h4 className="font-black text-white text-lg sm:text-xl mb-2 flex items-center justify-center md:justify-start gap-2">
                  City Highlight 2026
                </h4>
                <p className="text-sm text-white/90 leading-relaxed font-bold max-w-xl">
                  {selectedRegion.cityHighlight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionalExplorer;