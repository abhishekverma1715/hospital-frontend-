import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Diabetes Appointment Online — Karunya Sugalaya, Kumbakonam',
  description: 'Book your diabetes consultation online with Dr. Sivakumar or Dr. Lakshmi. Mon–Sat slots, 5-minute confirmation, secure payment via Razorpay.',
};

export default function BookPage() {
  return (
    <main className="flex-grow">
      {/* Page Header */}
      <section className="bg-surface-container-low py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center border-b border-outline-variant/30">
        <div className="max-w-3xl mx-auto">
          <p className="text-[12px] font-bold text-primary tracking-widest uppercase mb-4">Book Appointment</p>
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[56px] font-bold text-on-surface mb-6">Schedule your visit.</h1>
          <p className="text-[18px] text-on-surface-variant leading-relaxed">
            Book online to guarantee your slot and avoid waiting time at the clinic.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-surface-container-lowest p-5 sm:p-8 md:p-10 lg:p-12 rounded-2xl border border-outline-variant/30 hover-elevation transition-all">
            <h3 className="text-[24px] font-bold text-on-surface mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">edit_calendar</span>
              Appointment Details
            </h3>
            
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="doctor" className="text-[14px] font-bold text-on-surface-variant">Select Doctor</label>
                <select id="doctor" className="w-full bg-surface-container-high border border-outline-variant/50 rounded-xl px-4 py-3 text-[16px] text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none" defaultValue="">
                  <option value="" disabled>Choose a specialist...</option>
                  <option value="sivakumar">Dr. K. Sivakumar (Metabolic Physician)</option>
                  <option value="lakshmi">Dr. B. Lakshmi (Diabetologist)</option>
                  <option value="any">Any Available Doctor</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="text-[14px] font-bold text-on-surface-variant">Date</label>
                  <input type="date" id="date" className="w-full bg-surface-container-high border border-outline-variant/50 rounded-xl px-4 py-3 text-[16px] text-on-surface focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="time" className="text-[14px] font-bold text-on-surface-variant">Preferred Time</label>
                  <select id="time" className="w-full bg-surface-container-high border border-outline-variant/50 rounded-xl px-4 py-3 text-[16px] text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none" defaultValue="">
                    <option value="" disabled>Select time...</option>
                    <option value="morning">Morning (10:30 AM - 2:00 PM)</option>
                    <option value="afternoon">Afternoon (3:00 PM - 6:00 PM)</option>
                    <option value="evening">Evening (7:00 PM - 9:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[14px] font-bold text-on-surface-variant">Full Name</label>
                <input type="text" id="name" className="w-full bg-surface-container-high border border-outline-variant/50 rounded-xl px-4 py-3 text-[16px] text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="Enter your full name" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-[14px] font-bold text-on-surface-variant">Phone Number</label>
                <input type="tel" id="phone" className="w-full bg-surface-container-high border border-outline-variant/50 rounded-xl px-4 py-3 text-[16px] text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="+91" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="reason" className="text-[14px] font-bold text-on-surface-variant">Reason for Visit (Optional)</label>
                <textarea id="reason" rows={3} className="w-full bg-surface-container-high border border-outline-variant/50 rounded-xl px-4 py-3 text-[16px] text-on-surface focus:outline-none focus:border-primary transition-colors resize-none" placeholder="E.g., First time consultation, routine review..."></textarea>
              </div>

              <div className="mt-4 pt-6 border-t border-outline-variant/30">
                <button type="button" className="w-full bg-[#422884] hover:bg-[#331e67] text-white px-5 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-[16px] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                  Proceed to Book
                </button>
                <p className="text-center text-[12px] text-on-surface-variant mt-4 flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">lock</span>
                  Secure 5-minute confirmation & Razorpay integration
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
