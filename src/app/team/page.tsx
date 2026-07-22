import React from 'react';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Our Doctors & Medical Team — Karunya Sugalaya Diabetes Centre, Kumbakonam',
  description: 'Meet Dr. K. Sivakumar (Managing Director), Dr. B. Lakshmi (Medical Director), Specialist Consultants, and 24x7 Medical Officers in Kumbakonam.',
};

interface TeamMember {
  id: number;
  name: string;
  specialty: string;
  photo: string;
  qualifications: string;
  biography: string;
}

interface SpecialistCard {
  id: string;
  name: string;
  qualifications?: string;
  role: string;
  department: string;
  badge: string;
  icon: string;
}

async function getTeam(): Promise<TeamMember[]> {
  try {
    const res = await fetch(`${process.env.API_URL || 'http://localhost:5000'}/api/team`, { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

const DEFAULT_TEAM: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. K. Sivakumar Krishnamoorthy',
    specialty: 'Metabolic Physician & Managing Director',
    photo: '/assets/dr-sivakumar-updated.jpg',
    qualifications: 'MBBS, MD (General Medicine) · Metabolic Physician & Managing Director',
    biography: `Dr. K. Sivakumar Krishnamoorthy graduated with MBBS and MD in General Medicine from the prestigious Madurai Medical College in 2001, winning the API Gold Medal in Medicine during his undergraduate studies — one of the highest academic honours in the field.

As a physician in Kumbakonam, Dr. Sivakumar quickly observed that more than 90% of his most complex cases were patients with poorly controlled diabetes — patients who had been elsewhere but were not improving. This pattern transformed him. He chose to dedicate his practice exclusively to metabolic medicine, becoming one of the few physicians in the Cauvery delta region with deep specialisation in diabetes, obesity, and metabolic disease. Today, he practices as a Metabolic Physician — a broader, more complete lens than diabetology alone.

Dr. Sivakumar is unusual among clinicians for building his own clinical tools. In 2022, he founded DiaX.AI, a private limited company developing AI-powered clinical intelligence software for chronic disease management in India. His flagship product, Dialog EMR, now holds the complete records of over 50,000 patients and more than 2 million prescriptions — a data infrastructure that powers both clinical care and ongoing research. DiaX.AI recently received the TANSEED 7.0 startup grant from the Government of Tamil Nadu.

Dr. Sivakumar has been publishing clinical research since 2020, is a participant in landmark clinical trials including LANDMARC (Sanofi), and presented original research on insulin use patterns at the International Diabetes Federation (IDF) World Congress in Bangkok in 2025. He is a Key Opinion Leader for several leading pharmaceutical companies and a frequent invited speaker at state and national diabetes conferences.

He is a Life Member of RSSDI (Research Society for the Study of Diabetes in India), the API (Association of Physicians of India), and the IDF (International Diabetes Federation). He served as Secretary of IMA Kumbakonam, playing a key role in raising funds to construct the IMA building. He is Treasurer of the Metabolic Club, Kumbakonam, and a core organiser of KumbMetCon — the annual professional conference for metabolic medicine practitioners in Kumbakonam. He currently serves as Secretary of the API, Thanjavur chapter.`,
  },
  {
    id: 2,
    name: 'Dr. B. Lakshmi Sivakumar',
    specialty: 'Consultant Diabetologist & Director of Administration',
    photo: '/assets/dr-lakshmi.jpg',
    qualifications: 'MBBS, D.Diab · Consultant Diabetologist & Director of Administration',
    biography: `Dr. B. Lakshmi Sivakumar completed her MBBS at Government Mohan Kumaramangalam Medical College, Salem, and her specialist training in diabetology through a programme facilitated by the Steno Diabetes Centre, Denmark — one of the world's foremost diabetes research and training institutions.

Dr. Lakshmi brings a particular focus to women's health in diabetes — an area that is frequently underprioritised in general diabetes practice. She manages gestational diabetes, PCOS-related insulin resistance, and the unique metabolic challenges women face through different life stages. She has designed and launched RITAM 360, an exclusive programme for women living with diabetes or obesity, combining medical management, group and individual psychological counselling, dietary guidance, yoga, meditation, and stress management — developed in partnership with psychologist Ishwarya.

Beyond clinical practice, Dr. Lakshmi manages the administrative operations of Karunya Sugalaya — ensuring the hospital runs with the precision and care that patients deserve. She is deeply committed to patient education and community outreach, regularly organising and conducting diabetes awareness camps both inside and outside the hospital.`,
  },
];

const SENIOR_CONSULTANTS: SpecialistCard[] = [];

const SPECIALIST_CONSULTANTS: SpecialistCard[] = [
  {
    id: 'sc2',
    name: 'Mrs. L. Ramya',
    qualifications: 'M.Sc., M.Phil.',
    role: 'Dietician',
    department: 'Dietetics & Nutrition',
    badge: 'Dietician',
    icon: 'local_hospital',
  },
];

const MEDICAL_OFFICERS: SpecialistCard[] = [
  {
    id: 'mo1',
    name: 'Dr. Surendran, M.B.B.S.,',
    qualifications: 'M.B.B.S.,',
    role: 'Junior consultants',
    department: '24x7 Inpatient & Emergency Care',
    badge: '24x7 Resident Care',
    icon: 'local_hospital',
  },
  {
    id: 'mo2',
    name: 'Dr. Sameer Ali, M.B.B.S.,',
    qualifications: 'M.B.B.S.,',
    role: 'Junior consultants',
    department: '24x7 Inpatient & Emergency Care',
    badge: '24x7 Resident Care',
    icon: 'local_hospital',
  },
  {
    id: 'mo3',
    name: 'Dr. Thambidurai, M.B.B.S.,',
    qualifications: 'M.B.B.S.,',
    role: 'Junior consultants',
    department: '24x7 Inpatient & Emergency Care',
    badge: '24x7 Resident Care',
    icon: 'local_hospital',
  },
];

export default async function TeamPage() {
  let team = await getTeam();
  if (!team || team.length < 2) {
    team = DEFAULT_TEAM;
  }

  return (
    <main className="flex-grow">
      {/* Page Header */}
      <section className="bg-surface-container-low py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center border-b border-outline-variant/30">
        <div className="max-w-3xl mx-auto">
          <p className="text-[12px] font-bold text-primary tracking-widest uppercase mb-4">Our Doctors &amp; Leadership</p>
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[56px] font-bold text-on-surface mb-6">Meet the team.</h1>
          <p className="text-[18px] text-on-surface-variant leading-relaxed">
            Dedicated leadership, specialist consultants, and 24/7 resident medical officers bringing expert diabetes care to Kumbakonam.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-container-max-width mx-auto">
        <div className="flex flex-col gap-12 md:gap-16">

          {/* Founders / Managing & Medical Directors */}
          {team.slice(0, 2).map((member, index) => (
            <React.Fragment key={member.id}>
              <article className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 items-center lg:items-start">
                <div className="w-full sm:w-auto lg:w-1/3 flex flex-col items-center lg:items-start lg:sticky lg:top-28">
                  <div className="w-full max-w-[280px] sm:max-w-none sm:w-64 lg:w-80 h-72 sm:h-64 lg:h-80 rounded-3xl bg-surface-container-high overflow-hidden shadow-2xl border-4 border-white relative">
                    {member.photo ? (
                      <Image src={member.photo} alt={member.name} fill sizes="(max-width: 1024px) 280px, 320px" loading="lazy" className="object-cover object-top" />
                    ) : (
                      <>
                        <div className="absolute inset-0 pattern-bg opacity-30"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-outline/20">
                          <span className="material-symbols-outlined text-8xl">person</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="w-full lg:w-2/3">
                  <div className="inline-block px-4 py-1.5 bg-primary-container text-on-primary-container rounded-full text-[12px] font-bold tracking-widest uppercase mb-6 shadow-2xs">
                    {index === 0 ? 'Managing Director · Chief Physician' : 'Medical Director · Consultant Diabetologist'}
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-extrabold text-on-surface mb-2 break-words">{member.name}</h2>
                  <p className="text-[18px] text-primary font-bold mb-8 pb-6 border-b border-outline-variant/30 break-words">
                    {member.specialty} · <span className="text-on-surface-variant font-medium text-[16px]">{member.qualifications}</span>
                  </p>

                  <div className="space-y-6 text-[16px] text-on-surface-variant leading-relaxed whitespace-pre-line text-justify sm:text-left break-words" dangerouslySetInnerHTML={{ __html: member.biography }} />
                </div>
              </article>

              {index === 0 && <div className="w-full h-px bg-outline-variant/30 my-2"></div>}
            </React.Fragment>
          ))}

          <div className="w-full h-px bg-outline-variant/40 my-4"></div>

          {/* Senior Consultants & Patient Education */}
          {SENIOR_CONSULTANTS.length > 0 && (
            <section>
              <div className="mb-8">
                <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-1">Senior Leadership</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">Senior Diabetes Consultants</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {SENIOR_CONSULTANTS.map(card => (
                  <div key={card.id} className="bg-white border border-gray-200 p-6 sm:p-7 rounded-3xl shadow-md hover:shadow-xl hover:border-[#0D5C75]/40 transition-all flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-[#0D5C75]/10 text-[#0D5C75] flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F8FAFC] border border-gray-200 text-[#0D5C75]">
                          {card.badge}
                        </span>
                      </div>
                      <h4 className="text-xl font-extrabold text-[#0F172A] mb-1">{card.name}</h4>
                      <p className="text-sm font-bold text-[#0D5C75] mb-2">{card.qualifications}</p>
                      <p className="text-sm text-[#475569] font-medium leading-relaxed">{card.role}</p>
                    </div>
                    <div className="pt-4 mt-5 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-500">
                      <span>{card.department}</span>
                      <span className="material-symbols-outlined text-base text-[#0D5C75]">verified</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Specialist & Visiting Consultants */}
          <section>
            <div className="mb-8">
              <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-1">Specialist Network</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">Dieticians</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {SPECIALIST_CONSULTANTS.map(card => (
                <div key={card.id} className="bg-white border border-gray-200 p-6 sm:p-7 rounded-3xl shadow-md hover:shadow-xl hover:border-[#0D5C75]/40 transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] border border-gray-100 text-[#0F172A] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F8FAFC] border border-gray-200 text-[#475569]">
                        {card.badge}
                      </span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-extrabold text-[#0F172A] mb-1 leading-snug">{card.name}</h4>
                    <p className="text-sm font-bold text-[#0D5C75] mb-2">{card.qualifications}</p>
                    <p className="text-sm text-[#475569] font-medium leading-relaxed">{card.role}</p>
                  </div>
                  <div className="pt-4 mt-5 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-500">
                    <span>{card.department}</span>
                    <span className="material-symbols-outlined text-base text-emerald-600">health_and_safety</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Medical Officers (24 x 7 Care) */}
          <section className="pb-8">
            <div className="mb-8">
              <span className="text-emerald-600 font-bold text-xs tracking-widest uppercase block mb-1">Round-The-Clock Care</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">Junior consultants</h2>
              <p className="text-sm text-[#475569] mt-1.5 font-medium">
                Our resident medical officers provide continuous emergency, diagnostic, and inpatient supervision 365 days a year.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {MEDICAL_OFFICERS.map(card => (
                <div key={card.id} className="bg-[#F8FAFC] border border-gray-200/80 p-6 sm:p-7 rounded-3xl shadow-sm hover:shadow-lg hover:border-[#0D5C75]/40 transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                        <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100/60 text-emerald-800 border border-emerald-200">
                        {card.badge}
                      </span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-extrabold text-[#0F172A] mb-1">{card.name}</h4>
                    <p className="text-sm font-bold text-emerald-700 mb-2">{card.role}</p>
                    <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed">{card.department}</p>
                  </div>
                  <div className="pt-4 mt-5 border-t border-gray-200/60 flex items-center justify-between text-xs font-semibold text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      On Duty 24/7
                    </span>
                    <span className="material-symbols-outlined text-base text-emerald-600">verified_user</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </section>
    </main>
  );
}
