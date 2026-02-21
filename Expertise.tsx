
import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import ExpertiseCard from './ui/ExpertiseCard';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Expertise = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedExpertise, setSelectedExpertise] = useState<{
    title: string;
    description: string;
    fullDescription: string;
  } | null>(null);

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

  const expertiseAreas = [
    {
      title: "Medical Nutrition Therapy",
      description: "Evidence-based medical approach to treating certain chronic conditions through tailored nutrition plans.",
      fullDescription: "Medical Nutrition Therapy, often abbreviated as MNT, is an evidence-based medical approach to treating certain chronic conditions through the use of an individually-tailored nutrition plan. This nutrition plan is ordered and approved by a primary care physician and implemented by a Registered Dietitian. MNT can play a life-changing role in reducing complications associated with certain conditions, such as Type 2 Diabetes, Congestive Heart Failure, Hypertension, High Cholesterol, and Chronic Kidney Disease (CKD)."
    },
    {
      title: "Disordered Eating",
      description: "Support for those experiencing severe disturbances in eating behaviors and related thoughts and emotions.",
      fullDescription: "Eating disorders are illnesses in which people experience severe disturbances in their eating behaviors and related thoughts and emotions. People with eating disorders typically become pre-occupied with food and their body weight. Eating disorders, such as anorexia, bulimia, body dysmorphic disorder, and binge-eating disorder, seriously impact your overall health. In a client-dietitian relationship, the therapeutic alliance supports the client's need for behavior change. These changes are to challenge distorted and irrational thinking about food and weight, to explore feelings related to hunger and fullness, metabolism and body image."
    },
    {
      title: "Weight Management",
      description: "Personalized approaches to help you achieve and maintain a healthy weight for your body type.",
      fullDescription: "Keeping a healthy weight is crucial. If you are underweight, overweight, or considered obese, you may have a higher risk of certain health problems. About two-thirds of adults in the U.S. are overweight or have obesity. Achieving a healthy weight can help you control your cholesterol, blood pressure, and blood sugar. It might also help you prevent weight-related diseases, such as heart disease, diabetes, arthritis, and some cancers."
    },
    {
      title: "Corporate Wellness",
      description: "Programs designed to support and encourage a holistic approach to employee wellbeing.",
      fullDescription: "Corporate wellness programs are designed to support and encourage a holistic approach to employee wellbeing by creating an organizational culture of health. A Corporate Wellness Coach is a health coach who is brought into a facility or corporate office to help employees either improve or maintain their health."
    },
    {
      title: "Company Consulting",
      description: "Expert advice for food industry businesses on improving food service operations.",
      fullDescription: "Food consultants are experts in gastronomy, food safety and food quality who advise food industry businesses and professionals on the development and improvement of their food service operations. Mindful Nutrition's dietitians can work with restaurants, food producers, schools or any other food service facility to improve operations. Whether it is a menu for a restaurant or a full product launch – we can help."
    },
    {
      title: "Sports Nutrition",
      description: "Nutrition planning that allows active adults and athletes to perform at their best.",
      fullDescription: "Sports nutrition is the foundation of athletic success. It is a well-designed nutrition plan that allows active adults and athletes to perform at their best. It supplies the right food type, energy, nutrients, and fluids to keep the body well hydrated and functioning at peak levels."
    }
  ];

  const handleExpertiseClick = (expertise: typeof expertiseAreas[0]) => {
    setSelectedExpertise(expertise);
    setDialogOpen(true);
  };

  return (
    <section id="expertise" ref={sectionRef} className="section bg-white">
      <div className="container-tight">
        <SectionTitle 
          title="Areas of Expertise" 
          center
          className="animate-on-scroll"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((expertise, index) => (
            <div key={index} className="animate-on-scroll" style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
              <ExpertiseCard 
                title={expertise.title}
                description={expertise.description}
                onClick={() => handleExpertiseClick(expertise)}
              />
            </div>
          ))}
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          {selectedExpertise && (
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif">{selectedExpertise.title}</DialogTitle>
                <DialogDescription className="text-base mt-4">
                  {selectedExpertise.fullDescription}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default Expertise;
