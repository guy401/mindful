
import React, { useEffect, useRef } from 'react';
import SectionTitle from './ui/SectionTitle';
import TestimonialCard from './ui/TestimonialCard';

const Philosophy = () => {
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

  const testimonials = [
    {
      quote: "Working with Jenelle has completely changed my relationship with food. I've lost weight but more importantly, I've gained confidence and energy.",
      author: "Sarah M.",
      role: "Client since 2020"
    },
    {
      quote: "The personalized approach made all the difference. Jenelle listened to my concerns and created a plan that actually works with my lifestyle.",
      author: "Michael D.",
      role: "Weight Management Client"
    },
    {
      quote: "As someone with multiple food sensitivities, finding a dietitian who could help was challenging until I met Jenelle. Her knowledge is incredible!",
      author: "Lisa T.",
      role: "Medical Nutrition Therapy Client"
    }
  ];

  return (
    <section id="philosophy" ref={sectionRef} className="section bg-white">
      <div className="container-tight">
        <SectionTitle 
          title="Our Philosophy" 
          center
          className="animate-on-scroll"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="animate-on-scroll">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Mindful Nutrition and Wellness believes in a truly holistic approach to health: no fad diets, 
                no quick fixes or popular trends. Food should be seen as fuel: eating mindfully through a 
                well-balanced diet provides the body with what it needs to function optimally.
              </p>
              <p className="text-muted-foreground">
                We at Mindful Nutrition and Wellness believe healthy shouldn't be a burden – food is meant 
                to be enjoyed. The mission of Mindful Nutrition and Wellness is to help clients create a 
                healthy relationship with food by learning lifelong, easy-to-maintain habits.
              </p>
              <p className="text-muted-foreground">
                Finding balance is the secret to good health. The vision of Mindful Nutrition and Wellness 
                focuses on helping others find what it means to eat in a way that is sustainable with food 
                you actually love. Healthy doesn't mean cutting out everything "bad" for you. Balance means 
                filling your plate with vibrant greens, lean proteins, and wholesome grains with even a 
                dessert to hit the spot at the end.
              </p>
            </div>
            <div className="mt-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-nutrition-100 rounded-full flex items-center justify-center text-nutrition-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Balanced Approach</h4>
                  <p className="text-sm text-muted-foreground">No fad diets or quick fixes</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-6">
                <div className="w-12 h-12 bg-wellness-100 rounded-full flex items-center justify-center text-wellness-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5.8 11.3L2 22l10.7-3.79"></path>
                    <path d="M4 3h.01"></path>
                    <path d="M22 8h.01"></path>
                    <path d="M15 2h.01"></path>
                    <path d="M22 20h.01"></path>
                    <path d="M22 2l-2.24 2.24"></path>
                    <path d="M2 22l2.24-2.24"></path>
                    <path d="M14 13.5c1.67-1.68 4.32-1.68 6 0"></path>
                    <path d="M14 16.5c3.34-3.37 8.67-3.37 12 0"></path>
                    <circle cx="10" cy="10" r="8"></circle>
                    <path d="M9.5 7.5v5h5"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Sustainable Habits</h4>
                  <p className="text-sm text-muted-foreground">Long-term lifestyle changes</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-6">
                <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center text-earth-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Lifelong Skills</h4>
                  <p className="text-sm text-muted-foreground">Education for lasting results</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll animate-delay-100">
            <div className="relative bg-earth-50/70 rounded-2xl p-8 shadow-card overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-nutrition-50 rounded-full transform translate-x-1/2 -translate-y-1/2 z-0"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-wellness-50 rounded-full transform -translate-x-1/2 translate-y-1/2 z-0"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-semibold mb-6">Client Testimonials</h3>
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <TestimonialCard 
                      key={index}
                      quote={testimonial.quote}
                      author={testimonial.author}
                      role={testimonial.role}
                      className="bg-white"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white animate-on-scroll animate-delay-200">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">Ready to start your wellness journey?</h3>
            <p className="text-white/90 mb-8">
              Schedule an appointment today and take the first step towards a healthier, more balanced life.
            </p>
            <a href="#contact" className="inline-block px-8 py-4 bg-white text-primary rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105">
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
