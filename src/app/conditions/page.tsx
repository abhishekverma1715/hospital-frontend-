import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Diabetes Conditions We Treat — Karunya Sugalaya, Kumbakonam',
  description:
    'Type 1, Type 2, Pre-diabetes, Gestational Diabetes, Obesity, Diabetic Complications. Specialist diabetes care tailored for South Indian patients since 2008.',
};

export default function ConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] via-white to-[#F1F5F9] text-[#0F172A] overflow-x-hidden">
      {/* Top Banner Hero Header */}
      <section
        className="relative overflow-hidden bg-[#0F172A] text-white py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-hero-bg.jpg')" }}
      >
        {/* Dark overlay for optimal contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/88 to-[#0F172A]/75 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#0D5C75]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/25 text-cyan-300 text-xs font-bold tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Comprehensive Clinical Care
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-3">
            Conditions We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-200">Specialise In</span>
          </h1>
          <p className="max-w-3xl text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
            From early prevention and insulin resistance reversal to complex advanced metabolic management — delivering evidence-based diabetes medicine tailored for South Indian lifestyles since 2008.
          </p>

          {/* Compact Quick Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 mt-6 pt-5 border-t border-white/10 max-w-2xl">
            <div>
              <div className="text-xl sm:text-2xl font-black text-cyan-300">50,000+</div>
              <div className="text-xs text-gray-400 font-medium">Patients Treated</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-cyan-300">17+ Years</div>
              <div className="text-xs text-gray-400 font-medium">Focused Clinical Excellence</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-xl sm:text-2xl font-black text-cyan-300">&lt; 7.0%</div>
              <div className="text-xs text-gray-400 font-medium">Routine Target HbA1c</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile & Tablet Horizontal Sticky Nav */}
      <div className="lg:hidden sticky top-[68px] sm:top-[76px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm overflow-x-auto">
        <div className="flex gap-2 px-4 py-3 min-w-max">
          <a
            href="#type2"
            className="flex items-center gap-1.5 px-3.5 py-2 bg-[#0F172A] text-white font-bold rounded-full text-xs transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-[16px] text-cyan-300">biotech</span>
            <span>Type 2</span>
          </a>
          <a
            href="#type1"
            className="flex items-center gap-1.5 px-3.5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-full text-xs transition-all"
          >
            <span className="material-symbols-outlined text-[16px] text-[#0D5C75]">bloodtype</span>
            <span>Type 1</span>
          </a>
          <a
            href="#prediabetes"
            className="flex items-center gap-1.5 px-3.5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-full text-xs transition-all"
          >
            <span className="material-symbols-outlined text-[16px] text-amber-600">trending_down</span>
            <span>Pre-Diabetes</span>
          </a>
          <a
            href="#gestational"
            className="flex items-center gap-1.5 px-3.5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-full text-xs transition-all"
          >
            <span className="material-symbols-outlined text-[16px] text-pink-600">pregnant_woman</span>
            <span>Gestational</span>
          </a>
          <a
            href="#obesity"
            className="flex items-center gap-1.5 px-3.5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-full text-xs transition-all"
          >
            <span className="material-symbols-outlined text-[16px] text-emerald-600">monitor_weight</span>
            <span>Obesity</span>
          </a>
          <a
            href="#complications"
            className="flex items-center gap-1.5 px-3.5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-full text-xs transition-all"
          >
            <span className="material-symbols-outlined text-[16px] text-purple-600">emergency_home</span>
            <span>Complications</span>
          </a>
        </div>
      </div>

      {/* Main Layout Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* SideNavBar — Laptop & Desktop */}
          <aside className="hidden lg:flex flex-col w-72 shrink-0 sticky top-28 bg-white rounded-3xl p-6 border border-gray-200/80 shadow-lg space-y-6">
            <div>
              <h2 className="text-lg font-extrabold text-[#0F172A]">Conditions Library</h2>
              <p className="text-xs text-gray-500 font-medium mt-0.5">Specialist Care Navigator</p>
            </div>

            <nav className="flex flex-col gap-1.5">
              <a
                href="#type2"
                className="flex items-center gap-3 px-4 py-3 bg-[#0F172A] text-white font-bold rounded-2xl text-sm transition-all shadow-md group"
              >
                <span className="material-symbols-outlined text-[20px] text-cyan-300 group-hover:scale-110 transition-transform">biotech</span>
                <span>Type 2 Diabetes</span>
              </a>
              <a
                href="#type1"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0F172A] font-bold rounded-2xl text-sm transition-all group"
              >
                <span className="material-symbols-outlined text-[20px] text-[#0D5C75] group-hover:scale-110 transition-transform">bloodtype</span>
                <span>Type 1 Diabetes</span>
              </a>
              <a
                href="#prediabetes"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0F172A] font-bold rounded-2xl text-sm transition-all group"
              >
                <span className="material-symbols-outlined text-[20px] text-amber-600 group-hover:scale-110 transition-transform">trending_down</span>
                <span>Pre-Diabetes &amp; IR</span>
              </a>
              <a
                href="#gestational"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0F172A] font-bold rounded-2xl text-sm transition-all group"
              >
                <span className="material-symbols-outlined text-[20px] text-pink-600 group-hover:scale-110 transition-transform">pregnant_woman</span>
                <span>Gestational Diabetes</span>
              </a>
              <a
                href="#obesity"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0F172A] font-bold rounded-2xl text-sm transition-all group"
              >
                <span className="material-symbols-outlined text-[20px] text-emerald-600 group-hover:scale-110 transition-transform">monitor_weight</span>
                <span>Obesity &amp; Metabolic</span>
              </a>
              <a
                href="#complications"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0F172A] font-bold rounded-2xl text-sm transition-all group"
              >
                <span className="material-symbols-outlined text-[20px] text-purple-600 group-hover:scale-110 transition-transform">emergency_home</span>
                <span>Complications</span>
              </a>
            </nav>

            <div className="pt-4 border-t border-gray-100">
              <Link
                href="/book"
                className="w-full py-3.5 px-4 bg-[#0D5C75] hover:bg-[#094356] text-white rounded-2xl font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>Book Consultation</span>
              </Link>
            </div>

            {/* Helpline Mini-Card inside Sidebar */}
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-4 border border-cyan-100/80">
              <div className="flex items-center gap-2.5 text-[#0D5C75] font-bold text-xs uppercase tracking-wider mb-1.5">
                <span className="material-symbols-outlined text-[18px]">support_agent</span>
                <span>Direct Helplines</span>
              </div>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                Need guidance on laboratory reports or specialist doctor appointments?
              </p>
              <a
                href="tel:+919976379697"
                className="block text-center py-2 px-3 bg-white text-[#0F172A] hover:text-[#0D5C75] font-extrabold text-xs rounded-xl shadow-sm border border-gray-200/60 transition-all"
              >
                📞 +91 99763 79697
              </a>
            </div>
          </aside>

          {/* Condition Cards Content Area */}
          <div className="flex-1 min-w-0 space-y-8 sm:space-y-10">
            {/* ========================================= */}
            {/* CARD 1: TYPE 2 DIABETES (Featured) */}
            {/* ========================================= */}
            <div
              id="type2"
              className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-cyan-500/10 transition-colors" />

              <div className="relative z-10 flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0D5C75]/10 text-[#0D5C75] flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl">biotech</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-[#0D5C75] text-xs font-bold mb-3 border border-cyan-100">
                    Most Common Medical Condition
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-3">
                    Type 2 Diabetes Management
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                    The most common form of diabetes, treated in thousands of patients across the Cauvery delta since 2008. We create personalised management plans that go far beyond standard prescriptions — combining medication optimisation, dietary guidance specific to South Indian food patterns, targeted activity regimens, and continuous digital tracking via our Diary app. Bringing an HbA1c above 12.0% down below 7.0% within six months is routine practice at Karunya Sugalaya.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 bg-gray-50/80 p-4 rounded-2xl border border-gray-100">
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Key Indicators</div>
                      <div className="text-sm font-semibold text-[#0F172A] mt-0.5">High Fasting Sugar, Fatigue, Increased Thirst</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Clinical Approach</div>
                      <div className="text-sm font-semibold text-[#0F172A] mt-0.5">Dual/Triple Drug Therapy &amp; Diet Protocol</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Outcome Goal</div>
                      <div className="text-sm font-semibold text-emerald-700 mt-0.5">Sustained HbA1c &lt; 7.0% without Hypoglycemia</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3 pt-4 border-t border-gray-100">
                    <span className="px-3.5 py-1.5 rounded-xl bg-white border border-gray-200/80 text-xs sm:text-sm font-semibold text-gray-700 shadow-sm">
                      ✨ Medication Optimisation
                    </span>
                    <span className="px-3.5 py-1.5 rounded-xl bg-white border border-gray-200/80 text-xs sm:text-sm font-semibold text-gray-700 shadow-sm">
                      🍛 South Indian Diet Plans
                    </span>
                    <span className="px-3.5 py-1.5 rounded-xl bg-white border border-gray-200/80 text-xs sm:text-sm font-semibold text-gray-700 shadow-sm">
                      📱 Digital Glucose Tracking
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================= */}
            {/* CARD 2 & CARD 3: 2-COLUMN GRID ON TABLET+ */}
            {/* ========================================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Type 1 Diabetes */}
              <div
                id="type1"
                className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-2xl">bloodtype</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-3">
                    Type 1 Diabetes &amp; CGM
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                    Specialist insulin optimisation, Continuous Glucose Monitoring (CGM) guidance, and long-term complication prevention for Type 1 patients of all ages. Managing Type 1 diabetes requires precision, commitment, and a clinical team that understands nuanced daily fluctuations.
                  </p>
                  <div className="bg-blue-50/60 p-3.5 rounded-xl mb-6 text-xs text-blue-900 leading-relaxed">
                    <strong>Specialist Care:</strong> Precise basal/bolus titration, insulin pen technique training, and continuous ambulatory sensor calibration.
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#0D5C75]">
                  <span className="material-symbols-outlined text-base">verified</span>
                  Advanced Insulin Regimens &amp; Sensor Support
                </div>
              </div>

              {/* Pre-Diabetes & Reversal */}
              <div
                id="prediabetes"
                className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl" />
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl">trending_down</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold uppercase tracking-wider">
                      Reversal Window
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-3">
                    Pre-Diabetes &amp; IR Reversal
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                    A pre-diabetes diagnosis is not a life sentence — it is an actionable window of opportunity. Evidence-based dietary and lifestyle intervention, tailored to the specific dietary realities of Tamil Nadu, can reverse insulin resistance entirely before progression occurs.
                  </p>
                  <div className="bg-amber-50/70 p-3.5 rounded-xl mb-6 text-xs text-amber-900 leading-relaxed">
                    <strong>Early Intervention:</strong> Reversing impaired fasting glucose (IFG) and impaired glucose tolerance (IGT) with nutrition &amp; metabolic counseling.
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-amber-700">
                  <span className="material-symbols-outlined text-base">vital_signs</span>
                  Targeted Lifestyle &amp; Metabolic Intervention
                </div>
              </div>
            </div>

            {/* ========================================= */}
            {/* CARD 4 & CARD 5: GESTATIONAL & OBESITY */}
            {/* ========================================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Gestational Diabetes */}
              <div
                id="gestational"
                className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-2xl">pregnant_woman</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-3">
                    Gestational Diabetes Care
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                    Karunya Sugalaya is a regional referral centre for pregnancy-related hyperglycemia. We provide safe, evidence-based management to protect both mother and baby — with vigilant glucose monitoring, tailored insulin therapy if indicated, and comprehensive post-delivery screening.
                  </p>
                  <div className="bg-pink-50/70 p-3.5 rounded-xl mb-6 text-xs text-pink-950 leading-relaxed">
                    <strong>Maternal &amp; Fetal Protection:</strong> Non-teratogenic glucose control protocols closely coordinated with obstetric specialists.
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-pink-700">
                  <span className="material-symbols-outlined text-base">verified_user</span>
                  Led by Specialist Dr. B. Lakshmi
                </div>
              </div>

              {/* Obesity & Metabolic Syndrome */}
              <div
                id="obesity"
                className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-2xl">monitor_weight</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-3">
                    Obesity &amp; Metabolic Syndrome
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                    Our Obesity Clinic provides comprehensive metabolic assessment using Body Composition Analysis — measuring visceral fat and muscle mass distribution. Our <strong className="text-[#0F172A]">RITAM 360 programme</strong> integrates medical management with dietary coaching, yoga, and wellness support.
                  </p>
                  <div className="bg-emerald-50/70 p-3.5 rounded-xl mb-6 text-xs text-emerald-900 leading-relaxed">
                    <strong>Metabolic Profiling:</strong> Precision body composition scanning targeting abdominal adiposity &amp; insulin resistance.
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <span className="material-symbols-outlined text-base">fitness_center</span>
                  RITAM 360 Holistic Wellness Protocol
                </div>
              </div>
            </div>

            {/* ========================================= */}
            {/* CARD 6: DIABETIC COMPLICATIONS (Dark Card) */}
            {/* ========================================= */}
            <div
              id="complications"
              className="scroll-mt-24 bg-[#0F172A] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl sm:text-3xl">emergency_home</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">
                      Early Prevention &amp; Protection
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Diabetic Complications Screening
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 max-w-3xl">
                  Our clinical decision support system actively flags early signs of complications at every consultation — neuropathy, nephropathy, retinopathy, and cardiovascular risk. We provide on-site digital fundus photography for early detection of diabetic retinopathy and a dedicated diabetic foot care department. Early detection here is not an aspiration — it is an automated clinical protocol.
                </p>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                  <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-cyan-300">visibility</span>
                    <span>On-Site Fundus Retinal Imaging</span>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-cyan-300">memory</span>
                    <span>Diabrain AI Complication Screening</span>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-cyan-300">healing</span>
                    <span>Preventive Diabetic Foot Care</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ======================================================= */}
            {/* NEW ENRICHED SECTION: WARNING SIGNS & WHEN TO CONSULT */}
            {/* ======================================================= */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200/80 shadow-lg">
              <div className="max-w-3xl mb-8">
                <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-3">
                  Warning Signs Checklist
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                  When Should You See a Diabetologist Immediately?
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
                  Early detection and timely adjustment of your diabetes care plan can prevent permanent organ damage and neuropathy. Watch for these clinical warning indicators:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-2xl text-red-500 mb-2">speed</span>
                    <h4 className="font-bold text-[#0F172A] text-sm sm:text-base mb-1">Unexplained Fatigue &amp; Weight Loss</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Sudden drop in body weight or severe tiredness despite normal food intake indicates cellular glucose starvation.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-2xl text-amber-600 mb-2">blood_pressure</span>
                    <h4 className="font-bold text-[#0F172A] text-sm sm:text-base mb-1">Persistent Sugar &gt; 180 mg/dL</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Frequent fasting blood sugar readings above target or HbA1c exceeding 8.0% require immediate medication titration.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-2xl text-purple-600 mb-2">footprint</span>
                    <h4 className="font-bold text-[#0F172A] text-sm sm:text-base mb-1">Tingling or Numbness in Feet</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Early signs of diabetic peripheral neuropathy that require urgent biothesiometry foot screening.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-2xl text-cyan-600 mb-2">visibility_off</span>
                    <h4 className="font-bold text-[#0F172A] text-sm sm:text-base mb-1">Blurred Vision or Floaters</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Fluctuating vision or retinal spots need prompt evaluation with our on-site digital fundus retinal camera.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                  Experiencing any of these symptoms? Schedule an evaluation with our specialist doctors today.
                </div>
                <Link
                  href="/book"
                  className="bg-[#0D5C75] hover:bg-[#094356] text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all shrink-0"
                >
                  Book Priority Consultation →
                </Link>
              </div>
            </section>

            {/* ========================================= */}
            {/* REFERRAL CENTRE CALLOUT BANNER */}
            {/* ========================================= */}
            <div className="bg-gradient-to-r from-cyan-900/10 via-teal-900/10 to-transparent border border-[#0D5C75]/25 rounded-3xl p-6 sm:p-8 lg:p-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D5C75]/10 text-[#0D5C75] text-xs font-bold uppercase tracking-wider mb-3">
                  Regional Medical Referral Centre
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-2">
                  Are You a Referring Clinician?
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
                  Karunya Sugalaya is a recognised specialist referral centre for complex diabetes and gestational hyperglycemia across Thanjavur, Nagapattinam, and surrounding delta districts.
                </p>
              </div>

              <a
                href="tel:+919976379697"
                className="shrink-0 bg-[#0F172A] hover:bg-[#0D5C75] text-white px-6 py-4 rounded-2xl font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                <span className="material-symbols-outlined text-[22px] text-cyan-300">call</span>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Direct Clinical Line</div>
                  <div className="text-base sm:text-lg font-black">+91 99763 79697</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
