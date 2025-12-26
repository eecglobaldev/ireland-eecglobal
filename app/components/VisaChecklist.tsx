import React from 'react';
import { VISA_STEPS } from '../constants';
import { 
  CheckCircle2, AlertCircle, ShieldCheck, Target, 
  Fingerprint, Zap, Globe, FileText 
} from 'lucide-react';

const VisaChecklist: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in pb-12 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-center md:text-left">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
            <ShieldCheck size={12} className="text-emerald-400" />
            <span>Official 2026 Rules</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">Getting Your Visa</h1>
          <p className="text-slate-500 text-base sm:text-lg font-light max-w-2xl">Follow these 5 steps to get your Study Visa for 2026.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-6 sm:space-y-8 relative">
          <div className="absolute left-[23px] top-10 bottom-10 w-0.5 bg-slate-100 hidden sm:block"></div>
          
          {VISA_STEPS.map((step) => (
            <div key={step.id} className="relative group">
              <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
                <div className={`hidden sm:flex shrink-0 w-12 h-12 rounded-2xl items-center justify-center font-black text-lg z-10 bg-slate-900 text-white shadow-xl group-hover:bg-emerald-600 transition-colors`}>
                  {step.id}
                </div>
                
                <div className="flex-1 bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                  <div className="sm:hidden mb-4 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-white font-black text-xs">
                    {step.id}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-light mb-6">{step.description}</p>
                  
                  {step.criticalNote && (
                    <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 flex items-start gap-4">
                       <AlertCircle size={20} className="text-amber-600 shrink-0 mt-1" />
                       <p className="text-xs sm:text-sm text-amber-900 font-bold italic leading-relaxed">
                         {step.criticalNote}
                       </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500 rounded-full blur-[80px] opacity-10"></div>
            <h3 className="text-lg font-black mb-8 flex items-center tracking-tight">
              <Zap className="text-emerald-400 mr-3" size={20} /> 2026 Rules
            </h3>
            <div className="space-y-6">
               {[
                 { t: "Show €10k", d: "You must have €10,000 for your living costs." },
                 { t: "Police Check", d: "Get your PCC from the Passport Seva Kendra." },
                 { t: "Approved Course", d: "Your school must be on the official Irish list." }
               ].map((update, i) => (
                 <div key={i} className="space-y-2 border-l-2 border-emerald-500/30 pl-6">
                    <div className="font-black text-xs text-emerald-400 uppercase tracking-widest">{update.t}</div>
                    <p className="text-[10px] text-slate-400 font-bold leading-relaxed">{update.d}</p>
                 </div>
               ))}
            </div>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                <FileText size={20} />
              </div>
              <h3 className="font-black text-lg tracking-tight uppercase tracking-widest">Your Paperwork</h3>
            </div>
            <div className="space-y-3">
               {[
                 'Passport (1 year+)', 
                 'College Offer Letter', 
                 'Bank Statements', 
                 'IELTS / PTE Score', 
                 'Insurance Paper', 
                 'Visa Form'
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 group">
                   <CheckCircle2 size={16} className="text-emerald-500 shrink-0 group-hover:scale-125 transition-transform" />
                   <span className="text-[10px] sm:text-xs font-black text-slate-600 uppercase tracking-tight">{item}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaChecklist;