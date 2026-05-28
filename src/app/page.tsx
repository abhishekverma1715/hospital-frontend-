'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

type Placeholder = { label: string; dim: string; className?: string };

function ImgPlaceholder({ label, dim, className = '' }: Placeholder) {
  return (
    <div className={`img-placeholder ${className}`} role="img" aria-label={`Placeholder: ${label}`}>
      <span className="ph-label">{label}</span>
      <span className="ph-dim">{dim}</span>
    </div>
  );
}

export default function HomePage() {
  const [calculatorStep, setCalculatorStep] = useState(1);
  const [calculatorScore, setCalculatorScore] = useState(0);

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          if (!prefersReducedMotion) {
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach((el) => {
              const counter = el as HTMLElement;
              if (counter.dataset.animated) return;
              counter.dataset.animated = "true";

              const target = parseInt(counter.getAttribute('data-target') || '0', 10);
              const suffix = counter.getAttribute('data-suffix') || '';
              const duration = 2000;
              const stepTime = Math.abs(Math.floor(duration / (target || 1)));
              let current = 0;

              const timer = setInterval(() => {
                current += Math.ceil(target / 50) || 1;
                if (current >= target) {
                  counter.innerText = target + suffix;
                  clearInterval(timer);
                } else {
                  counter.innerText = current + suffix;
                }
              }, stepTime);
            });
          } else {
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach((el) => {
              const counter = el as HTMLElement;
              counter.innerText = (counter.getAttribute('data-target') || '') + (counter.getAttribute('data-suffix') || '');
            });
          }
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-fade-in-up').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleCalcAnswer = (score: number) => {
    setCalculatorScore(prev => prev + score);
    setCalculatorStep(prev => prev + 1);
  };

  const retakeCalc = () => {
    setCalculatorScore(0);
    setCalculatorStep(1);
  };

  const getRiskResult = () => {
    if (calculatorScore <= 3) {
      return { level: 'Low Risk', class: 'text-primary', message: 'Your current health habits look good. Keep up an active lifestyle and a balanced diet. An annual check-up with your doctor is still a wise precaution — diabetes can develop silently.' };
    } else if (calculatorScore <= 6) {
      return { level: 'Moderate Risk', class: 'text-tertiary-container', message: 'You have some risk factors that are worth taking seriously. Small lifestyle changes — reducing refined carbohydrates, increasing daily movement, managing your weight — can meaningfully lower your risk. A fasting blood sugar test will give you a definitive picture.' };
    } else {
      return { level: 'High Risk', class: 'text-error', message: 'Your answers indicate multiple significant risk factors. This does not mean you have diabetes — but you should get tested soon. At Karunya Sugalaya, an HbA1c above 12 brought down to below 7 in six months is routine. Early diagnosis makes everything easier. Book an appointment today.' };
    }
  };

  const riskResult = getRiskResult();

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative pt-24 pb-32 px-margin-mobile md:px-margin-desktop overflow-hidden warm-mesh animate-fade-in-up">
        <div className="blob w-[420px] h-[420px] -top-32 -left-24 bg-[#ffd5a9]" />
        <div className="blob blob-2 w-[480px] h-[480px] top-1/3 -right-32 bg-[#ade8de]" />
        <div className="blob blob-3 w-[360px] h-[360px] bottom-0 left-1/3 bg-[#ffc3af]" />

        <div className="max-w-container-max-width mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/70 backdrop-blur-sm text-primary font-bold rounded-full text-[12px] tracking-widest uppercase w-max border border-[#e8d8bf] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Live longer, healthier
            </span>
            <h1 className="font-display-lg text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] text-on-surface font-extrabold tracking-tight">
              Illness to <span className="relative inline-block">
                <span className="relative z-10">Wellness</span>
                <span className="absolute left-0 right-0 bottom-1 h-3 bg-[#ffd5a9]/70 -z-0 rounded-full" />
              </span>.
            </h1>
            <h2 className="text-[20px] sm:text-[24px] font-bold text-on-surface-variant max-w-xl">
              Moving from Care to Cure for chronic conditions.
            </h2>
            <p className="font-body-lg text-[17px] sm:text-[18px] text-on-surface-variant max-w-xl leading-relaxed">
              Karunya Sugalaya has been Kumbakonam&apos;s trusted diabetes care centre since 2008. Over 50,000 patients. Over 2 lakh prescriptions. Led by a Key Opinion Leader, Metabolic Physician who built his own AI tools with a small team of technologists — because better data means better care.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Link href="/book" className="group bg-primary hover:bg-primary-container text-on-primary px-8 py-4 rounded-full text-[16px] font-bold shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 flex items-center gap-2">
                Book Appointment
                <span className="material-symbols-outlined text-[20px] nudge-caret">arrow_forward</span>
              </Link>
              <Link href="#about" className="bg-white/80 backdrop-blur-sm hover:bg-white text-primary border border-[#e8d8bf] px-8 py-4 rounded-full text-[16px] font-bold transition-all duration-300 hover:-translate-y-1 shadow-sm">
                About the Hospital
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {[
                { icon: 'bed', label: '12-Bed Facility' },
                { icon: 'health_and_safety', label: 'RITAM Holistic' },
                { icon: 'verified', label: 'CMC Vellore Certified' },
              ].map((t) => (
                <div key={t.label} className="bg-white/70 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 text-[14px] font-bold text-on-surface-variant border border-[#e8d8bf]/70">
                  <span className="material-symbols-outlined text-primary text-[18px]">{t.icon}</span>
                  {t.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right column: image placeholder + floating stat cards */}
          <div className="lg:col-span-5 relative">
            <ImgPlaceholder
              label="Hero — clinic / doctor with patient"
              dim="800 × 900"
              className="aspect-[4/5] w-full"
            />

            <div className="absolute -bottom-8 -left-8 sm:-left-12 soft-card p-5 w-[180px] hidden sm:block">
              <span className="material-symbols-outlined text-primary text-[28px] mb-2">groups</span>
              <div className="font-display-lg text-[32px] font-extrabold text-on-surface counter" data-suffix="k+" data-target="50">0</div>
              <div className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Patients</div>
            </div>

            <div className="absolute -top-6 -right-4 sm:-right-10 soft-card p-5 w-[170px] hidden sm:block">
              <span className="material-symbols-outlined text-[#c8731f] text-[28px] mb-2">clinical_notes</span>
              <div className="font-display-lg text-[32px] font-extrabold text-on-surface counter" data-suffix="+" data-target="20">0</div>
              <div className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Years</div>
            </div>

            <div className="absolute top-1/2 -right-2 sm:-right-6 -translate-y-1/2 bg-[#b91c1c] text-white p-4 rounded-2xl shadow-xl shadow-red-500/30 hidden md:flex items-center gap-3 hover:-translate-y-[calc(50%+4px)] transition-transform">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider opacity-90">24/7 Emergency</div>
                <div className="text-[14px] font-extrabold">+91 99763 79697</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="py-24 bg-surface px-margin-mobile md:px-margin-desktop animate-fade-in-up">
        <div className="max-w-container-max-width mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-label-overline text-[12px] font-bold tracking-widest uppercase">About Karunya Sugalaya</span>
            <h2 className="font-headline-lg text-[32px] sm:text-[40px] font-bold text-on-surface mt-4 mb-6">A hospital built on Care, Research, and Technology.</h2>
            <p className="font-body-lg text-[17px] sm:text-[18px] text-on-surface-variant leading-relaxed">
              Karunya Sugalaya was founded in March 2011 on 9, Ramasami Kovil West Street, Kumbakonam, as a specialist Diabetes Care Centre — bringing consultation, laboratory, and pharmacy under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            <div className="order-2 lg:order-1 flex flex-col gap-6">
              <div className="soft-card p-8 group">
                <div className="icon-chip bg-[#fff1de] text-[#c8731f] mb-5">
                  <span className="material-symbols-outlined text-[28px]">apartment</span>
                </div>
                <h3 className="text-[20px] font-bold text-on-surface mb-3">Expanding to Meet Needs</h3>
                <p className="text-[16px] text-on-surface-variant leading-relaxed">
                  In 2012, responding to growing patient numbers, we opened our inpatient facility. Today the centre runs as a specialist day-care unit — 12 beds, individual AC rooms, a foot care clinic, physiotherapy, and retinal photography for early diabetic eye disease detection.
                </p>
              </div>

              <div className="relative p-8 rounded-[28px] text-white shadow-xl overflow-hidden bg-gradient-to-br from-primary to-[#005049] group hover:-translate-y-1 transition-transform duration-500">
                <div className="absolute right-0 bottom-0 opacity-15 transform translate-x-1/4 translate-y-1/4">
                  <span className="material-symbols-outlined text-[180px]">smart_toy</span>
                </div>
                <div className="relative z-10">
                  <div className="icon-chip bg-white/15 backdrop-blur-sm text-white mb-5">
                    <span className="material-symbols-outlined text-[28px]">biotech</span>
                  </div>
                  <h3 className="text-[20px] font-bold mb-3">Technology &amp; Data Driven</h3>
                  <p className="text-[16px] opacity-90 leading-relaxed">
                    In 2017 we migrated to a Java-based EMR. In 2022 we built DiaX.AI. Dialog holds complete records of 50,000+ patients and 2 lakh+ prescriptions — a data asset that powers research and faster care at every consultation.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <ImgPlaceholder
                label="Hospital exterior — Kumbakonam"
                dim="900 × 1100"
                className="w-full h-full min-h-[480px] lg:min-h-[600px]"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Founded', target: '2012', suffix: '' },
                    { label: 'Specialists', target: '4', suffix: '' },
                    { label: 'Patients', target: '50', suffix: 'k+' },
                    { label: 'Emergency', target: '24×7', suffix: '', static: true },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white shadow-sm">
                      <div className="font-headline-sm text-[22px] font-extrabold text-primary">
                        {s.static ? '24×7' : (
                          <span className="counter" data-target={s.target} data-suffix={s.suffix}>0</span>
                        )}
                      </div>
                      <div className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Why — asymmetric grid ===== */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop animate-fade-in-up relative overflow-hidden warm-mesh-soft">
        <div className="max-w-container-max-width mx-auto relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-label-overline text-[12px] font-bold tracking-widest uppercase">Why Karunya Sugalaya</span>
            <h2 className="font-headline-lg text-[32px] sm:text-[40px] font-bold text-on-surface mt-4 mb-6">What makes us different.</h2>
            <p className="font-body-lg text-[17px] sm:text-[18px] text-on-surface-variant leading-relaxed">
              Six things we do here that you won&apos;t find at most diabetes clinics — not gimmicks, but practices that genuinely improve outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {/* Hero feature card spans 2 cols + 2 rows on lg */}
            <div className="lg:col-span-3 lg:row-span-2 relative p-10 rounded-[32px] overflow-hidden bg-gradient-to-br from-[#fff1de] via-white to-[#e8f4f1] border border-[#e8d8bf] group hover:-translate-y-2 transition-transform duration-500 shadow-[0_8px_30px_rgba(120,90,50,0.08)]">
              <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="icon-chip bg-primary text-white mb-6 w-16 h-16 rounded-2xl">
                  <span className="material-symbols-outlined text-[34px]">memory</span>
                </div>
                <h3 className="text-[28px] font-extrabold text-on-surface mb-4 leading-tight">AI-Assisted Decisions, every visit.</h3>
                <p className="text-[16px] text-on-surface-variant leading-relaxed mb-6 max-w-md">
                  Diabrain analyses your records at every visit, flags early signs of complications, and suggests evidence-based treatment adjustments in real time. We use data, not just intuition.
                </p>
                <div className="mt-auto pt-6 border-t border-[#e8d8bf]">
                  <ImgPlaceholder label="Doctor reviewing dashboard" dim="600 × 360" className="w-full aspect-[5/3]" />
                </div>
              </div>
            </div>

            {[
              { icon: 'folder_special', title: 'Complete EMR', body: 'Every consultation, investigation, and prescription since your first visit — stored permanently in Dialog EMR.', chip: 'bg-[#fff1de] text-[#c8731f]' },
              { icon: 'smartphone', title: 'Remote Diary App', body: 'Patients log blood sugar, weight, and lifestyle data between visits. A complete picture, not a snapshot.', chip: 'bg-[#e8f4f1] text-primary' },
              { icon: 'elderly', title: 'Priority for Elderly', body: 'We prioritise elderly patients with the least waiting time. Remote care and home visits where needed.', chip: 'bg-[#fde8e2] text-[#b04a2a]' },
              { icon: 'science', title: 'Research-Backed', body: 'Decisions backed by research from our 50,000-patient database — reflecting South Indian metabolic patterns.', chip: 'bg-[#f0e9dc] text-[#8a6d4a]' },
              { icon: 'emergency', title: '24×7 Emergency', body: 'Staffed and equipped for acute diabetes emergencies around the clock. Call +91 9976379697 immediately.', chip: 'bg-[#fde8e2] text-[#b91c1c]', accent: true },
            ].map((c, i) => (
              <div key={i} className={`lg:col-span-3 ${i >= 2 ? 'lg:col-span-3' : ''} ${c.accent ? 'border-2 border-[#b91c1c]/20' : ''} soft-card p-7 group flex flex-col`}>
                <div className={`icon-chip ${c.chip} mb-5`}>
                  <span className="material-symbols-outlined text-[26px]">{c.icon}</span>
                </div>
                <h3 className="text-[18px] font-bold text-on-surface mb-3">{c.title}</h3>
                <p className="text-[15px] text-on-surface-variant leading-relaxed flex-grow">{c.body}</p>
                <div className="mt-4 flex items-center gap-2 text-primary text-[13px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <span className="material-symbols-outlined text-[16px] nudge-caret">arrow_forward</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Risk Calculator ===== */}
      <section id="calculator" className="py-24 bg-surface px-margin-mobile md:px-margin-desktop animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#fff1de] text-[#c8731f] font-bold rounded-full text-[12px] tracking-widest uppercase mb-4 border border-[#e8d8bf]">Free Health Tool</span>
            <h2 className="font-headline-md text-[32px] sm:text-[40px] font-bold text-on-surface mb-4">Check your diabetes risk.</h2>
            <p className="text-[17px] sm:text-[18px] text-on-surface-variant max-w-2xl mx-auto">Answer 5 quick questions. Get your personal risk level instantly — no registration, no data collected.</p>
          </div>

          <div className="bg-white p-6 sm:p-10 md:p-12 rounded-[32px] shadow-[0_12px_40px_rgba(120,90,50,0.1)] border border-[#e8d8bf]/60 relative overflow-hidden">
            {calculatorStep <= 5 && (
              <div className="absolute top-0 left-0 w-full h-2 bg-[#f0e9dc]">
                <div className="h-full bg-gradient-to-r from-[#c8731f] to-primary transition-all duration-500 ease-out" style={{ width: `${(calculatorStep / 5) * 100}%` }} />
              </div>
            )}

            <div className="min-h-[400px] flex flex-col justify-center">
              {[
                { step: 1, q: 'What is your age?', opts: [
                  { label: 'Below 30', icon: 'child_care', score: 0 },
                  { label: '30 – 45', icon: 'person', score: 1 },
                  { label: '45 – 60', icon: 'group', score: 2 },
                  { label: 'Above 60', icon: 'elderly', score: 3 },
                ], cols: 'sm:grid-cols-2' },
                { step: 2, q: 'Does diabetes run in your family?', opts: [
                  { label: 'No family history', icon: 'sentiment_satisfied', score: 0 },
                  { label: 'One parent or sibling', icon: 'family_restroom', score: 1 },
                  { label: 'Both parents', icon: 'diversity_3', score: 2 },
                ], cols: 'sm:grid-cols-3' },
                { step: 3, q: 'How would you describe your weight?', opts: [
                  { label: 'Normal', icon: 'accessibility_new', score: 0 },
                  { label: 'Slightly overweight', icon: 'fitness_center', score: 1 },
                  { label: 'Overweight or obese', icon: 'monitor_weight', score: 2 },
                ], cols: 'sm:grid-cols-3' },
                { step: 4, q: 'How physically active are you?', opts: [
                  { label: 'Exercise regularly', icon: 'directions_run', score: 0 },
                  { label: 'Light activity', icon: 'directions_walk', score: 1 },
                  { label: 'Mostly sedentary', icon: 'chair', score: 2 },
                ], cols: 'sm:grid-cols-3' },
                { step: 5, q: 'Any recent symptoms?', opts: [
                  { label: 'None', icon: 'check_circle', score: 0 },
                  { label: 'Fatigue or frequent thirst', icon: 'local_drink', score: 1 },
                  { label: 'Multiple symptoms', icon: 'warning', score: 2 },
                ], cols: 'sm:grid-cols-3' },
              ].map(s => calculatorStep === s.step && (
                <div key={s.step} className="animate-fade-in-up visible">
                  <div className="flex items-center justify-center mb-8 gap-3 flex-wrap">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-[20px] shadow-lg shadow-primary/30">{s.step}</div>
                    <h3 className="font-headline-sm text-[22px] sm:text-[28px] font-bold text-on-surface text-center">{s.q}</h3>
                  </div>
                  <div className={`grid grid-cols-1 ${s.cols} gap-4 max-w-4xl mx-auto`}>
                    {s.opts.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleCalcAnswer(option.score)}
                        className="bg-[#fbf7f1] border-2 border-[#e8d8bf] hover:border-primary hover:bg-white p-6 rounded-2xl flex flex-col items-center gap-4 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 min-h-[140px] justify-center"
                      >
                        <span className="material-symbols-outlined text-[40px] text-[#c8731f] group-hover:text-primary group-hover:scale-110 transition-all">{option.icon}</span>
                        <span className="text-[16px] sm:text-[18px] font-bold text-on-surface text-center">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {calculatorStep > 5 && (
                <div className="text-center animate-fade-in-up visible">
                  <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 shadow-xl ${riskResult.class === 'text-error' ? 'bg-[#fde8e2] text-[#b91c1c]' : riskResult.class === 'text-tertiary-container' ? 'bg-[#fff1de] text-[#c8731f]' : 'bg-[#e8f4f1] text-primary'}`}>
                    <span className="material-symbols-outlined text-[48px]">health_and_safety</span>
                  </div>
                  <h3 className="font-headline-lg text-[28px] sm:text-[32px] font-bold text-on-surface mb-4">Your Risk Level: <span className={riskResult.class}>{riskResult.level}</span></h3>
                  <p className="font-body-md text-[16px] sm:text-[18px] text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed p-6 bg-[#fbf7f1] rounded-2xl border border-[#e8d8bf]">{riskResult.message}</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/book" className="bg-primary hover:bg-primary-container text-on-primary px-8 py-4 rounded-full text-[16px] font-bold shadow-lg shadow-primary/30 flex items-center gap-2 hover:-translate-y-1 transition-all">
                      Book Appointment
                      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </Link>
                    <button onClick={retakeCalc} className="border border-[#e8d8bf] bg-white text-primary px-8 py-4 rounded-full text-[16px] font-bold hover:bg-[#fbf7f1] transition-all flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px]">refresh</span> Retake Assessment
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Meet the doctors ===== */}
      <section className="py-24 warm-mesh-soft px-margin-mobile md:px-margin-desktop animate-fade-in-up">
        <div className="max-w-container-max-width mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-label-overline text-[12px] font-bold tracking-widest uppercase">Our Team</span>
            <h2 className="font-headline-lg text-[32px] sm:text-[40px] font-bold text-on-surface mt-4 mb-6">Meet the doctors.</h2>
            <p className="font-body-lg text-[17px] sm:text-[18px] text-on-surface-variant leading-relaxed">
              Led by specialists who combine deep clinical experience with research and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { name: 'Dr. Sivakumar', role: 'Metabolic Physician · Founder', specialties: ['Diabetes', 'Endocrinology', 'AI in Medicine'], blurb: 'Key Opinion Leader with 20+ years in metabolic disease. Built DiaX.AI and the Dialog EMR alongside a small technologist team.' },
              { name: 'Dr. Lakshmi', role: 'Consultant Physician', specialties: ['RITAM Holistic', 'Women’s Diabetes Care', 'Tamil-first consults'], blurb: 'Lead of the RITAM holistic programme. Patients describe her consults as unhurried, thorough, and in their language.' },
            ].map((d, i) => (
              <div key={i} className="soft-card p-6 group flex flex-col sm:flex-row gap-6 items-start">
                <ImgPlaceholder label={`Portrait — ${d.name}`} dim="400 × 480" className="w-full sm:w-40 h-48 sm:h-48 flex-shrink-0" />
                <div className="flex flex-col flex-grow">
                  <h3 className="text-[22px] font-extrabold text-on-surface mb-1">{d.name}</h3>
                  <div className="text-[13px] font-bold text-primary tracking-wide uppercase mb-3">{d.role}</div>
                  <p className="text-[15px] text-on-surface-variant leading-relaxed mb-4">{d.blurb}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {d.specialties.map(s => (
                      <span key={s} className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#fff1de] text-[#c8731f] border border-[#e8d8bf]">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/team" className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold text-[16px] sm:text-[18px] hover:-translate-y-1 transition-transform px-8 py-4 rounded-full shadow-md border border-[#e8d8bf] group">
              View full team profiles
              <span className="material-symbols-outlined nudge-caret">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="py-24 bg-surface px-margin-mobile md:px-margin-desktop animate-fade-in-up">
        <div className="max-w-container-max-width mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-label-overline text-[12px] font-bold tracking-widest uppercase">Patient Stories</span>
            <h2 className="font-headline-lg text-[32px] sm:text-[40px] font-bold text-on-surface mt-4 mb-6">What our patients say.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: 'My HbA1c was 11.4 when I first came. Six months later it was 6.8. Dr. Sivakumar explained every step — why we were changing the medicine, what the numbers meant, what I should eat. For the first time in years, I understood my own condition.', name: 'Murugesan R.', meta: 'Patient since 2022 · Kumbakonam' },
              { quote: 'இந்த மருத்துவமனையில் தமிழில் முழுமையாக பேசி புரிந்துகொள்ள முடிகிறது. டாக்டர் லட்சுமி என்னோட சர்க்கரை மட்டுமில்லாம என்னோட மொத்த உடல்நலத்தையும் கவனிக்கிறாங்க. RITAM program என் வாழ்க்கையை மாத்துச்சு.', name: 'Vijayalakshmi S.', meta: 'Patient since 2021 · Papanasam' },
              { quote: 'I came in for a routine review and the doctor flagged early kidney changes I had no symptoms of. That early detection changed my treatment completely. The digital records meant every doctor I saw had my full history.', name: 'Karthikeyan P.', meta: 'Patient since 2023 · Thanjavur' },
            ].map((t, i) => (
              <div key={i} className={`soft-card p-8 sm:p-10 flex flex-col ${i === 1 ? 'md:translate-y-6' : ''}`}>
                <div className="quote-mark mb-2">&ldquo;</div>
                <p className="text-[16px] text-on-surface italic mb-8 flex-grow leading-relaxed">{t.quote}</p>
                <div className="border-t border-[#e8d8bf] pt-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#fff1de] flex items-center justify-center text-[#c8731f] font-extrabold text-[18px]">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-on-surface">{t.name}</div>
                    <div className="text-[11px] text-on-surface-variant tracking-wider uppercase font-bold">{t.meta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#005049] to-[#003a35]" />
        <div className="blob w-[500px] h-[500px] -top-32 -right-32 bg-[#ffd5a9] opacity-20" />
        <div className="blob blob-2 w-[400px] h-[400px] -bottom-24 -left-24 bg-[#ade8de] opacity-25" />

        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center text-center">
          <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm text-white font-bold rounded-full text-[12px] tracking-widest uppercase mb-6 border border-white/20">
            Ready when you are
          </span>
          <h2 className="font-headline-lg text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-white mb-8 leading-tight">
            Ready to take control of your diabetes?
          </h2>
          <p className="text-white/80 text-[17px] sm:text-[18px] max-w-xl mb-10 leading-relaxed">
            Book a consultation today, or call us directly. We&apos;re available 24/7 for emergencies.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/book" className="bg-white text-primary px-8 py-4 rounded-full text-[16px] sm:text-[18px] font-bold shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group">
              Book an Appointment
              <span className="material-symbols-outlined nudge-caret">arrow_forward</span>
            </Link>
            <a href="tel:+919976379697" className="text-white text-[16px] sm:text-[18px] font-bold bg-white/10 hover:bg-white/15 px-8 py-4 rounded-full backdrop-blur-sm border border-white/20 flex items-center gap-2 transition-all">
              <span className="material-symbols-outlined">call</span>
              +91 99763 79697
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
