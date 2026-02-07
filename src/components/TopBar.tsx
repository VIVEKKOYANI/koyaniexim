import { MapPin, Phone, Clock, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-sm gap-2">
        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Mumbai, Maharashtra, India</span>
          </div>
          <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            <span>+91 98765 43210</span>
          </a>
        </div>
        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Mon - Sat 9:00 - 18:00</span>
          </div>
          <a href="mailto:info@koyaniexim.in" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="w-4 h-4" />
            <span>info@koyaniexim.in</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
