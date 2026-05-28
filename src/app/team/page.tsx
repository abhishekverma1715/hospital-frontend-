import React from 'react';

export const metadata = {
  title: 'Our Doctors — Karunya Sugalaya Diabetes Centre, Kumbakonam',
  description: 'Meet Dr. K. Sivakumar (Metabolic Physician, MD, API Gold Medalist) and Dr. B. Lakshmi (Diabetologist, Steno Denmark trained). Specialist diabetes care in Kumbakonam.',
};

export default function TeamPage() {
  return (
    <main className="flex-grow">
      {/* Page Header */}
      <section className="bg-surface-container-low py-16 md:py-24 px-margin-mobile md:px-margin-desktop text-center border-b border-outline-variant/30">
        <div className="max-w-3xl mx-auto">
          <p className="text-[12px] font-bold text-primary tracking-widest uppercase mb-4">Our Doctors</p>
          <h1 className="text-[48px] leading-[56px] font-bold text-on-surface mb-6">Meet the team.</h1>
          <p className="text-[18px] text-on-surface-variant leading-relaxed">
            Four dedicated specialists — a Metabolic Physician, a Diabetologist, and two junior consultants — bringing expert, personalised diabetes care to Kumbakonam and the Cauvery delta region since 2008.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
        <div className="flex flex-col gap-20">
          
          {/* Dr. Sivakumar Bio */}
          <article className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start sticky top-28">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-surface-container-high overflow-hidden shadow-lg border border-outline-variant/30 relative">
                {/* Fallback pattern for image missing */}
                <div className="absolute inset-0 pattern-bg opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center text-outline/20">
                  <span className="material-symbols-outlined text-8xl">person</span>
                </div>
              </div>
              <div className="mt-8 w-full">
                <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
                  <h3 className="text-[14px] font-bold text-on-surface mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">schedule</span>
                    Consulting Hours
                  </h3>
                  <p className="text-[14px] text-on-surface-variant font-medium">Monday to Saturday</p>
                  <p className="text-[14px] text-on-surface-variant">11:30 AM – 2:00 PM</p>
                  <p className="text-[14px] text-on-surface-variant mb-6">3:00 PM – 6:00 PM</p>
                  
                  <h3 className="text-[14px] font-bold text-on-surface mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">contact_support</span>
                    Contact
                  </h3>
                  <a href="tel:+919994360912" className="text-[14px] text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-sm">phone</span> +91 99943 60912
                  </a>
                  <a href="mailto:drksincere@gmail.com" className="text-[14px] text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">mail</span> drksincere@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3">
              <div className="inline-block px-4 py-1.5 bg-primary-container text-on-primary-container rounded-full text-[12px] font-bold tracking-widest uppercase mb-6">
                Founder & Managing Director
              </div>
              <h2 className="text-[40px] leading-[48px] font-bold text-on-surface mb-2">Dr. K. Sivakumar Krishnamoorthy</h2>
              <p className="text-[18px] text-primary font-medium mb-10 pb-6 border-b border-outline-variant/30">
                MBBS, MD (General Medicine) · Metabolic Physician & Managing Director
              </p>
              
              <div className="space-y-6 text-[16px] text-on-surface-variant leading-relaxed">
                <p>
                  Dr. K. Sivakumar Krishnamoorthy graduated with MBBS and MD in General Medicine from the prestigious Madurai Medical College in 2001, winning the API Gold Medal in Medicine during his undergraduate studies — one of the highest academic honours in the field.
                </p>
                <p>
                  As a physician in Kumbakonam, Dr. Sivakumar quickly observed that more than 90% of his most complex cases were patients with poorly controlled diabetes — patients who had been elsewhere but were not improving. This pattern transformed him. He chose to dedicate his practice exclusively to metabolic medicine, becoming one of the few physicians in the Cauvery delta region with deep specialisation in diabetes, obesity, and metabolic disease. Today, he practices as a Metabolic Physician — a broader, more complete lens than diabetology alone.
                </p>
                <div className="p-6 bg-surface-container-low rounded-xl border-l-4 border-l-[#22D3EE] my-8 ai-accent-border hover-elevation transition-all">
                  <h4 className="text-[18px] font-bold text-on-surface flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary">smart_toy</span>
                    Pioneering Clinical Technology
                  </h4>
                  <p className="text-[16px] text-on-surface-variant">
                    Dr. Sivakumar is unusual among clinicians for building his own clinical tools. In 2022, he founded DiaX.AI, a private limited company developing AI-powered clinical intelligence software for chronic disease management in India. His flagship product, Dialog EMR, now holds the complete records of over 50,000 patients and more than 2 million prescriptions — a data infrastructure that powers both clinical care and ongoing research. DiaX.AI recently received the TANSEED 7.0 startup grant from the Government of Tamil Nadu.
                  </p>
                </div>
                <p>
                  Dr. Sivakumar has been publishing clinical research since 2020, is a participant in landmark clinical trials including LANDMARC (Sanofi), and presented original research on insulin use patterns at the International Diabetes Federation (IDF) World Congress in Bangkok in 2025. He is a Key Opinion Leader for several leading pharmaceutical companies and a frequent invited speaker at state and national diabetes conferences.
                </p>
                <p>
                  He is a Life Member of RSSDI (Research Society for the Study of Diabetes in India), the API (Association of Physicians of India), and the IDF (International Diabetes Federation). He served as Secretary of IMA Kumbakonam, playing a key role in raising funds to construct the IMA building. He is Treasurer of the Metabolic Club, Kumbakonam, and a core organiser of KumbMetCon — the annual professional conference for metabolic medicine practitioners in Kumbakonam. He currently serves as Secretary of the API, Thanjavur chapter.
                </p>
              </div>
            </div>
          </article>
          
          <div className="w-full h-px bg-outline-variant/30"></div>
          
          {/* Dr. Lakshmi Bio */}
          <article className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start sticky top-28">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-surface-container-high overflow-hidden shadow-lg border border-outline-variant/30 relative">
                 {/* Fallback pattern for image missing */}
                 <div className="absolute inset-0 pattern-bg opacity-30"></div>
                 <div className="absolute inset-0 flex items-center justify-center text-outline/20">
                   <span className="material-symbols-outlined text-8xl">person_4</span>
                 </div>
              </div>
              <div className="mt-8 w-full">
                <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
                  <h3 className="text-[14px] font-bold text-on-surface mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">schedule</span>
                    Consulting Hours
                  </h3>
                  <p className="text-[14px] text-on-surface-variant font-medium">Monday to Saturday</p>
                  <p className="text-[14px] text-on-surface-variant">10:30 AM – 2:00 PM</p>
                  <p className="text-[14px] text-on-surface-variant">3:00 PM – 5:00 PM</p>
                  <p className="text-[14px] text-on-surface-variant mb-6">7:00 PM – 9:00 PM</p>
                  
                  <h3 className="text-[14px] font-bold text-on-surface mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">contact_support</span>
                    Contact
                  </h3>
                  <a href="tel:+919791906781" className="text-[14px] text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-sm">phone</span> +91 97919 06781
                  </a>
                  <a href="mailto:lakshmi@karunyasugalaya.co.in" className="text-[14px] text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">mail</span> lakshmi@karunyasugalaya.co.in
                  </a>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3">
              <div className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-[12px] font-bold tracking-widest uppercase mb-6">
                Consultant & Director of Administration
              </div>
              <h2 className="text-[40px] leading-[48px] font-bold text-on-surface mb-2">Dr. B. Lakshmi Sivakumar</h2>
              <p className="text-[18px] text-secondary font-medium mb-10 pb-6 border-b border-outline-variant/30">
                MBBS, D.Diab · Consultant Diabetologist & Director of Administration
              </p>
              
              <div className="space-y-6 text-[16px] text-on-surface-variant leading-relaxed">
                <p>
                  Dr. B. Lakshmi Sivakumar completed her MBBS at Government Mohan Kumaramangalam Medical College, Salem, and her specialist training in diabetology through a programme facilitated by the Steno Diabetes Centre, Denmark — one of the world's foremost diabetes research and training institutions.
                </p>
                <div className="p-6 bg-surface-container-low rounded-xl border-l-4 border-l-secondary my-8 hover-elevation transition-all">
                  <h4 className="text-[18px] font-bold text-on-surface flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-secondary">health_and_safety</span>
                    Women's Metabolic Health & RITAM 360
                  </h4>
                  <p className="text-[16px] text-on-surface-variant">
                    Dr. Lakshmi brings a particular focus to women's health in diabetes — an area that is frequently underprioritised in general diabetes practice. She manages gestational diabetes, PCOS-related insulin resistance, and the unique metabolic challenges women face through different life stages. She has designed and launched RITAM 360, an exclusive programme for women living with diabetes or obesity, combining medical management, group and individual psychological counselling, dietary guidance, yoga, meditation, and stress management — developed in partnership with psychologist Ishwarya.
                  </p>
                </div>
                <p>
                  Beyond clinical practice, Dr. Lakshmi manages the administrative operations of Karunya Sugalaya — ensuring the hospital runs with the precision and care that patients deserve. She is deeply committed to patient education and community outreach, regularly organising and conducting diabetes awareness camps both inside and outside the hospital.
                </p>
              </div>
            </div>
          </article>
          
          <div className="w-full h-px bg-outline-variant/30"></div>
          
          {/* Junior Consultants */}
          <section className="pb-12">
            <h2 className="text-[32px] font-bold text-on-surface mb-8">Junior Consultants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-2xl flex items-center gap-6 hover-elevation transition-all">
                <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-3xl">stethoscope</span>
                </div>
                <div>
                  <h4 className="text-[20px] font-bold text-on-surface mb-1">Dr. Shamir Ali</h4>
                  <p className="text-[14px] text-primary font-bold mb-2">MBBS</p>
                  <p className="text-[14px] text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">schedule</span> Mon – Sat, during clinic hours
                  </p>
                </div>
              </div>
              
              <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-2xl flex items-center gap-6 hover-elevation transition-all">
                <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-3xl">stethoscope</span>
                </div>
                <div>
                  <h4 className="text-[20px] font-bold text-on-surface mb-1">Dr. R. Surendran</h4>
                  <p className="text-[14px] text-primary font-bold mb-2">MBBS</p>
                  <p className="text-[14px] text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">schedule</span> Mon – Sat, during clinic hours
                  </p>
                </div>
              </div>
              
            </div>
          </section>

        </div>
      </section>
    </main>
  );
}
