import React from 'react';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Diabetes Care Services & Packages — Karunya Sugalaya, Kumbakonam',
  description: 'OP consultations, IP care, CMC Vellore certified laboratory, HPLC HbA1c, obesity clinic with body composition analysis. RITAM 360 programme for women.',
};

interface Service {
  id: number;
  name: string;
  description: string;
  icon: string;
  image: string;
}

async function getServices(): Promise<Service[]> {
  try {
    const res = await fetch(`${process.env.API_URL || 'http://localhost:5000'}/api/services`, { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

const HIGHLIGHTS = [
  { icon: 'verified', label: 'CMC Vellore EQAS certified lab' },
  { icon: 'bed', label: '12-bed specialist day care' },
  { icon: 'memory', label: 'AI-assisted clinical decisions' },
];

const DEFAULT_SERVICES: Service[] = [
  {
    id: 1,
    name: 'Diabetes Speciality Outpatient Clinic',
    description: 'Comprehensive evaluation, risk stratification, personalized glycemic control, and evidence-based metabolic therapy led by senior consultant diabetologists.',
    icon: 'medical_services',
    image: '/assets/photo_2026-06-10_20-48-52.jpg',
  },
  {
    id: 2,
    name: 'Continuous Glucose Monitoring (CGM) & Insulin Pump Center',
    description: 'Real-time ambulatory 14-day continuous glucose monitoring combined with sensor-augmented insulin pump fitting and continuous patient training.',
    icon: 'devices_wearables',
    image: './images/continuous-glucose-monitor.jpeg',
  },
  {
    id: 3,
    name: 'Teleconsultation & Remote Diabetes Management (DiaX.AI)',
    description: 'Virtual consultations with our multidisciplinary team of diabetologists, diabetes educators, nutritionists, and clinical pharmacists across Tamil Nadu.',
    icon: 'video_chat',
    image: './images/Remotediabetes.jpeg',
  },
  {
    id: 4,
    name: 'Diabetic Foot Salvage & Neuropathy Clinic',
    description: 'Advanced biothesiometry, Doppler vascular profiling, podiatry assessments, customized footwear prescription, and wound salvage.',
    icon: 'footprint',
    image: './images/DiabeticFootCare-640w.webp',
  },
  {
    id: 5,
    name: 'CMC Vellore EQAS Certified Diagnostic Laboratory',
    description: 'Gold-standard HPLC HbA1c testing, complete renal profile, microalbuminuria screening, lipid panel, and automated digital reporting.',
    icon: 'biotech',
    image: './images/images.jpeg',
  },
  {
    id: 6,
    name: 'Diabetic Retinopathy & Fundus Screening',
    description: 'High-resolution retinal photography and early detection of microvascular eye changes to prevent vision loss.',
    icon: 'visibility',
    image: './images/Optomed_edited-withhospitalbg-lights.webp',
  },
  {
    id: 7,
    name: 'Obesity & Metabolic Health Clinic',
    description: 'Body composition analysis, precision metabolic profiling, personalized weight reduction programs, and medical nutrition therapy.',
    icon: 'monitor_weight',
    image: './images/ObesityProfileTest.webp',
  },
  {
    id: 8,
    name: 'Inpatient 12-Bed Specialist Day-Care Unit',
    description: 'Air-conditioned individual rooms with continuous glucose monitoring, intravenous insulin infusion protocols, and multidisciplinary nursing support.',
    icon: 'bed',
    image: './images/types-of-bed-accommodation.jpg',
  },
];

export default async function ServicesPage() {
  let services = await getServices();
  if (!services || services.length === 0) {
    services = DEFAULT_SERVICES;
  }

  return (
    <>
      {/* ===== Hero with Doctor Consultation Background ===== */}
      <section
        className="relative overflow-hidden py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center md:bg-right text-white"
        style={{ backgroundImage: "url('/images/services-hero-bg.jpg')" }}
      >
        {/* Gradient Overlays for optimal readability on left without obscuring doctor image on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/85 to-[#0F172A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />

        <div className="max-w-container-max-width mx-auto relative z-10">
          <div className="max-w-2xl text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 backdrop-blur-md text-cyan-300 font-bold rounded-full text-xs tracking-widest uppercase mb-4 border border-white/15 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
              Our Services
            </span>
            <h1 className="font-display-lg text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] font-extrabold tracking-tight text-white mb-4 drop-shadow-sm">
              Comprehensive diabetes care, under one roof.
            </h1>
            <p className="font-body-lg text-base sm:text-lg text-gray-200 leading-relaxed">
              From routine outpatient consultations to specialised inpatient programmes and a CMC Vellore EQAS certified laboratory — every part of your care, coordinated in one place.
            </p>

            <div className="flex flex-wrap justify-start gap-2.5 mt-6">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.label}
                  className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs sm:text-sm font-semibold text-white border border-white/20"
                >
                  <span className="material-symbols-outlined text-cyan-300 text-[18px]">{h.icon}</span>
                  {h.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Service rows ===== */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-container-max-width mx-auto">
        <div className="flex flex-col gap-12 md:gap-16">
          {services.map((service, idx) => {
            const flipped = idx % 2 === 1;
            return (
              <div key={service.id} className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Visual */}
                <div className={flipped ? 'lg:order-2' : ''}>
                  {service.image ? (
                    <div className="relative rounded-[28px] overflow-hidden border border-[#e8d8bf] shadow-[0_16px_48px_rgba(120,90,50,0.14)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={service.image} alt={service.name} className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] object-cover" />
                    </div>
                  ) : (
                    <div className="relative rounded-[28px] h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff1de] via-[#fbf7f1] to-[#e8f4f1] border border-[#e8d8bf]">
                      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
                      <span className="material-symbols-outlined text-[110px] text-primary/70 relative z-10">
                        {service.icon || 'medical_services'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Text */}
                <div className={flipped ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="icon-chip bg-primary text-white w-14 h-14 rounded-2xl">
                      <span className="material-symbols-outlined text-[28px]">{service.icon || 'medical_services'}</span>
                    </div>
                    <span className="font-display-lg text-[20px] font-extrabold text-[#e8d8bf]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h2 className="font-headline-lg text-xl sm:text-2xl md:text-[28px] lg:text-[34px] font-bold text-on-surface mb-4 leading-tight">
                    {service.name}
                  </h2>
                  <p className="font-body-lg text-[17px] text-on-surface-variant leading-relaxed whitespace-pre-line">
                    {service.description}
                  </p>

                  <Link
                    href="/book"
                    className="group inline-flex items-center gap-2 mt-7 text-primary font-bold text-[15px] hover:-translate-y-0.5 transition-transform"
                  >
                    Enquire or book this service
                    <span className="material-symbols-outlined text-[18px] nudge-caret">arrow_forward</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <FinalCTA />
      {/* <section className="py-24 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#005049] to-[#003a35]" />
        <div className="blob w-[500px] h-[500px] -top-32 -right-32 bg-[#ffd5a9] opacity-20" />
        <div className="blob blob-2 w-[400px] h-[400px] -bottom-24 -left-24 bg-[#ade8de] opacity-25" />

        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center text-center">
          <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm text-white font-bold rounded-full text-[12px] tracking-widest uppercase mb-6 border border-white/20">
            Ready when you are
          </span>
          <h2 className="font-headline-lg text-[32px] sm:text-[40px] font-extrabold text-white mb-8 leading-tight">
            Need to schedule a test or consultation?
          </h2>
          <p className="text-white/80 text-[17px] sm:text-[18px] max-w-xl mb-10 leading-relaxed">
            Book online in a minute, or call us directly. We&apos;re available 24/7 for emergencies.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/book"
              className="bg-[#422884] hover:bg-[#331e67] text-white px-8 py-4 rounded-full text-[16px] sm:text-[18px] font-bold shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
            >
              Book an Appointment
              <span className="material-symbols-outlined nudge-caret">arrow_forward</span>
            </Link>
            <a
              href="tel:+919976379697"
              className="text-white text-[16px] sm:text-[18px] font-bold bg-white/10 hover:bg-white/15 px-8 py-4 rounded-full backdrop-blur-sm border border-white/20 flex items-center gap-2 transition-all"
            >
              <span className="material-symbols-outlined">call</span>
              +91 99763 79697
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
}
