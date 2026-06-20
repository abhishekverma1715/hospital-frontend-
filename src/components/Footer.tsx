import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-surface-container-low dark:bg-surface-container-lowest border-t border-outline-variant animate-fade-in-up visible">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src="/assets/Logohosp.jpg" alt="Karunya Sugalaya Logo" className="h-10 w-auto object-contain" />
            <span className="text-headline-sm font-headline-sm font-bold text-primary">Karunya Sugalaya</span>
          </div>
          <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
            Kumbakonam's trusted diabetes care centre since 2008. 50,000+ patients, AI-assisted diagnosis, CMC Vellore certified lab.
          </p>
          <span className="text-body-md font-body-md text-on-surface-variant">© {new Date().getFullYear()} Karunya Sugalaya Diabetes Care & Research Centre. All rights reserved.</span>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-on-surface mb-2">Quick Links</h4>
          <Link className="text-on-surface-variant hover:text-primary transition-all font-body-md text-body-md" href="/team">Our Team</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-all font-body-md text-body-md" href="/services">Services</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-all font-body-md text-body-md" href="/conditions">Conditions</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-all font-body-md text-body-md" href="/education">Education</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-all font-body-md text-body-md" href="/research">Research</Link>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-on-surface mb-2">Contact Info</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-[20px] mt-1">location_on</span>
              <span className="text-body-md text-on-surface-variant">
                9, Ramasami Kovil West Street,<br />
                Kumbakonam – 612001,<br />
                Tamil Nadu, India
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">phone</span>
              <a href="tel:+919976379697" className="text-body-md text-on-surface-variant hover:text-primary">+91 99763 79697</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">email</span>
              <a href="mailto:contact@karunyasugalaya.co.in" className="text-body-md text-on-surface-variant hover:text-primary">contact@karunyasugalaya.co.in</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-on-surface mb-2">Emergency & Hours</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-error font-bold">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
              <a href="tel:+919976379697" className="hover:underline">24×7 Emergency: +91 99763 79697</a>
            </div>
            <div className="text-body-md text-on-surface-variant">
              <p className="font-semibold mb-1">Clinic Hours:</p>
              <p>Mon – Sat: 10:30 AM – 9:00 PM</p>
              <p>Sunday: Emergency Only</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#c8731f] text-[20px]">verified_user</span>
              <span className="text-body-md text-on-surface-variant">CMC Vellore Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
