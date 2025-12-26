import React from 'react';
import { Users, Info, ShieldCheck, Heart, AlertCircle, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

const SpouseVisas: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in pb-20 max-w-5xl mx-auto px-4 sm:px-0">
      <header className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-pink-50 text-pink-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-pink-100">
          <Heart size={14} />
          <span>Family Rules</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">Can my family join me?</h1>
        <p className="text-slate-500 text-lg sm:text-xl font-light max-w-2xl mx-auto">
          The rules for bringing your partner or children are strict. Here is what the Irish government says.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl space-y-6">
          <div className="p-4 bg-slate-900 text-white rounded-2xl inline-block">
             <Briefcase size={32} />
          </div>
          <h2 className="text-2xl font-black text-slate-900">The Main Rule</h2>
          <p className="text-slate-500 leading-relaxed font-light text-base sm:text-lg">
            If you are a student on a <span className="text-slate-900 font-bold">Bachelor's or Master's</span> degree, you <span className="text-pink-600 font-bold underline">cannot</span> bring your partner or children with you.
          </p>
          <div className="bg-slate-50 p-6 rounded-3xl space-y-4">
             <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-slate-300"></div>
               <p className="text-xs font-bold text-slate-600">No student visas for partners.</p>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-slate-300"></div>
               <p className="text-xs font-bold text-slate-600">Your partner must get their own visa.</p>
             </div>
          </div>
        </div>

        <div className="bg-emerald-950 text-white p-10 rounded-[3rem] shadow-2xl space-y-6 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500 rounded-full blur-[80px] opacity-20"></div>
          <div className="p-4 bg-emerald-500 text-slate-900 rounded-2xl inline-block">
             <GraduationCap size={32} />
          </div>
          <h2 className="text-2xl font-black">PhD Students</h2>
          <p className="text-emerald-100/70 leading-relaxed font-light text-base sm:text-lg">
            If you are studying for a <span className="text-emerald-400 font-bold">PhD</span>, the rules are different.
          </p>
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
             <p className="text-sm font-bold">PhD students might be allowed to bring their family. You must prove you have enough money to support them.</p>
             <button className="flex items-center gap-2 text-xs font-black uppercase text-emerald-400">
               Read Official PhD Rules <ArrowRight size={14} />
             </button>
          </div>
        </div>
      </div>

      <section className="bg-white rounded-[3.5rem] border border-slate-100 p-10 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-[100px] opacity-40"></div>
        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
           <div className="w-24 h-24 bg-indigo-600 rounded-3xl flex items-center justify-center text-white shrink-0 shadow-xl shadow-indigo-200">
              <ShieldCheck size={48} />
           </div>
           <div>
              <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">The Best Path for Families</h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-8">
                This is how most Master's students bring their family to Ireland later.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 <div className="space-y-4">
                    <div className="text-indigo-600 font-black text-sm uppercase tracking-widest">Step 1</div>
                    <p className="text-sm font-bold text-slate-800">Finish your study and get a high-paying job (paying €38,000+).</p>
                 </div>
                 <div className="space-y-4">
                    <div className="text-indigo-600 font-black text-sm uppercase tracking-widest">Step 2</div>
                    <p className="text-sm font-bold text-slate-800">Once you have your Work Permit, your partner can join you and <span className="text-emerald-600">can work too!</span></p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <div className="p-8 bg-amber-50 rounded-[2.5rem] border border-amber-100 flex items-start gap-6">
        <AlertCircle className="text-amber-600 shrink-0" size={32} />
        <div>
           <h4 className="font-black text-amber-900 text-lg mb-2">Be Careful</h4>
           <p className="text-sm text-amber-800 leading-relaxed font-medium">
             Don't believe agents who say you can bring family easily. Always check official Irish government sites. If your partner comes as a tourist, they cannot work or stay easily.
           </p>
        </div>
      </div>
    </div>
  );
};

export default SpouseVisas;