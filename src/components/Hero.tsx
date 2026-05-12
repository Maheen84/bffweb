import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1501147830916-ce44a6359892?auto=format&fit=crop&q=80&w=1920"
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#0d1117] py-24 md:py-32 overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 bg-[#0d1117]">
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={images[index]}
            alt={`BFF Bikes Hero ${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Darkened Overlay - Always on top of images */}
        <div className="absolute inset-0 bg-[#0d1117]/75 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center pt-16 md:pt-0">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full bg-teal-600/90 backdrop-blur-sm text-sm font-semibold uppercase tracking-wider mb-6 text-white"
        >
          Chicago's Community Bike Shop
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-white [text-shadow:_0_4px_8px_rgba(0,0,0,0.5)]"
        >
          Best Friends <br />
          <span className="text-teal-400 font-serif italic drop-shadow-sm">Forever</span> Bikes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed font-medium [text-shadow:_0_2px_4px_rgba(0,0,0,0.4)]"
        >
          Specializing in making cycling accessible, fun, and inclusive for everyone in Chicago. Whether you're a commuter or a weekend warrior, we've got your back.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="group px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-bold text-lg transition-all flex items-center gap-2"
          >
            Explore Services
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg transition-all"
          >
            Visit Our Shop
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
