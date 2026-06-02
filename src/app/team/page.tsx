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

export default async function TeamPage() {
  const team = await getTeam();

  return (
    <main className="flex-grow">
      {/* Page Header */}
      <section className="bg-surface-container-low py-16 md:py-24 px-margin-mobile md:px-margin-desktop text-center border-b border-outline-variant/30">
        <div className="max-w-3xl mx-auto">
          <p className="text-[12px] font-bold text-primary tracking-widest uppercase mb-4">Our Doctors</p>
          <h1 className="text-[48px] leading-[56px] font-bold text-on-surface mb-6">Meet the team.</h1>
          <p className="text-[18px] text-on-surface-variant leading-relaxed">
            Dedicated specialists bringing expert, personalised diabetes care to Kumbakonam and the Cauvery delta region.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
        <div className="flex flex-col gap-20">
          
          {team.length === 0 ? (
            <div className="text-center text-on-surface-variant">No team members found.</div>
          ) : (
            <>
              {/* Founders / Top Two Members */}
              {team.slice(0, 2).map((member, index) => (
                <React.Fragment key={member.id}>
                  <article className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                    <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start sticky top-28">
                      <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-surface-container-high overflow-hidden shadow-lg border border-outline-variant/30 relative">
                        {member.photo ? (
                          <img src={member.photo} alt={member.name} className="absolute inset-0 w-full h-full object-cover" />
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
                      <h2 className="text-[40px] leading-[48px] font-bold text-on-surface mb-2">{member.name}</h2>
                      <p className="text-[18px] text-primary font-medium mb-10 pb-6 border-b border-outline-variant/30">
                        {member.specialty}
                      </p>
                      
                      <div className="space-y-6 text-[16px] text-on-surface-variant leading-relaxed whitespace-pre-line" dangerouslySetInnerHTML={{ __html: member.biography }} />
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
                      <div key={junior.id} className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-2xl flex items-center gap-6 hover-elevation transition-all">
                        <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center flex-shrink-0 overflow-hidden relative">
                          {junior.photo ? (
                             <img src={junior.photo} alt={junior.name} className="absolute inset-0 w-full h-full object-cover" />
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
            </>
          )}

        </div>
      </section>
    </main>
  );
}
