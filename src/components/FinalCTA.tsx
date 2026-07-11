'use client';

import React from 'react';
import Link from 'next/link';

export interface FinalCTAProps {
  badge?: string;
  title?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  phoneText?: string;
  phoneNumber?: string;
}

export default function FinalCTA({
  badge = 'Ready when you are',
  title = 'Ready to take control of your diabetes?',
  description = 'Book a consultation today with our experienced specialists, or call us directly. We\'re available 24/7 for emergencies.',
  primaryBtnText = 'Book an Appointment',
  primaryBtnHref = '/book',
  phoneText = '+91 99763 79697',
  phoneNumber = '+919976379697',
}: FinalCTAProps) {
  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-cover bg-center md:bg-right"
      style={{ backgroundImage: "url('/images/final-cta-bg.png')" }}
    >
      {/* Dark Teal Gradient Overlay for perfect readability on the left while preserving doctor image on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#011c1d]/95 via-[#011c1d]/85 md:via-[#011c1d]/75 to-[#011c1d]/30" />

      <div className="max-w-container-max-width mx-auto relative z-10">
        <div className="max-w-xl flex flex-col items-start text-left">
          {badge && (
            <span className="inline-block px-4 py-1.5 bg-cyan-400/15 backdrop-blur-md text-cyan-300 font-bold rounded-full text-xs tracking-widest uppercase mb-6 border border-cyan-400/30">
              {badge}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-white/85 text-base sm:text-lg mb-8 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Link
              href={primaryBtnHref}
              className="bg-[#422884] hover:bg-[#331e67] text-white px-8 py-4 rounded-full text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              {primaryBtnText}
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
            <a
              href={`tel:${phoneNumber}`}
              className="text-white text-base sm:text-lg font-bold bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full backdrop-blur-md border border-white/25 flex items-center justify-center gap-2.5 transition-all"
            >
              <span className="material-symbols-outlined text-cyan-300">call</span>
              {phoneText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
