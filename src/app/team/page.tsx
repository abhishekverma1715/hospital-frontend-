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
    name: 'Dr. K. Sivakumar, M.B.B.S, M.D.,',
    specialty: 'Consultant Physician & Diabetologist',
    photo: '/assets/dr-sivakumar-updated.jpg',
    qualifications: 'M.B.B.S, M.D. - Medicine, 20+ Years Experience in Diabetology',
    biography: `Dr. K. Sivakumar is a renowned consultant physician and diabetologist in Kumbakonam, Tamil Nadu with over two decades of clinical excellence. He founded Karunya Sugalaya to transform diabetes therapy into comprehensive, patient-centered care.

Under his leadership, the hospital pioneered electronic medical records (Dialog EMR), AI support tools (DiaX.AI), and Continuous Glucose Monitoring (CGM) protocols treating more than 50,000 patients across South India.`,
  },
  {
    id: 2,
    name: 'Dr. B. Lakshmi, M.B.B.S, D. Diab.,',
    specialty: 'Consultant Diabetologist & Women’s Metabolic Care Specialist',
    photo: '/assets/dr-lakshmi.jpg',
    qualifications: 'M.B.B.S, D. Diab., Comprehensive Insulin & Gestational Care',
    biography: `Dr. B. Lakshmi heads the Diabetic Foot & Neuropathy Prevention Unit and the RITAM Holistic Women's Diabetes Care Program at Karunya Sugalaya. Specializing in gestational diabetes mellitus (GDM) and endocrine care, her consults are unhurried, thorough, and focused on preventive wellness.`,
  },
];

const SENIOR_CONSULTANTS: SpecialistCard[] = [];

const SPECIALIST_CONSULTANTS: SpecialistCard[] = [
  {
    id: 'sc1',
    name: 'Dr. Ananth MS., (General Surgeon)',
    qualifications: 'MS (General Surgery)',
    role: 'Consultant Surgeon',
    department: 'Surgical & Diabetic Foot Care',
    badge: 'Visiting Specialist',
    icon: 'medical_services',
  },
  {
    id: 'sc2',
    name: 'Dr. Alaguraja MD., (Pulmonary Medicine)',
    qualifications: 'MD (Pulmonary Medicine)',
    role: 'Consultant Pulmonologist',
    department: 'Respiratory & Chest Medicine',
    badge: 'Visiting Specialist',
    icon: 'pulmonology',
  },
];

const MEDICAL_OFFICERS: SpecialistCard[] = [
  {
    id: 'mo1',
    name: 'Dr. Surendran M.B.B.S.,',
    qualifications: 'M.B.B.S.,',
    role: 'Medical Officer',
    department: '24x7 Inpatient & Emergency Care',
    badge: '24x7 Resident Care',
    icon: 'local_hospital',
  },
  {
    id: 'mo2',
    name: 'Dr. Sameer Ali M.B.B.S.,',
    qualifications: 'M.B.B.S.,',
    role: 'Medical Officer',
    department: '24x7 Inpatient & Emergency Care',
    badge: '24x7 Resident Care',
    icon: 'local_hospital',
  },
  {
    id: 'mo3',
    name: 'Dr. Thambidurai M.B.B.S.,',
    qualifications: 'M.B.B.S.,',
    role: 'Medical Officer',
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
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">Consultants &amp; Specialists</h2>
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
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">Medical Officers (24 X 7)</h2>
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
