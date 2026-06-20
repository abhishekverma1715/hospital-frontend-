'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-white/80 dark:bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm z-50 transition-all duration-300 ease-out">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto h-20">
        
        <Link href="/" className="flex items-center gap-3">
          <img src="/assets/Logohosp.jpg" alt="Karunya Sugalaya Logo" className="h-12 w-auto object-contain" />
          <span className="text-headline-sm font-headline-sm font-bold text-primary dark:text-primary-fixed hidden sm:block">
            Karunya Sugalaya
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 items-center">
          <Link className="text-on-surface-variant dark:text-secondary-fixed-dim hover:text-primary transition-colors hover:scale-105 duration-300 text-label-md font-label-md" href="/team">Our Team</Link>
          <Link className="text-on-surface-variant dark:text-secondary-fixed-dim hover:text-primary transition-colors hover:scale-105 duration-300 text-label-md font-label-md" href="/conditions">Conditions</Link>
          <Link className="text-on-surface-variant dark:text-secondary-fixed-dim hover:text-primary transition-colors hover:scale-105 duration-300 text-label-md font-label-md" href="/services">Services</Link>
          <Link className="text-on-surface-variant dark:text-secondary-fixed-dim hover:text-primary transition-colors hover:scale-105 duration-300 text-label-md font-label-md" href="/education">Education</Link>
          <Link className="text-on-surface-variant dark:text-secondary-fixed-dim hover:text-primary transition-colors hover:scale-105 duration-300 text-label-md font-label-md" href="/research">Research</Link>
          <Link className="text-on-surface-variant dark:text-secondary-fixed-dim hover:text-primary transition-colors hover:scale-105 duration-300 text-label-md font-label-md" href="/contact">Contact</Link>
        </div>
        
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+919976379697" className="flex items-center gap-2 text-error font-bold px-4 py-2 rounded-full border-2 border-error/20 hover:border-error transition-colors">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
            <span className="text-sm">+91 99763 79697</span>
          </a>
          <Link href="/book" className="bg-primary hover:bg-primary-container text-on-primary px-6 py-2.5 rounded-full font-label-md text-label-md btn-glow shadow-md">
            Book Appointment
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden p-2 text-on-surface-variant" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-outline-variant/30 shadow-lg p-6 flex flex-col gap-4">
          <Link href="/team" onClick={() => setMenuOpen(false)} className="text-label-md font-label-md">Our Team</Link>
          <Link href="/conditions" onClick={() => setMenuOpen(false)} className="text-label-md font-label-md">Conditions</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="text-label-md font-label-md">Services</Link>
          <Link href="/education" onClick={() => setMenuOpen(false)} className="text-label-md font-label-md">Education</Link>
          <Link href="/research" onClick={() => setMenuOpen(false)} className="text-label-md font-label-md">Research</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-label-md font-label-md">Contact</Link>
          <a href="tel:+919976379697" onClick={() => setMenuOpen(false)} className="text-error font-bold flex items-center gap-2 justify-center">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
            Emergency: +91 99763 79697
          </a>
          <Link href="/book" onClick={() => setMenuOpen(false)} className="bg-primary text-center hover:bg-primary-container text-on-primary px-6 py-3 rounded-full font-label-md text-label-md mt-4">
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
}
