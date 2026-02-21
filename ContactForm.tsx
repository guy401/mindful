
import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  message: z.string().min(5, { message: "Message must be at least 5 characters." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  onSuccess?: () => void;
  buttonText?: string;
}

const ContactForm = ({ onSuccess, buttonText = "Send Message" }: ContactFormProps) => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // In a real implementation, this would send data to a backend service
      console.log('Form submitted with data:', data);
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Send email using mailto link (this is a fallback - normally you'd use a backend service)
      const subject = `New Appointment Request from ${data.name}`;
      const body = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}
      `;
      
      // Open email client
      window.location.href = `mailto:jenelle@mindfulnutritionservices.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      toast.success("Form submitted successfully! Opening your email client.");
      form.reset();
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to submit form. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="(555) 555-5555" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Please provide details about the appointment you'd like to schedule..." 
                  className="min-h-[120px]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <>Processing...</>
          ) : (
            <>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {buttonText}
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
