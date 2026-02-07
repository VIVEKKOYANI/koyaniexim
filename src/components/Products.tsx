import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Fresh Fruits",
    description: "Enjoy the juicy sweetness of mangoes, guavas, pomegranates, bananas, oranges, and more exotic varieties.",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&q=80",
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    title: "Fresh Vegetables",
    description: "Premium quality vegetables including onions, potatoes, tomatoes, peppers, leafy greens, and more.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Frozen Products",
    description: "Flash-frozen fruits and vegetables that lock in nutrients and vibrant flavors for extended freshness.",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886f8b?w=600&q=80",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Processed Foods",
    description: "Quality processed products including pickles, jams, chutneys, and ready-to-eat preparations.",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&q=80",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Dehydrated Foods",
    description: "Premium dehydrated options with long shelf life, perfect for convenience without compromising quality.",
    image: "https://images.unsplash.com/photo-1604908177522-32fd629e4163?w=600&q=80",
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    title: "Spices & Flours",
    description: "Authentic Indian spices and variety of flours crafted from premium grains for all culinary needs.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
    color: "from-red-500/20 to-orange-500/20",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-secondary font-semibold tracking-wider uppercase text-sm mb-4">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Premium Quality{" "}
            <span className="text-primary">Agro Products</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From farm-fresh produce to processed delights, we offer a comprehensive range 
            of agricultural products that meet the highest international standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} z-10`} />
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary font-semibold text-sm group/link"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
