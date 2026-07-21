'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
    title: 'Karunya Sugalaya Diabetes Care & Research Centre Pvt Ltd',
    subtitle: 'From Illness to Wellness — Combining 25+ years of clinical excellence under Dr. K. Sivakumar with advanced EMR and personalized endocrinology.',
  },
  {
    id: 2,
    image: '/assets/assets/slider2.png',
    //badge: 'Advanced Sensor Technology',
    title: 'Karunya Sugalaya - RITAM 360 ',
    subtitle: 'RITAM 360 – Wellness That Lasts a Lifetime',
  },

  {
    id: 3,
    image: '/assets/assets/image02.png',
    //badge: 'CMC Vellore EQAS  Lab',
    title: 'Karunya Sugalaya - Reception & Information Desk',
    subtitle: 'Your Health, Our Highest Priority',
  },
  {
    id: 4,
    image: '/assets/assets/slider3.jpeg',
    //badge: 'CMC Vellore EQAS  Lab',
    title: 'Karunya Sugalaya - Foot care services',
    subtitle: 'Comprehensive Diabetic Foot Care & Wound Management.',
  },
  {
    id: 5,
    image: '/assets/assets/slider4.jpeg',
    //badge: 'Trusted by 50,000+ Patients',
    title: 'Karunya Sugalaya - Obesity clinic',
    subtitle: 'Obesity Clinic – Your Journey to a Healthier Life Starts Here',
  },
  {
    id: 6,
    image: '/assets/assets/slider5.jpeg',
    //badge: 'Trusted by 50,000+ Patients',
    title: 'Karunya Sugalaya - Lab facility',
    subtitle: 'Advanced Laboratory Services with Accurate Diagnostics.',
  },
  {
    id: 7,
    image: '/assets/assets/slider6.jpeg',
    //badge: 'Trusted by 50,000+ Patients',
    title: 'Karunya Sugalaya - Pharmacy ',
    subtitle: 'Your Health, Our Priority—Quality Medicines Every Time.',
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
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="relative w-full h-[260px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[650px] sm:h-[70svh] lg:h-[75svh] max-h-[800px] overflow-hidden bg-[#0F172A]"
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
              {/* Background Image (Optimized via Next.js Image for LCP & WebP) */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "auto"}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="100vw"
                className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-linear ${isActive ? 'scale-105' : 'scale-100'
                  }`}
              />

              {/* Gradient Overlays for readable text — active on sm+ where text is visible */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/60 to-transparent hidden sm:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent hidden sm:block" />

              {/* Content Overlay — hidden on mobile view as requested, shown on tablet & desktop (sm+) */}
              <div className="absolute inset-0 hidden sm:flex items-center z-10">
                <div className="max-w-container-max-width mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl space-y-3 sm:space-y-4 lg:space-y-6">

                    {/* Badge (rendered only if present) */}
                    {slide.badge && (
                      <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#06B6D4]/20 border border-[#06B6D4]/40 text-cyan-300 text-[11px] sm:text-xs font-bold tracking-wide uppercase shadow-sm">
                        <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#06B6D4]" />
                        <span>{slide.badge}</span>
                      </span>
                    )}

                    {/* Title — responsive scale */}
                    <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-sm">
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-base md:text-lg lg:text-[19px] text-gray-200 leading-[1.6] font-normal max-w-2xl break-words">
                      {slide.subtitle}
                    </p>

                    {/* CTA Action Buttons — Sleek & Professional on Mobile */}
                    <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3.5 pt-2 sm:pt-4 lg:pt-6">
                      <Link
                        href="/book"
                        className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-4 sm:px-6 lg:px-7 py-2.5 sm:py-3.5 lg:py-4 min-h-[44px] rounded-full bg-[#422884] hover:bg-[#331e67] text-white text-xs sm:text-[15px] lg:text-[16px] font-semibold tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                      >
                        <span>Book an Appointment</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
                      </Link>

                      <a
                        href="tel:+919976379697"
                        className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-4 sm:px-6 lg:px-7 py-2.5 sm:py-3.5 lg:py-4 min-h-[44px] rounded-full bg-white/10 hover:bg-[#422884] text-white border border-white/30 hover:border-[#422884] text-xs sm:text-[15px] lg:text-[16px] font-semibold backdrop-blur-md transition-all shadow-sm"
                      >
                        <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400 animate-pulse shrink-0" />
                        <span>Emergency: 99763 79697</span>
                      </a>
                    </div>

                    {/* Trust Line */}
                    <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-gray-300">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#06B6D4]" />
                        <span>CMC Vellore EQAS Verified</span>
                      </div>
                      <span className="text-gray-500 hidden sm:inline">•</span>
                      <span className="hidden sm:inline">Open Monday – Saturday</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Prev / Next Navigation Arrows — hidden on small mobile */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-[#422884] text-white backdrop-blur-md border border-white/20 items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-[#422884] text-white backdrop-blur-md border border-white/20 items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-2.5">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${index === currentSlide
              ? 'w-7 sm:w-9 h-2 sm:h-2.5 bg-[#06B6D4] shadow-md'
              : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 hover:bg-white/70'
              }`}
          />
        ))}
      </div>
    </section>
  );
}
