import { useState } from "react";
import { motion } from "motion/react";
import { Laptop, Bike, Award, Zap } from "lucide-react";

const brands = [
  "All", "LIV", "Giant", "Momentum", "All-City"
];

const highlights = [
  {
    title: "Commuter & City",
    category: "Practical",
    price: "From $599",
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Road & Performance",
    category: "Speed",
    price: "From $1,299",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Gravel & Adventure",
    category: "Freedom",
    price: "From $999",
    image: "https://images.unsplash.com/photo-1501147830916-ce44a6359892?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Products() {
  const [activeBrand, setActiveBrand] = useState("All");

  return (
    <section id="products" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4 block">Curated Selection</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Bikes for Every Journey</h2>
            <p className="text-slate-600 text-lg">
              We carry a carefully selected range of brands that share our commitment to quality, durability, and style.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <div className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible pb-4 md:pb-0 gap-3 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:justify-end">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setActiveBrand(brand)}
                  className={`px-8 py-2.5 rounded-full border-2 font-bold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex-shrink-0 flex items-center justify-center ${
                    activeBrand === brand
                      ? "bg-teal-600 border-teal-600 text-white shadow-md scale-105"
                      : "bg-teal-50/50 border-teal-100 text-teal-900 hover:bg-teal-100/80 hover:border-teal-200"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
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
