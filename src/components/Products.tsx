import { motion } from "motion/react";
import { Laptop, Bike, Award, Zap } from "lucide-react";

const brands = [
  "Liv", "Giant", "Momentum", "Surly", "All-City", "Salsa", "Public"
];

const highlights = [
  {
    title: "Commuter & City",
    category: "Practical",
    price: "From $599",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800&h=800"
  },
  {
    title: "Road & Performance",
    category: "Speed",
    price: "From $1,299",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800&h=800"
  },
  {
    title: "Gravel & Adventure",
    category: "Freedom",
    price: "From $999",
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&q=80&w=800&h=800"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4 block">Curated Selection</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Bikes for Every Journey</h2>
            <p className="text-slate-600 text-lg">
              We carry a carefully selected range of brands that share our commitment to quality, durability, and style.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-start lg:justify-end">
            {brands.map((brand) => (
              <span key={brand} className="px-6 py-2 bg-slate-50 border border-slate-100 rounded-full font-bold text-slate-400 hover:text-teal-600 transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-3xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-teal-400 text-xs font-bold uppercase tracking-wider mb-2 block">{item.category}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 font-medium mb-4">{item.price}</p>
                <button className="px-6 py-2 bg-white text-slate-900 rounded-full text-sm font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  View Category
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-slate-100">
          {[
            { icon: Award, text: "Curated Brands" },
            { icon: Zap, text: "Electric Ready" },
            { icon: Bike, text: "Commuter Experts" },
            { icon: Laptop, text: "Online Store Coming Soon" },
          ].map((feature) => (
            <div key={feature.text} className="flex items-center gap-4 text-slate-600">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                <feature.icon size={24} />
              </div>
              <span className="font-bold tracking-tight">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
