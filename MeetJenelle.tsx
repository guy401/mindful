
import React, { useEffect, useRef } from 'react';
import SectionTitle from './ui/SectionTitle';

const MeetJenelle = () => {
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

  return (
    <section id="meet-jenelle" ref={sectionRef} className="section bg-section-pattern">
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img 
                  src="/lovable-uploads/2a4a1e2c-c1f1-4f9b-93f9-c2192381cdf8.png" 
                  alt="Jenelle Indelicato" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-60 h-60 rounded-full bg-primary/5 z-[-1]"></div>
              <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-secondary/5 z-[-1]"></div>
              
              <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-card">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-nutrition-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">978.254.3599</span>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-on-scroll animate-delay-100">
            <SectionTitle 
              title="Meet Jenelle Indelicato" 
            />
            <div className="space-y-4 text-muted-foreground">
              <p>
                Jenelle is the founder of Mindful Nutrition and Wellness, LLC, a nutrition consulting 
                practice with offices in Chelmsford, Massachusetts. As a registered dietitian with the 
                Commission on Dietetic Registration and licensed by the Commonwealth of Massachusetts, 
                Jenelle provides medical nutrition therapy and general nutrition counseling to help 
                clients navigate a path to clean eating and a healthy lifestyle.
              </p>
              <p>
                Jenelle is currently the Lead Dietitian at the Beth Israel Lahey Health - Medical Weight 
                Loss Center in Burlington, MA.
              </p>
              <p>
                Jenelle graduated from the University of Massachusetts in 2014 with a bachelor's degree in 
                Nutrition and then went on to earn her master's degree in Exercise Science and Health Promotion 
                from California University. After completing her dietetic internship with Priority Nutrition 
                Care Dietetic Program, Jenelle obtained her Massachusetts license and started working as a 
                Registered Dietitian (RD) in 2015.
              </p>
              <p className="text-lg font-serif italic text-primary">
                "Providing compassionate, meaningful and realistic counsel is the foundation of Mindful Nutrition and Wellness."
              </p>
              <p>
                The term "nutrition" can mean many different things depending on where you are in life. Jenelle 
                founded Mindful Nutrition and Wellness so that she could treat a variety of people and conditions 
                using a holistic approach to nutrition and wellness.
              </p>
            </div>
            <div className="flex space-x-4 mt-8">
              <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-soft w-32">
                <span className="text-2xl font-serif font-bold text-primary">7+</span>
                <span className="text-sm text-center">Years of Experience</span>
              </div>
              <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-soft w-32">
                <span className="text-2xl font-serif font-bold text-secondary">100s</span>
                <span className="text-sm text-center">Of Clients Helped</span>
              </div>
              <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-soft w-32">
                <span className="text-2xl font-serif font-bold text-accent">2015</span>
                <span className="text-sm text-center">Licensed Since</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetJenelle;
