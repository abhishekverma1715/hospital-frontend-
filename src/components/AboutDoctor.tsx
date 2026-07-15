'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Mail, Clock, Video, Calendar, ShieldCheck, Stethoscope } from 'lucide-react';

export default function AboutDoctor() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F1F5F9] relative overflow-hidden font-sans">
      {/* Decorative background blur accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D5C75]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#06B6D4]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container-max-width mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D5C75]/10 border border-[#0D5C75]/20 text-[#0D5C75] text-xs font-bold uppercase tracking-widest mb-4">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Our Leadership &amp; Medical Specialists</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Meet Our Expert <span className="text-[#0D5C75]">Diabetologists</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            With over two decades of clinical excellence, our specialists combine evidence-based endocrinology,
            continuous glucose monitoring, and personalized lifestyle medicine at Karunya Sugalaya.
          </p>
        </div>

        {/* 4-Column / Responsive Paired Grid exactly matching reference photo layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* ========================================================= */}
          {/* COLUMN 1 (Span 3): Dr. K. Sivakumar Consulting Hours Card */}
          {/* ========================================================= */}
          <div className="md:col-span-1 lg:col-span-3 bg-white rounded-3xl p-5 sm:p-6 lg:p-7 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Consulting Hours Header */}
              <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-[#0D5C75]/10 flex items-center justify-center text-[#0D5C75] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0D5C75] leading-tight">Consulting Hours</h3>
                  <p className="text-[11px] text-gray-500 font-medium">In-Clinic Appointments</p>
                </div>
              </div>

              {/* Schedule List */}
              <div className="space-y-2.5 text-xs sm:text-sm font-medium">
                <div className="flex justify-between items-center py-1 text-gray-700 border-b border-gray-50">
                  <span>Monday</span>
                  <span className="font-bold text-[#0F172A]">9 AM – 6 PM</span>
                </div>
                <div className="flex justify-between items-center py-1 text-gray-700 border-b border-gray-50">
                  <span>Tuesday</span>
                  <span className="font-bold text-[#0F172A]">9 AM – 4 PM</span>
                </div>
                <div className="flex justify-between items-center py-1 text-gray-700 border-b border-gray-50">
                  <span>Wednesday</span>
                  <span className="font-bold text-[#0F172A]">9 AM – 4 PM</span>
                </div>
                <div className="flex justify-between items-center py-1 text-gray-700 border-b border-gray-50">
                  <span>Thursday</span>
                  <span className="font-bold text-[#0F172A]">9 AM – 4 PM</span>
                </div>
                <div className="flex justify-between items-center py-1 text-gray-700 border-b border-gray-50">
                  <span>Friday</span>
                  <span className="font-bold text-[#0F172A]">9 AM – 4 PM</span>
                </div>
                <div className="flex justify-between items-center py-1.5 text-[#F59E0B] font-bold bg-[#F59E0B]/5 px-2.5 rounded-lg">
                  <span>Saturday</span>
                  <span>9 AM – 6 PM</span>
                </div>
              </div>
            </div>

            {/* Online Video Consultation Block */}
            <div className="mt-6 pt-5 border-t border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <Video className="w-4 h-4 text-[#0D5C75]" />
                <h4 className="text-sm font-bold text-[#0D5C75]">Online Video Consultation</h4>
              </div>
              <div className="flex items-center justify-between mt-2 bg-green-50 border border-green-200 px-3 py-2 rounded-xl">
                <span className="text-xs font-semibold text-green-800">Timing</span>
                <span className="text-xs font-bold text-green-700">9 AM – 9 PM</span>
              </div>
              <p className="mt-2.5 text-[11px] font-bold text-red-600 text-center bg-red-50 py-1.5 rounded-lg border border-red-100">
                No Consultation On Sunday
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 2 (Span 3): Dr. K. Sivakumar Profile Card */}
          {/* ========================================================= */}
          <div className="md:col-span-1 lg:col-span-3 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center sm:items-stretch group h-full">
            {/* Doctor Photo */}
            <div className="relative w-full max-w-[240px] sm:max-w-none h-[260px] sm:h-64 md:h-72 lg:h-80 mx-auto sm:mx-0 mt-6 sm:mt-0 rounded-2xl sm:rounded-none bg-gradient-to-t from-amber-100 via-amber-50 to-white overflow-hidden shrink-0 shadow-md sm:shadow-none">
              <Image
                src="/assets/dr-sivakumar.jpg"
                alt="Dr. K. Sivakumar"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs text-white font-medium">
                  Renowned Diabetologist &amp; Physician
                </span>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="p-6 flex-1 flex flex-col justify-between w-full text-center sm:text-left">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                  Consultant Physician &amp; Diabetologist
                </p>
                <h3 className="text-xl font-extrabold text-[#0F172A] mt-1 group-hover:text-[#0D5C75] transition-colors break-words">
                  Dr. K. Sivakumar, M.B.B.S, M.D.,
                </h3>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed text-justify sm:text-left break-words">
                  Over 20+ years of dedicated clinical experience specializing in Diabetology, Internal
                  Medicine, and evidence-based metabolic care.
                </p>
              </div>

              {/* Direct Contact Details */}
              <div className="mt-6 pt-4 border-t border-gray-100 space-y-2.5">
                <a
                  href="tel:+919994360912"
                  className="flex items-center justify-center sm:justify-start gap-2.5 text-xs font-semibold text-gray-700 hover:text-[#0D5C75] transition-colors"
                >
                  <span className="w-7 h-7 rounded-lg bg-gray-100 group-hover:bg-[#0D5C75]/10 flex items-center justify-center text-[#0D5C75] shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <span>(+91) 9994360912</span>
                </a>
                <a
                  href="mailto:drksincere@gmail.com"
                  className="flex items-center justify-center sm:justify-start gap-2.5 text-xs font-semibold text-gray-700 hover:text-[#0D5C75] transition-colors"
                >
                  <span className="w-7 h-7 rounded-lg bg-gray-100 group-hover:bg-[#0D5C75]/10 flex items-center justify-center text-[#0D5C75] shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <span className="break-all">drksincere@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 3 (Span 3): Dr. B. Lakshmi Profile Card */}
          {/* ========================================================= */}
          <div className="md:col-span-1 lg:col-span-3 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center sm:items-stretch group h-full">
            {/* Doctor Photo */}
            <div className="relative w-full max-w-[240px] sm:max-w-none h-[260px] sm:h-64 md:h-72 lg:h-80 mx-auto sm:mx-0 mt-6 sm:mt-0 rounded-2xl sm:rounded-none bg-gradient-to-t from-yellow-100 via-amber-50 to-white overflow-hidden shrink-0 shadow-md sm:shadow-none">
              <Image
                src="/assets/dr-lakshmi.jpg"
                alt="Dr. B. Lakshmi"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs text-white font-medium">
                  Specialist Diabetologist &amp; Metabolic Expert
                </span>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="p-6 flex-1 flex flex-col justify-between w-full text-center sm:text-left">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                  Consultant Diabetologist
                </p>
                <h3 className="text-xl font-extrabold text-[#0F172A] mt-1 group-hover:text-[#0D5C75] transition-colors break-words">
                  Dr. B. Lakshmi, M.B.B.S, D. Diab.,
                </h3>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed text-justify sm:text-left break-words">
                  Specialist in gestational diabetes, comprehensive insulin management, preventive diabetic foot care,
                  and patient-centered wellness.
                </p>
              </div>

              {/* Direct Contact Details */}
              <div className="mt-6 pt-4 border-t border-gray-100 space-y-2.5">
                <a
                  href="tel:+919791906781"
                  className="flex items-center justify-center sm:justify-start gap-2.5 text-xs font-semibold text-gray-700 hover:text-[#0D5C75] transition-colors"
                >
                  <span className="w-7 h-7 rounded-lg bg-gray-100 group-hover:bg-[#0D5C75]/10 flex items-center justify-center text-[#0D5C75] shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <span>(+91) 9791906781</span>
                </a>
                <a
                  href="mailto:lakshmi@karunyasugalaya.co.in"
                  className="flex items-center justify-center sm:justify-start gap-2.5 text-xs font-semibold text-gray-700 hover:text-[#0D5C75] transition-colors"
                >
                  <span className="w-7 h-7 rounded-lg bg-gray-100 group-hover:bg-[#0D5C75]/10 flex items-center justify-center text-[#0D5C75] shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <span className="break-all">lakshmi@karunyasugalaya.co.in</span>
                </a>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 4 (Span 3): Dr. B. Lakshmi Consulting Hours Card */}
          {/* ========================================================= */}
          <div className="md:col-span-1 lg:col-span-3 bg-white rounded-3xl p-5 sm:p-6 lg:p-7 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Consulting Hours Header */}
              <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-[#0D5C75]/10 flex items-center justify-center text-[#0D5C75] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0D5C75] leading-tight">Consulting Hours</h3>
                  <p className="text-[11px] text-gray-500 font-medium">Split Shift Schedule</p>
                </div>
              </div>

              {/* Schedule List */}
              <div className="space-y-2 text-xs sm:text-sm font-medium">
                <div className="flex justify-between items-center py-1 text-gray-700 border-b border-gray-50">
                  <span>Monday</span>
                  <div className="text-right font-bold text-[#0F172A] leading-tight">
                    <div>10 AM – 2 PM</div>
                    <div className="text-xs text-gray-500">6 PM – 8 PM</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-1 text-gray-700 border-b border-gray-50">
                  <span>Tuesday</span>
                  <div className="text-right font-bold text-[#0F172A] leading-tight">
                    <div>10 AM – 2 PM</div>
                    <div className="text-xs text-gray-500">6 PM – 8 PM</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-1 text-gray-700 border-b border-gray-50">
                  <span>Wednesday</span>
                  <div className="text-right font-bold text-[#0F172A] leading-tight">
                    <div>10 AM – 2 PM</div>
                    <div className="text-xs text-gray-500">6 PM – 8 PM</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-1 text-gray-700 border-b border-gray-50">
                  <span>Thursday</span>
                  <div className="text-right font-bold text-[#0F172A] leading-tight">
                    <div>10 AM – 2 PM</div>
                    <div className="text-xs text-gray-500">6 PM – 8 PM</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-1 text-gray-700 border-b border-gray-50">
                  <span>Friday</span>
                  <div className="text-right font-bold text-[#0F172A] leading-tight">
                    <div>10 AM – 2 PM</div>
                    <div className="text-xs text-gray-500">6 PM – 8 PM</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-1.5 text-[#F59E0B] font-bold bg-[#F59E0B]/5 px-2.5 rounded-lg">
                  <span>Saturday</span>
                  <div className="text-right leading-tight">
                    <div>10 AM – 2 PM</div>
                    <div className="text-xs">6 PM – 8 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Online Video Consultation Block */}
            <div className="mt-6 pt-5 border-t border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <Video className="w-4 h-4 text-[#0D5C75]" />
                <h4 className="text-sm font-bold text-[#0D5C75]">Online Video Consultation</h4>
              </div>
              <div className="flex items-center justify-between mt-2 bg-green-50 border border-green-200 px-3 py-2 rounded-xl">
                <span className="text-xs font-semibold text-green-800">Timing</span>
                <span className="text-xs font-bold text-green-700">11 AM – 8 PM</span>
              </div>
              <p className="mt-2.5 text-[11px] font-bold text-red-600 text-center bg-red-50 py-1.5 rounded-lg border border-red-100">
                No Consultation On Sunday
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Excellence Strip */}
        <div className="mt-10 sm:mt-14 bg-white rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0D5C75]/10 flex items-center justify-center text-[#0D5C75] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#0F172A]">
                CMC Vellore Certified Diagnostics &amp; Evidence-Based Care
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                All consultations are backed by state-of-the-art laboratory testing, continuous glucose monitoring, and AI-assisted analysis.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <a
              href="/book"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] w-full sm:w-auto rounded-full bg-[#0D5C75] hover:bg-[#0B4A5E] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Book Appointment Online</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
