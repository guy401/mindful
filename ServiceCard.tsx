
import React from 'react';
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  className
}) => {
  return (
    <div className={cn(
      "bg-white rounded-2xl p-6 shadow-card hover-card h-full flex flex-col",
      className
    )}>
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-display font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground text-base flex-grow">{description}</p>
    </div>
  );
};

export default ServiceCard;
