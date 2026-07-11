import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Contact & Location — Karunya Sugalaya, Kumbakonam',
  description: '9, Ramasami Kovil West Street, Kumbakonam – 612001. +91 99763 79697. Mon–Sat consultations. 24×7 emergency diabetes care.',
};

export default function ContactPage() {
  return (
    <main className="flex-grow">
      {/* Page Header with Reception Background Image */}
      <section
        className="relative overflow-hidden py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center md:bg-right text-white"
        style={{ backgroundImage: "url('/images/contact-hero-bg.jpg')" }}
      >
        {/* Dark Teal Gradient Overlay for optimal readability on left without obscuring reception scene on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/85 to-[#0F172A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />

        <div className="max-w-container-max-width mx-auto relative z-10">
          <div className="max-w-2xl text-left">
            <span className="inline-block px-3.5 py-1 bg-white/10 backdrop-blur-md text-cyan-300 font-bold rounded-full text-xs tracking-widest uppercase mb-4 border border-white/15 shadow-sm">
              Find Us
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] font-extrabold tracking-tight text-white mb-4 drop-shadow-sm">
              Visit Karunya Sugalaya.
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              Located in the heart of Kumbakonam — easily accessible from Thanjavur, Nagapattinam, and the surrounding districts of the Cauvery delta.
            </p>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-container-max-width mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Info & Details */}
        <div className="flex flex-col gap-12">
          
          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 hover-elevation transition-all">
            <h2 className="text-[24px] font-bold text-on-surface mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">info</span>
              Contact Details
            </h2>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-on-surface-variant mt-1">location_on</span>
                <div>
                  <div className="text-[14px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Address</div>
                  <p className="text-[16px] text-on-surface leading-relaxed">9, Ramasami Kovil West Street, Kumbakonam – 612001, Tamil Nadu, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-on-surface-variant mt-1">phone</span>
                <div>
                  <div className="text-[14px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Phone</div>
                  <a href="tel:+919976379697" className="block text-[16px] text-primary font-bold hover:underline mb-1">+91 99763 79697</a>
                  <a href="tel:+914352430333" className="block text-[16px] text-on-surface hover:text-primary transition-colors">+91 435-2430333</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-error mt-1">emergency</span>
                <div>
                  <div className="text-[14px] font-bold text-error uppercase tracking-wider mb-1">Emergency (24×7)</div>
                  <a href="tel:+919976379697" className="block text-[18px] text-error font-extrabold hover:underline">+91 99763 79697</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-on-surface-variant mt-1">mail</span>
                <div>
                  <div className="text-[14px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Email</div>
                  <a href="mailto:contact@karunyasugalaya.co.in" className="text-[16px] text-primary font-bold hover:underline">contact@karunyasugalaya.co.in</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#25D366] mt-1">chat</span>
                <div>
                  <div className="text-[14px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">WhatsApp</div>
                  <a href="https://wa.me/919976379697" target="_blank" rel="noopener noreferrer" className="text-[16px] text-[#25D366] font-bold hover:underline">+91 99763 79697</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary-container text-on-primary-container p-8 rounded-2xl flex flex-col items-center text-center">
             <span className="material-symbols-outlined text-[48px] mb-4">calendar_month</span>
             <h2 className="text-[24px] font-bold mb-2">Book an Appointment</h2>
             <p className="text-[16px] opacity-90 mb-6">Booking an appointment guarantees your time slot and avoids waiting time.</p>
             <Link href="/book" className="bg-[#422884] hover:bg-[#331e67] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-transform">
               Book Online Now
             </Link>
          </div>

        </div>

        {/* Map & Clinic Hours */}
        <div className="flex flex-col gap-12">
          
          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 hover-elevation transition-all">
            <h2 className="text-[24px] font-bold text-on-surface mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
              Clinic Hours
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody className="divide-y divide-outline-variant/50">
                  <tr className="hover:bg-surface-container-low transition-colors duration-200">
                    <td className="py-4 pr-4 align-top">
                      <div className="text-[16px] font-bold text-on-surface">Dr. K. Sivakumar</div>
                      <div className="text-[12px] text-on-surface-variant">Mon – Sat</div>
                    </td>
                    <td className="py-4 text-[14px] text-on-surface-variant">
                      <div className="mb-1">11:30 AM – 2:00 PM</div>
                      <div>3:00 PM – 6:00 PM</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors duration-200">
                    <td className="py-4 pr-4 align-top">
                      <div className="text-[16px] font-bold text-on-surface">Dr. B. Lakshmi</div>
                      <div className="text-[12px] text-on-surface-variant">Mon – Sat</div>
                    </td>
                    <td className="py-4 text-[14px] text-on-surface-variant">
                      <div className="mb-1">10:30 AM – 2:00 PM</div>
                      <div className="mb-1">3:00 PM – 5:00 PM</div>
                      <div>7:00 PM – 9:00 PM</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors duration-200">
                    <td className="py-4 pr-4">
                      <div className="text-[16px] font-bold text-on-surface">Junior Consultants</div>
                      <div className="text-[12px] text-on-surface-variant">Mon – Sat</div>
                    </td>
                    <td className="py-4 text-[14px] text-on-surface-variant">
                      During clinic hours
                    </td>
                  </tr>
                  <tr className="bg-error-container/20">
                    <td className="py-4 pr-4">
                      <div className="text-[16px] font-bold text-error">Sunday</div>
                    </td>
                    <td className="py-4 text-[14px] text-error">
                      No consultation. Emergency care only — call <strong className="font-bold">+91 99763 79697</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-surface-container-highest p-8 rounded-2xl border border-outline-variant/30">
            <h2 className="text-[20px] font-bold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">directions_walk</span>
              Walk-in Policy
            </h2>
            <p className="text-[16px] text-on-surface-variant leading-relaxed">
              Walk-ins are welcome at Karunya Sugalaya. However, booking an appointment online or by phone guarantees your time slot and avoids waiting time. For planned consultations, we recommend booking at least one day in advance.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}
