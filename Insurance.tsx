
import React, { useEffect, useRef } from 'react';
import SectionTitle from './ui/SectionTitle';
import { CheckIcon } from 'lucide-react';

const Insurance = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '-50px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).classList.add('visible');
            }, i * 100);
          });
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const insurances = [
    "Blue Cross Blue Shield",
    "Aetna",
    "Harvard Pilgrim",
    "AllWays Health Partners"
  ];

  return (
    <section id="insurance" ref={sectionRef} className="section bg-section-pattern">
      <div className="container-tight">
        <SectionTitle 
          title="Accepted Insurance Plans" 
          center
          className="animate-on-scroll"
        />

        <div className="bg-white rounded-2xl shadow-card p-8 md:p-12 animate-on-scroll animate-delay-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground mb-6">
                Contact us now to discuss your options and schedule an appointment. We accept health 
                insurance from the companies listed here. For those with health insurance not offered 
                below, we accept private pay directly from patients as well.
              </p>
              <p className="text-muted-foreground mb-6">
                Our billing office can provide you with a Superbill to submit to your insurance company 
                for possible reimbursement, should you need it. Call today.
              </p>
              <a href="#contact" className="btn-primary inline-block">
                Contact Us Today
              </a>
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {insurances.map((insurance, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg bg-muted">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      <CheckIcon size={16} />
                    </div>
                    <span className="text-sm font-medium">{insurance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
