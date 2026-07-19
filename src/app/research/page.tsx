import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Clinical Research — Karunya Sugalaya Diabetes Centre, Kumbakonam',
  description: 'Clinical research from 50,000 patients. IDF Bangkok 2025. LANDMARC trial participant. Publishing since 2020. DiaX.AI — TANSEED 7.0 grantee.',
};

export default function ResearchPage() {
  return (
    <main className="flex-grow">
      {/* Hero Section with Research Background Image */}
      <section
        className="relative w-full min-h-[260px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[650px] sm:h-[70svh] lg:h-[75svh] max-h-[800px] py-12 sm:py-0 flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 bg-cover bg-center md:bg-right text-white"
        style={{ backgroundImage: "url('/images/research-hero-bg.jpg')" }}
      >
        {/* Dark Teal Gradient Overlay for optimal text readability on the left while preserving scene on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/85 to-[#0F172A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />

        <div className="max-w-container-max-width mx-auto relative z-10 w-full">
          <div className="max-w-2xl text-left">
            <span className="inline-block px-3.5 py-1 bg-white/10 backdrop-blur-md text-cyan-300 font-bold rounded-full text-xs tracking-widest uppercase mb-4 border border-white/15 shadow-sm">
              Research
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] font-extrabold tracking-tight text-white mb-4 drop-shadow-sm">
              Clinical research at Karunya Sugalaya.
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Our clinical decisions are backed by data from our own patient population — a 50,000-patient database built over 25 years of focused practice. Research here is not separate from care. It informs every consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Highlight */}
      <section className="py-10 sm:py-12 bg-surface px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-highest p-8 rounded-2xl text-center border border-outline-variant/30 hover-elevation transition-all">
              <div className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-primary mb-2">258</div>
              <div className="text-[14px] font-bold text-on-surface-variant uppercase tracking-wide">Records Analysed</div>
            </div>
            <div className="bg-surface-container-highest p-8 rounded-2xl text-center border border-outline-variant/30 hover-elevation transition-all">
              <div className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-primary mb-2">137</div>
              <div className="text-[14px] font-bold text-on-surface-variant uppercase tracking-wide">Patients with paired HbA1c</div>
            </div>
            <div className="bg-surface-container-highest p-8 rounded-2xl text-center border border-outline-variant/30 hover-elevation transition-all">
              <div className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-primary mb-2">86%</div>
              <div className="text-[14px] font-bold text-on-surface-variant uppercase tracking-wide">Worsening control on oral therapy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-container-max-width mx-auto">
        <div className="flex flex-col gap-12">

          {/* Research 1 */}
          <article className="bg-surface-container-lowest p-8 md:p-10 rounded-2xl border border-outline-variant/30 hover-elevation transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-2 h-full bg-primary/80 group-hover:bg-primary transition-colors"></div>
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[12px] font-bold tracking-widest uppercase mb-4">Ongoing Study</span>
            <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-on-surface mb-4">Glycaemic Control Patterns in Patients on Maximum-Intensity Oral Therapy</h3>
            <p className="text-[16px] text-on-surface-variant leading-relaxed">
              A longitudinal analysis of 137 patients with paired HbA1c readings at this clinic revealed that 86% showed worsening glycaemic control despite being on maximum-intensity oral therapy — with mean HbA1c rising from 8.9% to 11.0%. These findings are directly informing structured protocols for earlier, more confident insulin escalation at Karunya Sugalaya — and represent a significant contribution to the understanding of oral therapy limitations in the South Indian patient population.
            </p>
          </article>

          {/* Research 2 */}
          <article className="bg-surface-container-lowest p-8 md:p-10 rounded-2xl border border-outline-variant/30 hover-elevation transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-2 h-full bg-primary/60 group-hover:bg-primary transition-colors"></div>
            <span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-[12px] font-bold tracking-widest uppercase mb-4">Conference Presentation</span>
            <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-on-surface mb-4">Patterns of Insulin Use in Diabetes Patients</h3>
            <div className="flex items-center gap-2 text-sm text-primary font-bold mb-4">
              <span className="material-symbols-outlined text-[18px]">campaign</span> Poster Presentation, IDF World Congress, Bangkok, 2025
            </div>
            <p className="text-[16px] text-on-surface-variant leading-relaxed">
              Dr. K. Sivakumar presented original research on insulin use patterns in diabetes patients at the International Diabetes Federation (IDF) World Congress in Bangkok in 2025.
            </p>
          </article>

          {/* Research 3 */}
          <article className="bg-surface-container-lowest p-8 md:p-10 rounded-2xl border border-outline-variant/30 hover-elevation transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-2 h-full bg-primary/40 group-hover:bg-primary transition-colors"></div>
            <span className="inline-block px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-[12px] font-bold tracking-widest uppercase mb-4">Clinical Trial Participation</span>
            <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-on-surface mb-4">LANDMARC Trial — Sanofi</h3>
            <p className="text-[16px] text-on-surface-variant leading-relaxed">
              Karunya Sugalaya has participated as a site in the LANDMARC clinical trial by Sanofi, contributing real-world patient data to a landmark multinational study.
            </p>
          </article>

        </div>
      </section>

      <div className="w-full h-px bg-outline-variant/30 max-w-container-max-width mx-auto"></div>

      {/* Publications & Collaboration */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
        <div>
          <h2 className="text-[32px] font-bold text-on-surface mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">menu_book</span>
            Publications
          </h2>
          <p className="text-[16px] text-on-surface-variant leading-relaxed mb-6">
            Karunya Sugalaya has been publishing clinical research since 2020. Our research reflects our commitment to advancing the standard of care not just locally, but through continuous contribution to the medical community.
          </p>
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 italic text-on-surface-variant text-[14px]">
            *Full publication list with journal names, titles, and co-authors to be added.*
          </div>
        </div>

        <div className="bg-surface-container-low p-8 md:p-10 rounded-2xl border border-outline-variant/30">
          <h2 className="text-[32px] font-bold text-on-surface mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary text-3xl">handshake</span>
            Collaboration
          </h2>
          <p className="text-[16px] text-on-surface-variant leading-relaxed mb-8">
            We are open to research collaborations with medical colleges, academic institutions, and pharmaceutical companies.
          </p>

          <h4 className="text-[18px] font-bold text-on-surface mb-4">Areas of interest:</h4>
          <ul className="flex flex-col gap-3 mb-8">
            <li className="flex items-start gap-2 text-[16px] text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
              Glycaemic control patterns in South Indian patients
            </li>
            <li className="flex items-start gap-2 text-[16px] text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
              Insulin initiation timing
            </li>
            <li className="flex items-start gap-2 text-[16px] text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
              Women&apos;s health and metabolic disease
            </li>
            <li className="flex items-start gap-2 text-[16px] text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
              AI-assisted clinical decision making in primary and secondary care
            </li>
          </ul>

          <div className="flex flex-col gap-2 p-4 bg-white rounded-xl border border-outline-variant/30">
            <div className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">Contact for collaboration:</div>
            <a href="mailto:contact@karunyasugalaya.co.in" className="text-[16px] font-bold text-primary hover:underline flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">mail</span> contact@karunyasugalaya.co.in
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
