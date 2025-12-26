"use client";
import React, { useState } from 'react';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { COURSE_SEARCH_URL } from '../constants';
import {
  ArrowRight, Globe, Landmark, MapPin, Briefcase, Monitor,
  GraduationCap, AlertCircle, Beaker, Stethoscope, Plane,
  Sparkles, Zap, Search, Shield,
  Phone,
  MessageCircle
} from 'lucide-react';

const HUB_DATA = {
  DUBLIN: {
    name: "Dublin",
    subtitle: "Tech & Finance",
    gdp: "€262 Billion",
    tag: "Capital City",
    theme: "from-slate-900 to-indigo-950",
    accent: "text-indigo-400",
    description: "The biggest city where all the big companies are. Best for IT and bank jobs.",
    industries: [
      { name: "Software", icon: Monitor, companies: ["Google", "Meta", "Stripe"] },
      { name: "Banking", icon: Landmark, companies: ["Citibank", "JP Morgan"] },
      { name: "Work Services", icon: Briefcase, companies: ["PwC", "Deloitte"] }
    ],
    institutions: [
      { name: "Trinity College Dublin (TCD)", type: "Historic", strength: "Top 100" },
      { name: "University College Dublin (UCD)", type: "Biggest", strength: "Business" },
    ],
    rent: "€950 - €1,350+",
    vibe: "Busy city, high costs.",
    radar: [
      { subject: 'Pay', A: 100 },
      { subject: 'Rent', A: 100 },
      { subject: 'Jobs', A: 100 },
      { subject: 'Vibe', A: 90 },
      { subject: 'Peace', A: 20 },
    ]
  },
  SOUTH_WEST: {
    name: "Cork",
    subtitle: "Medicine Hub",
    gdp: "€131 Billion",
    tag: "South City",
    theme: "from-emerald-900 to-teal-950",
    accent: "text-emerald-400",
    description: "The center for making medicine. Apple's main Europe office is also here.",
    industries: [
      { name: "Pharma", icon: Beaker, companies: ["Pfizer", "Novartis"] },
      { name: "Tech", icon: Monitor, companies: ["Apple", "Logitech"] },
      { name: "Security", icon: Shield, companies: ["Trend Micro"] }
    ],
    institutions: [
      { name: "University College Cork (UCC)", type: "Top Rank", strength: "Medicine" },
      { name: "Munster Technological University (MTU)", type: "Hands-on", strength: "Engineering" }
    ],
    rent: "€800 - €1,100",
    vibe: "Friendly, medium costs.",
    radar: [
      { subject: 'Pay', A: 85 },
      { subject: 'Rent', A: 80 },
      { subject: 'Jobs', A: 85 },
      { subject: 'Vibe', A: 80 },
      { subject: 'Peace', A: 40 },
    ]
  },
  WEST: {
    name: "Galway",
    subtitle: "Art & Science",
    gdp: "Med Tech",
    tag: "West Coast",
    theme: "from-purple-900 to-fuchsia-950",
    accent: "text-purple-400",
    description: "A creative city that is famous for making medical devices like stents.",
    industries: [
      { name: "Medical", icon: Stethoscope, companies: ["Medtronic", "Boston Sci"] },
      { name: "Digital", icon: Monitor, companies: ["Cisco", "Avaya"] },
    ],
    institutions: [
      { name: "University of Galway", type: "Research", strength: "Biomedical" },
    ],
    rent: "€750 - €950",
    vibe: "Artistic, student city.",
    radar: [
      { subject: 'Pay', A: 75 },
      { subject: 'Rent', A: 75 },
      { subject: 'Jobs', A: 70 },
      { subject: 'Vibe', A: 95 },
      { subject: 'Peace', A: 50 },
    ]
  },
  MID_WEST: {
    name: "Limerick",
    subtitle: "Planes & Bio",
    gdp: "Factory Hub",
    tag: "Mid Region",
    theme: "from-blue-900 to-sky-950",
    accent: "text-blue-400",
    description: "Best for jobs in flying (aviation) and large factories. Rent is cheaper here.",
    industries: [
      { name: "Aviation", icon: Plane, companies: ["SMBC Aviation"] },
      { name: "Factories", icon: Zap, companies: ["Analog Devices"] },
    ],
    institutions: [
      { name: "University of Limerick (UL)", type: "Top Choice", strength: "Jobs/Eng" },
    ],
    rent: "€650 - €850",
    vibe: "Sporty, industrial.",
    radar: [
      { subject: 'Pay', A: 70 },
      { subject: 'Rent', A: 60 },
      { subject: 'Jobs', A: 75 },
      { subject: 'Vibe', A: 65 },
      { subject: 'Peace', A: 70 },
    ]
  }
};

const RoadFromIndia: React.FC = () => {
  const [activeHub, setActiveHub] = useState<keyof typeof HUB_DATA>('DUBLIN');

  return (
    <div className="space-y-12 sm:space-y-20 animate-fade-in max-w-7xl mx-auto pb-12 sm:pb-24 px-1 sm:px-6">
      <section className="relative bg-slate-900 rounded-[2rem] sm:rounded-[3.5rem] overflow-hidden px-5 py-10 sm:p-20 text-white shadow-2xl border border-white/5 mx-3 sm:mx-0">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-emerald-400 font-black tracking-widest uppercase text-[10px]">
              <Globe size={14} />
              <span>Simple Guide 2026</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              Build Your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 animate-gradient">
                Dream Future
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
              Ireland will pay <span className="text-white font-bold">€14.50 per hour</span> in 2026. Start your journey from India to a high-paying EU life.
            </p>
            <div className="flex flex-row lg:flex-row items-center justify-center lg:justify-start gap-2 flex-wrap">
              <a
                href={COURSE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-emerald-500 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-emerald-500/20"
              >
                <Search size={18} className="sm:w-5 sm:h-5" /> Browse Courses
              </a>
              <a
                href="tel:+918758750029"
                className="inline-flex items-center text-emerald-600 px-3 sm:px-4 py-3 sm:py-2 rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-xl hover:bg-emerald-500 hover:text-white transition-all"
                itemProp="telephone"
              >
                <Phone className="h-5 sm:h-6" />
              </a>
              <a
                href="https://Wa.Me/918758750029"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-green-600 px-3 sm:px-4 py-3 sm:py-2 rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-xl hover:bg-green-500 hover:text-white transition-all"
              >
                <MessageCircle className="h-5 sm:h-6" />

              </a>

              <div className="w-full lg:w-auto flex items-center justify-center lg:justify-start mt-2 lg:mt-0">

                <span className="text-xs text-slate-400 font-bold uppercase tracking-tight">Used by 5k+ Students</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 rounded-3xl p-1 border border-white/10">
              <div className="bg-slate-950/40 backdrop-blur-xl rounded-2xl p-8 space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ireland Status 2026</span>
                  <Sparkles className="text-emerald-400" size={20} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div className="text-3xl font-bold text-white mb-1">94%</div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Jobs Found</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div className="text-3xl font-bold text-white mb-1">€14.50</div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Min. Pay</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-3 sm:px-0">
        {[
          { label: 'English Only', desc: 'The only English-speaking hub in the EU.', icon: Globe, color: 'text-blue-500' },
          { label: 'High Pay', desc: 'New graduates start at €38k+ per year.', icon: Landmark, color: 'text-emerald-500' },
          { label: 'Stay & Work', desc: 'Get 2 years to stay and work after study.', icon: Plane, color: 'text-indigo-500' }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 sm:p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className={`p-4 bg-slate-50 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
              <item.icon size={24} />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">{item.label}</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="space-y-8 sm:space-y-12 px-3 sm:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Pick Your City</h2>
            <p className="text-slate-500 mt-2">Find the best city for your future career.</p>
          </div>

          <div className="flex space-x-2 overflow-x-auto pb-4 sm:pb-0 w-full md:w-auto scrollbar-hide px-4 sm:px-0">
            {(Object.keys(HUB_DATA) as Array<keyof typeof HUB_DATA>).map((key) => (
              <button
                key={key}
                onClick={() => setActiveHub(key)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-xl font-bold text-xs uppercase transition-all border-2
                  ${activeHub === key
                    ? 'bg-slate-900 text-white border-slate-900 scale-105 shadow-lg'
                    : 'bg-white text-slate-500 border-slate-100'}`}
              >
                {HUB_DATA[key].name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          <div className={`xl:col-span-8 bg-gradient-to-br ${HUB_DATA[activeHub].theme} rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[400px]`}>
            <div className="relative z-10 space-y-8 sm:space-y-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <div className={`text-[10px] font-black uppercase tracking-[0.3em] ${HUB_DATA[activeHub].accent} mb-2`}>{HUB_DATA[activeHub].tag}</div>
                  <h3 className="text-3xl sm:text-5xl font-black tracking-tighter leading-none">{HUB_DATA[activeHub].name}</h3>
                  <p className="text-lg text-white/70 font-light mt-2">{HUB_DATA[activeHub].subtitle}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl text-center min-w-[140px]">
                  <div className="text-2xl sm:text-3xl font-black">{HUB_DATA[activeHub].gdp}</div>
                  <div className="text-[10px] text-white/50 uppercase font-bold tracking-widest mt-1">Economy Target</div>
                </div>
              </div>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">{HUB_DATA[activeHub].description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {HUB_DATA[activeHub].industries.map((ind, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors">
                    <ind.icon className={`mb-4 ${HUB_DATA[activeHub].accent}`} size={24} />
                    <h4 className="font-bold text-sm mb-2">{ind.name}</h4>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {ind.companies.slice(0, 2).map(c => (
                        <span key={c} className="text-[8px] uppercase font-black px-2 py-0.5 bg-white/10 rounded border border-white/5 text-white/60">{c}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="xl:col-span-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6">
            <div className="bg-white rounded-[2rem] sm:rounded-[3rem] border border-slate-100 p-6 sm:p-8 shadow-sm flex flex-col justify-center items-center block min-h-[350px]">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">City Guide</h4>
              <div className="w-full h-48 sm:h-56 relative min-w-0">
                <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={HUB_DATA[activeHub].radar}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 9, fontWeight: 'bold', fill: '#94a3b8' }} />
                    <Radar dataKey="A" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 w-full">
                <div className="bg-slate-50 p-4 rounded-xl text-center">
                  <div className="text-[8px] font-black text-slate-400 uppercase mb-1">Rent</div>
                  <div className="text-[10px] font-bold text-slate-900 truncate">{HUB_DATA[activeHub].rent}</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl text-center">
                  <div className="text-[8px] font-black text-slate-400 uppercase mb-1">Vibe</div>
                  <div className="text-[10px] font-bold text-slate-900 truncate">{HUB_DATA[activeHub].vibe}</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 shadow-sm h-full flex flex-col justify-center">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-6 flex items-center">
                <GraduationCap className="mr-2" size={16} /> 2026 Colleges
              </h4>
              <div className="space-y-3">
                {HUB_DATA[activeHub].institutions.map((uni, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/10">
                    <div className="font-bold text-[11px] sm:text-xs">{uni.name}</div>
                    <div className="text-[8px] font-black text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded uppercase whitespace-nowrap ml-2">{uni.strength}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 justify-center mt-6">


                <a
                  href={COURSE_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" w-full flex items-center justify-center gap-2 bg-emerald-600 p-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-colors"
                >
                  Find Courses <ArrowRight size={12} />
                </a>

                <a
                  href="tel:+918758750029"
                  className="inline-flex items-center justify-center text-emerald-600 px-4 py-2 rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-xl hover:bg-emerald-500 hover:text-white transition-all"
                  itemProp="telephone"
                >
                  <Phone className="h-6" />
                </a>
                <a
                  href="https://Wa.Me/918758750029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 text-green-600 px-4 py-2 rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-xl hover:bg-green-500 hover:text-white transition-all"
                >
                  <MessageCircle className="h-6" />

                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 rounded-[2rem] sm:rounded-[3.5rem] p-6 sm:p-16 border border-emerald-100 mx-3 sm:mx-0">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10">
          <div className="shrink-0 p-6 bg-white rounded-[2rem] shadow-xl text-emerald-600">
            <Zap size={40} className="fill-emerald-100" />
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">The 2026 Plan</h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl font-medium mb-8">
              "In 2026, Ireland will have the <span className="text-slate-950 font-black">best pay for students</span> in Europe. As the top English-speaking tech hub, your path leads to <span className="text-emerald-700 font-black">making your own money</span> and a great global career."
            </p>
            <div className="flex justify-center gap-2 lg:justify-start">
              <a
                href={COURSE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-xl hover:bg-emerald-600 transition-all"
              >
                <Search size={16} /> Look at Courses Now
              </a>

              <a
                href="tel:+918758750029"
                className="inline-flex items-center  text-emerald-600 px-4 py-2 rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-xl hover:bg-emerald-500 hover:text-white transition-all"
                itemProp="telephone"
              >
                <Phone className="h-6" />
              </a>
              <a
                href="https://Wa.Me/918758750029"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-green-600 px-4 py-2 rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-xl hover:bg-green-500 hover:text-white transition-all"
              >
                <MessageCircle className="h-6" />

              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadFromIndia;