import React from 'react';
import Link from 'next/link';
import { Stethoscope, HeartPulse, Microscope } from 'lucide-react';

export default function Expertise() {
  return (
    <section id="expertise" className="section-padding expertise-section">
      <div className="container">
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '10px' }}>
          <h2>Our <span className="text-theme">Expertise</span></h2>
          <div className="title-icon">
            <span></span> ⚕ <span></span>
          </div>
          <p>All Diabetes Facilities Under One Roof</p>
        </div>
        
        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card">
            <div className="sc-icon">👨‍⚕️</div>
            <h3>Type 1 & 2 Diabetes Clinic</h3>
            <p>Get the Best Diabetes Treatment with personalised management plans designed to empower you with the knowledge and skills required for diabetes.</p>
            <Link href="#" className="read-more-link">Read More</Link>
          </div>
          
          {/* Card 2 */}
          <div className="sc-card">
            <div className="sc-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Stethoscope size={32} />
            </div>
            <h3>Consultation</h3>
            <p>This high blood sugar disorder develops during pregnancy. We provide specialised care to ensure your pregnancy and your baby's health.</p>
            <Link href="#" className="read-more-link">Read More</Link>
          </div>
          
          {/* Card 3 */}
          <div className="sc-card">
            <div className="sc-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Microscope size={32} />
            </div>
            <h3>EQAS Laboratory</h3>
            <p>Advanced podiatry services including vascular assessment and advanced wound care to prevent complications and amputations.</p>
            <Link href="#" className="read-more-link">Read More</Link>
          </div>
          
          {/* Card 4 */}
          <div className="sc-card">
            <div className="sc-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <HeartPulse size={32} />
            </div>
            <h3>Preventive Care</h3>
            <p>Caring for people with diabetes requires a patient-centered approach to treatment targets and medication regimens.</p>
            <Link href="#" className="read-more-link">Read More</Link>
          </div>
          
          {/* Card 5 */}
          <div className="service-card">
            <div className="sc-icon">📱</div>
            <h3>CGMS & Insulin Pumps</h3>
            <p>Continuous Glucose Monitoring Systems and Insulin Pump initiation and optimization for tighter control with fewer injections.</p>
            <Link href="#" className="read-more-link">Read More</Link>
          </div>
          
          {/* Card 6 */}
          <div className="service-card">
            <div className="sc-icon">🔬</div>
            <h3>24/7 Pharmacy & Lab</h3>
            <p>NABL-standard diagnostics and a round-the-clock pharmacy ensuring all your medical needs are met under one roof.</p>
            <Link href="#" className="read-more-link">Read More</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
