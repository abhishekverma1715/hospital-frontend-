'use client';
import React, { useState, useEffect } from 'react';

export default function EmergencyButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="tel:+919976379697"
      className="fixed bottom-6 right-6 z-50 bg-error text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Emergency Call"
    >
      <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>
        emergency
      </span>
    </a>
  );
}