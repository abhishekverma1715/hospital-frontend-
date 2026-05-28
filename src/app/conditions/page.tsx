import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Diabetes Conditions We Treat — Karunya Sugalaya, Kumbakonam',
  description: 'Type 1, Type 2, Pre-diabetes, Gestational Diabetes, Obesity, Diabetic Complications. Specialist diabetes care tailored for South Indian patients since 2008.',
};

export default function ConditionsPage() {
  return (
    <main className="flex-grow flex flex-col md:flex-row max-w-container-max-width mx-auto w-full">
      {/* SideNavBar */}
      <aside className="hidden lg:flex flex-col py-8 px-4 gap-4 h-full w-72 left-0 border-r border-outline-variant bg-surface-container-low dark:bg-surface-container-lowest sticky top-20" style={{ height: "calc(100vh - 80px)" }}>
        <div className="mb-6 px-4">
          <h2 className="font-headline-sm text-[20px] font-bold text-primary">Conditions Library</h2>
          <p className="font-plus-jakarta-sans text-[14px] text-on-surface-variant mt-1">Specialist Care Navigator</p>
        </div>
        <nav className="flex flex-col gap-2">
          <a className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container font-bold rounded-lg font-plus-jakarta-sans text-[14px] ease-out duration-300" href="#type2">
            <span className="material-symbols-outlined">biotech</span>
            <span>Type 2 Diabetes</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg font-plus-jakarta-sans text-[14px] hover:bg-surface-container-highest transition-all duration-300 ease-out" href="#type1">
            <span className="material-symbols-outlined">bloodtype</span>
            <span>Type 1 Diabetes</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg font-plus-jakarta-sans text-[14px] hover:bg-surface-container-highest transition-all duration-300 ease-out" href="#prediabetes">
            <span className="material-symbols-outlined">trending_down</span>
            <span>Pre-Diabetes & IR</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg font-plus-jakarta-sans text-[14px] hover:bg-surface-container-highest transition-all duration-300 ease-out" href="#gestational">
            <span className="material-symbols-outlined">pregnant_woman</span>
            <span>Gestational</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg font-plus-jakarta-sans text-[14px] hover:bg-surface-container-highest transition-all duration-300 ease-out" href="#obesity">
            <span className="material-symbols-outlined">monitor_weight</span>
            <span>Obesity</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg font-plus-jakarta-sans text-[14px] hover:bg-surface-container-highest transition-all duration-300 ease-out" href="#complications">
            <span className="material-symbols-outlined">emergency_home</span>
            <span>Complications</span>
          </a>
        </nav>
        <div className="mt-auto px-4 pb-4">
          <Link href="/book" className="w-full py-3 bg-surface-variant text-on-surface-variant rounded-lg font-bold hover:bg-surface-dim transition-colors duration-300 ease-out flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">calendar_month</span>
            Request Consultation
          </Link>
        </div>
      </aside>

      {/* Canvas Area */}
      <div className="flex-1 px-margin-mobile md:px-margin-desktop py-12 md:py-16">
        
        {/* Hero Section */}
        <section className="mb-16 md:mb-24 max-w-3xl">
          <div className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[12px] font-bold mb-4 uppercase tracking-wider">
            What We Treat
          </div>
          <h1 className="text-[48px] leading-[56px] font-bold text-on-surface mb-6">
            Conditions we specialise in.
          </h1>
          <p className="text-[18px] text-on-surface-variant leading-relaxed">
            From prevention to advanced management — we cover the full spectrum of diabetes and metabolic health, with expertise built from 17 years of focused practice and a 50,000-patient database.
          </p>
        </section>

        {/* Condition Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          
          {/* Type 2 Diabetes (Large Card) */}
          <div className="col-span-1 md:col-span-2 bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/30 hover-elevation transition-all duration-300 relative overflow-hidden group" id="type2">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-primary/10 transition-colors duration-500"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-container/20 rounded-2xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-4xl">biotech</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-[32px] font-bold text-on-surface mb-3">Type 2 Diabetes</h3>
                <p className="text-[16px] text-on-surface-variant mb-6 max-w-2xl leading-relaxed">
                  The most common form of diabetes, and one we have treated in thousands of patients across the Cauvery delta since 2008. We create personalised management plans that go beyond a standard prescription — combining medication optimisation, dietary guidance specific to South Indian food patterns, activity recommendations, and digital monitoring through the Diary app. An HbA1c above 12, brought below 7 within six months: at Karunya Sugalaya, this is routine.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full text-sm font-medium glass-panel">Medication Optimisation</span>
                  <span className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full text-sm font-medium glass-panel">South Indian Diet Plans</span>
                  <span className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full text-sm font-medium glass-panel">Digital Monitoring</span>
                </div>
              </div>
            </div>
          </div>

          {/* Type 1 Diabetes */}
          <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/30 hover-elevation transition-all duration-300" id="type1">
            <div className="w-12 h-12 bg-secondary-container/30 rounded-xl flex items-center justify-center text-secondary mb-6">
              <span className="material-symbols-outlined text-2xl">bloodtype</span>
            </div>
            <h3 className="text-[24px] font-bold text-on-surface mb-3">Type 1 Diabetes</h3>
            <p className="text-[16px] text-on-surface-variant mb-6 leading-relaxed">
              Specialist insulin optimisation, continuous glucose monitoring (CGM) guidance, and long-term complication prevention for Type 1 patients of all ages. Managing Type 1 diabetes requires precision, commitment, and a clinical team that understands the nuances. We provide all three, supported by our Diary app for real-time data between appointments.
            </p>
          </div>

          {/* Pre-Diabetes & Reversal */}
          <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/30 hover-elevation transition-all duration-300 ai-accent-border" id="prediabetes">
            <div className="w-12 h-12 bg-tertiary-container/20 rounded-xl flex items-center justify-center text-tertiary mb-6">
              <span className="material-symbols-outlined text-2xl">trending_down</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-error-container/50 text-on-error-container rounded text-xs font-bold uppercase tracking-wider">Window of Opportunity</span>
            </div>
            <h3 className="text-[24px] font-bold text-on-surface mb-3">Pre-Diabetes & Insulin Resistance</h3>
            <p className="text-[16px] text-on-surface-variant leading-relaxed">
              A pre-diabetes diagnosis is not a life sentence — it is a window of opportunity. Evidence-based dietary and lifestyle intervention, tailored to the specific dietary realities of Tamil Nadu, can reverse pre-diabetes entirely before it progresses. We take this stage seriously because early action is the most powerful tool in diabetes medicine.
            </p>
          </div>

          {/* Gestational Diabetes */}
          <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/30 hover-elevation transition-all duration-300 relative overflow-hidden" id="gestational">
            <div className="absolute -bottom-6 -right-6 opacity-5">
              <span className="material-symbols-outlined text-[150px]">pregnant_woman</span>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary-container/20 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-2xl">pregnant_woman</span>
              </div>
              <h3 className="text-[24px] font-bold text-on-surface mb-3">Gestational Diabetes</h3>
              <p className="text-[16px] text-on-surface-variant mb-4 leading-relaxed">
                Karunya Sugalaya is a referral centre for pregnancy-related high blood sugar. We provide safe, evidence-based management to protect both mother and baby — with close monitoring, insulin management if required, and careful post-delivery follow-up. Dr. Lakshmi leads our gestational diabetes care with specialist expertise in women's health.
              </p>
              <div className="flex items-center gap-2 mt-4 text-sm font-medium text-secondary">
                <span className="material-symbols-outlined text-base">verified_user</span> Led by Dr. Lakshmi
              </div>
            </div>
          </div>

          {/* Obesity & Metabolic Syndrome */}
          <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/30 hover-elevation transition-all duration-300" id="obesity">
            <div className="w-12 h-12 bg-secondary-container/30 rounded-xl flex items-center justify-center text-secondary mb-6">
              <span className="material-symbols-outlined text-2xl">monitor_weight</span>
            </div>
            <h3 className="text-[24px] font-bold text-on-surface mb-3">Obesity & Metabolic Syndrome</h3>
            <p className="text-[16px] text-on-surface-variant mb-4 leading-relaxed">
              Our dedicated Obesity Clinic provides comprehensive metabolic assessment using Body Composition Analysis — measuring visceral fat, subcutaneous fat distribution, and muscle mass in precise detail. This data drives pragmatic, personalised therapy that addresses obesity not as a cosmetic concern but as the metabolic disease it is. The <strong className="text-on-surface">RITAM 360 programme</strong>, designed specifically for women, integrates medical management with psychological support, dietary guidance, yoga, and stress management.
            </p>
          </div>

          {/* Diabetic Complications (Full Width) */}
          <div className="col-span-1 md:col-span-2 bg-inverse-surface text-inverse-on-surface rounded-xl p-8 shadow-lg relative overflow-hidden" id="complications">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-fixed to-transparent"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-3xl text-primary-fixed">emergency_home</span>
                  <h3 className="text-[32px] font-bold text-surface-container-lowest">Diabetic Complications</h3>
                </div>
                <p className="text-[16px] text-surface-variant mb-6 max-w-3xl leading-relaxed">
                  Our Diabrain clinical decision support system actively flags early signs of complications at every consultation — neuropathy, nephropathy, retinopathy, cardiovascular risk. We also have on-site fundus photography for early detection of diabetic retinopathy, and a dedicated foot care department for assessment and management of diabetic foot disease. Early detection, at this clinic, is not an aspiration — it is a system.
                </p>
                <div className="flex gap-4">
                  <div className="glass-panel bg-white/5 border-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed text-sm">visibility</span>
                    <span className="text-sm font-medium">Fundus Photography</span>
                  </div>
                  <div className="glass-panel bg-white/5 border-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed text-sm">memory</span>
                    <span className="text-sm font-medium">Diabrain AI Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Callout Box: Referral Centre Note */}
        <section className="bg-surface-container-low border border-primary-container/20 rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto mb-16 relative overflow-hidden">
          <div className="absolute left-0 top-0 w-2 h-full bg-error-container"></div>
          <span className="material-symbols-outlined text-4xl text-primary mb-4">local_hospital</span>
          <h4 className="text-[24px] font-bold text-on-surface mb-4">Regional Referral Centre</h4>
          <p className="text-[16px] text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed">
            <strong>Karunya Sugalaya is a recognised referral centre</strong> for uncontrolled diabetes and pregnancy-related high blood sugar from hospitals and clinics across Thanjavur, Nagapattinam, and surrounding districts.
          </p>
          <div className="inline-flex items-center gap-3 bg-surface-container-lowest px-6 py-4 rounded-lg shadow-sm border border-outline-variant/30">
            <span className="material-symbols-outlined text-secondary">call</span>
            <div className="text-left">
              <div className="text-xs text-on-surface-variant font-bold uppercase tracking-wider mb-1">If you are a clinician referring a patient, please call</div>
              <div className="text-[20px] text-primary font-bold">+91 99763 79697</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
