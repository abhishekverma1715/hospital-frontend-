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
  { icon: 'clinical_notes', label: '24/7 Outpatient Care' },
  { icon: 'bed', label: '24/7 Inpatient Ward & Day Care' },
  { icon: 'biotech', label: 'CMC Vellore EQAS Hi-Tech Lab' },
  { icon: 'local_pharmacy', label: '24/7 Pharmacy & Door Delivery' },
];

const DEFAULT_SERVICES: Service[] = [
  {
    id: 1,
    name: '24/7 Outpatient Care',
    description:
      'Our outpatient department operates round-the-clock, providing prompt, high-quality consultations with senior diabetologists and specialist physicians whenever you need them. From rapid check-ins at our welcoming reception to thorough clinical assessments and personalized glycemic management protocols, our outpatient services are structured for clinical excellence without prolonged waiting hours.',
    icon: 'clinical_notes',
    image: '/images/outpatient-care.jpg',
  },
  {
    id: 2,
    name: '24/7 Inpatient Care & Specialist Wards',
    description:
      'Our dedicated 24-hour inpatient facility and 12-bed specialty day-care unit offer continuous multidisciplinary care in a calm, hygienic environment. Staffed round-the-clock by trained specialty nurses and resident doctors, we provide bedside diagnostic profiling (including biothesiometry and vascular Doppler assessments), continuous glucose monitoring, and intravenous insulin protocols for acute metabolic stabilization and expedited recovery.',
    icon: 'bed',
    image: '/images/inpatient-care.jpg',
  },
  {
    id: 3,
    name: 'Hi-Tech Lab & Diagnostics',
    description:
      'Operating inside the hospital facility, our CMC Vellore EQAS-certified "ACCURA DIAGNOSTICS" laboratory delivers state-of-the-art precision and rapid reporting. Equipped with fully automated hematology analyzers, advanced clinical chemistry systems, and gold-standard HPLC HbA1c testing equipment, our experienced technologists ensure accurate diagnostic profiling to guide evidence-based treatment decisions and early diabetic complication screening.',
    icon: 'biotech',
    image: '/images/hitech-lab.jpg',
  },
  {
    id: 4,
    name: '24/7 Pharmacy Service & Door Delivery',
    description:
      'Our well-stocked in-house "KARUNYA PHARMACY" is open 24 hours a day, 7 days a week, dispensing genuine, temperature-controlled insulin, specialty diabetic medications, and daily healthcare essentials. To ensure uninterrupted treatment, we offer a dedicated Doorstep Medicine Delivery service across the region—patients can effortlessly order monthly prescription refills via call or WhatsApp (+91 99763 79697 / +91 97974 3280) and receive authentic medicines right at their doorstep.',
    icon: 'local_pharmacy',
    image: '/images/pharmacy-service.jpg',
  },
];

export default async function ServicesPage() {
  // Use our curated services list derived from real hospital capabilities & photo analysis
  const services = DEFAULT_SERVICES;

  return (
    <>
      {/* ===== Hero with Doctor Consultation Background ===== */}
      <section
        className="relative w-full h-[260px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[650px] sm:h-[70svh] lg:h-[75svh] max-h-[800px] flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 bg-cover bg-center md:bg-right text-white"
        style={{ backgroundImage: "url('/images/services-hero-bg.jpg')" }}
      >
        {/* Gradient Overlays for optimal readability on left without obscuring doctor image on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/85 to-[#0F172A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />

        <div className="max-w-container-max-width mx-auto relative z-10 w-full">
          <div className="max-w-2xl text-left">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3.5 sm:py-1 bg-white/10 backdrop-blur-md text-cyan-300 font-bold rounded-full text-[10px] sm:text-xs tracking-widest uppercase mb-2 sm:mb-4 border border-white/15 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
              Our Services
            </span>
            <h1 className="font-display-lg text-xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight sm:leading-[1.15] font-extrabold tracking-tight text-white mb-2 sm:mb-4 drop-shadow-sm">
              Comprehensive diabetes care, under one roof.
            </h1>
            <p className="font-body-lg text-xs sm:text-base lg:text-lg text-gray-200 leading-relaxed line-clamp-2 sm:line-clamp-none">
              From routine outpatient consultations to specialised inpatient programmes and a CMC Vellore EQAS certified laboratory — every part of your care, coordinated in one place.
            </p>

            <div className="hidden sm:flex flex-wrap justify-start gap-2.5 mt-6">
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

                  <h2 className="font-headline-lg text-xl sm:text-2xl md:text-[28px] lg:text-[34px] font-bold text-on-surface mb-4 leading-tight break-words">
                    {service.name}
                  </h2>
                  <p className="font-body-lg text-[17px] text-on-surface-variant leading-relaxed whitespace-pre-line text-justify sm:text-left break-words">
                    {service.description}
                  </p>

                  <Link
                    href="/book"
                    className="group inline-flex items-center gap-2 py-2 mt-5 sm:mt-7 text-primary font-bold text-[15px] hover:-translate-y-0.5 transition-transform"
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
