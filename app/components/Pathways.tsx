import React from 'react';
import { Lock, Unlock, Briefcase, Award, ShieldCheck, Milestone, Star } from 'lucide-react';

const MilestoneCard = ({ title, duration, status, icon: Icon, description, color, requirements }: any) => (
  <div className={`p-6 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] border-2 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden group ${color}`}>
    <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity text-slate-900">
      <Icon size={120} />
    </div>

    <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 sm:gap-8">
      <div className="max-w-xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 sm:p-4 bg-slate-50 rounded-[1.5rem] text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
            <Icon size={24} />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{title}</h3>
            <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">{status}</div>
          </div>
        </div>
        <p className="text-slate-500 text-base sm:text-lg font-light leading-relaxed mb-8">{description}</p>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {requirements.map((req: string, i: number) => (
            <span key={i} className="px-3 py-1 sm:px-4 sm:py-1.5 bg-slate-50 text-slate-600 text-[9px] sm:text-[10px] font-black uppercase rounded-full border border-slate-100">
              {req}
            </span>
          ))}
        </div>
      </div>

      <div className="shrink-0 flex flex-col items-start md:items-end justify-center mt-4 md:mt-0">
        <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Duration</div>
        <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tighter">{duration}</div>
      </div>
    </div>
  </div>
);

const Pathways: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-16 animate-fade-in pb-16 sm:pb-20 max-w-5xl mx-auto px-4 sm:px-6">
      <header className="text-center space-y-4 sm:space-y-6">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest border border-indigo-100 shadow-sm">
          <Milestone size={14} />
          <span>Staying in Ireland</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">How to Settle</h1>
        <p className="text-slate-500 text-lg sm:text-xl font-light max-w-3xl mx-auto">
          Most students start on a study visa and stay to get a passport. Here are the 4 steps.
        </p>
      </header>

      <div className="space-y-8 sm:space-y-12 relative">
        <MilestoneCard
          title="Step 1: Study Visa (Stamp 2)"
          duration="1-4 Years"
          status="Student"
          icon={Award}
          color="border-slate-100 hover:border-slate-400"
          description="This is the visa for your classes. You can work 20 hours a week while you study."
          requirements={['Full-time Course', 'Bank Balance', 'College Offer']}
        />

        <div className="flex justify-center">
          <div className="w-1 h-8 sm:h-12 bg-gradient-to-b from-slate-200 to-emerald-400 rounded-full"></div>
        </div>

        <MilestoneCard
          title="Step 2: Graduate Visa (Stamp 1G)"
          duration="1-2 Years"
          status="Finding a Job"
          icon={Unlock}
          color="border-emerald-100 hover:border-emerald-400"
          description="After finishing your degree, you get 1 or 2 years to find a full-time expert job."
          requirements={['Finish Degree', 'Apply with Results', 'Work Any Job']}
        />

        <div className="flex justify-center">
          <div className="w-1 h-8 sm:h-12 bg-gradient-to-b from-emerald-400 to-indigo-500 rounded-full"></div>
        </div>

        <MilestoneCard
          title="Step 3: Work Permit (Stamp 1)"
          duration="2 Years"
          status="Worker"
          icon={Briefcase}
          color="border-indigo-100 hover:border-indigo-400"
          description="When you find a high-paying professional job, you get a permit. You can bring your family now."
          requirements={['€38,000+ Pay', 'Professional Role', 'Full-time Work']}
        />

        <div className="flex justify-center">
          <div className="w-1 h-8 sm:h-12 bg-gradient-to-b from-indigo-500 to-slate-900 rounded-full"></div>
        </div>

        <MilestoneCard
          title="Step 4: Permanent Rights (Stamp 4)"
          duration="Forever"
          status="Permanent"
          icon={Lock}
          color="border-slate-900 border-4 shadow-2xl"
          description="After working for 2 years, you get Stamp 4. You can do any job or start a business now!"
          requirements={['2 Years Working', 'Good Conduct', 'No Permit Needed']}
        />

        <section className="bg-slate-900 rounded-[2.5rem] sm:rounded-[3.5rem] p-10 sm:p-20 text-white text-center relative overflow-hidden group">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6 sm:space-y-8">
            <Star className="text-emerald-400 mx-auto" size={40} />
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">The Big Goal: Irish Passport</h2>
            <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
              After living in Ireland for 5 years (not including study years), you can apply to become a <span className="text-white font-bold">Citizen</span>. You will get an Irish passport and can live anywhere in Europe.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pathways;