'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ArrowRight, Search, ChevronDown, Calendar } from 'lucide-react';
import { LogoIcon } from './Logo';

// Custom lotus/leaf badge icon inspired by the reference image
function ResearchBadgeIcon({ className = 'w-9 h-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path d="M12 28C10 20 12 14 16 12C18 16 16 22 12 28Z" fill="#EAB308" />
      <path d="M18 29C15 19 18 11 23 8C26 13 23 21 18 29Z" fill="#10B981" />
      <path d="M24 28C26 21 29 16 33 14C32 19 28 24 24 28Z" fill="#1E3A8A" />
      <path d="M18 29C18 21 20 15 24 11C26 16 24 23 18 29Z" fill="#059669" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Departments', href: '/services' },
    { label: 'Research', href: '/research' },
    { label: 'Academics', href: '/education', hasDropdown: true },
    { label: 'Conditions', href: '/conditions' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 w-full z-50 font-sans transition-all duration-300 bg-white">
      {/* 1. Top Reference Helpline & Appointment Bar - Hides smoothly on scroll */}
      <div
        className={`bg-[#0D1B2A] text-white text-xs sm:text-sm border-b border-white/10 transition-all duration-300 overflow-hidden ${
          scrolled
            ? 'max-h-0 py-0 opacity-0 pointer-events-none border-none'
            : 'max-h-24 opacity-100 hidden md:block'
        }`}
      >
        <div className="max-w-container-max-width mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 min-h-[46px] flex justify-between items-center gap-4">
          <div className="flex items-center gap-4 font-medium">
            <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
              <Phone className="w-3.5 h-3.5 animate-pulse" />
              <span>EMERGENCY HELPLINE:</span>
            </span>
            <a href="tel:+919976379697" className="hover:text-cyan-300 transition-colors font-semibold">
              +91 99763 79697
            </a>
            <span className="text-white/30">|</span>
            <span className="text-gray-300">Kumbakonam Main Hospital · 24/7 Diabetes &amp; Metabolic Care</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <Link href="/book" className="hover:text-white transition-colors flex items-center gap-1.5 font-semibold text-cyan-300">
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Video Consultation</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main White Brand Header Strip exactly inspired by reference navbar */}
      <div className={`transition-all duration-300 ${scrolled ? 'py-3' : 'py-4 sm:py-5'}`}>
        <div className="max-w-container-max-width mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-2 sm:gap-4">

          {/* Brand Identity Block */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 md:gap-4 min-w-0 group">
            <LogoIcon className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 transition-transform duration-300 group-hover:scale-105 shrink-0" />
            <div className="flex flex-col min-w-0">
              {/* Elegant script/serif styled title */}
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#0F172A] font-serif italic leading-none group-hover:text-[#0088CC] transition-colors truncate">
                Karunya Sugalaya&apos;s
              </span>
              {/* Bold red hospital title + cyan bottom accent line */}
              <span className="text-[11px] sm:text-xs md:text-sm lg:text-base font-extrabold tracking-wide text-[#DC2626] uppercase mt-1 leading-tight truncate">
                DIABETES HOSPITAL
              </span>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#0F172A] truncate">
                  &amp; RESEARCH CENTRE
                </span>
                <span className="h-1 w-6 sm:w-8 md:w-12 bg-[#00A8E8] rounded-full inline-block ml-1 shrink-0" />
              </div>
            </div>
          </Link>

          {/* Right Side Activities & Search Circle Button */}
          <div className="hidden lg:flex items-center gap-6 shrink-0">
            {/* Research & DiaX.AI Emblem Badge */}
            <div className="flex items-center gap-3 pr-6 border-r border-gray-200">
              <ResearchBadgeIcon className="w-10 h-10 shrink-0" />
              <div className="flex flex-col">
                <span className="text-sm font-extrabold text-[#0F172A] leading-tight tracking-tight">
                  Research &amp; DiaX.AI
                </span>
                <span className="text-[11px] font-semibold text-gray-500">
                  CMC Vellore Certified Lab
                </span>
              </div>
            </div>

            {/* Circular Search Button */}
            <button
              type="button"
              aria-label="Search website"
              className="w-11 h-11 rounded-full border border-[#422884] text-[#422884] hover:bg-[#422884] hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md focus:outline-none"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Book Appointment CTA Button */}
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#422884] hover:bg-[#331e67] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href="/book"
              className="hidden sm:inline-flex px-4 py-2 rounded-full bg-[#422884] text-white font-bold text-xs shadow-sm"
            >
              Book
            </Link>
            <button
              type="button"
              className="p-2 rounded-xl text-[#0F172A] hover:bg-gray-100 transition-colors focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Bright Cyan Horizontal Divider & Lower Menu Bar exactly matching reference style */}
      <nav className="border-t-2 border-[#0088CC] bg-white shadow-sm">
        <div className="max-w-container-max-width mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center justify-between py-3">
            <div className="flex items-center gap-7 xl:gap-9">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-[15px] xl:text-[16px] font-semibold transition-colors duration-200 flex items-center gap-1 ${isActive
                      ? 'text-[#0084FF] font-bold'
                      : 'text-[#1E293B] hover:text-[#0084FF]'
                      }`}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Helpline quick indicator inside bottom bar */}
            <div className="text-xs text-gray-500 font-medium flex items-center gap-2">
              <span>Open Today:</span>
              <span className="font-bold text-[#0F172A]">8:30 AM – 9:00 PM</span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-6 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-base font-semibold py-3 px-4 rounded-xl transition-colors ${isActive
                      ? 'bg-[#0084FF]/10 text-[#0084FF]'
                      : 'text-[#0F172A] hover:bg-gray-50 hover:text-[#0084FF]'
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <a
                href="tel:+919976379697"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border border-red-200 bg-red-50 text-red-700 font-bold text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Helpline: +91 99763 79697</span>
              </a>

              <Link
                href="/book"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-[#0084FF] text-white font-bold text-sm tracking-wide shadow-md"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
