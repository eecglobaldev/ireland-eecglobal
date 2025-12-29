"use client";
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Building2, BadgeEuro, Sparkles, ArrowUpRight, Zap, Target } from 'lucide-react';

const SECTOR_DATA = [
  { name: 'Tech & Money', value: 56, color: '#10B981' },
  { name: 'Medicine', value: 37.6, color: '#3B82F6' },
  { name: 'Other', value: 6.4, color: '#94A3B8' },
];

const GROWTH_DATA = [
  { year: '2022', gdp: 490 },
  { year: '2023', gdp: 510 },
  { year: '2024', gdp: 535 },
  { year: '2025', gdp: 560 },
  { year: '2026 (P)', gdp: 595 },
];

const StatCard = ({ title, value, subtext, icon: Icon, trend }: any) => (
  <div className="bg-white p-5 sm:p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
    <div className="absolute -top-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity text-slate-900">
      <Icon size={120} />
    </div>
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-6">
        <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 group-hover:scale-110 transition-transform">
          <Icon size={24} />
        </div>
        {trend && (
          <div className="flex items-center text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full uppercase tracking-tight">
            <ArrowUpRight size={12} className="mr-1" />
            {trend}
          </div>
        )}
      </div>
      <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{title}</h3>
      <p className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tighter">{value}</p>
      <p className="text-[10px] text-slate-400 mt-2 font-bold uppercase">{subtext}</p>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 sm:space-y-12 animate-fade-in pb-12 sm:pb-20 max-w-7xl mx-auto px-1 sm:px-4">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-3 sm:px-0">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-indigo-100">
            <Target size={12} />
            <span>Ireland Money Guide 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">The Irish Economy</h1>
          <p className="text-slate-500 text-base sm:text-lg font-light mt-2 max-w-2xl">See how the economy will grow by 2026 and how much you will earn.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-3 sm:px-0">
        <StatCard
          title="Hourly Pay"
          value="€14.50"
          subtext="Lowest Legal Pay"
          icon={BadgeEuro}
          trend="Highest in EU"
        />
        <StatCard
          title="Starting Salary"
          value="€38k+"
          subtext="New Graduate Pay"
          icon={Zap}
        />
        <StatCard
          title="Post-Study Visa"
          value="24 Months"
          subtext="For Master's"
          icon={TrendingUp}
        />
        <StatCard
          title="Job Market"
          value="Strong"
          subtext="Many IT Jobs"
          icon={Building2}
          trend="Top Tier"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch px-3 sm:px-0">
        <div className="lg:col-span-8 bg-white p-5 sm:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Growth Forecast</h2>
              <p className="text-slate-400 text-[10px] font-bold uppercase mt-1">Economy trend 2022-2026</p>
            </div>
            <div className="flex items-center text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full shrink-0">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div> Steady Growth
            </div>
          </div>
          <div className="w-full h-[250px] sm:h-[320px] relative min-w-0">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
              <AreaChart data={GROWTH_DATA} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorGdp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 800, fill: '#94a3b8' }} />
                <YAxis hide />
                <Tooltip
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', fontSize: '10px' }}
                />
                <Area type="monotone" dataKey="gdp" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorGdp)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-4 bg-slate-900 text-white p-5 sm:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[400px]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-[80px] opacity-20"></div>
          <div>
            <h2 className="text-lg sm:text-xl font-black mb-1 flex items-center">
              <Sparkles className="text-emerald-400 mr-2" size={20} /> Top Sectors
            </h2>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-8">Where the money comes from</p>

            <div className="w-full h-[200px] sm:h-[240px] relative mb-8 min-w-0">
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <PieChart>
                  <Pie
                    data={SECTOR_DATA}
                    innerRadius="60%"
                    outerRadius="80%"
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {SECTOR_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: '#0f172a', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '10px' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-black">94%</span>
                <span className="text-[8px] text-slate-500 uppercase font-black tracking-widest text-center">Export Focus</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {SECTOR_DATA.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-[10px] font-bold text-slate-300">{item.name}</span>
                </div>
                <span className="text-[10px] font-black text-emerald-400">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[2rem] sm:rounded-[3.5rem] p-6 sm:p-16 text-white overflow-hidden relative shadow-2xl mx-3 sm:mx-0">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-black mb-6 tracking-tight">The 5-Year Path</h2>
            <p className="text-indigo-200 text-base sm:text-lg font-light leading-relaxed mb-8">
              A clear road from your first flight to getting an Irish passport.
            </p>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 inline-block text-xs font-bold text-indigo-300 uppercase tracking-widest">
              Stay Legal • Live Continuous
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {[
              { t: "Student Visa (Stamp 2)", d: "1-4 years of study" },
              { t: "Graduate Visa (Stamp 1G)", d: "2 years to find work" },
              { t: "Work Permit (Stamp 1)", d: "Full-time expert job" },
              { t: "Citizenship (Stamp 4)", d: "Permanent rights & Passport" }
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-4 sm:gap-6 p-4 sm:p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all cursor-default">
                <span className="text-xl sm:text-2xl font-black text-emerald-400 opacity-40">0{i + 1}</span>
                <div>
                  <div className="font-black text-sm sm:text-base">{step.t}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">{step.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;