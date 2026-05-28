'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function RiskCalculator() {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState<null | 'low' | 'moderate' | 'high'>(null);

  const handleAnswer = (points: number) => {
    setScore(prev => prev + points);
    if (step < 5) {
      setStep(prev => prev + 1);
    } else {
      const finalScore = score + points;
      if (finalScore <= 2) setResult('low');
      else if (finalScore <= 5) setResult('moderate');
      else setResult('high');
    }
  };

  const slideVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  };

  const renderResult = () => {
    if (result === 'low') {
      return (
        <motion.div variants={slideVariants} initial="initial" animate="animate" style={{ padding: '30px', background: 'var(--color-bg-base)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>Low Risk</h3>
          <p>Your health habits look good. Keep an active lifestyle and a balanced diet. An annual check-up is still wise — diabetes can develop silently.</p>
        </motion.div>
      );
    }
    if (result === 'moderate') {
      return (
        <motion.div variants={slideVariants} initial="initial" animate="animate" style={{ padding: '30px', background: 'var(--color-accent-warm-light)', border: '1px solid var(--color-accent-warm)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
          <h3 style={{ color: '#d97706', marginBottom: '15px' }}>Moderate Risk</h3>
          <p>You have risk factors worth taking seriously. Reducing refined carbohydrates, increasing movement, and managing weight can meaningfully lower your risk. A fasting blood sugar test will give you a clear picture.</p>
        </motion.div>
      );
    }
    if (result === 'high') {
      return (
        <motion.div variants={slideVariants} initial="initial" animate="animate" style={{ padding: '30px', background: '#fff1f2', border: '1px solid #fecdd3', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--color-emergency)', marginBottom: '15px' }}>High Risk</h3>
          <p>Your answers indicate multiple significant risk factors. This does not mean you have diabetes — but get tested soon. An HbA1c above 12, brought below 7 in six months: at Karunya Sugalaya, this is routine.</p>
          <div style={{ marginTop: '25px' }}>
            <Link href="/book" className="btn btn-primary" style={{ backgroundColor: 'var(--color-emergency)' }}>
              Book an appointment today
            </Link>
          </div>
        </motion.div>
      );
    }
    return null;
  };

  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--border-light)', backgroundColor: 'var(--color-bg-base)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Diabetes Risk Assessment</h3>
          <span style={{ fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Step {step} of 5</span>
        </div>
        <div style={{ height: '4px', background: 'var(--border-light)', width: '100%', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ height: '100%', background: 'var(--color-accent-tech)', width: `${(step / 5) * 100}%`, transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}></div>
        </div>
      </div>
      
      <div style={{ padding: '32px', minHeight: '350px', position: 'relative' }}>
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key={`step-${step}`}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {step === 1 && (
                <>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '20px' }}>What is your age?</h3>
                  <div style={{ display: 'grid', gap: '12px' }}>
                    <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', padding: '14px 20px', width: '100%' }} onClick={() => handleAnswer(0)}>Below 30</button>
                    <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', padding: '14px 20px', width: '100%' }} onClick={() => handleAnswer(1)}>30–45</button>
                    <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', padding: '14px 20px', width: '100%' }} onClick={() => handleAnswer(2)}>45–60</button>
                    <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', padding: '14px 20px', width: '100%' }} onClick={() => handleAnswer(3)}>Above 60</button>
                  </div>
                </>
              )}
              {step === 2 && (
                 <>
                 <h3 style={{ fontSize: '1.3rem', marginBottom: '20px' }}>Does diabetes run in your family?</h3>
                 <div style={{ display: 'grid', gap: '12px' }}>
                   <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', padding: '14px 20px', width: '100%' }} onClick={() => handleAnswer(0)}>No family history</button>
                   <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', padding: '14px 20px', width: '100%' }} onClick={() => handleAnswer(1)}>One parent or sibling</button>
                   <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', padding: '14px 20px', width: '100%' }} onClick={() => handleAnswer(2)}>Both parents</button>
                 </div>
               </>
              )}
              {step === 3 && (
                 <>
                 <h3 style={{ fontSize: '1.3rem', marginBottom: '20px' }}>How would you describe your weight?</h3>
                 <div style={{ display: 'grid', gap: '12px' }}>
                   <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', padding: '14px 20px', width: '100%' }} onClick={() => handleAnswer(0)}>Normal</button>
                   <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', padding: '14px 20px', width: '100%' }} onClick={() => handleAnswer(1)}>Slightly overweight</button>
                   <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', padding: '14px 20px', width: '100%' }} onClick={() => handleAnswer(2)}>Overweight or obese</button>
                 </div>
               </>
              )}
              {step === 4 && (
                 <>
                 <h3 style={{ fontSize: '1.3rem', marginBottom: '20px' }}>How physically active are you?</h3>
                 <div style={{ display: 'grid', gap: '12px' }}>
                   <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', padding: '14px 20px', width: '100%' }} onClick={() => handleAnswer(0)}>Exercise regularly</button>
                   <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', padding: '14px 20px', width: '100%' }} onClick={() => handleAnswer(1)}>Light activity</button>
                   <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', padding: '14px 20px', width: '100%' }} onClick={() => handleAnswer(2)}>Mostly sedentary</button>
                 </div>
               </>
              )}
              {step === 5 && (
                 <>
                 <h3 style={{ fontSize: '1.3rem', marginBottom: '20px' }}>Any recent symptoms?</h3>
                 <div style={{ display: 'grid', gap: '12px' }}>
                   <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', padding: '14px 20px', width: '100%' }} onClick={() => handleAnswer(0)}>None</button>
                   <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', padding: '14px 20px', width: '100%' }} onClick={() => handleAnswer(2)}>Fatigue or frequent thirst</button>
                   <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', padding: '14px 20px', width: '100%' }} onClick={() => handleAnswer(3)}>Multiple symptoms</button>
                 </div>
               </>
              )}
            </motion.div>
          ) : (
            renderResult()
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
