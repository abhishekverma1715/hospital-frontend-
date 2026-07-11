'use client';
import React from 'react';
import Link from 'next/link';
import { Video, Stethoscope, Activity, Pill, FlaskConical, CalendarPlus, ArrowUpRight } from 'lucide-react';

const quickServices = [
  {
    title: 'Teleconsultation & Remote Care',
    description: 'Connect virtually with senior diabetologists and diabetes educators from anywhere across Tamil Nadu.',
    badge: 'Digital Care',
    href: '/book?type=teleconsult',
    icon: Video,
    color: 'from-[#0D5C75] to-[#0E7490]',
    textColor: 'text-[#0D5C75]',
    bgHover: 'group-hover:bg-[#0D5C75]',
  },
  {
    title: 'Specialist Diabetes & Foot Clinic',
    description: 'Comprehensive OP consultation, biothesiometry, vascular doppler, and neuropathy prevention.',
    badge: 'Core Service',
    href: '/services#foot-care',
    icon: Stethoscope,
    color: 'from-[#0F172A] to-[#1E293B]',
    textColor: 'text-[#0F172A]',
    bgHover: 'group-hover:bg-[#0F172A]',
  },
  {
    title: 'CGM & Insulin Pump Therapy',
    description: 'Real-time Continuous Glucose Monitoring (CGM) and precision insulin pump fitting & training.',
    badge: 'Advanced Tech',
    href: '/services#cgm',
    icon: Activity,
    color: 'from-[#06B6D4] to-[#0284C7]',
    textColor: 'text-[#0E7490]',
    bgHover: 'group-hover:bg-[#0E7490]',
  },
  {
    title: '24/7 Specialized Pharmacy',
    description: 'Cold-chain assured insulins, continuous glucose sensors, and specialized diabetic medications.',
    badge: 'Doorstep Delivery',
    href: '/contact',
    icon: Pill,
    color: 'from-[#0D5C75] to-[#047857]',
    textColor: 'text-[#0D5C75]',
    bgHover: 'group-hover:bg-[#0D5C75]',
  },
  {
    title: 'CMC Vellore Certified Lab',
    description: 'Gold-standard HbA1c, renal profile, microalbuminuria screening, and automated reporting.',
    badge: 'EQAS Accredited',
    href: '/services#lab',
    icon: FlaskConical,
    color: 'from-[#475569] to-[#334155]',
    textColor: 'text-[#334155]',
    bgHover: 'group-hover:bg-[#334155]',
  },
  {
    title: 'Instant Appointment Booking',
    description: 'Fast-track your consultation slot online with zero waiting time at our Kumbakonam facility.',
    badge: 'Priority Booking',
    href: '/book',
    icon: CalendarPlus,
    color: 'from-[#E07A5F] to-[#D97706]',
    textColor: 'text-[#E07A5F]',
    bgHover: 'group-hover:bg-[#E07A5F]',
  },
];

export default function QuickBoxes() {
  return (
    <section className="py-12 sm:py-14 bg-smoke4 border-y border-gray-200 relative z-20">
      <div className="max-w-container-max-width mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#0D5C75]/10 text-[#0D5C75] text-xs font-bold uppercase tracking-wider mb-3">
              Comprehensive Facilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Everyday &amp; Advanced Diabetes Care
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {quickServices.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="group bg-[#F8FAFC] hover:bg-white p-7 rounded-2xl border border-gray-200/80 hover:border-[#0D5C75]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className={`w-6 h-6 ${item.textColor}`} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-gray-200 text-[#475569]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#0D5C75] transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#422884] group-hover:underline">
                    Explore Service
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-[#422884] group-hover:text-white group-hover:border-transparent transition-all">
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

