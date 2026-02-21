
import React from 'react';
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  image?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  image,
  className
}) => {
  return (
    <div className={cn(
      "bg-white rounded-2xl p-6 md:p-8 shadow-card flex flex-col",
      className
    )}>
      <div className="mb-6 text-accent">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.3 6L11.9 9H8.50001C8.50001 10.5 9.00001 11.5 10 12C11 12.5 12 12.5 13 12V15C11.5 15.5 10 15.5 8.50001 15C7.00001 14.5 6.00001 13.5 5.50001 12C5.00001 10.5 5.00001 9 5.50001 7C6.00001 5.5 7.00001 4.5 8.50001 4C10 3.5 11 3.5 12 4L11.3 6ZM20.3 6L20.9 9H17.5C17.5 10.5 18 11.5 19 12C20 12.5 21 12.5 22 12V15C20.5 15.5 19 15.5 17.5 15C16 14.5 15 13.5 14.5 12C14 10.5 14 9 14.5 7C15 5.5 16 4.5 17.5 4C19 3.5 20 3.5 21 4L20.3 6Z" fill="currentColor"/>
        </svg>
      </div>
      <p className="text-base md:text-lg italic mb-6">{quote}</p>
      <div className="mt-auto flex items-center">
        {image && (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img src={image} alt={author} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <h4 className="font-medium text-base">{author}</h4>
          {role && <p className="text-sm text-muted-foreground">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
