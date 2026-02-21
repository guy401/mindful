
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from './ContactForm';

interface AppointmentDialogProps {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
  buttonText?: string;
}

const AppointmentDialog = ({ 
  trigger, 
  title = "Schedule an Appointment",
  description = "Fill out the form below to request an appointment with Jenelle.",
  buttonText = "Schedule Appointment"
}: AppointmentDialogProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="p-1">
          <ContactForm onSuccess={() => setOpen(false)} buttonText={buttonText} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDialog;
