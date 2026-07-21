'use client';
import React from 'react';
import Link from 'next/link';
import { Video, Stethoscope, Activity, Pill, FlaskConical, CalendarPlus, ArrowUpRight, Building2, Sparkles, HeartPulse, CheckCircle2 } from 'lucide-react';

const quickServices = [
  {
    title: '24/7 General & Core Service',
    description: 'Round-the-clock multidisciplinary hospital infrastructure ensuring uninterrupted diagnostic, clinical, and emergency support.',
    badge: '24/7 Available',
    href: '/services',
    icon: Building2,
    color: 'from-[#0D5C75] to-[#0E7490]',
    textColor: 'text-[#0D5C75]',
    items: [
      'Out Patient (OP) Consultation',
      'In Patient (IP) Care & Admission',
      '24/7 Lab & Advanced Diagnostic',
      '24/7 Specialized Pharmacy',
    ],
  },
  {
    title: '24/7 Diabetic Care Service',
    description: 'Specialized end-to-end management for all types of diabetes and multi-organ complication prevention & salvage.',
    badge: 'Specialist Care',
    href: '/services#foot-care',
    icon: Activity,
    color: 'from-[#0F172A] to-[#1E293B]',
    textColor: 'text-[#0F172A]',
    items: [
      'Type 1 & Type 2 Diabetes Management',
      'Diabetic Foot Care & Ulcer Salvage',
      'Diabetic Retinopathy Screening',
      'Neuropathy & Nephropathy Care',
    ],
  },
  {
    title: 'Digital & Remote Services',
    description: 'Connect with our senior diabetologists and educators from anywhere across Tamil Nadu with continuous digital monitoring.',
    badge: 'Virtual Care',
    href: '/book?type=teleconsult',
    icon: Video,
    color: 'from-[#06B6D4] to-[#0284C7]',
    textColor: 'text-[#0E7490]',
    items: [
      'Telemedicine Video Consultation',
      'Home Visit Medical Consultation',
      '365-Day Continuous Remote Care',
      'Digital Health Records Access',
    ],
  },
  {
    title: '24/7 General Disorders Clinic',
    description: 'Expert primary and emergency medical management for common acute infections, fevers, and chronic metabolic illnesses.',
    badge: 'Everyday Healthcare',
    href: '/conditions',
    icon: HeartPulse,
    color: 'from-[#0D5C75] to-[#047857]',
    textColor: 'text-[#0D5C75]',
    items: [
      'Fever, Cold & Cough Management',
      'Hypertension (Blood Pressure Care)',
      'Hypercholesterolemia Management',
      'Thyroid & Hormonal Disorders Clinic',
    ],
  },
  {
    title: 'Added Value & Wellness Services',
    description: 'Holistic preventive health programs designed for complete metabolic optimization, foot biomechanics, and longevity.',
    badge: 'Preventive Programs',
    href: '/services#wellness',
    icon: Sparkles,
    color: 'from-[#475569] to-[#334155]',
    textColor: 'text-[#334155]',
    items: [
      'Master Health Check-Up Packages',
      'Scientific Obesity Management',
      'Customised Diabetic Footwear',
      'RITAM 360° Holistic Care Program',
    ],
  },
  {
    title: 'Instant Consultation Booking',
    description: 'Fast-track your hospital consultation or virtual review online. Experience priority scheduling with zero waiting time.',
    badge: 'Priority Booking',
    href: '/book',
    icon: CalendarPlus,
    color: 'from-[#E07A5F] to-[#D97706]',
    textColor: 'text-[#E07A5F]',
    items: [
      'Instant Online Slot Confirmation',
      'Zero Waiting Time at Hospital',
      'Priority Video Teleconsultation',
      'Dedicated Patient Care Helpline',
    ],
  },
];

export default function QuickBoxes() {
  return (
    <section className="py-14 sm:py-16 bg-[#F8FAFC] border-y border-gray-200 relative z-20">
      <div className="max-w-container-max-width mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#0D5C75]/10 text-[#0D5C75] text-xs font-bold uppercase tracking-wider mb-3">
              Comprehensive Facilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              General &amp; Diabetic Care For All
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0D5C75] hover:text-[#06B6D4] transition-colors"
          >
            <span>View All Specialities</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {quickServices.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="group bg-white hover:bg-[#F8FAFC] p-6 sm:p-8 rounded-3xl border border-gray-200/80 hover:border-[#0D5C75]/40 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5 h-full"
              >
                <div className="flex flex-col flex-grow">
                  {/* Top Header Badge & Icon */}
                  <div className="flex items-center justify-between gap-3 mb-6 shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] shadow-sm border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                      <IconComponent className={`w-6 h-6 ${item.textColor}`} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F8FAFC] border border-gray-200 text-[#475569] shrink-0">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title (fixed min height for perfect row symmetry) */}
                  <h3 className="text-xl sm:text-[22px] font-extrabold text-[#0F172A] group-hover:text-[#0D5C75] transition-colors mb-3 leading-snug min-h-[52px] flex items-center">
                    {item.title}
                  </h3>

                  {/* Description (fixed min height so checklists always start at the exact same vertical position across columns) */}
                  <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed mb-6 min-h-[66px]">
                    {item.description}
                  </p>

                  {/* Extracted Service Points List (Flex Grow so card bottom lines up perfectly) */}
                  <div className="space-y-3 pt-5 border-t border-gray-200/60 mb-6 flex-grow">
                    {item.items.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-[#1E293B]">
                        <CheckCircle2 className={`w-4 h-4 ${item.textColor} shrink-0 mt-0.5`} />
                        <span className="leading-tight">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer (anchored symmetrically at the bottom of every card) */}
                <div className="pt-5 border-t border-gray-200/60 flex items-center justify-between shrink-0">
                  <span className="text-xs font-bold text-[#422884] group-hover:underline">
                    Explore Details &amp; Book
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F8FAFC] border border-gray-200 flex items-center justify-center group-hover:bg-[#422884] group-hover:text-white group-hover:border-transparent transition-all shadow-sm shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

