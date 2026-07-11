'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import QuickBoxes from '@/components/QuickBoxes';

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
      {/* ===== Hero Slider ===== */}
      <Hero />

      {/* ===== Jothydev Style Accreditations Banner ===== */}
      <section className="py-10 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0D5C75] text-white border-b border-white/10">
        <div className="max-w-container-max-width mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#06B6D4]/20 border border-[#06B6D4]/40 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#06B6D4] text-[28px]">verified_user</span>
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-cyan-300">IDF Standard Protocol</span>
                <h3 className="text-base font-bold text-white mt-0.5">IDF Accredited Care Equivalent</h3>
                <p className="text-xs text-gray-300 mt-1">International Diabetes Federation guidelines strictly applied across clinical management.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#E07A5F]/20 border border-[#E07A5F]/40 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#E07A5F] text-[28px]">local_hospital</span>
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-orange-300">Quality Assured</span>
                <h3 className="text-base font-bold text-white mt-0.5">NABH Hospital Safety Standards</h3>
                <p className="text-xs text-gray-300 mt-1">National Accreditation Board safety protocols followed for outpatient &amp; inpatient care.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-emerald-400 text-[28px]">biotech</span>
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-300">Diagnostic Gold Standard</span>
                <h3 className="text-base font-bold text-white mt-0.5">CMC Vellore EQAS Certified</h3>
                <p className="text-xs text-gray-300 mt-1">External Quality Assurance Scheme verified laboratory ensuring 99.4% assay accuracy.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== Quick Action Facilities Grid (Collaborative & Everyday Care) ===== */}
      <QuickBoxes />

      {/* ===== About Hospital Section (Jothydev Reference Layout) ===== */}
      <section id="about" className="py-20 bg-[#F8FAFC] border-y border-gray-200">
        <div className="max-w-container-max-width mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Story Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-[#0D5C75]/10 text-[#0D5C75] text-xs font-bold uppercase tracking-wider">
                About Karunya Sugalaya
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight">
                One of the Best Specialist Diabetes Care &amp; Research Hospitals in Kumbakonam, Tamil Nadu
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                For nearly two decades, Karunya Sugalaya Diabetes Research Centre has stood as your trusted partner in diabetes care, offering uninterrupted support across Kumbakonam, Thanjavur, and the Cauvery delta region. Our commitment extends beyond mere treatment to elevating metabolic healthcare standards.
              </p>
              <p className="text-base text-[#475569] leading-relaxed">
                We are dedicated to empowering patients through comprehensive diabetes education, ensuring each individual gains the tools to thrive. Moreover, under the leadership of Dr. K. Sivakumar, MD, our team integrates cutting-edge CGM and tele-management protocols.
              </p>

              {/* Jothydev Style Key Milestones Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Diabetes Tele Medicine System (DTMS® & DiaX.AI)',
                  'Continuous Glucose Monitoring (CGM) Center',
                  'Insulin Pump Therapy & Fitting Unit',
                  '12-Bed Day-Care & Foot Salvage Clinic',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-200 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#0D5C75] shrink-0" />
                    <span className="text-sm font-bold text-[#0F172A]">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0D5C75] hover:bg-[#094356] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <span>Read Full Hospital Story</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <Link 
                  href="/services" 
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-gray-50 text-[#0F172A] border border-gray-300 font-bold text-sm transition-all"
                >
                  <span>Explore All Departments</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Image & Stats */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[1/1] relative">
                <img 
                  src="/assets/photo_2026-06-10_20-48-52.jpg" 
                  alt="Karunya Sugalaya Hospital Leadership" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h4 className="text-xl font-extrabold mt-2">Dr. K. Sivakumar, MD</h4>
                  <p className="text-xs text-gray-200 mt-0.5">Specialist Diabetologist &amp; Key Opinion Leader</p>
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
                  <div className="w-full aspect-[5/3] rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/assets/photo_2026-06-10_20-31-03.jpg" 
                      alt="Doctor using Dialog EMR system" 
                      className="w-full h-full object-cover"
                    />
                  </div>
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

      {/* ===== Community Outreach & Events ===== */}
      <section className="py-24 bg-surface px-margin-mobile md:px-margin-desktop animate-fade-in-up">
        <div className="max-w-container-max-width mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-label-overline text-[12px] font-bold tracking-widest uppercase">Community Outreach</span>
            <h2 className="font-headline-lg text-[32px] sm:text-[40px] font-bold text-on-surface mt-4 mb-6">Serving the Community Beyond Clinic Walls</h2>
            <p className="font-body-lg text-[17px] sm:text-[18px] text-on-surface-variant leading-relaxed">
              From diabetes awareness camps to corporate health initiatives, we actively engage with our community to promote health education and early detection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: '/assets/CampThirupurambiam.jpg',
                title: 'Medical Camp at Thirupurambiam',
                description: 'Free diabetes screening and awareness camp serving rural communities with comprehensive health checkups.',
                category: 'Medical Camp'
              },
              {
                image: '/assets/CampToyotaKumb.jpg',
                title: 'Toyota Kumbakonam Partnership',
                description: 'Corporate health initiative in collaboration with Toyota providing employee wellness screening.',
                category: 'Corporate Partnership'
              },
              {
                image: '/assets/DiabetesAwareness.jpg',
                title: 'Diabetes Awareness Campaign',
                description: 'Community education program focused on prevention, early detection, and lifestyle management.',
                category: 'Awareness Campaign'
              }
            ].map((event, i) => (
              <div key={i} className="soft-card group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[11px] font-bold text-primary tracking-widest uppercase mb-2">{event.category}</div>
                  <h3 className="text-[18px] font-bold text-on-surface mb-3">{event.title}</h3>
                  <p className="text-[15px] text-on-surface-variant leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Hospital Tour & Videos ===== */}
      <section className="py-24 bg-surface px-margin-mobile md:px-margin-desktop animate-fade-in-up">
        <div className="max-w-container-max-width mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-label-overline text-[12px] font-bold tracking-widest uppercase">Hospital Tour</span>
            <h2 className="font-headline-lg text-[32px] sm:text-[40px] font-bold text-on-surface mt-4 mb-6">Experience Karunya Sugalaya</h2>
            <p className="font-body-lg text-[17px] sm:text-[18px] text-on-surface-variant leading-relaxed">
              Take a virtual tour of our facilities and see our commitment to patient care in action.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="soft-card p-4">
              <div className="aspect-video rounded-2xl overflow-hidden bg-black mb-4">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/assets/photo_2026-06-10_20-31-26.jpg"
                >
                  <source src="/assets/video_2026-06-10_20-48-54.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-[20px] font-bold text-on-surface mb-2">Facility Tour</h3>
              <p className="text-[15px] text-on-surface-variant">Explore our modern facilities including consultation rooms, laboratory, and inpatient wards.</p>
            </div>

            <div className="soft-card p-4">
              <div className="aspect-video rounded-2xl overflow-hidden bg-black mb-4">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/assets/photo_2026-06-10_20-48-47.jpg"
                >
                  <source src="/assets/video_2026-06-10_20-48-59.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-[20px] font-bold text-on-surface mb-2">Patient Care Approach</h3>
              <p className="text-[15px] text-on-surface-variant">Learn about our patient-centered approach and comprehensive diabetes management philosophy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Meet Our Leadership & Specialists ===== */}
      <section className="py-24 warm-mesh-soft px-margin-mobile md:px-margin-desktop animate-fade-in-up">
        <div className="max-w-container-max-width mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-label-overline text-[12px] font-bold tracking-widest uppercase">
              Our Leadership &amp; Clinical Specialists
            </span>
            <h2 className="font-headline-lg text-[32px] sm:text-[40px] font-bold text-on-surface mt-4 mb-6">
              Meet Our Expert Diabetologists
            </h2>
            <p className="font-body-lg text-[17px] sm:text-[18px] text-on-surface-variant leading-relaxed">
              Renowned specialists combining over two decades of clinical Diabetology experience with personalized patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
            {/* Doctor 1: Dr. K. Sivakumar */}
            <div className="soft-card p-6 sm:p-8 flex flex-col justify-between border border-[#e8d8bf] bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Photo */}
                <div className="w-full sm:w-44 h-60 sm:h-56 flex-shrink-0 rounded-2xl overflow-hidden shadow-md bg-amber-50">
                  <img
                    src="/assets/dr-sivakumar.jpg"
                    alt="Dr. K. Sivakumar, M.B.B.S, M.D."
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col flex-grow">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    Consultant Physician &amp; Diabetologist
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mt-1">
                    Dr. K. Sivakumar, M.B.B.S, M.D.,
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                    20+ years overall clinical experience specializing in Diabetology, Internal Medicine, and evidence-based metabolic management.
                  </p>

                  {/* Specialties Chips */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#fff1de] text-[#c8731f]">
                      Diabetology
                    </span>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#e8f4f1] text-[#0D5C75]">
                      Internal Medicine
                    </span>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#f0e9dc] text-gray-700">
                      20+ Yrs Exp
                    </span>
                  </div>
                </div>
              </div>

              {/* Schedule & Contact Strip */}
              <div className="mt-6 pt-5 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100">
                  <div className="font-bold text-[#0D5C75] flex items-center gap-1.5 mb-1.5">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    <span>Consulting &amp; Video Hours</span>
                  </div>
                  <div className="text-gray-700 font-medium space-y-1">
                    <div><span className="font-semibold">Clinic:</span> Mon–Fri 9 AM – 4 PM</div>
                    <div><span className="font-semibold text-[#F59E0B]">Saturday:</span> 9 AM – 6 PM</div>
                    <div><span className="font-semibold text-green-700">Online Video:</span> 9 AM – 9 PM</div>
                    <div className="text-[11px] font-bold text-red-600">No Consultation On Sunday</div>
                  </div>
                </div>

                <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100 flex flex-col justify-center space-y-2.5">
                  <a
                    href="tel:+919994360912"
                    className="flex items-center gap-2 font-bold text-[#0F172A] hover:text-[#0D5C75] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#0D5C75]">call</span>
                    <span>(+91) 9994360912</span>
                  </a>
                  <a
                    href="mailto:drksincere@gmail.com"
                    className="flex items-center gap-2 font-medium text-gray-600 hover:text-[#0D5C75] transition-colors break-all"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#0D5C75]">mail</span>
                    <span>drksincere@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Doctor 2: Dr. B. Lakshmi */}
            <div className="soft-card p-6 sm:p-8 flex flex-col justify-between border border-[#e8d8bf] bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Photo */}
                <div className="w-full sm:w-44 h-60 sm:h-56 flex-shrink-0 rounded-2xl overflow-hidden shadow-md bg-yellow-50">
                  <img
                    src="/assets/dr-lakshmi.jpg"
                    alt="Dr. B. Lakshmi, M.B.B.S, D. Diab."
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col flex-grow">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    Consultant Diabetologist
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mt-1">
                    Dr. B. Lakshmi, M.B.B.S, D. Diab.,
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                    Specialist in gestational diabetes, comprehensive insulin therapy, preventive diabetic foot care, and holistic patient-first care.
                  </p>

                  {/* Specialties Chips */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#fff1de] text-[#c8731f]">
                      Diabetology
                    </span>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#e8f4f1] text-[#0D5C75]">
                      Gestational Care
                    </span>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#f0e9dc] text-gray-700">
                      Preventive Foot Care
                    </span>
                  </div>
                </div>
              </div>

              {/* Schedule & Contact Strip */}
              <div className="mt-6 pt-5 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100">
                  <div className="font-bold text-[#0D5C75] flex items-center gap-1.5 mb-1.5">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    <span>Consulting &amp; Video Hours</span>
                  </div>
                  <div className="text-gray-700 font-medium space-y-1">
                    <div><span className="font-semibold">Mon–Sat:</span> 10 AM – 2 PM</div>
                    <div><span className="font-semibold">Evening:</span> 6 PM – 8 PM</div>
                    <div><span className="font-semibold text-green-700">Online Video:</span> 11 AM – 8 PM</div>
                    <div className="text-[11px] font-bold text-red-600">No Consultation On Sunday</div>
                  </div>
                </div>

                <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100 flex flex-col justify-center space-y-2.5">
                  <a
                    href="tel:+919791906781"
                    className="flex items-center gap-2 font-bold text-[#0F172A] hover:text-[#0D5C75] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#0D5C75]">call</span>
                    <span>(+91) 9791906781</span>
                  </a>
                  <a
                    href="mailto:lakshmi@karunyasugalaya.co.in"
                    className="flex items-center gap-2 font-medium text-gray-600 hover:text-[#0D5C75] transition-colors break-all"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#0D5C75]">mail</span>
                    <span>lakshmi@karunyasugalaya.co.in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/team"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold text-[16px] sm:text-[18px] hover:-translate-y-1 transition-transform px-8 py-4 rounded-full shadow-md border border-[#e8d8bf] group"
            >
              View full team profiles &amp; detailed schedules
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
                <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden mb-6 relative">
                  <img 
                    src={i === 0 ? '/assets/photo_2026-06-10_20-48-51.jpg' : i === 1 ? '/assets/photo_2026-06-10_20-48-52.jpg' : '/assets/photo_2026-06-10_20-49-08.jpg'}
                    alt={`Patient ${t.name}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="quote-mark mb-2">&ldquo;</div>
                <p className="text-[16px] text-on-surface italic mb-6 flex-grow leading-relaxed">{t.quote}</p>
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
