"use client";
import React, { useState, useEffect } from 'react';
import { MINIMUM_WAGE_2026, INR_EXCHANGE_RATE, COURSE_SEARCH_URL } from '../constants';
import {
  Calculator, AlertTriangle, Info, TrendingUp, Sparkles, Wallet,
  IndianRupee, Euro, Briefcase, ShoppingBag, Coffee, Truck,
  Stethoscope, ArrowRight, CheckCircle2, AlertCircle, Search, ExternalLink,
  Phone,
  MessageCircle
} from 'lucide-react';

const IncomeCalculator: React.FC = () => {
  const [hours, setHours] = useState<number>(40);
  const [isHoliday, setIsHoliday] = useState<boolean>(true);

  const [weeklyEur, setWeeklyEur] = useState(0);
  const [weeklyInr, setWeeklyInr] = useState(0);
  const [monthlyEur, setMonthlyEur] = useState(0);
  const [monthlyInr, setMonthlyInr] = useState(0);
  const [annualEur, setAnnualEur] = useState(0);
  const [annualInr, setAnnualInr] = useState(0);

  useEffect(() => {
    const maxHours = isHoliday ? 40 : 20;
    const effectiveHours = Math.min(hours, maxHours);
    if (hours > maxHours && !isHoliday) setHours(20);

    const wEur = effectiveHours * MINIMUM_WAGE_2026;
    const wInr = wEur * INR_EXCHANGE_RATE;
    const termWeeks = 31;
    const holidayWeeks = 21;
    const selectedTermHours = Math.min(effectiveHours, 20);
    const aEur = (holidayWeeks * 40 * MINIMUM_WAGE_2026) + (termWeeks * selectedTermHours * MINIMUM_WAGE_2026);
    const aInr = aEur * INR_EXCHANGE_RATE;
    const mEur = aEur / 12;
    const mInr = aInr / 12;

    setWeeklyEur(wEur);
    setWeeklyInr(wInr);
    setMonthlyEur(mEur);
    setMonthlyInr(mInr);
    setAnnualEur(aEur);
    setAnnualInr(aInr);
  }, [hours, isHoliday]);

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat(currency === 'EUR' ? 'en-IE' : 'en-IN', {
      style: 'currency', currency, maximumFractionDigits: 0
    }).format(amount);
  };

  const STUDENT_JOBS = [
    { title: "Shops", icon: ShoppingBag, companies: "Tesco, Dunnes, Lidl", pay: "€14.50+" },
    { title: "Cafes", icon: Coffee, companies: "Starbucks, Pubs", pay: "€14.50+" },
    { title: "Delivery", icon: Truck, companies: "Amazon, Food", pay: "€15.50+" },
    { title: "Care Work", icon: Stethoscope, companies: "Health Care", pay: "€16.50+" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-fade-in pb-12 sm:pb-24 px-2 sm:px-4">
      <header className="text-center space-y-4 px-4">
        <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100 shadow-sm">
          <Sparkles size={14} />
          <span>Pay Guide 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">How Much Will You Earn?</h1>
        <p className="text-slate-500 text-base sm:text-xl font-light max-w-2xl mx-auto">
          See how much money you can make with the new 2026 pay rules.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-5 bg-white rounded-[2rem] sm:rounded-[3.5rem] shadow-sm border border-slate-100 p-8 sm:p-12 space-y-10 flex flex-col justify-between">
          <div className="space-y-12">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 block">Time of Year</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-1.5 bg-slate-50 rounded-2xl border border-slate-100">
                <button
                  onClick={() => { setIsHoliday(false); setHours(20); }}
                  className={`py-4 rounded-xl text-xs font-black uppercase transition-all
                    ${!isHoliday ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  Term Time (20h)
                </button>
                <button
                  onClick={() => { setIsHoliday(true); setHours(40); }}
                  className={`py-4 rounded-xl text-xs font-black uppercase transition-all
                    ${isHoliday ? 'bg-emerald-500 text-slate-900 shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  Holiday (40h)
                </button>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-end mb-6">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Hours Per Week</label>
                <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter">
                  {hours}<span className="text-lg text-slate-300 ml-1">h</span>
                </div>
              </div>
              <input
                type="range" min="1" max={isHoliday ? 40 : 20} step="1"
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value))}
                className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-emerald-500"
              />
              <p className="text-[9px] text-slate-400 mt-4 font-bold tracking-tight uppercase text-center">Move the slider to pick your hours</p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-slate-950 text-white rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500 rounded-full blur-[40px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative z-10 space-y-2">
              <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Exchange Rate (Estimated)</div>
              <div className="flex items-center gap-4">
                <div className="text-3xl font-black tracking-tighter">€1.00</div>
                <ArrowRight size={20} className="text-slate-700" />
                <div className="text-3xl font-black text-white tracking-tighter">₹107</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="bg-slate-900 text-white rounded-[2rem] sm:rounded-[3.5rem] p-10 sm:p-14 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[350px]">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500 rounded-full blur-[120px] opacity-10"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Total Yearly Pay (Before Tax)</h4>
                <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[8px] font-black text-slate-500 uppercase">Max Legal Work</div>
              </div>
              <div className="text-5xl sm:text-7xl font-black tracking-tighter mb-4 leading-none">
                {formatCurrency(annualEur, 'EUR')}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-400 tracking-tighter flex items-center gap-2">
                <span className="text-emerald-500">₹</span> {formatCurrency(annualInr, 'INR')}
              </div>
            </div>
            <p className="relative z-10 text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-12 border-t border-white/5 pt-8">
              *Calculated using 21 weeks holiday & 31 weeks term time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4">Monthly Average</div>
              <div className="text-3xl font-black text-slate-900 tracking-tighter">{formatCurrency(monthlyEur, 'EUR')}</div>
              <div className="text-sm font-bold text-emerald-600 mt-2">≈ {formatCurrency(monthlyInr, 'INR')}</div>
            </div>
            <div className="bg-white p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4">Tax You Pay</div>
              <div className="text-3xl font-black text-slate-900 tracking-tighter">€0.00</div>
              <div className="text-[10px] font-black text-emerald-600 mt-2 uppercase tracking-widest">You earn under the tax limit</div>
            </div>
          </div>
        </div>
      </div>

      <section className="space-y-8 pt-12 border-t border-slate-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Student Jobs</h2>
            <p className="text-slate-500 text-lg font-light mt-2">Common jobs for students in 2026.</p>
          </div>


          <div className="flex items-center gap-2 justify-center">
            <a
              href={COURSE_SEARCH_URL} target="_blank" rel="noopener noreferrer"
              className="w-full md:w-auto p-4 bg-emerald-600 text-white rounded-2xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-500/10"
            >
              <Search size={18} /> Course Matcher
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
              className="inline-flex items-center gap-3 text-green-600 px-4 py-2 rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all"
            >
              <MessageCircle className="h-8" />

            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {STUDENT_JOBS.map((job, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-indigo-100 hover:shadow-2xl transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all mb-6">
                  <job.icon size={24} />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{job.title}</h3>
                <div className="text-emerald-600 font-black text-xs mb-4">{job.pay}</div>
              </div>
              <div className="space-y-2 pt-4 border-t border-slate-50">
                <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Where to work</div>
                <p className="text-[10px] font-bold text-slate-600 leading-relaxed">{job.companies}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IncomeCalculator;