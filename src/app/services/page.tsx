import React from 'react';
import Link from 'next/link';

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

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden warm-mesh pt-20 md:pt-28 pb-24 px-margin-mobile md:px-margin-desktop text-center">
        <div className="blob w-[400px] h-[400px] -top-28 -left-24 bg-[#ffd5a9]" />
        <div className="blob blob-2 w-[440px] h-[440px] top-6 -right-28 bg-[#ade8de]" />

        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/70 backdrop-blur-sm text-primary font-bold rounded-full text-[12px] tracking-widest uppercase mb-6 border border-[#e8d8bf] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Our Services
          </span>
          <h1 className="font-display-lg text-[40px] sm:text-[52px] lg:text-[56px] leading-[1.05] font-extrabold tracking-tight text-on-surface mb-6">
            Comprehensive diabetes care, under one roof.
          </h1>
          <p className="font-body-lg text-[18px] text-on-surface-variant leading-relaxed">
            From routine outpatient consultations to specialised inpatient programmes and a CMC Vellore EQAS certified laboratory — every part of your care, coordinated in one place.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.label}
                className="bg-white/70 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 text-[14px] font-bold text-on-surface-variant border border-[#e8d8bf]/70"
              >
                <span className="material-symbols-outlined text-primary text-[18px]">{h.icon}</span>
                {h.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Service rows ===== */}
      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
        {services.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20 rounded-[28px] border-2 border-dashed border-[#e8d8bf] bg-[#fbf7f1]">
            <span className="material-symbols-outlined text-[48px] text-[#c8a878] mb-3">medical_services</span>
            <h3 className="text-[20px] font-bold text-on-surface">No services listed yet</h3>
            <p className="text-[15px] text-on-surface-variant mt-1 max-w-sm">
              Services added in the admin dashboard will appear here.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-16 md:gap-24">
            {services.map((service, idx) => {
              const flipped = idx % 2 === 1;
              return (
                <div key={service.id} className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Visual */}
                  <div className={flipped ? 'lg:order-2' : ''}>
                    {service.image ? (
                      <div className="relative rounded-[28px] overflow-hidden border border-[#e8d8bf] shadow-[0_16px_48px_rgba(120,90,50,0.14)]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={service.image} alt={service.name} className="w-full h-[280px] md:h-[380px] object-cover" />
                      </div>
                    ) : (
                      <div className="relative rounded-[28px] h-[280px] md:h-[380px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff1de] via-[#fbf7f1] to-[#e8f4f1] border border-[#e8d8bf]">
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

                    <h2 className="font-headline-lg text-[28px] sm:text-[34px] font-bold text-on-surface mb-4 leading-tight">
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
        )}
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
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
              className="bg-white text-primary px-8 py-4 rounded-full text-[16px] sm:text-[18px] font-bold shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
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
      </section>
    </>
  );
}
