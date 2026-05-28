import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>We Provide <br/><span className="text-theme">Medical</span> Service.</h1>
          <p>We provide always our best services for our patients and always try to achieve our patient's trust and satisfaction with world-class diabetes care.</p>
          <div className="hero-buttons">
            <Link href="#about" className="btn btn-theme">Read More</Link>
            <Link href="#contact" className="btn btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
