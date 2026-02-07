import { motion } from "framer-motion";
import { Globe, MapPin, Ship, Plane } from "lucide-react";

const countries = [
  "United Kingdom",
  "Canada",
  "Germany",
  "UAE",
  "Singapore",
  "Malaysia",
  "South Africa",
  "New Zealand",
  "Qatar",
  "Belgium",
  "Hong Kong",
  "Sweden",
];

const GlobalReach = () => {
  return (
    <section id="global" className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary-foreground"
          >
            <span className="inline-block text-accent font-semibold tracking-wider uppercase text-sm mb-4">
              Global Presence
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Delivering Freshness{" "}
              <span className="text-accent">Across the Globe</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Fresh Exports has established a strong global presence, proudly serving fresh fruits 
              and vegetables to satisfied clients across multiple continents. We cater to diverse 
              markets with reliable logistics and unwavering quality standards.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-primary-foreground/10 rounded-xl backdrop-blur-sm">
                <Globe className="w-8 h-8 text-accent mx-auto mb-2" />
                <span className="block text-3xl font-bold">25+</span>
                <span className="text-sm text-primary-foreground/70">Countries</span>
              </div>
              <div className="text-center p-4 bg-primary-foreground/10 rounded-xl backdrop-blur-sm">
                <Ship className="w-8 h-8 text-accent mx-auto mb-2" />
                <span className="block text-3xl font-bold">100+</span>
                <span className="text-sm text-primary-foreground/70">Shipments/Year</span>
              </div>
              <div className="text-center p-4 bg-primary-foreground/10 rounded-xl backdrop-blur-sm">
                <Plane className="w-8 h-8 text-accent mx-auto mb-2" />
                <span className="block text-3xl font-bold">48hr</span>
                <span className="text-sm text-primary-foreground/70">Fast Delivery</span>
              </div>
            </div>
          </motion.div>

          {/* Countries Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {countries.map((country, index) => (
              <motion.div
                key={country}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 p-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl hover:bg-primary-foreground/20 transition-colors"
              >
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-primary-foreground text-sm font-medium">{country}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
