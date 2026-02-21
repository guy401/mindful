
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { CalendarIcon, ArrowDownIcon } from "lucide-react";
import AppointmentDialog from './AppointmentDialog';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).classList.add('visible');
            }, i * 200);
          });
        }
      });
    }, observerOptions);

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="pt-28 pb-16 md:pt-36 md:pb-24 bg-hero-pattern relative overflow-hidden"
    >
      <div className="container-tight relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-secondary font-medium mb-4 animate-on-scroll">
              Welcome to
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 animate-on-scroll animate-delay-100">
              Mindful <span className="text-primary">Nutrition</span> and <span className="text-secondary">Wellness</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-on-scroll animate-delay-200">
              A private practice based in Chelmsford, MA, specializing in personalized nutrition counseling
              and wellness. Let's create a balanced approach to nourish both your body and mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll animate-delay-300">
              <AppointmentDialog 
                trigger={
                  <button className="btn-primary flex items-center justify-center gap-2">
                    <CalendarIcon size={18} />
                    Schedule an Appointment
                  </button>
                }
              />
              <a href="#about" className="btn-outline flex items-center justify-center gap-2">
                Learn More
              </a>
            </div>
            <div className="mt-12 flex items-center animate-on-scroll animate-delay-400">
              <div className="flex items-center mr-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 8V7L18 9L15 7V8L18 10L21 8ZM21 16V15L18 17L15 15V16L18 18L21 16ZM8 18H11V20H8V18ZM2 20H6V22H2V20ZM13 18H16V20H13V18ZM18 18H22V20H18V18ZM8 13H11V15H8V13ZM2 15H6V17H2V15ZM13 13H16V15H13V13ZM18 13H22V15H18V13ZM8 8H11V10H8V8ZM2 10H6V12H2V10ZM13 8H16V10H13V8ZM18 8H22V10H18V8ZM8 3H11V5H8V3ZM2 5H6V7H2V5ZM13 3H16V5H13V3ZM18 3H22V5H18V3Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Bonded</h3>
                </div>
              </div>
              <div className="flex items-center mr-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C9.8 12 8 10.2 8 8C8 5.8 9.8 4 12 4C14.2 4 16 5.8 16 8C16 10.2 14.2 12 12 12ZM12 14C16.4 14 20 15.8 20 18V20H4V18C4 15.8 7.6 14 12 14Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Insured</h3>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.19 1.36L9 3.5V5H15V3.5L12.81 1.36L12 0.6L11.19 1.36ZM6 19V7H18V19C18 20.1 17.1 21 16 21H8C6.9 21 6 20.1 6 19ZM8 19H16V16H8V19ZM16 14V9H8V14H16Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Licensed</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="relative animate-on-scroll animate-delay-300">
            <div className="aspect-square bg-white rounded-full overflow-hidden shadow-soft w-[90%] mx-auto relative animate-float">
              <img
                src="/lovable-uploads/aa19bb0b-f9c8-454e-9401-7d79b5896798.png"
                alt="Nutritious balanced bowl with protein, vegetables, and grains"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 lg:bottom-12 lg:-right-8 bg-white p-4 rounded-2xl shadow-card w-36 md:w-48 animate-float">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-nutrition-100 flex items-center justify-center text-nutrition-600 mr-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-sm font-medium">Personalized</h3>
              </div>
              <p className="text-xs text-muted-foreground">Custom nutrition plans tailored to your needs</p>
            </div>
            <div className="absolute -top-4 -left-4 lg:-top-8 lg:left-12 bg-white p-4 rounded-2xl shadow-card w-36 md:w-48 animate-float" style={{animationDelay: '2s'}}>
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-wellness-100 flex items-center justify-center text-wellness-600 mr-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 20H22V22H2V20H7C7 17.2 9.8 15 13 15V9C11.9 9 11 8.1 11 7V4C11 2.9 11.9 2 13 2H19C20.1 2 21 2.9 21 4V7C21 8.1 20.1 9 19 9V15C19 17.8 17 20 17 20ZM5 20C5 17 7.5 15 10.5 15H13.5C16.5 15 19 17 19 20H5ZM13 7H19V4H13V7Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-sm font-medium">Balanced</h3>
              </div>
              <p className="text-xs text-muted-foreground">A holistic approach to health and wellness</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <a href="#about" className="text-muted-foreground text-xs font-medium mb-2">Scroll down</a>
        <ArrowDownIcon size={16} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
