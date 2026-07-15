import React from 'react';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Our Doctors — Karunya Sugalaya Diabetes Centre, Kumbakonam',
  description: 'Meet Dr. K. Sivakumar (Metabolic Physician, MD, API Gold Medalist) and Dr. B. Lakshmi (Diabetologist, Steno Denmark trained). Specialist diabetes care in Kumbakonam.',
};

interface TeamMember {
  id: number;
  name: string;
  specialty: string;
  photo: string;
  qualifications: string;
  biography: string;
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
    photo: '/assets/dr-sivakumar.jpg',
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
  {
    id: 3,
    name: 'Dr. R. Aravind, MD',
    specialty: 'Consultant Diabetologist & CGM / Insulin Pump Lead',
    photo: '',
    qualifications: 'MD, Advanced Certification in Insulin Pump Therapy',
    biography: `Dr. R. Aravind oversees the Continuous Glucose Monitoring (CGM) laboratory and automated insulin pump fitting center. He works closely with telemedicine patients across regional districts to optimize remote insulin titration.`,
  },
];

export default async function TeamPage() {
  let team = await getTeam();
  if (!team || team.length === 0) {
    team = DEFAULT_TEAM;
  }

  return (
    <main className="flex-grow">
      {/* Page Header */}
      <section className="bg-surface-container-low py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center border-b border-outline-variant/30">
        <div className="max-w-3xl mx-auto">
          <p className="text-[12px] font-bold text-primary tracking-widest uppercase mb-4">Our Doctors</p>
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[56px] font-bold text-on-surface mb-6">Meet the team.</h1>
          <p className="text-[18px] text-on-surface-variant leading-relaxed">
            Dedicated specialists bringing expert, personalised diabetes care to Kumbakonam and the Cauvery delta region.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-container-max-width mx-auto">
        <div className="flex flex-col gap-12 md:gap-14">
          {/* Founders / Top Two Members */}
              {team.slice(0, 2).map((member, index) => (
                <React.Fragment key={member.id}>
                  <article className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 items-center lg:items-start">
                    <div className="w-full sm:w-auto lg:w-1/3 flex flex-col items-center lg:items-start lg:sticky lg:top-28">
                      <div className="w-full max-w-[280px] sm:max-w-none sm:w-64 lg:w-80 h-72 sm:h-64 lg:h-80 rounded-2xl bg-surface-container-high overflow-hidden shadow-xl border border-outline-variant/30 relative">
                        {member.photo ? (
                          <img src={member.photo} alt={member.name} className="absolute inset-0 w-full h-full object-cover object-top" />
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
                      <div className="inline-block px-4 py-1.5 bg-primary-container text-on-primary-container rounded-full text-[12px] font-bold tracking-widest uppercase mb-6">
                        {member.qualifications || 'Consultant'}
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-bold text-on-surface mb-2 break-words">{member.name}</h2>
                      <p className="text-[18px] text-primary font-medium mb-10 pb-6 border-b border-outline-variant/30 break-words">
                        {member.specialty}
                      </p>
                      
                      <div className="space-y-6 text-[16px] text-on-surface-variant leading-relaxed whitespace-pre-line text-justify sm:text-left break-words" dangerouslySetInnerHTML={{ __html: member.biography }} />
                    </div>
                  </article>
                  
                  {index === 0 && team.length > 1 && <div className="w-full h-px bg-outline-variant/30"></div>}
                  {index === 1 && team.length > 2 && <div className="w-full h-px bg-outline-variant/30"></div>}
                </React.Fragment>
              ))}

              {/* Junior Consultants / Remaining Members */}
              {team.length > 2 && (
                <section className="pb-12">
                  <h2 className="text-[32px] font-bold text-on-surface mb-8">Junior Consultants</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {team.slice(2).map(junior => (
                      <div key={junior.id} className="bg-surface-container-lowest border border-outline-variant/30 p-4 sm:p-6 rounded-2xl flex items-center gap-4 sm:gap-6 hover-elevation transition-all">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center flex-shrink-0 overflow-hidden relative">
                          {junior.photo ? (
                             <img src={junior.photo} alt={junior.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                          ) : (
                            <span className="material-symbols-outlined text-3xl">stethoscope</span>
                          )}
                        </div>
                        <div>
                          <h4 className="text-[20px] font-bold text-on-surface mb-1">{junior.name}</h4>
                          <p className="text-[14px] text-primary font-bold mb-2">{junior.specialty}</p>
                          {junior.biography && (
                            <p className="text-[14px] text-on-surface-variant flex items-center gap-2">
                              <span className="material-symbols-outlined text-sm">schedule</span> {junior.biography}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
        </div>
      </section>
    </main>
  );
}
