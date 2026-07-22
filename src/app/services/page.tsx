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
      'Our well-stocked in-house "KARUNYA PHARMACY" is open 24 hours a day, 7 days a week, dispensing genuine, temperature-controlled insulin, specialty diabetic medications, and daily healthcare essentials. To ensure uninterrupted treatment, we offer a dedicated Doorstep Medicine Delivery service across the region patients can effortlessly order monthly prescription refills via call or WhatsApp (+91 99763 79697 / +91 97974 3280) and receive authentic medicines right at their doorstep.',
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
              From routine outpatient consultations to specialised inpatient programmes and a CMC Vellore EQAS certified laboratory  every part of your care, coordinated in one place.
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

        {/* ===== A. Outpatient (OP) Services ===== */}
        <div id="op-services" className="mt-20 pt-16 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#0D5C75]/10 text-[#0D5C75] text-xs font-bold uppercase tracking-wider mb-3">
                Section A Outpatient Care
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
                Outpatient (OP) Services
              </h2>
              <p className="text-sm text-gray-500 font-medium mt-1">Starting from ₹500 per consultation</p>
            </div>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#422884] hover:bg-[#331e67] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all shrink-0"
            >
              <span>Book OP Slot</span>
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            </Link>
          </div>

          {/* Consultation Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'New Patient Consultation',
                price: '₹500',
                time: '10 min',
                desc: 'First visit, full history, examination and personalised assessment.',
                badge: 'First Visit',
              },
              {
                title: 'Review Consultation',
                price: '₹300',
                time: '5 min',
                desc: 'Brief follow-up for established patients.',
                badge: 'Routine Follow-up',
              },
              {
                title: 'Review Extended',
                price: '₹400',
                time: '10 min',
                desc: 'Follow-up with additional time for multiple concerns.',
                badge: 'Extended Time',
              },
              {
                title: 'Review Detailed',
                price: '₹500',
                time: '15 min',
                desc: 'Comprehensive review of reports and treatment adjustments.',
                badge: 'Detailed Review',
              },
              {
                title: 'Review Comprehensive',
                price: '₹1,000',
                time: '30 min',
                desc: 'In-depth consultation for complex cases, insulin initiation, CGM review.',
                badge: 'Complex Care',
                featured: true,
              },
            ].map((type, i) => (
              <div
                key={i}
                className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between h-full ${type.featured
                  ? 'bg-gradient-to-br from-purple-50/90 via-indigo-50/50 to-cyan-50/40 text-[#0F172A] border-2 border-[#422884]/40 hover:border-[#422884] shadow-md hover:shadow-xl'
                  : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${type.featured
                        ? 'bg-[#422884] text-white shadow-xs'
                        : 'bg-gray-100 text-[#0D5C75]'
                        }`}
                    >
                      {type.badge}
                    </span>
                    <span className={`text-xs font-semibold ${type.featured ? 'text-[#422884] font-bold' : 'text-gray-500'}`}>
                      ⏱ {type.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold mb-2 text-[#0F172A]">
                    {type.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${type.featured ? 'text-gray-700 font-medium' : 'text-gray-600'}`}>
                    {type.desc}
                  </p>
                </div>
                <div className={`pt-4 border-t flex items-center justify-between ${type.featured ? 'border-[#422884]/20' : 'border-gray-100'}`}>
                  <span className={`text-2xl font-black ${type.featured ? 'text-[#422884]' : 'text-[#0D5C75]'}`}>
                    {type.price}
                  </span>
                  <Link
                    href={`/book?type=${encodeURIComponent(type.title)}`}
                    className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${type.featured
                      ? 'bg-[#422884] text-white hover:bg-[#331e67] shadow-md hover:shadow-lg'
                      : 'bg-gray-100 text-[#0F172A] hover:bg-[#422884] hover:text-white'
                      }`}
                  >
                    Select
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* OP Packages Structure Banner */}
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-3xl p-6 sm:p-8">
            <h4 className="text-lg font-extrabold text-[#0F172A] mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0D5C75]">package</span>
              Outpatient Care Packages (Quarterly / Half-yearly / Annual)
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
              Bundled consultations and diagnostic investigations designed for long-term glycemic stability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-gray-200 text-xs shadow-2xs">
                <span className="font-bold text-[#0D5C75] block mb-1">Quarterly Care Package</span>
                <span className="text-gray-600">Includes planned consultations + core investigations.</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-200 text-xs shadow-2xs">
                <span className="font-bold text-[#0D5C75] block mb-1">Half-yearly Care Package</span>
                <span className="text-gray-600">Extended doctor reviews + organ function screening.</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-200 text-xs shadow-2xs">
                <span className="font-bold text-[#0D5C75] block mb-1">Annual Care Package</span>
                <span className="text-gray-600">365-day continuous care + comprehensive annual lab panel.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== B. Inpatient (IP) Services ===== */}
        <div id="ip-services" className="mt-20 pt-16 border-t border-gray-200">
          <div className="mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-[#0D5C75]/10 text-[#0D5C75] text-xs font-bold uppercase tracking-wider mb-3">
              Section B Inpatient Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
              Inpatient (IP) Services &amp; 12-Bed Facility
            </h2>
            <p className="text-sm text-gray-500 font-medium mt-1">
              Dedicated day-care and acute inpatient stabilization facility.
            </p>
          </div>

          {/* 12-Bed Capacity Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#F8FAFC] border border-gray-200 p-6 rounded-3xl text-center">
              <div className="text-3xl font-black text-[#0D5C75]">5 Beds</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Common Ward</div>
            </div>
            <div className="bg-[#F8FAFC] border border-gray-200 p-6 rounded-3xl text-center">
              <div className="text-3xl font-black text-[#0D5C75]">5 Beds</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Individual AC Rooms</div>
            </div>
            <div className="bg-red-50 border border-red-100 p-6 rounded-3xl text-center">
              <div className="text-3xl font-black text-red-600">2 Beds</div>
              <div className="text-xs font-bold text-red-600 uppercase tracking-wider mt-1">24x7 Emergency Beds</div>
            </div>
          </div>

          {/* 6 IP Clinical Programmes */}
          <h3 className="text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0D5C75]">healing</span>
            IP Clinical Programmes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Pain Management in Diabetes',
                desc: 'Specialist care for severe diabetic neuropathic pain and peripheral sensory loss.',
                icon: 'personal_injury',
              },
              {
                title: 'Glycaemic Control Programme',
                desc: 'Intensive inpatient blood sugar stabilisation for acute hyperglycemia.',
                icon: 'monitoring',
              },
              {
                title: 'Pregnancy Diabetes Management',
                desc: 'Inpatient care for gestational diabetes emergencies and fetal protection.',
                icon: 'pregnant_woman',
              },
              {
                title: 'Rejuvenation Package',
                desc: 'Comprehensive metabolic reset programme for chronic fatigue and burnout.',
                icon: 'spa',
              },
              {
                title: 'Diabetic Foot Management',
                desc: 'Inpatient wound care, infection management, and ulcer salvage.',
                icon: 'footprint',
              },
              {
                title: 'Mindfulness Package',
                desc: 'Stress and mental health support in metabolic disease.',
                icon: 'self_improvement',
              },
            ].map((prog, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0D5C75]/10 text-[#0D5C75] flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-2xl">{prog.icon}</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#0F172A] mb-2">{prog.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{prog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== C. Laboratory Services ===== */}
        <div id="lab-services" className="mt-20 pt-16 border-t border-gray-200">
          <div className="mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-[#0D5C75]/10 text-[#0D5C75] text-xs font-bold uppercase tracking-wider mb-3">
              Section C Laboratory Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
              Laboratory Services &amp; Diagnostic Packages
            </h2>
            <p className="text-sm text-gray-500 font-medium mt-1">
              CMC Vellore EQAS Certified · HbA1c by HPLC method using Bio-Rad D10 analyser
            </p>
          </div>

          {/* Lab Quality Banner */}
          <div className="bg-[#0F172A] text-white rounded-3xl p-6 sm:p-8 mb-10 shadow-xl border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-cyan-300 text-3xl">verified</span>
              <div>
                <h4 className="text-lg font-bold text-white">CMC Vellore EQAS Certified Quality Assurance</h4>
                <p className="text-xs text-gray-300">Gold Standard Clinical Laboratory Standards in India</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Our laboratory is certified under the CMC Vellore External Quality Assurance Scheme (EQAS)  a gold standard in clinical laboratory quality assurance in India. HbA1c is measured using the HPLC method on the Bio-Rad D10 analyser the most accurate method available, recommended by the International Federation of Clinical Chemistry (IFCC).
            </p>
          </div>

          {/* 7 Lab Packages */}
          <h3 className="text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0D5C75]">science</span>
            Lab Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Complete Diabetes Care Package',
                desc: 'Comprehensive panel for full diabetes assessment including HbA1c, renal & lipid profiling.',
              },
              {
                title: 'Comprehensive Care Package',
                desc: 'Extended metabolic and multi-organ function panel for advanced complication screening.',
              },
              {
                title: 'Basic Diabetes Package',
                desc: 'Core investigations for routine glycemic monitoring.',
              },
              {
                title: 'Hypertension Package',
                desc: 'Cardiovascular and renal risk assessment panel.',
              },
              {
                title: 'Thyroid Package',
                desc: 'Full thyroid function panel (T3, T4, TSH).',
              },
              {
                title: 'Obesity Package',
                desc: 'Metabolic and hormonal panel for obesity management.',
              },
              {
                title: 'Mindfulness Package',
                desc: 'Stress hormone (cortisol) and related metabolic markers.',
              },
            ].map((pkg, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0D5C75] mb-3" />
                  <h4 className="text-lg font-bold text-[#0F172A] mb-2">{pkg.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{pkg.desc}</p>
                </div>
              </div>
            ))}
          </div>
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
