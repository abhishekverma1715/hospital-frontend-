'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import QuickBoxes from '@/components/QuickBoxes';
import FinalCTA from '@/components/FinalCTA';

function AutoPlayTourVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  }, [inView]);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-[200px] sm:max-w-[220px] aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-950 shadow-2xl border-4 sm:border-[6px] border-gray-100 shrink-0 group">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        className="w-full h-full object-cover bg-black"
      >
        {inView && <source src={src} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>

      {/* Floating Mute/Speaker Toggle Button */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        className="absolute bottom-3 right-3 z-10 w-10 h-10 rounded-full bg-black/75 hover:bg-[#0D5C75] backdrop-blur-md text-white flex items-center justify-center border border-white/20 shadow-lg transition-all duration-300 group-hover:scale-110"
      >
        <span className="material-symbols-outlined text-[20px]">
          {isMuted ? 'volume_off' : 'volume_up'}
        </span>
      </button>

      {/* Subtle Live Badge */}
      <div className="absolute top-3 left-3 z-10 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-white text-[10px] font-bold border border-white/15">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          Live Tour
        </span>
      </div>
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
      {/* ===== Hero Slider ===== */}
      <Hero />

      {/* ===== Jothydev Style Accreditations Banner ===== */}
      <section className="py-14 bg-smoke3 border-b border-gray-200">
        <div className="max-w-container-max-width mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

            <div className="flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-[#0084FF]/10 border border-[#0084FF]/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#0084FF] text-[32px]">verified_user</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-[#0F172A]">IDF  Care Equivalent</h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">International Diabetes Federation guidelines strictly applied across clinical management.</p>
                <Link href="/about" className="line-btn mt-3 text-sm">
                  <span>Know More</span>
                  <span className="text-base">→</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-[#E07A5F]/10 border border-[#E07A5F]/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#E07A5F] text-[32px]">local_hospital</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-[#0F172A]">NABH Hospital Safety Standards</h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">National Accreditation Board safety protocols followed for outpatient &amp; inpatient care.</p>
                <Link href="/about" className="line-btn mt-3 text-sm">
                  <span>Know More</span>
                  <span className="text-base">→</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-emerald-600 text-[32px]">biotech</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-[#0F172A]">CMC Vellore EQAS Certified</h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">External Quality Assurance Scheme verified laboratory ensuring 99.4% assay accuracy.</p>
                <Link href="/research" className="line-btn mt-3 text-sm">
                  <span>Know More</span>
                  <span className="text-base">→</span>
                </Link>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

            {/* Left Story Content */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#0D5C75]/10 text-[#0D5C75] text-xs font-bold uppercase tracking-wider">
                  About Karunya Sugalaya
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mt-3">
                  One of the Best Specialist Diabetes Care &amp; Research Hospitals in Kumbakonam, Tamil Nadu
                </h2>
              </div>
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

            {/* Right Visual Image & Stats (Fully Responsive across Mobile, Tablet, Laptop & Desktop) */}
            <div className="lg:col-span-5 relative flex flex-col w-full">
              <div className="w-full rounded-3xl sm:rounded-[32px] overflow-hidden shadow-2xl border-4 sm:border-[6px] border-white aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full min-h-[340px] sm:min-h-[440px] lg:min-h-[480px] relative group flex flex-col justify-end">
                <Image
                  src="/assets/assets/hospital1.jpeg"
                  alt="Karunya Sugalaya Hospital Leadership"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  loading="lazy"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent" />

                {/* Top Excellence Floating Badge (Responsive on Mobile, Tablet & Desktop) */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 sm:gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md text-[#0F172A] shadow-xl border border-white/60 z-10">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#0D5C75]/10 text-[#0D5C75] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[16px] sm:text-[18px]">verified</span>
                  </div>
                  <div>
                    <p className="text-[9px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#0D5C75] leading-none">Excellence</p>
                    <p className="text-[11px] sm:text-xs font-bold text-[#0F172A] mt-0.5 sm:mt-1 leading-none">25+ Years in Care</p>
                  </div>
                </div>

                <div className="relative z-10 p-5 sm:p-8 text-white">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#0D5C75]/90 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold mb-2.5 sm:mb-3 border border-white/15 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Medical Leadership &amp; Research
                  </div>
                  <h4 className="text-lg sm:text-2xl font-extrabold tracking-tight">Dr. K. Sivakumar, MD</h4>
                  <p className="text-xs sm:text-sm text-gray-200 mt-1 font-medium leading-relaxed">
                    Specialist Diabetologist &amp; Key Opinion Leader
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== Why Karunya Sugalaya: Advanced Diagnostic Infrastructure ===== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#F8FAFC] to-white border-b border-gray-200">
        <div className="max-w-container-max-width mx-auto">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#0D5C75]/10 text-[#0D5C75] text-xs font-bold uppercase tracking-widest mb-4">
              Diagnostic Infrastructure &amp; Technology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] leading-tight mb-5">
              State-of-the-Art Medical Devices.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We equip our hospital and research center with world-class diagnostic equipment—ensuring every clinical decision is powered by rapid, high-precision laboratory and physiological data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: '/assets/assets/image11.png',
                category: 'Gold Standard Diabetes Testing',
                title: 'Bio-Rad D-10 HPLC System',
                desc: 'International gold-standard High-Performance Liquid Chromatography (HPLC) system delivering unmatched precision and accuracy for HbA1c and hemoglobin monitoring.',
                icon: 'science',
              },
              {
                image: '/assets/assets/image9.png',
                category: 'Biochemistry & Immunoassay',
                title: 'TurboChem 100 & Finecare Suite',
                desc: 'Fully automated biochemistry and fluorescence immunoassay system for rapid lipid profiling, kidney/liver function tests, and microalbuminuria screening.',
                icon: 'biotech',
              },
              {
                image: '/assets/assets/image17.png',
                category: 'Ophthalmic Screening',
                title: 'Forus Digital Retinal Camera',
                desc: 'Non-mydriatic 3D digital fundus imaging system capturing crystal-clear retinal scans to detect and prevent early-stage diabetic retinopathy and vision loss.',
                icon: 'visibility',
              },
              {
                image: '/assets/assets/image16.png',
                category: 'Diabetic Foot Salvage',
                title: 'Vascular Doppler & Biothesiometer',
                desc: 'Specialized neuro-vascular diagnostic unit testing peripheral vibration thresholds and arterial blood circulation to protect against diabetic foot ulcers.',
                icon: 'footprint',
              },
              {
                image: '/assets/assets/image13.png',
                category: 'Cardiovascular Profiling',
                title: 'Bionet CardioCare Digital ECG',
                desc: 'Multi-channel computerized electrocardiograph providing real-time rhythm and waveform analysis to preemptively manage diabetic cardiovascular risks.',
                icon: 'cardiology',
              },
              {
                image: '/assets/assets/image8.png',
                category: 'Hematology & Microscopy',
                title: 'Swelab Alfa Hematology Unit',
                desc: 'Automated cellular hematology analyzer paired with digital microscopy for comprehensive complete blood counts, infection screening, and cellular pathology.',
                icon: 'bloodtype',
              },
              {
                image: '/assets/assets/image10.png',
                category: 'Electrolyte & Blood Gas',
                title: 'Ion-Selective Electrolyte Analyzer',
                desc: 'Precision electrolyte and metabolic profile monitor ensuring instant detection of sodium, potassium, and chloride balances during critical diabetic care.',
                icon: 'monitor_heart',
              },
              {
                image: '/assets/assets/image14.png',
                category: 'Metabolic Composition',
                title: 'Digital Body Composition Unit',
                desc: 'Advanced multi-frequency segmental impedance system accurately mapping visceral fat, muscle mass, and cellular hydration to guide metabolic therapy.',
                icon: 'scale',
              },
              {
                image: '/assets/assets/image12.png',
                category: 'Sample Processing',
                title: 'High-Speed Precision Centrifuge',
                desc: 'High-speed clinical centrifuge ensuring pristine serum and plasma separation for high-sensitivity laboratory investigations and research trials.',
                icon: 'change_circle',
              },
            ].map((device, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#0D5C75]/30 transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-gray-900/5">
                  <Image
                    src={device.image}
                    alt={device.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Category Badge overlay on image */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0D5C75] text-[11px] font-bold shadow-md border border-white/60">
                      <span className="material-symbols-outlined text-[14px]">{device.icon}</span>
                      {device.category}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  <h3 className="text-xl font-extrabold text-[#0F172A] mb-2.5 group-hover:text-[#0D5C75] transition-colors duration-300">
                    {device.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
                    {device.desc}
                  </p>

                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Karunya Sugalaya Labs</span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0D5C75] group-hover:translate-x-1 transition-transform">
                      <span>Verified Precision</span>
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Banner */}

        </div>
      </section>

      {/* ===== Risk Calculator ===== */}
      <section id="calculator" className="py-14 sm:py-16 bg-[#F8FAFC] border-b border-gray-200 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#fff1de] text-[#c8731f] font-bold rounded-full text-[12px] tracking-widest uppercase mb-4 border border-[#e8d8bf]">Free Health Tool</span>
            <h2 className="font-headline-md text-2xl sm:text-[32px] lg:text-[40px] font-bold text-on-surface mb-4">Check your diabetes risk.</h2>
            <p className="text-sm sm:text-[17px] lg:text-[18px] text-on-surface-variant max-w-2xl mx-auto">Answer 5 quick questions. Get your personal risk level instantly — no registration, no data collected.</p>
          </div>

          <div className="bg-white p-4 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-[32px] shadow-[0_12px_40px_rgba(120,90,50,0.1)] border border-[#e8d8bf]/60 relative overflow-hidden">
            {calculatorStep <= 5 && (
              <div className="absolute top-0 left-0 w-full h-2 bg-[#f0e9dc]">
                <div className="h-full bg-gradient-to-r from-[#c8731f] to-primary transition-all duration-500 ease-out" style={{ width: `${(calculatorStep / 5) * 100}%` }} />
              </div>
            )}

            <div className="min-h-[300px] sm:min-h-[400px] flex flex-col justify-center">
              {[
                {
                  step: 1, q: 'What is your age?', opts: [
                    { label: 'Below 30', icon: 'child_care', score: 0 },
                    { label: '30 – 45', icon: 'person', score: 1 },
                    { label: '45 – 60', icon: 'group', score: 2 },
                    { label: 'Above 60', icon: 'elderly', score: 3 },
                  ], cols: 'sm:grid-cols-2'
                },
                {
                  step: 2, q: 'Does diabetes run in your family?', opts: [
                    { label: 'No family history', icon: 'sentiment_satisfied', score: 0 },
                    { label: 'One parent or sibling', icon: 'family_restroom', score: 1 },
                    { label: 'Both parents', icon: 'diversity_3', score: 2 },
                  ], cols: 'sm:grid-cols-3'
                },
                {
                  step: 3, q: 'How would you describe your weight?', opts: [
                    { label: 'Normal', icon: 'accessibility_new', score: 0 },
                    { label: 'Slightly overweight', icon: 'fitness_center', score: 1 },
                    { label: 'Overweight or obese', icon: 'monitor_weight', score: 2 },
                  ], cols: 'sm:grid-cols-3'
                },
                {
                  step: 4, q: 'How physically active are you?', opts: [
                    { label: 'Exercise regularly', icon: 'directions_run', score: 0 },
                    { label: 'Light activity', icon: 'directions_walk', score: 1 },
                    { label: 'Mostly sedentary', icon: 'chair', score: 2 },
                  ], cols: 'sm:grid-cols-3'
                },
                {
                  step: 5, q: 'Any recent symptoms?', opts: [
                    { label: 'None', icon: 'check_circle', score: 0 },
                    { label: 'Fatigue or frequent thirst', icon: 'local_drink', score: 1 },
                    { label: 'Multiple symptoms', icon: 'warning', score: 2 },
                  ], cols: 'sm:grid-cols-3'
                },
              ].map(s => calculatorStep === s.step && (
                <div key={s.step} className="animate-fade-in-up visible">
                  <div className="flex items-center justify-center mb-8 gap-3 flex-wrap">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-[20px] shadow-lg shadow-primary/30">{s.step}</div>
                    <h3 className="font-headline-sm text-lg sm:text-[22px] md:text-[28px] font-bold text-on-surface text-center">{s.q}</h3>
                  </div>
                  <div className={`grid grid-cols-1 ${s.cols} gap-4 max-w-4xl mx-auto`}>
                    {s.opts.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleCalcAnswer(option.score)}
                        className="bg-[#fbf7f1] border-2 border-[#e8d8bf] hover:border-primary hover:bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col items-center gap-3 sm:gap-4 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 min-h-[100px] sm:min-h-[140px] justify-center"
                      >
                        <span className="material-symbols-outlined text-[32px] sm:text-[40px] text-[#c8731f] group-hover:text-primary group-hover:scale-110 transition-all">{option.icon}</span>
                        <span className="text-sm sm:text-[16px] md:text-[18px] font-bold text-on-surface text-center">{option.label}</span>
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
                  <h3 className="font-headline-lg text-xl sm:text-[28px] lg:text-[32px] font-bold text-on-surface mb-4">Your Risk Level: <span className={riskResult.class}>{riskResult.level}</span></h3>
                  <p className="font-body-md text-sm sm:text-[16px] lg:text-[18px] text-on-surface-variant mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed p-4 sm:p-6 bg-[#fbf7f1] rounded-xl sm:rounded-2xl border border-[#e8d8bf]">{riskResult.message}</p>
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    <Link href="/book" className="bg-primary hover:bg-primary-container text-on-primary px-5 sm:px-8 py-2.5 sm:py-4 rounded-full text-xs sm:text-[16px] font-bold shadow-lg shadow-primary/30 inline-flex items-center gap-2 hover:-translate-y-1 transition-all">
                      Book Appointment
                      <span className="material-symbols-outlined text-[16px] sm:text-[20px]">arrow_forward</span>
                    </Link>
                    <button onClick={retakeCalc} className="border border-[#e8d8bf] bg-white text-primary px-5 sm:px-8 py-2.5 sm:py-4 rounded-full text-xs sm:text-[16px] font-bold hover:bg-[#fbf7f1] transition-all inline-flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] sm:text-[20px]">refresh</span> Retake Assessment
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Community Outreach & Events ===== */}
      <section className="py-14 sm:py-16 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="max-w-container-max-width mx-auto">
          <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
            <span className="text-primary font-label-overline text-[12px] font-bold tracking-widest uppercase">Community Outreach</span>
            <h2 className="font-headline-lg text-2xl sm:text-[32px] lg:text-[40px] font-bold text-on-surface mt-4 mb-6">Serving the Community Beyond Clinic Walls</h2>
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
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
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
      <section id="tour" className="py-16 sm:py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] border-b border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-container-max-width mx-auto">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#0D5C75]/10 text-[#0D5C75] text-xs font-bold uppercase tracking-widest mb-4">
              Virtual Walkthrough
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] leading-tight mb-5">
              Experience Karunya Sugalaya.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Take a virtual tour inside our Kumbakonam hospital. Witness our high-tech diagnostic laboratory, dedicated consultation suites, and patient-first clinical workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Video Card 1 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 group">
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D5C75]/10 text-[#0D5C75] text-xs font-bold">
                    <span className="material-symbols-outlined text-[16px]">play_circle</span>
                    Facility &amp; Lab Tour
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-2.5 group-hover:text-[#0D5C75] transition-colors">
                  Hospital Walkthrough &amp; Diagnostic Center
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Step inside Karunya Sugalaya Diabetes Research Centre. Experience our welcoming reception, specialized consultation rooms, EMR tracking, and automated diagnostics.
                </p>
              </div>

              {/* Compact AutoPlay Video Container */}
              <AutoPlayTourVideo src="/assets/assets/WhatsApp%20Video%202026-07-16%20at%201.33.40%20PM.mp4" />
            </div>

            {/* Video Card 2 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 group">
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D5C75]/10 text-[#0D5C75] text-xs font-bold">
                    <span className="material-symbols-outlined text-[16px]">biotech</span>
                    Clinical Workflow
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-2.5 group-hover:text-[#0D5C75] transition-colors">
                  Clinical Care, Lab &amp; Patient Experience
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  See our dedicated clinical specialists in action—from precision sample collection and high-speed centrifugation (TurboChem 100) to non-invasive digital retinopathy (Forus Classic).
                </p>
              </div>

              {/* Compact AutoPlay Video Container */}
              <AutoPlayTourVideo src="/assets/assets/WhatsApp%20Video%202026-07-16%20at%201.33.40%20PM%20(1).mp4" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Meet Our Leadership & Specialists ===== */}
      <section className="py-14 sm:py-16 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="max-w-container-max-width mx-auto">
          <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
            <span className="text-primary font-label-overline text-[12px] font-bold tracking-widest uppercase">
              Our Leadership &amp; Clinical Specialists
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-[32px] lg:text-[40px] font-bold text-on-surface mt-4 mb-6">
              Meet Our Expert Diabetologists
            </h2>
            <p className="font-body-lg text-[17px] sm:text-[18px] text-on-surface-variant leading-relaxed">
              Renowned specialists combining over two decades of clinical Diabetology experience with personalized patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
            {/* Doctor 1: Dr. K. Sivakumar */}
            <div className="soft-card p-6 sm:p-8 flex flex-col justify-between border border-[#e8d8bf] bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                {/* Photo */}
                <div className="w-full max-w-[240px] sm:max-w-none sm:w-40 md:w-44 h-64 sm:h-56 mx-auto sm:mx-0 flex-shrink-0 rounded-2xl overflow-hidden shadow-md bg-amber-50 relative">
                  <Image
                    src="/assets/dr-sivakumar-updated.jpg"
                    alt="Dr. K. Sivakumar, M.B.B.S, M.D."
                    fill
                    sizes="(max-width: 640px) 240px, 180px"
                    loading="lazy"
                    className="object-cover object-top"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col flex-grow text-center sm:text-left">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    Consultant Physician &amp; Diabetologist
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mt-1 break-words">
                    Dr. K. Sivakumar, M.B.B.S, M.D.,
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed text-justify sm:text-left break-words">
                    20+ years overall clinical experience specializing in Diabetology, Internal Medicine, and evidence-based metabolic management.
                  </p>

                  {/* Specialties Chips */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
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
                  <div className="font-bold text-[#0D5C75] flex items-center justify-center sm:justify-start gap-1.5 mb-1.5">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    <span>Consulting &amp; Video Hours</span>
                  </div>
                  <div className="text-gray-700 font-medium space-y-1 text-center sm:text-left">
                    <div><span className="font-semibold">Clinic:</span> Mon–Fri 9 AM – 4 PM</div>
                    <div><span className="font-semibold text-[#F59E0B]">Saturday:</span> 9 AM – 6 PM</div>
                    <div><span className="font-semibold text-green-700">Online Video:</span> 9 AM – 9 PM</div>
                    <div className="text-[11px] font-bold text-red-600">No Consultation On Sunday</div>
                  </div>
                </div>

                <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100 flex flex-col justify-center space-y-2.5">
                  <a
                    href="tel:+919994360912"
                    className="flex items-center justify-center sm:justify-start gap-2 font-bold text-[#0F172A] hover:text-[#0D5C75] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#0D5C75]">call</span>
                    <span>(+91) 9994360912</span>
                  </a>
                  <a
                    href="mailto:drksincere@gmail.com"
                    className="flex items-center justify-center sm:justify-start gap-2 font-medium text-gray-600 hover:text-[#0D5C75] transition-colors break-all"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#0D5C75]">mail</span>
                    <span>drksincere@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Doctor 2: Dr. B. Lakshmi */}
            <div className="soft-card p-6 sm:p-8 flex flex-col justify-between border border-[#e8d8bf] bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                {/* Photo */}
                <div className="w-full max-w-[240px] sm:max-w-none sm:w-40 md:w-44 h-64 sm:h-56 mx-auto sm:mx-0 flex-shrink-0 rounded-2xl overflow-hidden shadow-md bg-yellow-50 relative">
                  <Image
                    src="/assets/dr-lakshmi.jpg"
                    alt="Dr. B. Lakshmi, M.B.B.S, D. Diab."
                    fill
                    sizes="(max-width: 640px) 240px, 180px"
                    loading="lazy"
                    className="object-cover object-top"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col flex-grow text-center sm:text-left">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    Consultant Diabetologist
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mt-1 break-words">
                    Dr. B. Lakshmi, M.B.B.S, D. Diab.,
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed text-justify sm:text-left break-words">
                    Specialist in gestational diabetes, comprehensive insulin therapy, preventive diabetic foot care, and holistic patient-first care.
                  </p>

                  {/* Specialties Chips */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
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
                  <div className="font-bold text-[#0D5C75] flex items-center justify-center sm:justify-start gap-1.5 mb-1.5">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    <span>Consulting &amp; Video Hours</span>
                  </div>
                  <div className="text-gray-700 font-medium space-y-1 text-center sm:text-left">
                    <div><span className="font-semibold">Mon–Sat:</span> 10 AM – 2 PM</div>
                    <div><span className="font-semibold">Evening:</span> 6 PM – 8 PM</div>
                    <div><span className="font-semibold text-green-700">Online Video:</span> 11 AM – 8 PM</div>
                    <div className="text-[11px] font-bold text-red-600">No Consultation On Sunday</div>
                  </div>
                </div>

                <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100 flex flex-col justify-center space-y-2.5">
                  <a
                    href="tel:+919791906781"
                    className="flex items-center justify-center sm:justify-start gap-2 font-bold text-[#0F172A] hover:text-[#0D5C75] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#0D5C75]">call</span>
                    <span>(+91) 9791906781</span>
                  </a>
                  <a
                    href="mailto:lakshmi@karunyasugalaya.co.in"
                    className="flex items-center justify-center sm:justify-start gap-2 font-medium text-gray-600 hover:text-[#0D5C75] transition-colors break-all"
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
      <section className="py-14 sm:py-16 bg-[#F8FAFC] border-b border-gray-200 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="max-w-container-max-width mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-primary font-label-overline text-[12px] font-bold tracking-widest uppercase">Patient Stories</span>
            <h2 className="font-headline-lg text-2xl sm:text-[32px] lg:text-[40px] font-bold text-on-surface mt-4 mb-6">What our patients say.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {[
              { quote: 'My HbA1c was 11.4 when I first came. Six months later it was 6.8. Dr. Sivakumar explained every step — why we were changing the medicine, what the numbers meant, what I should eat. For the first time in years, I understood my own condition.', name: 'Murugesan R.', meta: 'Patient since 2022 · Kumbakonam' },
              { quote: 'இந்த மருத்துவமனையில் தமிழில் முழுமையாக பேசி புரிந்துகொள்ள முடிகிறது. டாக்டர் லட்சுமி என்னோட சர்க்கரை மட்டுமில்லாம என்னோட மொத்த உடல்நலத்தையும் கவனிக்கிறாங்க. RITAM program என் வாழ்க்கையை மாத்துச்சு.', name: 'Vijayalakshmi S.', meta: 'Patient since 2021 · Papanasam' },
              { quote: 'I came in for a routine review and the doctor flagged early kidney changes I had no symptoms of. That early detection changed my treatment completely. The digital records meant every doctor I saw had my full history.', name: 'Karthikeyan P.', meta: 'Patient since 2023 · Thanjavur' },
            ].map((t, i) => (
              <div key={i} className="soft-card p-6 sm:p-8 md:p-10 flex flex-col h-full justify-between">
                <div>
                  <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 relative shrink-0">
                    <Image
                      src={i === 0 ? '/assets/photo_2026-06-10_20-48-51.jpg' : i === 1 ? '/assets/photo_2026-06-10_20-48-52.jpg' : '/assets/photo_2026-06-10_20-49-08.jpg'}
                      alt={`Patient ${t.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                  {/* Text Wrapper with Background Quote Symbol */}
                  <div className="relative mb-6 pt-2">
                    {/* Background Quote Symbol behind text (`z-0`) */}
                    <div
                      className="absolute -top-4 -left-2 text-[120px] sm:text-[140px] font-serif leading-none select-none pointer-events-none text-[#0D5C75] opacity-[0.09] z-0"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </div>
                    {/* Paragraph (`relative z-10`) */}
                    <p className="relative z-10 text-sm sm:text-[16px] text-on-surface italic leading-relaxed font-medium">
                      {t.quote}
                    </p>
                  </div>
                </div>
                <div className="border-t border-[#e8d8bf] pt-6 flex items-center gap-3 shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#fff1de] flex items-center justify-center text-[#c8731f] font-extrabold text-[18px] shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-on-surface leading-tight">{t.name}</div>
                    <div className="text-[11px] text-on-surface-variant tracking-wider uppercase font-bold mt-0.5">{t.meta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Final CTA Section with Doctor Consultation Background ===== */}
      <FinalCTA />
    </>
  );
}
