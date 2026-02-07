import { motion } from "framer-motion";
import { Shield, DollarSign, HeartHandshake, Leaf } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Unmatched Quality",
    description:
      "We source the freshest fruits and vegetables from across India, ensuring our clients receive only the finest produce that meets international standards.",
  },
  {
    icon: DollarSign,
    title: "Competitive Prices",
    description:
      "We offer competitive pricing on our entire range of agro products, making it easier for you to expand your business globally.",
  },
  {
    icon: HeartHandshake,
    title: "Exceptional Service",
    description:
      "Our team provides seamless export processes, reliable shipping, and dedicated customer support for complete satisfaction.",
  },
  {
    icon: Leaf,
    title: "Farm Fresh Guarantee",
    description:
      "Direct sourcing from certified farms ensures maximum freshness and nutritional value in every shipment we deliver.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-secondary font-semibold tracking-wider uppercase text-sm mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner for{" "}
              <span className="text-primary">Premium Agro Products</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Welcome to Fresh Exports, your trusted partner for premium-quality fresh fruits and 
              vegetable exports. Strategically located in Mumbai, India, we have proudly served as 
              a leading supplier of top-tier agro products for over 19 years.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Driven by a passion for excellence, our dedicated team is committed to ensuring 
              unparalleled customer satisfaction through quality, reliability, and integrity in 
              every shipment.
            </p>

            <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">APEDA Certified Exporter</h4>
                <p className="text-sm text-muted-foreground">
                  Trusted and certified for international quality standards
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
