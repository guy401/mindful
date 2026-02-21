
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import AppointmentDialog from './AppointmentDialog';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Meet Jenelle', href: '#meet-jenelle' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-soft py-2" : "bg-transparent py-4"
    )}>
      <div className="container-tight flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" className="flex items-center">
            <img 
              src="/lovable-uploads/8f5e4627-5de2-48d3-808f-2c2747347b43.png" 
              alt="Mindful Nutrition and Wellness Logo" 
              className="h-12 md:h-14"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors story-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <AppointmentDialog 
            trigger={
              <button className="btn-primary text-sm">
                Schedule Now
              </button>
            }
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 lg:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className={cn(
            "w-6 h-0.5 bg-foreground transition-all duration-200 mb-1.5",
            isMobileMenuOpen && "transform rotate-45 translate-y-2"
          )}></div>
          <div className={cn(
            "w-6 h-0.5 bg-foreground transition-all duration-200 mb-1.5",
            isMobileMenuOpen && "opacity-0"
          )}></div>
          <div className={cn(
            "w-6 h-0.5 bg-foreground transition-all duration-200",
            isMobileMenuOpen && "transform -rotate-45 -translate-y-2"
          )}></div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "fixed top-[60px] left-0 right-0 bg-white shadow-md lg:hidden transition-all duration-300 overflow-hidden",
        isMobileMenuOpen ? "max-h-screen" : "max-h-0"
      )}>
        <div className="container py-4 flex flex-col">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="py-3 text-sm font-medium hover:text-primary transition-colors border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-4">
            <AppointmentDialog 
              trigger={
                <button 
                  className="btn-primary text-sm w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Schedule Now
                </button>
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
