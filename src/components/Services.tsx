import { Wrench, Ruler, Users, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    title: "Expert Repair & Service",
    description: "From quick flat fixes to complete overhauls, our professional mechanics keep your ride smooth and safe.",
    icon: Wrench,
    color: "bg-blue-500",
  },
  {
    title: "Professional Fitting",
    description: "Get the perfect fit for maximum comfort and efficiency. We optimize your position for your body and goals.",
    icon: Ruler,
    color: "bg-teal-500",
  },
  {
    title: "Maintenance Classes",
    description: "Empowering you to understand your bike. Join our workshops and learn how to handle basic repairs yourself.",
    icon: Users,
    color: "bg-orange-500",
  },
  {
    title: "Custom Builds",
    description: "Dreaming of a unique machine? We specialize in custom builds tailored exactly to your riding style.",
    icon: ShieldCheck,
    color: "bg-purple-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4 block">Expertise</span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          We offer a comprehensive range of services designed to get you on the road and keep you there.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-slate-100"
          >
            <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
              <service.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              {service.description}
            </p>
            <button className="text-teal-600 font-bold flex items-center gap-2 group/btn">
              Learn More
              <div className="w-6 h-0.5 bg-teal-600 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left" />
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 max-w-4xl mx-auto bg-teal-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Need a Repair?</h3>
          <p className="text-teal-50 text-lg opacity-90">Schedule your maintenance or drop by for a estimate.</p>
        </div>
        <a href="#contact" className="relative z-10 px-8 py-4 bg-white text-teal-600 font-bold rounded-2xl hover:bg-teal-50 transition-colors whitespace-nowrap shadow-lg">
          Book Service Now
        </a>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </div>
    </section>
  );
}
