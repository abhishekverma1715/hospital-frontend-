'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight, PhoneCall, ShieldCheck, Award } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  mobileImage?: string;
  badge: string;
  title: string;
  subtitle: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    image: '/assets/assets/abhi.jpg',
    badge: 'Kumbakonam’s Premier Specialist Centre',
    title: 'Karunya Sugalaya Diabetes Care & Research Centre',
    subtitle: 'From Illness to Wellness — Combining 17+ years of clinical excellence under Dr. K. Sivakumar with advanced EMR and personalized endocrinology.',
  },
  {
    id: 2,
    image: '/assets/FarewellRamya.png',
    badge: 'Advanced Sensor Technology',
    title: 'Continuous Glucose Monitoring (CGM) & Insulin Pump Center',
    subtitle: 'Real-time ambulatory continuous glucose monitoring and precision insulin pump fitting to achieve optimal HbA1c control.',
  },
  {
    id: 3,
    image: '/assets/hospital.jpg',
    badge: 'CMC Vellore EQAS Accredited Lab',
    title: 'World-Class Diagnostics & 12-Bed Specialist Day-Care',
    subtitle: 'Gold-standard HPLC HbA1c laboratory testing, diabetic foot salvage, biothesiometry, and digital retinopathy screening under one roof.',
  },
  {
    id: 4,
    image: '/assets/DiabetesAwareness.jpg',
    badge: 'Trusted by 50,000+ Patients',
    title: 'Empowering Diabetes Care Across South India',
    subtitle: 'Pioneering remote tele-management (DiaX.AI) and diabetes nutrition education to support patients 365 days a year.',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 3500ms
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0F172A] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hospital Highlights Carousel"
    >
      {/* Slider Container */}
      <div className="relative w-full h-[480px] sm:h-[560px] lg:h-[640px]">
        {SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                }`}
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transform scale-100 transition-transform duration-[4000ms] ease-out"
                style={{ transform: isActive ? 'scale(1.04)' : 'scale(1)' }}
              />

              {/* Gradient Overlays for readable text */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center z-10">
                <div className="max-w-container-max-width mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-xl space-y-5 animate-in fade-in slide-in-from-left-6 duration-700">

                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06B6D4]/20 border border-[#06B6D4]/40 text-cyan-300 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm">
                      <Award className="w-4 h-4 text-[#06B6D4]" />
                      <span>{slide.badge}</span>
                    </span>

                    {/* Title (48px-72px desktop, responsive scaling on mobile) */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold text-white tracking-tight leading-[1.12]">
                      {slide.title}
                    </h1>

                    {/* Subtitle (18px-22px with proper line-height) */}
                    <p className="text-lg sm:text-xl lg:text-[20px] text-gray-100 leading-[1.65] font-normal">
                      {slide.subtitle}
                    </p>

                    {/* CTA Action Buttons (15px-17px semi-bold) */}
                    <div className="flex flex-wrap items-center gap-4 pt-8">
                      <Link
                        href="/book"
                        className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#0D5C75] hover:bg-[#0A475C] text-white text-[15px] sm:text-[16px] font-semibold tracking-wide shadow-lg transition-all transform hover:-translate-y-0.5"
                      >
                        <span>Book an Appointment</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>

                      <a
                        href="tel:+919976379697"
                        className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 text-[15px] sm:text-[16px] font-semibold backdrop-blur-md transition-all"
                      >
                        <PhoneCall className="w-4 h-4 text-red-400 animate-pulse" />
                        <span>Emergency: 99763 79697</span>
                      </a>
                    </div>

                    {/* Trust Line */}
                    <div className="pt-2 flex items-center gap-4 text-xs text-gray-300">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#06B6D4]" />
                        <span>CMC Vellore EQAS Verified</span>
                      </div>
                      <span className="text-gray-500">•</span>
                      <span>Open Monday – Saturday</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Prev / Next Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#0D5C75] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#0D5C75] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${index === currentSlide
              ? 'w-9 h-2.5 bg-[#06B6D4] shadow-md'
              : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
              }`}
          />
        ))}
      </div>
    </section>
  );
}
