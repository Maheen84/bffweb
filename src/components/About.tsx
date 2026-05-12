import { motion } from "motion/react";
import { Heart, Wrench, Calendar, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-slate-100"
            >
              <img
                src="https://images.unsplash.com/photo-1571333250630-f0230c320b6d?auto=format&fit=crop&q=80&w=1200"
                alt="BFF Bikes Interior Shop"
                className="w-full h-auto aspect-[4/3] object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-teal-50 rounded-full -z-0 blur-3xl opacity-60" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-orange-50 rounded-full -z-0 blur-3xl opacity-60" />
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100">
              <p className="text-teal-600 font-bold text-3xl mb-1">10+</p>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Years in Chicago</p>
            </div>
          </div>

          <div>
            <span className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              BFF Bikes is More Than Just a Shop—It's a <span className="text-teal-600 underline underline-offset-8 decoration-teal-200">Community Hub</span>.
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Founded on the belief that bikes are for everyone, BFF Bikes has been a fixture in Chicago's Bucktown neighborhood since 2014. We started with a mission to create a welcoming space for women and non-binary riders, and we've grown into a full-service hub for every cyclist.
              </p>
              <p>
                Led by <span className="text-slate-900 font-semibold">Gillian Forsyth</span>, our team is passionate about the transformative power of cycling. We don't just sell bikes; we build relationships. From your first commuter bike to your dream road machine, we ensure every rider feels confident and supported.
              </p>
              <div className="pt-8 grid grid-cols-2 gap-4">
                {[
                  { name: "Inclusivity First", icon: Heart },
                  { name: "Expert Service", icon: Wrench },
                  { name: "Community Events", icon: Calendar },
                  { name: "Bike Advocacy", icon: ShieldCheck }
                ].map((item) => (
                  <a
                    key={item.name}
                    href="#contact"
                    className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-500/50 hover:bg-teal-50/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors flex-shrink-0">
                      <item.icon size={20} />
                    </div>
                    <span className="text-slate-900 font-bold text-sm tracking-tight">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
