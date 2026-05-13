import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Laptop, Bike, Award, Zap } from "lucide-react";

const brands = [
  "All", "LIV", "Giant", "Momentum", "All-City"
];

const highlightsData = [
  // LIV
  {
    title: "Liv Avail Advanced",
    category: "Road & Performance",
    price: "From $2,499",
    brand: "LIV",
    image: "https://images.theradavist.com/uploads/2025/08/NorthChick_RideGuide-29.jpg"
  },
  {
    title: "Liv Devote Advanced",
    category: "Gravel & Adventure",
    price: "From $2,699",
    brand: "LIV",
    image: "https://api.wilier.com/media/3356/divstrongemthe-new-rapidaemstrongdiv.jpg"
  },
  {
    title: "Liv Alight Disc",
    category: "Commuter & City",
    price: "From $649",
    brand: "LIV",
    image: "https://www.herocycles.com/cdn/shop/articles/1_e0ba163c-ad48-4d7b-a606-8c92840c8bd2.jpg?v=1775046885&width=1100"
  },
  // Giant
  {
    title: "Giant TCR Advanced",
    category: "Road & Performance",
    price: "From $2,899",
    brand: "Giant",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymmFVOaoCVy11KLnpr6ZD-Kn6eOn9XD4KqA&s"
  },
  {
    title: "Giant Revolt Advanced",
    category: "Gravel & Adventure",
    price: "From $2,399",
    brand: "Giant",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zRQbwNvnnEBpG60GdDW5Aga07iui7c8oRw&s"
  },
  {
    title: "Giant Escape Disc",
    category: "Commuter & City",
    price: "From $599",
    brand: "Giant",
    image: "https://bicyclecollective.org/cdn/shop/files/Radion-Studios51-WEB.jpg?v=1767738384&width=1156"
  },
  // Momentum
  {
    title: "Momentum Vida",
    category: "Commuter & City",
    price: "From $699",
    brand: "Momentum",
    image: "https://media.polygonbikes.com/wp-content/uploads/2025/03/10105613/plg-id-asset-panduan-lengkap-sepeda-urban-header-1.jpg"
  },
  {
    title: "Momentum Transend E+",
    category: "Electric Ready",
    price: "From $2,499",
    brand: "Momentum",
    image: "https://www.actionhub.com/wp-content/uploads/2024/04/Types-of-Bikes.jpg"
  },
  {
    title: "Momentum Street",
    category: "Commuter & City",
    price: "From $625",
    brand: "Momentum",
    image: "https://images.ctfassets.net/p6ae3zqfb1e3/5BMcqfWzecrGCpnYUTdY3c/4cb136a610e65754daa2b63115a5deea/5_bluebikes-how-hero.png"
  },
  // All-City
  {
    title: "All-City Space Horse",
    category: "Gravel & Adventure",
    price: "From $2,199",
    brand: "All-City",
    image: "https://hips.hearstapps.com/hmg-prod/images/beginner-bikes-125-preview-1591652727.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*"
  },
  {
    title: "All-City Super Professional",
    category: "Commuter & City",
    price: "From $1,899",
    brand: "All-City",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzaohlpv463BDth_vPUYwtTmRqfPwyWV5Dg&s"
  },
  {
    title: "All-City Zig Zag",
    category: "Road & Performance",
    price: "From $2,799",
    brand: "All-City",
    image: "https://bicyclecollective.org/cdn/shop/files/Radion-Studios51-WEB.jpg?v=1767738384&width=1156"
  }
];

export default function Products() {
  const [activeBrand, setActiveBrand] = useState("All");

  const filteredHighlights = activeBrand === "All" 
    ? highlightsData.slice(0, 6) // Show a representative sample on "All"
    : highlightsData.filter(item => item.brand === activeBrand);

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[600px]">
          <AnimatePresence mode="popLayout">
            {filteredHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative group overflow-hidden rounded-3xl"
              >
                <div className="w-full h-full overflow-hidden relative p-0 m-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center block"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">{item.category}</span>
                    <span className="w-1 h-1 bg-white/30 rounded-full" />
                    <span className="text-white/60 text-xs font-bold uppercase tracking-wider">{item.brand}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 font-medium mb-4">{item.price}</p>
                  <button className="px-6 py-2 bg-white text-slate-900 rounded-full text-sm font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
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
