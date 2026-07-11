'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Calendar, ArrowUp } from 'lucide-react';

function WhatsAppLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.28.072.383-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.601.723 4.913 2.034 1.312 1.311 2.034 3.057 2.033 4.913-.001 3.825-3.113 6.933-6.946 6.933z" />
    </svg>
  );
}

export default function FloatingContactButtons() {
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-end gap-3.5">
      {/* 1. WhatsApp Floating Button */}
      <div className="relative flex items-center group">
        <span
          className={`absolute right-14 whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#0F172A] text-white text-xs font-semibold shadow-lg transition-all duration-200 pointer-events-none ${hoveredBtn === 'whatsapp' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
            }`}
        >
          Chat on WhatsApp
        </span>
        <a
          href="https://wa.me/919976379697?text=Hello%20Karunya%20Sugalaya%2C%20I%20would%20like%20to%20book%20an%20appointment%20or%20inquire%20about%20diabetes%20care."
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredBtn('whatsapp')}
          onMouseLeave={() => setHoveredBtn(null)}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppLogo className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </a>
      </div>

      {/* 2. Phone Call Floating Button */}
      <div className="relative flex items-center group">
        <span
          className={`absolute right-14 whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#0F172A] text-white text-xs font-semibold shadow-lg transition-all duration-200 pointer-events-none ${hoveredBtn === 'phone' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
            }`}
        >
          Call: +91 99763 79697
        </span>
        <a
          href="tel:+919976379697"
          onMouseEnter={() => setHoveredBtn('phone')}
          onMouseLeave={() => setHoveredBtn(null)}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0084FF] hover:bg-[#0073e6] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
          aria-label="Call Hospital Helpline"
        >
          <Phone className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
        </a>
      </div>

      {/* 3. Book Appointment Floating Button */}
      <div className="relative flex items-center group">
        <span
          className={`absolute right-14 whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#0F172A] text-white text-xs font-semibold shadow-lg transition-all duration-200 pointer-events-none ${hoveredBtn === 'book' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
            }`}
        >
          Book Appointment
        </span>
        <Link
          href="/book"
          onMouseEnter={() => setHoveredBtn('book')}
          onMouseLeave={() => setHoveredBtn(null)}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F59E0B] hover:bg-[#d98b09] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
          aria-label="Book Appointment Online"
        >
          <Calendar className="w-6 h-6 sm:w-7 sm:h-7" />
        </Link>
      </div>

      {/* 4. Scroll to Top Floating Button */}

    </div>
  );
}
