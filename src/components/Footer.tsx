'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import Logo from './Logo';

// Custom clean SVG icons for Social Media so there are no lucide-react brand export issues
function FacebookIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function TwitterIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6H9.2v-7.6H6.46M7.83 6.5a1.68 1.68 0 0 0-1.68 1.68c0 .93.75 1.69 1.68 1.69a1.69 1.69 0 0 0 1.69-1.69c0-.93-.76-1.68-1.69-1.68z" />
    </svg>
  );
}

function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.28.072.383-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.601.723 4.913 2.034 1.312 1.311 2.034 3.057 2.033 4.913-.001 3.825-3.113 6.933-6.946 6.933z" />
    </svg>
  );
}

function YoutubeIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-gradient-to-b from-[#061c27] via-[#04141e] to-[#020e16] text-white pt-16 border-t border-white/10 relative overflow-hidden font-sans">
      {/* Subtle wood/textured dark gradient background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,92,117,0.15),transparent_60%)] pointer-events-none" />

      <div className="max-w-container-max-width mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 5-Column Main Grid exactly matching reference layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-12">

          {/* Column 1: Brand Logo & Mission Statement (Span 3) */}
          <div className="lg:col-span-3 space-y-6 pr-0 lg:pr-4">
            <Link href="/" className="inline-block">
              <Logo variant="light" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              No.1 Comprehensive Diabetes Care Centre with a dedicated 24/7 multidisciplinary
              diabetes care team at your service, embrace a new era of health and well-being.
            </p>
          </div>

          {/* Column 2: Services (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-white tracking-wide">Services</h4>
            {/* Yellow double underline accent */}
            <div className="flex gap-1.5 my-3">
              <span className="h-0.5 w-5 bg-[#EAD038]" />
              <span className="h-0.5 w-5 bg-[#EAD038]" />
            </div>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/book"
                  className="hover:text-[#06B6D4] transition-colors flex items-center gap-2 group"
                >
                  <span className="text-xs text-[#06B6D4] group-hover:translate-x-0.5 transition-transform">↗</span>
                  <span>Book an Appointment</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#cgm"
                  className="hover:text-[#06B6D4] transition-colors flex items-center gap-2 group"
                >
                  <span className="text-xs text-[#06B6D4] group-hover:translate-x-0.5 transition-transform">↗</span>
                  <span>CGM &amp; Insulin Pump</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#foot"
                  className="hover:text-[#06B6D4] transition-colors flex items-center gap-2 group"
                >
                  <span className="text-xs text-[#06B6D4] group-hover:translate-x-0.5 transition-transform">↗</span>
                  <span>Diabetic Foot Clinic</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#obesity"
                  className="hover:text-[#06B6D4] transition-colors flex items-center gap-2 group"
                >
                  <span className="text-xs text-[#06B6D4] group-hover:translate-x-0.5 transition-transform">↗</span>
                  <span>Obesity &amp; Metabolic Care</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#retina"
                  className="hover:text-[#06B6D4] transition-colors flex items-center gap-2 group"
                >
                  <span className="text-xs text-[#06B6D4] group-hover:translate-x-0.5 transition-transform">↗</span>
                  <span>Retinopathy Screening</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#06B6D4] transition-colors flex items-center gap-2 group"
                >
                  <span className="text-xs text-[#06B6D4] group-hover:translate-x-0.5 transition-transform">↗</span>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-white tracking-wide">Useful Links</h4>
            {/* Yellow double underline accent */}
            <div className="flex gap-1.5 my-3">
              <span className="h-0.5 w-5 bg-[#EAD038]" />
              <span className="h-0.5 w-5 bg-[#EAD038]" />
            </div>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#06B6D4] transition-colors flex items-center gap-2 group"
                >
                  <span className="text-xs text-[#06B6D4] group-hover:translate-x-0.5 transition-transform">↗</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="hover:text-[#06B6D4] transition-colors flex items-center gap-2 group"
                >
                  <span className="text-xs text-[#06B6D4] group-hover:translate-x-0.5 transition-transform">↗</span>
                  <span>Research &amp; DiaX.AI</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/education"
                  className="hover:text-[#06B6D4] transition-colors flex items-center gap-2 group"
                >
                  <span className="text-xs text-[#06B6D4] group-hover:translate-x-0.5 transition-transform">↗</span>
                  <span>Knowledge Library</span>
                </Link>
              </li>
              <li>

                <Link
                  href="/conditions"
                  className="hover:text-[#06B6D4] transition-colors flex items-center gap-2 group"
                >
                  <span className="text-xs text-[#06B6D4] group-hover:translate-x-0.5 transition-transform">↗</span>
                  <span>Conditions Treated</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#lab"
                  className="hover:text-[#06B6D4] transition-colors flex items-center gap-2 group"
                >
                  <span className="text-xs text-[#06B6D4] group-hover:translate-x-0.5 transition-transform">↗</span>
                  <span>CMC Vellore Certified Lab</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-lg font-bold text-white tracking-wide">Contact Us</h4>
            {/* Yellow double underline accent */}
            <div className="flex gap-1.5 my-3">
              <span className="h-0.5 w-5 bg-[#EAD038]" />
              <span className="h-0.5 w-5 bg-[#EAD038]" />
            </div>

            {/* Location 1: Kumbakonam Hospital */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Kumbakonam (Main Hospital)
              </p>
              <a
                href="tel:+919976379697"
                className="flex items-center gap-3 mt-1.5 group hover:text-white transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-[#0088CC] group-hover:bg-[#0077B3] transition-colors flex items-center justify-center text-white shrink-0 shadow-md">
                  <Phone className="w-4 h-4" />
                </span>
                <span className="text-sm font-semibold text-gray-200">+91 99763 79697</span>
              </a>
            </div>

            {/* Location 2: Emergency Helpline */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Emergency Helpline (24/7)
              </p>
              <a
                href="tel:+919976379697"
                className="flex items-center gap-3 mt-1.5 group hover:text-white transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-[#0088CC] group-hover:bg-[#0077B3] transition-colors flex items-center justify-center text-white shrink-0 shadow-md">
                  <Phone className="w-4 h-4" />
                </span>
                <span className="text-sm font-semibold text-gray-200">+91 99763 79697</span>
              </a>
            </div>

            {/* Email Support */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Email Address
              </p>
              <a
                href="mailto:contact@karunyasugalaya.co.in"
                className="flex items-center gap-3 mt-1.5 group hover:text-white transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-[#0088CC] group-hover:bg-[#0077B3] transition-colors flex items-center justify-center text-white shrink-0 shadow-md">
                  <Mail className="w-4 h-4" />
                </span>
                <span className="text-sm font-semibold text-gray-200 break-all">
                  contact@karunyasugalaya.co.in
                </span>
              </a>
            </div>

            {/* Address */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Hospital Address
              </p>
              <div className="flex items-start gap-3 mt-1.5">
                <span className="w-8 h-8 rounded-lg bg-[#0088CC] flex items-center justify-center text-white shrink-0 shadow-md">
                  <MapPin className="w-4 h-4" />
                </span>
                <span className="text-sm text-gray-300 leading-snug">
                  9, Ramasami Kovil West Street, Kumbakonam – 612001, Tamil Nadu
                </span>
              </div>
            </div>
          </div>

          {/* Column 5: Social Media (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-white tracking-wide">Social Media</h4>
            {/* Yellow double underline accent */}
            <div className="flex gap-1.5 my-3">
              <span className="h-0.5 w-5 bg-[#EAD038]" />
              <span className="h-0.5 w-5 bg-[#EAD038]" />
            </div>

            <div className="flex flex-row sm:flex-col gap-3 mt-2 flex-wrap">
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/10 hover:bg-[#0088CC] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/10 hover:bg-[#0088CC] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/10 hover:bg-[#0088CC] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919976379697"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/10 hover:bg-[#FF0000] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Policy Links Strip */}
        <div className="py-6 border-t border-white/10 text-center text-[11px] sm:text-xs md:text-sm text-gray-300 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-4">
          <Link href="#" className="hover:text-white transition-colors">
            Terms &amp; Conditions
          </Link>
          <span className="text-gray-600">|</span>
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span className="text-gray-600">|</span>
          <Link href="#" className="hover:text-white transition-colors">
            Cancellation &amp; Refund
          </Link>
          <span className="text-gray-600">|</span>
          <Link href="#" className="hover:text-white transition-colors">
            Shipping &amp; Exchange
          </Link>
          <span className="text-gray-600">|</span>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Full-Width Bright Cyan Bottom Bar exactly matching reference screenshot */}
      <div className="w-full bg-[#422884] text-white py-4 px-4 sm:px-8 relative z-10 shadow-inner">
        <div className="max-w-container-max-width mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] sm:text-[13px] md:text-[14px] font-normal text-center sm:text-left leading-relaxed">
            Copyright © 2008 – {new Date().getFullYear()} Karunya Sugalaya Diabetes Care &amp; Research Centre. All Rights Reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white text-[#422884] hover:bg-gray-100 flex items-center justify-center shadow-lg transition-transform hover:scale-110 focus:outline-none shrink-0"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 font-bold" />
          </button>
        </div>
      </div>
    </footer>
  );
}
