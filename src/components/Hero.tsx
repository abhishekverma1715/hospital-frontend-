'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight, PhoneCall, ShieldCheck, Award } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  mobileImage?: string;
  badge?: string;
  title: string;
  subtitle: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    image: '/assets/assets/abhi.jpg',
    //badge: 'Kumbakonam’s Premier Specialist Centre',
    title: 'Karunya Sugalaya Diabetes Care & Research Centre',
    subtitle: 'From Illness to Wellness — Combining 17+ years of clinical excellence under Dr. K. Sivakumar with advanced EMR and personalized endocrinology.',
  },
  {
    id: 2,
    image: '/assets/FarewellRamya.png',
    //badge: 'Advanced Sensor Technology',
    title: 'Continuous Glucose Monitoring (CGM) & Insulin Pump Center',
    subtitle: 'Real-time ambulatory continuous glucose monitoring and precision insulin pump fitting to achieve optimal HbA1c control.',
  },
  {
    id: 3,
    image: '/images/final-cta-bg.png',
    //badge: 'CMC Vellore EQAS Accredited Lab',
    title: 'World-Class Diagnostics & 12-Bed Specialist Day-Care',
    subtitle: 'Gold-standard HPLC HbA1c laboratory testing, diabetic foot salvage, biothesiometry, and digital retinopathy screening under one roof.',
  },
  {
    id: 4,
    image: '/assets/DiabetesAwareness.jpg',
    //badge: 'Trusted by 50,000+ Patients',
    title: 'Empowering Diabetes Care Across South India',
    subtitle: 'Pioneering remote tele-management (DiaX.AI) and diabetes nutrition education to support patients 365 days a year.',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 1000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="relative w-full h-[600px] sm:h-[650px] lg:h-[700px] overflow-hidden bg-[#0F172A]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-linear ${isActive ? 'scale-105' : 'scale-100'
                  }`}
              />

              {/* Gradient Overlays for readable text */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center z-10">
                <div className="max-w-container-max-width mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-left-6 duration-700">

                    {/* Badge (rendered only if present) */}
                    {slide.badge && (
                      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06B6D4]/20 border border-[#06B6D4]/40 text-cyan-300 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm">
                        <Award className="w-4 h-4 text-[#06B6D4]" />
                        <span>{slide.badge}</span>
                      </span>
                    )}

                    {/* Title (professional responsive scale: 30px -> 52px so titles fit cleanly in 2 lines) */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-sm">
                      {slide.title}
                    </h1>

                    {/* Subtitle (16px-19px balanced line-height & width) */}
                    <p className="text-base sm:text-lg lg:text-[19px] text-gray-200 leading-[1.6] font-normal max-w-2xl">
                      {slide.subtitle}
                    </p>

                    {/* CTA Action Buttons */}
                    <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5 pt-4 sm:pt-6">
                      <Link
                        href="/book"
                        className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#422884] hover:bg-[#331e67] text-white text-sm sm:text-[16px] font-semibold tracking-wide shadow-lg transition-all transform hover:-translate-y-0.5"
                      >
                        <span>Book an Appointment</span>
                        <ArrowRight className="w-5 h-5 shrink-0" />
                      </Link>

                      <a
                        href="tel:+919976379697"
                        className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-[#422884] text-white border border-white/30 hover:border-[#422884] text-sm sm:text-[16px] font-semibold backdrop-blur-md transition-all"
                      >
                        <PhoneCall className="w-4 h-4 text-red-400 animate-pulse shrink-0" />
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#422884] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#422884] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
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
