"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { COURSE_SEARCH_URL } from '../constants';
import {
    LayoutDashboard, Map, Calculator, Plane, FileText, Menu, X,
    Compass, GraduationCap, Search, ExternalLink, Users, ChevronRight,
    MessageCircle, Phone
} from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: "/", label: "Home", icon: Compass },
        { href: "/money", label: "Money", icon: LayoutDashboard },
        { href: "/cities", label: "Cities", icon: Map },
        { href: "/apply", label: "Apply", icon: GraduationCap },
        { href: "/visa", label: "Visa", icon: FileText },
        { href: "/pay", label: "Pay", icon: Calculator },
        { href: "/family", label: "Family", icon: Users },
        { href: "/stay", label: "Stay", icon: Plane },
    ];

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b
          ${scrolled ? 'bg-white/80 backdrop-blur-xl border-slate-200 py-2 sm:py-3 shadow-lg' : 'bg-transparent border-transparent py-4 sm:py-6'}`}
                suppressHydrationWarning
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" suppressHydrationWarning>
                    <Link href="/" className="flex items-center space-x-2 group outline-none">
                        {/* EEC Logo */}
                        <div
                            className="relative h-9 sm:h-12 w-auto aspect-[4/1]"
                            suppressHydrationWarning
                        >
                            <Image
                                src="https://ai.eecglobal.com/assets/logos/eeclogo-main.png"
                                alt="EEC"
                                fill
                                className="object-contain"
                                priority
                                unoptimized
                            />
                        </div>
                        <div className="text-left">
                            <h1 className="text-base sm:text-xl lg:text-2xl font-black text-slate-900 tracking-tighter leading-none whitespace-normal sm:whitespace-nowrap flex flex-wrap sm:flex-nowrap flex-row items-center gap-2 justify-start sm:justify-center" suppressHydrationWarning>
                                Study in<span className="text-emerald-600 flex flex-row items-center gap-2"> Ireland
                                    <div className="relative h-8 w-8 lg:h-10 lg:w-10">
                                        <Image
                                            src="https://ai.eecglobal.com/assets/ireland.png"
                                            alt="Ireland Flag"
                                            fill
                                            className="object-contain"
                                            unoptimized
                                            suppressHydrationWarning
                                        />
                                    </div>
                                </span>
                            </h1>
                            <p className="hidden sm:block text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1"> India Guide 2026</p>
                        </div>
                    </Link>

                    <nav className="hidden lg:flex items-center space-x-1 bg-slate-100/50 p-1 rounded-2xl border border-slate-200/50 z-[1000]">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tight transition-all
                  ${isActive(item.href)
                                        ? 'bg-white text-emerald-600 shadow-sm'
                                        : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <a
                            href={COURSE_SEARCH_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center space-x-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-slate-900/10"
                            suppressHydrationWarning
                        >
                            <span suppressHydrationWarning><Search size={14} /></span>
                            <span>Search Courses</span>
                        </a>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2.5 sm:p-3 bg-white border border-slate-200 rounded-lg sm:rounded-xl text-slate-600 hover:bg-slate-50 transition-colors shadow-sm"
                            suppressHydrationWarning
                        >
                            <span suppressHydrationWarning>{isMenuOpen ? <X size={20} /> : <Menu size={20} />}</span>
                        </button>
                    </div>
                </div>
            </header>

            <div className={`fixed inset-0 z-[1000] lg:hidden transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`} suppressHydrationWarning>
                <div
                    className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsMenuOpen(false)}
                    suppressHydrationWarning
                />
                <div className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} suppressHydrationWarning>
                    <div className="p-8 border-b border-slate-100 flex  items-center justify-between mt-4" suppressHydrationWarning>
                        <div className="text-left flex flex-row items-center gap-1">
                            {/* EEC Logo */}
                            <div className="relative h-9 w-24">
                                <Image
                                    src="https://ai.eecglobal.com/assets/logos/eeclogo-main.png"
                                    alt="EEC"
                                    fill
                                    className="object-contain"
                                    unoptimized
                                    suppressHydrationWarning
                                />
                            </div>
                            <h1 className="text-xl sm:text-xl lg:text-2xl font-black text-slate-900 tracking-tighter leading-none whitespace-nowrap flex flex-row items-center gap-2 justify-center">
                                Ireland
                                <div className="relative h-5 w-5">
                                    <Image
                                        src="https://ai.eecglobal.com/assets/ireland.png"
                                        alt="Ireland Flag"
                                        fill
                                        className="object-contain"
                                        unoptimized
                                        suppressHydrationWarning
                                    />
                                </div>
                            </h1>
                        </div>
                        <span suppressHydrationWarning><X size={24} className="text-slate-400 cursor-pointer" onClick={() => setIsMenuOpen(false)} /></span>
                    </div>
                    <div className="flex-1 overflow-y-auto p-6 space-y-2" suppressHydrationWarning>
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all
                  ${isActive(item.href)
                                        ? 'bg-emerald-50 text-emerald-700'
                                        : 'text-slate-600 hover:bg-slate-50'}`}
                            >
                                <div className="flex items-center space-x-4">
                                    <span suppressHydrationWarning><item.icon size={20} /></span>
                                    <span className="font-bold text-sm">{item.label}</span>
                                </div>
                                <span suppressHydrationWarning><ChevronRight size={16} className={isActive(item.href) ? 'opacity-100' : 'opacity-0'} /></span>
                            </Link>
                        ))}
                        <div className="pt-6 px-2">
                            <a
                                href={COURSE_SEARCH_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-5 rounded-2xl font-black text-sm uppercase tracking-wider shadow-2xl shadow-emerald-500/30 transition-all hover:scale-[1.02]"
                                suppressHydrationWarning
                            >
                                <span suppressHydrationWarning><Search size={20} /></span>
                                <span>Search Courses</span>
                                <span suppressHydrationWarning><ExternalLink size={16} /></span>
                            </a>

                            <div className="flex items-center gap-3 mt-4 justify-center">
                                <a
                                    href="tel:+918758750029"
                                    className="flex-1 flex items-center justify-center bg-emerald-50 hover:bg-emerald-500 text-emerald-600 hover:text-white px-6 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                                    itemProp="telephone"
                                    suppressHydrationWarning
                                >
                                    <span suppressHydrationWarning><Phone className="h-7 w-7" /></span>
                                </a>
                                <a
                                    href="https://Wa.Me/918758750029"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center bg-green-50 hover:bg-green-500 text-green-600 hover:text-white px-6 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                                    suppressHydrationWarning
                                >
                                    <span suppressHydrationWarning><MessageCircle className="h-7 w-7" /></span>
                                </a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
