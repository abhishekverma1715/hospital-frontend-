import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-surface-container-low dark:bg-surface-container-lowest border-t border-outline-variant animate-fade-in-up visible">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
        <div className="flex flex-col gap-4">
          <span className="text-headline-sm font-headline-sm font-bold text-primary">Karunya Sugalaya</span>
          <span className="text-body-md font-body-md text-on-surface-variant">© {new Date().getFullYear()} Karunya Sugalaya Diabetes Care & Research Centre. All rights reserved.</span>
        </div>
        <div className="flex flex-col gap-3">
          <Link className="text-on-surface-variant hover:text-primary hover:underline transition-all font-body-md text-body-md" href="/contact">Contact Us</Link>
          <Link className="text-on-surface-variant hover:text-primary hover:underline transition-all font-body-md text-body-md" href="#">Privacy Policy</Link>
        </div>
        <div className="flex flex-col gap-3">
          <Link className="text-on-surface-variant hover:text-primary hover:underline transition-all font-body-md text-body-md" href="#">Terms of Service</Link>
          <Link className="text-on-surface-variant hover:text-primary hover:underline transition-all font-body-md text-body-md" href="/contact">Emergency Care</Link>
        </div>
        <div className="flex flex-col gap-3">
          <Link className="text-on-surface-variant hover:text-primary hover:underline transition-all font-body-md text-body-md" href="/team">Careers</Link>
        </div>
      </div>
    </footer>
  );
}
