
import React, { useEffect, useRef } from 'react';
import SectionTitle from './ui/SectionTitle';
import { PhoneIcon, MapPinIcon, CalendarIcon } from 'lucide-react';
import AppointmentDialog from './AppointmentDialog';

const Contact = () => {
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
    <section id="contact" ref={sectionRef} className="section bg-white">
      <div className="container-tight">
        <SectionTitle 
          title="Contact Us" 
          subtitle="Get in touch to schedule an appointment or learn more about our services."
          center
          className="animate-on-scroll"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="animate-on-scroll">
            <div className="bg-white rounded-2xl p-6 shadow-card hover-card h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-nutrition-100 flex items-center justify-center text-nutrition-600 mb-4">
                <PhoneIcon size={24} />
              </div>
              <h3 className="text-xl font-display font-medium mb-2">Call Us</h3>
              <p className="text-muted-foreground text-base mb-4">
                Speak directly with our friendly staff
              </p>
              <a href="tel:9782543599" className="text-lg font-medium text-primary mt-auto">
                978.254.3599
              </a>
            </div>
          </div>
          <div className="animate-on-scroll animate-delay-100">
            <div className="bg-white rounded-2xl p-6 shadow-card hover-card h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 mb-4">
                <MapPinIcon size={24} />
              </div>
              <h3 className="text-xl font-display font-medium mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-base mb-4">
                Come to our office in Chelmsford
              </p>
              <address className="text-lg font-medium text-primary mt-auto not-italic">
                1 Olde North Road<br />Chelmsford, MA USA
              </address>
            </div>
          </div>
          <div className="animate-on-scroll animate-delay-200">
            <div className="bg-white rounded-2xl p-6 shadow-card hover-card h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-earth-100 flex items-center justify-center text-earth-600 mb-4">
                <CalendarIcon size={24} />
              </div>
              <h3 className="text-xl font-display font-medium mb-2">Schedule Now</h3>
              <p className="text-muted-foreground text-base mb-4">
                Book an appointment online
              </p>
              <AppointmentDialog 
                trigger={
                  <button className="btn-primary mt-auto">
                    Book Appointment
                  </button>
                }
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-card animate-on-scroll animate-delay-300">
          <div className="aspect-[16/9] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2775.8150234688086!2d-71.3668744!3d42.6048661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3a3e4a8f45555%3A0x79a24bb1df0307ae!2s1%20Olde%20N%20Rd%2C%20Chelmsford%2C%20MA%2001824!5e0!3m2!1sen!2sus!4v1623345678901!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Mindful Nutrition and Wellness Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
