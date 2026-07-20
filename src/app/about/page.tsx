import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import AboutDoctor from '@/components/AboutDoctor';
import { Award, ShieldCheck, Activity, CheckCircle2 } from 'lucide-react';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'About Us | Karunya Sugalaya Diabetes Care & Research Centre Pvt Ltd ',
  description: 'Karunya Sugalaya Diabetes Care & Research Centre Pvt Ltd in Kumbakonam — 25+ years of clinical excellence, leadership under Dr. K. Sivakumar, and advanced diabetes technologies.',
};

export default function AboutPage() {
  return (
    <div className="bg-white text-[#0F172A] selection:bg-[#0D5C75] selection:text-white">
      {/* ===== About Hero Section with Doctor Consultation Background ===== */}
      <section
        className="relative w-full h-[260px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[650px] sm:h-[70svh] lg:h-[75svh] max-h-[800px] flex items-center bg-cover bg-center md:bg-right text-white overflow-hidden"
        style={{ backgroundImage: "url('/images/about-hero-bg.jpg')" }}
      >
        {/* Gradient Overlays for optimal text readability without obscuring doctor & patient on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/85 to-[#0F172A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />

        {/* Decorative ambient background glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-container-max-width mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl text-left">
            <span className="inline-block px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-white/10 backdrop-blur-md text-cyan-300 border border-white/15 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-4">
              About Karunya Sugalaya
            </span>
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-[46px] font-extrabold tracking-tight text-white leading-tight sm:leading-[1.15] drop-shadow-sm mb-2 sm:mb-4">
              Revolutionizing Diabetes &amp; Metabolic Care Since <span className="text-cyan-300">2008</span>
            </h1>
            <p className="text-xs sm:text-base lg:text-lg text-gray-200 leading-relaxed line-clamp-2 sm:line-clamp-none">
              We are Kumbakonam&apos;s premier specialist hospital dedicated to evidence-based diabetology, continuous glucose monitoring, foot salvage, and compassionate patient empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Accreditations & Clinical Excellence Strip ===== */}
      <section className="py-12 bg-smoke3 border-b border-gray-200">
        <div className="max-w-container-max-width mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#0084FF]/10 flex items-center justify-center text-[#0084FF] shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A]"> 25+ Years of Excellence</h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  Serving thousands of families across Kumbakonam, Thanjavur, and the Cauvery delta region with uninterrupted clinical support.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A]">  Our Vision </h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  Helping people live long and healthy beyond 80 years.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#E07A5F]/10 flex items-center justify-center text-[#E07A5F] shrink-0">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A]"> Our Mission </h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  To help people using the advanced Scientific and Technology to prevent chronic disease and complications with affordable Cost and Good Care to Achieve longer & Healthy Lives
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Comprehensive Story Section ===== */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-container-max-width mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-[#0D5C75]/10 text-[#0D5C75] text-xs font-bold uppercase tracking-wider">
                Our Heritage &amp; Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight">
                Empowering Patients Through Innovation, Education &amp; Holistic Care
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Founded with the vision of making international-standard diabetes therapy accessible to all, Karunya Sugalaya Diabetes Care &amp; Research Centre has transformed metabolic healthcare in Tamil Nadu. We understand that poorly controlled diabetes leads to preventable complications and financial stress.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Our multidisciplinary approach brings together diabetologists, consultant physicians, diabetes educators, dietitians, foot care specialists, and laboratory scientists under one roof. Every patient receives a tailored protocol designed around their lifestyle, glucose trends, and long-term wellness.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  'Diabetes Telemedicine & Remote Monitoring',
                  'Continuous Glucose Monitoring (CGM) Center',
                  'Precision Insulin Pump Therapy & Training',
                  'Preventive Neuropathy & Vascular Doppler',
                  'CMC Vellore EQAS Certified Lab Diagnostics',
                  'Personalized Nutritional & Lifestyle Therapy',
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#0D5C75] shrink-0" />
                    <span className="text-sm font-semibold text-[#0F172A]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Highlight Box */}
            <div className="lg:col-span-5">
              <div className="bg-smoke4 rounded-3xl p-8 border border-gray-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#0D5C75]/10 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Our Core Philosophy</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  &ldquo;Diabetes care is not merely about lowering numbers on a lab report. It is about preserving organ health, preventing long-term complications, and restoring confidence in daily life.&rdquo;
                </p>
                <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0D5C75] text-white flex items-center justify-center font-bold text-lg shrink-0">
                    KS
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0F172A]">Dr. K. Sivakumar</div>
                    <div className="text-xs text-gray-500">Managing Director &amp; Chief Diabetologist</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== Meet Our Doctors & Specialists (Rendering AboutDoctor Component) ===== */}
      <AboutDoctor />

      {/* ===== Bottom Call To Action ===== */}

      <FinalCTA
        badge=""
        title="Take the First Step Toward Comprehensive Diabetes Care"
        description="Schedule a clinic visit or online video consultation with our specialists today."
        primaryBtnText="Book an Appointment"
        primaryBtnHref="/book"
        phoneText="Contact Us"
        phoneNumber="/contact"
      />
      {/* <section className="py-20 bg-smoke4 border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            Take the First Step Toward Comprehensive Diabetes Care
          </h2>
          <p className="text-base text-gray-600 mb-8 max-w-xl mx-auto">
            Schedule a clinic visit or online video consultation with our specialists today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="th-btn text-base px-8 py-4"
            >
              Book an Appointment
            </Link>
            <Link
              href="/contact"
              className="line-btn text-base px-4 py-3"
            >
              <span>Contact &amp; Directions</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
