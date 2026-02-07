import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Wilson",
    role: "Import Manager, UK Foods Ltd",
    content:
      "The quality of produce from Fresh Exports is consistently exceptional. Their mangoes and pomegranates have become our best-selling items. Highly recommended!",
    rating: 5,
  },
  {
    name: "Maria Schmidt",
    role: "Procurement Head, Berlin Organics",
    content:
      "Working with Fresh Exports has been a game-changer for our business. Their attention to quality control and timely deliveries make them a reliable partner.",
    rating: 5,
  },
  {
    name: "Ahmed Al-Rashid",
    role: "CEO, Gulf Fresh Markets",
    content:
      "Fresh Exports understands the Middle Eastern market perfectly. Their produce meets our strict quality standards and their customer service is outstanding.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-secondary font-semibold tracking-wider uppercase text-sm mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our{" "}
            <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We take pride in building long-lasting partnerships with our clients 
            and consistently exceeding their expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-card p-8 rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-8 w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-secondary-foreground" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
