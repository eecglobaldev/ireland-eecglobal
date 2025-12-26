import React, { useState, useEffect } from 'react';
import { NavSection } from '../types';
import { COURSE_SEARCH_URL } from '../constants';
import { 
  LayoutDashboard, Map, Calculator, Plane, FileText, Menu, X, 
  Compass, GraduationCap, Search, ExternalLink, Users, ChevronRight, 
  MessageCircle,
  Phone
} from 'lucide-react';
import Footer from './Footer';

interface LayoutProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentSection, onNavigate, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { section: NavSection.ROAD_FROM_INDIA, label: "Home", icon: Compass },
    { section: NavSection.DASHBOARD, label: "Money", icon: LayoutDashboard },
    { section: NavSection.REGIONAL, label: "Cities", icon: Map },
    { section: NavSection.ADMISSIONS, label: "Apply", icon: GraduationCap },
    { section: NavSection.VISA, label: "Visa", icon: FileText },
    { section: NavSection.CALCULATOR, label: "Pay", icon: Calculator },
    { section: NavSection.SPOUSE, label: "Family", icon: Users },
    { section: NavSection.PATHWAYS, label: "Stay", icon: Plane },
  ];

  const handleNav = (section: NavSection) => {
    onNavigate(section);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b
          ${scrolled ? 'bg-white/80 backdrop-blur-xl border-slate-200 py-2 sm:py-3 shadow-lg' : 'bg-transparent border-transparent py-4 sm:py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button 
            onClick={() => handleNav(NavSection.ROAD_FROM_INDIA)}
            className="flex items-center space-x-2 group outline-none"
          >
              {/* EEC Logo */}
              <img
                    src="https://ai.eecglobal.com/assets/logos/eeclogo-main.png"
                    alt="EEC"
                    className="
                      h-12 lg:h-12 
                      object-contain
                      flex-shrink-0
                    "
                  />
            <div className="text-left">
              <h1 className="text-xl sm:text-xl lg:text-2xl font-black text-slate-900 tracking-tighter leading-none whitespace-nowrap flex flex-row items-center gap-2 justify-center">
                Study in<span className="text-emerald-600 flex flex-row items-center gap-2"> Ireland
                <img
                    src="https://ai.eecglobal.com/assets/ireland.png"
                    alt="EEC"
                    className="h-8 lg:h-10 "
                  />

                </span>
              </h1>
              <p className="hidden sm:block text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1"> India Guide 2026</p>
            </div>
          </button>

          <nav className="hidden lg:flex items-center space-x-1 bg-slate-100/50 p-1 rounded-2xl border border-slate-200/50 z-[1000]">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNav(item.section)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tight transition-all
                  ${currentSection === item.section 
                    ? 'bg-white text-emerald-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <a 
              href={COURSE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-slate-900/10"
            >
              <Search size={14} />
              <span>Search Courses</span>
            </a>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 sm:p-3 bg-white border border-slate-200 rounded-lg sm:rounded-xl text-slate-600 hover:bg-slate-50 transition-colors shadow-sm"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-[1000] lg:hidden transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setIsMenuOpen(false)}
        />
        <div className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-8 border-b border-slate-100 flex  items-center justify-between mt-4">
          <div className="text-left flex flex-row items-center gap-1">
              {/* EEC Logo */}
              <img
                    src="https://ai.eecglobal.com/assets/logos/eeclogo-main.png"
                    alt="EEC"
                    className="
                      h-9
                      object-contain
                      flex-shrink-0
                    "
                  />
              <h1 className="text-xl sm:text-xl lg:text-2xl font-black text-slate-900 tracking-tighter leading-none whitespace-nowrap flex flex-row items-center gap-2 justify-center">
                Study in<span className="text-emerald-600 flex flex-row items-center gap-2"> Ireland
                <img
                    src="https://ai.eecglobal.com/assets/ireland.png"
                    alt="EEC"
                    className="h-5 "
                  />

                </span>
              </h1>
              <p className="hidden sm:block text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1"> India Guide 2026</p>
            </div>
            <X size={24} className="text-slate-400 cursor-pointer" onClick={() => setIsMenuOpen(false)} />
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNav(item.section)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all
                  ${currentSection === item.section 
                    ? 'bg-emerald-50 text-emerald-700' 
                    : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <div className="flex items-center space-x-4">
                  <item.icon size={20} />
                  <span className="font-bold text-sm">{item.label}</span>
                </div>
                <ChevronRight size={16} className={currentSection === item.section ? 'opacity-100' : 'opacity-0'} />
              </button>
            ))}
            <div className="pt-6 px-2">
              <a 
                href={COURSE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-5 rounded-2xl font-black text-sm uppercase tracking-wider shadow-2xl shadow-emerald-500/30 transition-all hover:scale-[1.02]"
              >
                <Search size={20} />
                <span>Search Courses</span>
                <ExternalLink size={16} />
              </a>

              <div className="flex items-center gap-3 mt-4 justify-center">
                <a 
                  href="tel:+918758750029" 
                  className="flex-1 flex items-center justify-center bg-emerald-50 hover:bg-emerald-500 text-emerald-600 hover:text-white px-6 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                  itemProp="telephone"
                >
                  <Phone className="h-7 w-7" />
                </a>
                <a 
                  href="https://Wa.Me/918758750029" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center bg-green-50 hover:bg-green-500 text-green-600 hover:text-white px-6 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="h-7 w-7" />
                </a>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 pt-24 sm:pt-32 pb-12 px-0 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>



      <Footer />

    </div>
  );
};

export default Layout;