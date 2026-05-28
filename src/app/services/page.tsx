import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Diabetes Care Services & Packages — Karunya Sugalaya, Kumbakonam',
  description: 'OP consultations, IP care, CMC Vellore certified laboratory, HPLC HbA1c, obesity clinic with body composition analysis. RITAM 360 programme for women.',
};

export default function ServicesPage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-surface-container-low py-16 md:py-24 px-margin-mobile md:px-margin-desktop text-center border-b border-outline-variant/30">
        <div className="max-w-3xl mx-auto">
          <p className="text-[12px] font-bold text-primary tracking-widest uppercase mb-4">Our Services</p>
          <h1 className="text-[48px] leading-[56px] font-bold text-on-surface mb-6">Comprehensive Care.</h1>
          <p className="text-[18px] text-on-surface-variant leading-relaxed">
            From routine outpatient consultations to specialised inpatient programmes and a CMC Vellore EQAS Certified laboratory — offering end-to-end metabolic healthcare.
          </p>
          <p className="text-[12px] text-on-surface-variant mt-6 italic">
            Note: Terms and conditions apply to all packages. Exact pricing to be confirmed at the clinic.
          </p>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
        <div className="flex flex-col gap-24">
          
          {/* Outpatient Services */}
          <div className="w-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">medical_services</span>
              </div>
              <h2 className="text-[32px] font-bold text-on-surface">Outpatient (OP) Services</h2>
            </div>
            
            <p className="text-[16px] text-primary font-bold mb-6">Starting from ₹500 per consultation</p>
            
            <div className="overflow-x-auto pb-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-outline-variant">
                    <th className="py-4 px-6 text-[14px] font-bold text-on-surface">Consultation Type</th>
                    <th className="py-4 px-6 text-[14px] font-bold text-on-surface">Price</th>
                    <th className="py-4 px-6 text-[14px] font-bold text-on-surface">Duration</th>
                    <th className="py-4 px-6 text-[14px] font-bold text-on-surface">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/50">
                  <tr className="hover:bg-surface-container-low transition-colors duration-200">
                    <td className="py-4 px-6 text-[16px] font-bold text-on-surface">New Patient Consultation</td>
                    <td className="py-4 px-6 text-[16px] text-primary font-medium">₹500</td>
                    <td className="py-4 px-6 text-[14px] text-on-surface-variant">10 min</td>
                    <td className="py-4 px-6 text-[16px] text-on-surface-variant">First visit, full history, examination and personalised assessment</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors duration-200">
                    <td className="py-4 px-6 text-[16px] font-bold text-on-surface">Review Consultation</td>
                    <td className="py-4 px-6 text-[16px] text-primary font-medium">₹300</td>
                    <td className="py-4 px-6 text-[14px] text-on-surface-variant">5 min</td>
                    <td className="py-4 px-6 text-[16px] text-on-surface-variant">Brief follow-up for established patients</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors duration-200">
                    <td className="py-4 px-6 text-[16px] font-bold text-on-surface">Review — Extended</td>
                    <td className="py-4 px-6 text-[16px] text-primary font-medium">₹400</td>
                    <td className="py-4 px-6 text-[14px] text-on-surface-variant">10 min</td>
                    <td className="py-4 px-6 text-[16px] text-on-surface-variant">Follow-up with additional time for multiple concerns</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors duration-200">
                    <td className="py-4 px-6 text-[16px] font-bold text-on-surface">Review — Detailed</td>
                    <td className="py-4 px-6 text-[16px] text-primary font-medium">₹500</td>
                    <td className="py-4 px-6 text-[14px] text-on-surface-variant">15 min</td>
                    <td className="py-4 px-6 text-[16px] text-on-surface-variant">Comprehensive review of reports and treatment adjustments</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors duration-200">
                    <td className="py-4 px-6 text-[16px] font-bold text-on-surface">Review — Comprehensive</td>
                    <td className="py-4 px-6 text-[16px] text-primary font-medium">₹1,000</td>
                    <td className="py-4 px-6 text-[14px] text-on-surface-variant">30 min</td>
                    <td className="py-4 px-6 text-[16px] text-on-surface-variant">In-depth consultation for complex cases, insulin initiation, CGM review</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* OP Packages Highlight */}
            <div className="mt-8 bg-surface-container-lowest border border-primary-container/30 rounded-2xl p-8 hover-elevation transition-all flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-grow">
                <h3 className="text-[20px] font-bold text-on-surface mb-2">OP Care Packages</h3>
                <p className="text-[16px] text-on-surface-variant">
                  We offer Quarterly, Half-yearly, and Annual care packages that include bundled consultations and necessary investigations for continuous care.
                </p>
              </div>
              <Link href="/contact" className="px-6 py-2 border border-primary text-primary rounded-full text-[14px] font-bold hover:bg-primary-container/10 transition-colors flex-shrink-0">
                Inquire Pricing
              </Link>
            </div>
          </div>

          <div className="w-full h-px bg-outline-variant/30"></div>

          {/* Inpatient Services */}
          <div className="w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">bed</span>
              </div>
              <h2 className="text-[32px] font-bold text-on-surface">Inpatient (IP) Services</h2>
            </div>
            
            <p className="text-[18px] text-on-surface-variant mb-8 max-w-3xl">
              Our 12-bed facility ensures focused, specialised care. We offer a Common ward (5 beds), Individual AC rooms (5 beds), and dedicated Emergency beds (2 beds).
            </p>

            <h3 className="text-[20px] font-bold text-on-surface mb-6">IP Clinical Programmes</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 hover-elevation transition-all">
                <h4 className="text-[16px] font-bold text-on-surface mb-2">Pain Management in Diabetes</h4>
                <p className="text-[14px] text-on-surface-variant">Specialist care for diabetic neuropathic pain</p>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 hover-elevation transition-all">
                <h4 className="text-[16px] font-bold text-on-surface mb-2">Glycaemic Control Programme</h4>
                <p className="text-[14px] text-on-surface-variant">Intensive inpatient blood sugar stabilisation</p>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 hover-elevation transition-all">
                <h4 className="text-[16px] font-bold text-on-surface mb-2">Pregnancy Diabetes Management</h4>
                <p className="text-[14px] text-on-surface-variant">Inpatient care for gestational diabetes emergencies</p>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 hover-elevation transition-all">
                <h4 className="text-[16px] font-bold text-on-surface mb-2">Rejuvenation Package</h4>
                <p className="text-[14px] text-on-surface-variant">Comprehensive metabolic reset programme</p>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 hover-elevation transition-all">
                <h4 className="text-[16px] font-bold text-on-surface mb-2">Diabetic Foot Management</h4>
                <p className="text-[14px] text-on-surface-variant">Inpatient wound care and infection management</p>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 hover-elevation transition-all">
                <h4 className="text-[16px] font-bold text-on-surface mb-2">Mindfulness Package</h4>
                <p className="text-[14px] text-on-surface-variant">Stress and mental health support in metabolic disease</p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-outline-variant/30"></div>

          {/* Laboratory Services */}
          <div className="w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-tertiary-container/20 text-tertiary rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">biotech</span>
                </div>
                <h2 className="text-[32px] font-bold text-on-surface">Laboratory Services</h2>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full">
                <span className="material-symbols-outlined text-primary text-sm">verified</span>
                <span className="text-[12px] font-bold tracking-wide uppercase text-on-surface-variant">CMC Vellore EQAS Certified</span>
              </div>
            </div>

            <div className="bg-primary-container/10 p-6 md:p-8 rounded-2xl border border-primary/20 mb-8">
              <h3 className="text-[18px] font-bold text-on-surface mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">science</span>
                The Gold Standard in Lab Quality
              </h3>
              <p className="text-[16px] text-on-surface-variant leading-relaxed">
                Our laboratory is certified under the CMC Vellore External Quality Assurance Scheme (EQAS) — a gold standard in clinical laboratory quality assurance in India. HbA1c is measured using the HPLC method on the Bio-Rad D10 analyser — the most accurate method available, recommended by the International Federation of Clinical Chemistry (IFCC).
              </p>
            </div>

            <h3 className="text-[20px] font-bold text-on-surface mb-6">Lab Packages</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              
              <div className="flex gap-4 p-4 border border-outline-variant/30 rounded-xl hover:bg-surface-container-lowest transition-colors group">
                <span className="material-symbols-outlined text-outline/50 group-hover:text-primary transition-colors">check_circle</span>
                <div>
                  <h4 className="text-[16px] font-bold text-on-surface">Complete Diabetes Care Package</h4>
                  <p className="text-[14px] text-on-surface-variant mt-1">Comprehensive panel for full diabetes assessment</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 border border-outline-variant/30 rounded-xl hover:bg-surface-container-lowest transition-colors group">
                <span className="material-symbols-outlined text-outline/50 group-hover:text-primary transition-colors">check_circle</span>
                <div>
                  <h4 className="text-[16px] font-bold text-on-surface">Comprehensive Care Package</h4>
                  <p className="text-[14px] text-on-surface-variant mt-1">Extended metabolic and organ function panel</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 border border-outline-variant/30 rounded-xl hover:bg-surface-container-lowest transition-colors group">
                <span className="material-symbols-outlined text-outline/50 group-hover:text-primary transition-colors">check_circle</span>
                <div>
                  <h4 className="text-[16px] font-bold text-on-surface">Basic Diabetes Package</h4>
                  <p className="text-[14px] text-on-surface-variant mt-1">Core investigations for routine monitoring</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 border border-outline-variant/30 rounded-xl hover:bg-surface-container-lowest transition-colors group">
                <span className="material-symbols-outlined text-outline/50 group-hover:text-primary transition-colors">check_circle</span>
                <div>
                  <h4 className="text-[16px] font-bold text-on-surface">Hypertension Package</h4>
                  <p className="text-[14px] text-on-surface-variant mt-1">Cardiovascular and renal risk assessment</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 border border-outline-variant/30 rounded-xl hover:bg-surface-container-lowest transition-colors group">
                <span className="material-symbols-outlined text-outline/50 group-hover:text-primary transition-colors">check_circle</span>
                <div>
                  <h4 className="text-[16px] font-bold text-on-surface">Thyroid Package</h4>
                  <p className="text-[14px] text-on-surface-variant mt-1">Full thyroid function panel</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 border border-outline-variant/30 rounded-xl hover:bg-surface-container-lowest transition-colors group">
                <span className="material-symbols-outlined text-outline/50 group-hover:text-primary transition-colors">check_circle</span>
                <div>
                  <h4 className="text-[16px] font-bold text-on-surface">Obesity Package</h4>
                  <p className="text-[14px] text-on-surface-variant mt-1">Metabolic and hormonal panel for obesity management</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 border border-outline-variant/30 rounded-xl hover:bg-surface-container-lowest transition-colors group">
                <span className="material-symbols-outlined text-outline/50 group-hover:text-primary transition-colors">check_circle</span>
                <div>
                  <h4 className="text-[16px] font-bold text-on-surface">Mindfulness Package</h4>
                  <p className="text-[14px] text-on-surface-variant mt-1">Stress hormone and related metabolic markers</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Book CTA */}
      <section className="py-16 bg-surface-container-highest px-margin-mobile md:px-margin-desktop text-center">
        <h2 className="text-[24px] font-bold text-on-surface mb-6">Need to schedule a test or consultation?</h2>
        <Link href="/book" className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-3 rounded-full text-[16px] font-bold hover:bg-primary-container transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300">
          Book Now <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </section>
    </main>
  );
}
