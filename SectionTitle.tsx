
import React from 'react';
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
  light = false,
  className
}) => {
  return (
    <div className={cn(
      "mb-12",
      center && "text-center",
      light && "text-white",
      className
    )}>
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4",
        center ? "title-center-underline" : "title-underline",
        light && "text-white"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg md:text-xl mt-4 max-w-3xl",
          center && "mx-auto",
          light ? "text-white/90" : "text-muted-foreground"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
