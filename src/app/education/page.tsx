import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Patient Education — Karunya Sugalaya, Kumbakonam',
  description: 'Learn to manage your diabetes better with practical, evidence-based articles in Tamil and English — written by Dr. Sivakumar and the Karunya Sugalaya team.',
};

export default function EducationPage() {
  return (
    <main className="flex-grow">
      {/* Page Header */}
      <section className="bg-surface-container-low py-16 md:py-24 px-margin-mobile md:px-margin-desktop text-center border-b border-outline-variant/30">
        <div className="max-w-3xl mx-auto">
          <p className="text-[12px] font-bold text-primary tracking-widest uppercase mb-4">Patient Education</p>
          <h1 className="text-[48px] leading-[56px] font-bold text-on-surface mb-6">Learn to manage your diabetes better.</h1>
          <p className="text-[18px] text-on-surface-variant leading-relaxed">
            Practical, evidence-based articles in Tamil and English — written by Dr. Sivakumar and the Karunya Sugalaya team for patients in this region. Every article addresses the specific dietary, cultural, and lifestyle realities of Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
        
        {/* Featured Article */}
        <div className="mb-16">
          <h2 className="text-[24px] font-bold text-on-surface mb-8 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">star</span>
            Featured Article
          </h2>
          <Link href="#" className="group block">
            <article className="flex flex-col md:flex-row bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden hover-elevation transition-all h-full">
              <div className="w-full md:w-1/2 h-64 md:h-auto bg-surface-container-highest relative overflow-hidden">
                 <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors z-10"></div>
                 {/* Placeholder for image */}
                 <div className="absolute inset-0 flex items-center justify-center text-outline/30">
                    <span className="material-symbols-outlined text-6xl">restaurant</span>
                 </div>
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-[12px] font-bold tracking-widest uppercase">Nutrition</span>
                  <span className="inline-block px-3 py-1 bg-surface-variant text-on-surface-variant rounded-full text-[12px] font-bold tracking-widest uppercase">Tamil</span>
                </div>
                <h3 className="text-[28px] leading-[36px] font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">நம் உணவும் சர்க்கரை நோயும் — தென்னிந்திய உணவு வழிகாட்டி</h3>
                <p className="text-[16px] text-on-surface-variant mb-6 leading-relaxed">
                  Idli, dosai, rice, sambar — the foods we grew up with. Can you eat them and still control your blood sugar? This article explains the glycaemic impact of common Tamil Nadu staples, practical portion guidance, smart swaps, and how to eat your traditional food without spiking your sugar.
                </p>
                <div className="flex items-center text-primary font-bold text-[14px]">
                  Read full article <span className="material-symbols-outlined text-[18px] ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </article>
          </Link>
        </div>

        {/* Article Grid */}
        <div>
          <h2 className="text-[24px] font-bold text-on-surface mb-8 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">article</span>
            Latest Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Article 2 */}
            <Link href="#" className="group h-full flex flex-col">
              <article className="flex flex-col bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden hover-elevation transition-all h-full">
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[12px] font-bold tracking-widest uppercase">Monitoring</span>
                    <span className="inline-block px-3 py-1 bg-surface-variant text-on-surface-variant rounded-full text-[12px] font-bold tracking-widest uppercase">English</span>
                  </div>
                  <h3 className="text-[22px] leading-[28px] font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">What is HbA1c — and why does it matter more than your daily sugar reading?</h3>
                  <p className="text-[16px] text-on-surface-variant mb-6 flex-grow leading-relaxed">
                    Most patients focus on their fasting blood sugar. But HbA1c tells you the real story — your average blood sugar over the past three months. This article explains what HbA1c measures, how to interpret your result, what your target should be, and why it is the number that matters most in diabetes management.
                  </p>
                  <div className="flex items-center text-primary font-bold text-[14px] mt-auto">
                    Read article <span className="material-symbols-outlined text-[18px] ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </article>
            </Link>

            {/* Article 3 */}
            <Link href="#" className="group h-full flex flex-col">
              <article className="flex flex-col bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden hover-elevation transition-all h-full">
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-[12px] font-bold tracking-widest uppercase">Medication</span>
                    <span className="inline-block px-3 py-1 bg-surface-variant text-on-surface-variant rounded-full text-[12px] font-bold tracking-widest uppercase">Tamil</span>
                  </div>
                  <h3 className="text-[22px] leading-[28px] font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">மாத்திரை எடுத்தாலும் சர்க்கரை ஏன் கட்டுக்குள் வரவில்லை?</h3>
                  <p className="text-[16px] text-on-surface-variant mb-6 flex-grow leading-relaxed">
                    Many patients take their medication faithfully but still see poor numbers. This article explains why medication alone is not enough — and what lifestyle factors must work alongside it. It also covers how different classes of diabetes medication work, why missing doses matters, and when insulin becomes necessary.
                  </p>
                  <div className="flex items-center text-primary font-bold text-[14px] mt-auto">
                    Read article <span className="material-symbols-outlined text-[18px] ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </article>
            </Link>

            {/* Article 4 */}
            <Link href="#" className="group h-full flex flex-col">
              <article className="flex flex-col bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden hover-elevation transition-all h-full">
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-[12px] font-bold tracking-widest uppercase">Lifestyle</span>
                    <span className="inline-block px-3 py-1 bg-surface-variant text-on-surface-variant rounded-full text-[12px] font-bold tracking-widest uppercase">English</span>
                  </div>
                  <h3 className="text-[22px] leading-[28px] font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">The 30-minute walk that can lower your HbA1c by 0.5%</h3>
                  <p className="text-[16px] text-on-surface-variant mb-6 flex-grow leading-relaxed">
                    Exercise is medicine in diabetes — but the advice needs to be practical for Tamil Nadu's climate and daily schedule. This article gives simple, evidence-based guidance on when to walk, how to build the habit, why the timing relative to meals matters for blood sugar, and how even modest physical activity delivers measurable improvements in HbA1c.
                  </p>
                  <div className="flex items-center text-primary font-bold text-[14px] mt-auto">
                    Read article <span className="material-symbols-outlined text-[18px] ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </article>
            </Link>

          </div>
        </div>
      </section>

      {/* Diary App Promotion */}
      <section className="py-20 bg-primary px-margin-mobile md:px-margin-desktop text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          <span className="material-symbols-outlined text-white text-[48px] mb-4">smartphone</span>
          <h2 className="font-headline-lg text-[40px] font-bold text-on-primary mb-4">Track your health with the Diary App</h2>
          <p className="text-[18px] text-white/90 mb-8 max-w-2xl leading-relaxed">
            All our patients receive access to Diary — a custom app built by our team to log blood sugar, weight, and lifestyle metrics directly to your EMR between visits.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-label-md text-[16px] font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Ask about Diary on your next visit
          </button>
        </div>
      </section>

    </main>
  );
}
