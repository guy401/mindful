
import React, { useEffect, useRef } from 'react';
import SectionTitle from './ui/SectionTitle';

const About = () => {
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
    <section id="about" ref={sectionRef} className="section bg-white">
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionTitle 
              title="Welcome to Mindful Nutrition and Wellness"
              className="animate-on-scroll"
            />
            <div className="space-y-4">
              <p className="text-muted-foreground animate-on-scroll animate-delay-100">
                Welcome to Mindful Nutrition and Wellness, a premier nutritional counseling practice based in Chelmsford, MA. 
                We specialize in personalized nutrition therapy, weight management, and holistic wellness services. 
                Our evidence-based approach helps clients develop sustainable eating habits for long-term health benefits.
              </p>
              <p className="text-muted-foreground animate-on-scroll animate-delay-200">
                Jenelle Indelicato, our registered dietitian nutritionist, is passionate about helping each client discover their 
                unique path to wellness. She rejects the one-size-fits-all diet mentality and instead creates customized nutrition 
                plans that integrate seamlessly with your lifestyle, preferences, and health goals.
              </p>
              <p className="text-muted-foreground animate-on-scroll animate-delay-300">
                At Mindful Nutrition and Wellness, we believe in the transformative power of nutritional balance. Our holistic approach 
                addresses not just what you eat, but your relationship with food, ensuring comprehensive wellness for both body and mind.
              </p>
              <div className="pt-4 animate-on-scroll animate-delay-400">
                <a href="#services" className="btn-primary">Explore Our Nutrition Services</a>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-on-scroll">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img 
                  src="/lovable-uploads/4f181b71-a2af-44b3-9300-43728c9790b5.png" 
                  alt="Nutritious fruit bowl with watermelon, strawberries, and bananas" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-card bg-white p-2">
                <img 
                  src="/lovable-uploads/ad087b88-2e6a-45a1-a2a9-402f3c631685.png" 
                  alt="Fresh avocado, lime, and herbs - healthy food ingredients" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-28 h-28 bg-nutrition-50 rounded-full z-[-1]"></div>
              <div className="absolute -bottom-10 right-20 w-20 h-20 bg-wellness-50 rounded-full z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
