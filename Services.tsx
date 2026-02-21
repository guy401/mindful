
import React, { useEffect, useRef } from 'react';
import SectionTitle from './ui/SectionTitle';
import ServiceCard from './ui/ServiceCard';
import { CalendarIcon, CheckIcon, UserIcon } from 'lucide-react';
import AppointmentDialog from './AppointmentDialog';

const Services = () => {
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

  const services = [
    {
      icon: <UserIcon size={24} />,
      title: "Personalized Nutrition Plans",
      description: "Evidence-based, customized meal plans designed specifically for your unique dietary needs, preferences, and health goals."
    },
    {
      icon: <CalendarIcon size={24} />,
      title: "One-on-One Nutrition Counseling",
      description: "Individual nutrition coaching sessions with a registered dietitian to guide you through sustainable lifestyle changes and healthy eating patterns."
    },
    {
      icon: <CheckIcon size={24} />,
      title: "Goal Setting & Ongoing Support",
      description: "Collaborative development of achievable health milestones with continuous guidance to ensure long-term success in your wellness journey."
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="section bg-section-pattern">
      <div className="container-tight">
        <SectionTitle 
          title="Our Nutrition Services" 
          subtitle="We understand that nutrition information can be overwhelming and contradictory. At Mindful Nutrition and Wellness, Jenelle provides evidence-based treatment plans and personalized nutrition solutions tailored specifically for your long-term success and health outcomes."
          center
          className="animate-on-scroll"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="animate-on-scroll" style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card animate-on-scroll animate-delay-400">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">Let's Work Together on Your Nutrition Goals</h3>
              <p className="text-muted-foreground mb-6">
                Discover how proper nutrition can transform your mind and body for the better. Let's collaborate to help 
                you develop the lifelong nutritional skills you need for sustainable health improvements and a better relationship with food.
              </p>
              <AppointmentDialog 
                trigger={
                  <button className="btn-secondary inline-flex items-center gap-2">
                    <CalendarIcon size={18} />
                    Schedule a Nutrition Consultation
                  </button>
                }
              />
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-soft">
                <img 
                  src="/lovable-uploads/ae62b093-8bd1-49bb-820f-94b0d9fd891c.png" 
                  alt="Nutritious salad with spinach, chicken and healthy toppings" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full z-[-1]"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
