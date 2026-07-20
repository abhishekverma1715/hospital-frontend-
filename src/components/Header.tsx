'use client';
import React, { useState, useEffect, useCallback } from 'react';
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
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close menu on route change cleanly without cascading useEffect
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  // Body scroll lock when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      // Dual hysteresis threshold eliminates jitter/vibration loops when navbar height changes
      if (window.scrollY > 80) {
        setScrolled(true);
      } else if (window.scrollY < 15) {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Departments', href: '/services' },
    { label: 'Research', href: '/research' },
    { label: 'Academics', href: '/education', hasDropdown: true },
    { label: 'Conditions', href: '/conditions' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Mobile Menu Overlay Backdrop */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* 1. Top Reference Helpline & Appointment Bar - Sits cleanly above the sticky navigation in normal document flow */}
      <div className="bg-[#0D1B2A] text-white text-xs sm:text-sm border-b border-white/10 hidden md:block">
        <div className="max-w-container-max-width mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 min-h-[46px] flex justify-between items-center gap-4">
          <div className="flex items-center gap-4 font-medium">
            <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
              <Phone className="w-3.5 h-3.5 animate-pulse" />
              <span>EMERGENCY HELPLINE:</span>
            </span>
            <a href="tel:+919976379697" className="hover:text-cyan-300 transition-colors font-semibold">
              +91 99763 79697
            </a>
            <span className="text-white/30 hidden lg:inline">|</span>
            <span className="text-gray-300 hidden lg:inline">Kumbakonam Main Hospital · 24/7 Diabetes &amp; Metabolic Care</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <Link href="/book" className="hover:text-white transition-colors flex items-center gap-1.5 font-semibold text-cyan-300">
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Video Consultation</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Brand Header + Navigation Menu (Sticky) */}
      <header className={`sticky top-0 w-full z-50 font-sans transition-all duration-300 bg-white ${scrolled ? 'shadow-md border-b border-gray-200' : 'shadow-sm border-b border-transparent'}`}>
        {/* Main White Brand Header Strip (Constant height prevents layout shifting/vibrating on scroll) */}
        <div className="py-3 sm:py-4 md:py-5 transition-colors duration-300">
          <div className="max-w-container-max-width mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-2 sm:gap-4">

            {/* Brand Identity Block */}
            <Link href="/" className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 min-w-0 group">
              <LogoIcon className="h-9 w-9 sm:h-11 sm:w-11 md:h-14 md:w-14 transition-transform duration-300 group-hover:scale-105 shrink-0" />
              <div className="flex flex-col min-w-0">
                {/* Elegant script/serif styled title */}
                <span className="text-base sm:text-lg md:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#0F172A] font-serif italic leading-none group-hover:text-[#0088CC] transition-colors truncate">
                  Karunya Sugalaya
                </span>
                {/* Bold red hospital title + cyan bottom accent line */}
                <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold tracking-wide text-[#DC2626] uppercase mt-0.5 sm:mt-1 leading-tight truncate">
                  Diabetic Care
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[8px] sm:text-[10px] md:text-xs font-bold  tracking-wider text-[#0F172A] truncate">
                    &amp;  RESEARCH CENTRE Pvt Ltd
                  </span>
                  <span className="h-0.5 sm:h-1 w-4 sm:w-6 md:w-8 lg:w-12 bg-[#00A8E8] rounded-full inline-block ml-1 shrink-0" />
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
                className="inline-flex px-4 py-2 rounded-full bg-[#422884] hover:bg-[#331e67] text-white font-bold text-xs shadow-sm transition-all"
              >
                Book
              </Link>
              <button
                type="button"
                className="px-3 py-2 rounded-xl bg-gray-50/80 hover:bg-gray-100 border border-gray-200/80 text-[#0F172A] transition-all focus:outline-none flex items-center gap-1.5 shadow-sm"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
              >
                <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Menu</span>
                {menuOpen ? <X size={20} className="text-[#DC2626]" /> : <Menu size={20} className="text-[#0D5C75]" />}
              </button>
            </div>

          </div>
        </div>

        {/* 3. Bright Cyan Horizontal Divider & Lower Menu Bar */}
        <nav className="border-t-2 border-[#0088CC] bg-white shadow-sm relative">
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
                <span>Emergency Services Available 24/7</span>
                <span className="font-bold text-[#0F172A]"></span>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Drawer (Absolute Dropdown to prevent expanding sticky header & overlap) */}
          <div
            className={`lg:hidden absolute top-full left-0 right-0 w-full bg-white border-b border-gray-200 shadow-2xl transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
            style={{ display: menuOpen ? 'block' : 'none' }}
          >
            <div className="px-4 sm:px-6 py-5 sm:py-6 space-y-3 max-h-[calc(100vh-140px)] max-h-[calc(100svh-140px)] overflow-y-auto overscroll-contain">
              <div className="flex flex-col space-y-1.5">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`text-base font-bold py-3.5 px-4 rounded-2xl transition-all min-h-[48px] flex items-center justify-between ${isActive
                        ? 'bg-[#422884]/10 text-[#422884] border-l-4 border-[#422884]'
                        : 'text-[#0F172A] hover:bg-gray-50 hover:text-[#422884]'
                        }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#422884] translate-x-1' : 'text-gray-300'}`} />
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <a
                  href="tel:+919976379697"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-2xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs sm:text-sm transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-red-600 animate-pulse" />
                  <span>Call Emergency Helpline: +91 99763 79697</span>
                </a>

                <Link
                  href="/book"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2.5 w-full px-5 py-3.5 rounded-2xl bg-[#422884] hover:bg-[#331e67] text-white font-extrabold text-sm tracking-wide shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
