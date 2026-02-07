import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Truck } from "lucide-react";
import heroImage from "@/assets/hero-produce.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fresh fruits and vegetables"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary-foreground"
          >
            {/* <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6"
            >
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Trusted Exporter Since 2005</span>
            </motion.div> */}

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Premium Fresh{" "}
              <span className="text-accent">Fruits & Vegetables</span>{" "}
              Delivered Worldwide
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl">
              India's leading exporter of premium quality fresh produce. We deliver farm-fresh fruits 
              and vegetables to markets across the globe with unmatched quality and reliability.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="accent" size="xl">
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Contact Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-accent" />
                  <span className="text-3xl font-bold">25+</span>
                </div>
                <p className="text-sm text-primary-foreground/70">Countries Served</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Truck className="w-5 h-5 text-accent" />
                  <span className="text-3xl font-bold">500+</span>
                </div>
                <p className="text-sm text-primary-foreground/70">Tons Monthly</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-3xl font-bold">19+</span>
                </div>
                <p className="text-sm text-primary-foreground/70">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
