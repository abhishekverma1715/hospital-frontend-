import React from 'react';
import Link from 'next/link';

export default function QuickBoxes() {
  return (
    <section className="quick-boxes">
      <div className="container">
        <div className="qb-grid">
          <div className="qb-box">
            <h3>Karunya Sugalaya</h3>
            <p>With an expertise of nearly two decades in dealing with uncontrolled Diabetes, it is a one-stop solution for all Diabetes related issues be it diagnosis, prevention or management.</p>
            <Link href="#about" className="qb-link">Read more</Link>
          </div>
          <div className="qb-box">
            {/* Background image overlay is handled in CSS */}
          </div>
          <div className="qb-box">
            <h3>For Appointment & Query</h3>
            <p>8:30 AM to 9:00 PM</p>
            <h2>+91-99763 79697</h2>
            <Link href="#book" className="qb-link" style={{ marginTop: '15px', width: 'fit-content' }}>Enquiry Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
