
import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ExpertiseCardProps {
  title: string;
  description: string;
  className?: string;
  onClick?: () => void;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  title,
  description,
  className,
  onClick
}) => {
  return (
    <div className={cn(
      "bg-white rounded-2xl p-8 shadow-card hover-card h-full flex flex-col",
      className
    )}>
      <h3 className="text-xl font-display font-semibold mb-4 text-primary">{title}</h3>
      <p className="text-muted-foreground text-base flex-grow mb-4">{description}</p>
      {onClick && (
        <Button 
          onClick={onClick}
          className="w-full mt-auto"
          variant="outline"
        >
          Learn More
        </Button>
      )}
    </div>
  );
};

export default ExpertiseCard;
