import React from 'react';
import Image from 'next/image';

export default function AboutDoctor() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="about-grid">
          <div>
            <div className="section-title">
              <h2>About <span className="text-theme">Dr. K. Sivakumar</span></h2>
            </div>
            <p className="about-text"><strong>MBBS, M.D. - Medicine,</strong> 20+ years experience overall in Diabetology. Dr. K. Sivakumar in Kumbakonam is one of the most renowned Doctors For DIABETES Treatment.</p>
            
            <div className="feature-grid">
              <div className="f-box">
                <div className="f-icon">⚕</div>
                <h4>Special Interest in Diabetology</h4>
              </div>
              <div className="f-box">
                <div className="f-icon">👥</div>
                <h4>Internal Medicine</h4>
              </div>
              <div className="f-box">
                <div className="f-icon">📜</div>
                <h4>20+ Years Experience</h4>
              </div>
              <div className="f-box">
                <div className="f-icon">✔</div>
                <h4>Medical Registration Verified</h4>
              </div>
            </div>
            
            <p style={{ marginTop: '25px' }}>Dr. K. Sivakumar is an Internal Medicine specialist and Diabetologist in Kumbakonam, Tamil Nadu and has an experience of over two decades in this field. Practices at Karunya Sugalaya.</p>
            <p>Karunya Sugalaya has a supportive and friendly staff, and the latest medical know-how to help patients. Services like Blood Sampling, Insulin Treatment, Uncontrolled Diabetes, and Foot Care are also offered here, so all your treatment needs are taken care of in one place.</p>
          </div>
          <div className="doc-img">
            {/* Note: In Next.js it's better to use next/image but for a simple port <img> is fine, 
                we'll use next/image to be proper */}
            <Image 
              src="/assets/dr-sivakumar.jpg" 
              alt="Dr. K. Sivakumar" 
              width={600} 
              height={800} 
              style={{ width: '100%', height: 'auto', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
