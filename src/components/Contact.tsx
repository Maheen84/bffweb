import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Bike } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import MapSection from "./MapSection";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div>
          <span className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Visit Our Shop in <span className="text-teal-600 italic font-serif">Bucktown</span></h2>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Our Address</p>
                <address className="text-slate-900 text-xl font-bold not-italic leading-tight">
                  2056 N Damen Ave <br />
                  Chicago, IL 60647
                </address>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Email Us</p>
                <a href="mailto:biztechresourceanalyst@gmail.com" className="text-teal-600 text-xl font-bold hover:underline">
                  biztechresourceanalyst@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Call Us</p>
                <a href="tel:+17736610703" className="text-slate-900 text-xl font-bold hover:text-teal-600 transition-colors">
                  (773) 661-0703
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] border-8 border-white">
            <MapSection />
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl relative mt-12 lg:mt-0">
          <div className="absolute top-0 right-0 p-8 hidden md:block">
            <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center -mr-12 -mt-12 rotate-12">
              <Bike className="text-teal-200" size={48} />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h3>
          <p className="text-slate-500 mb-10">Have questions about a bike or service? Fill out the form below and we'll get back to you shortly.</p>

          <AnimatePresence mode="wait">
            {formState === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-20 h-20 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                <p className="text-slate-500 mb-8">Thanks for reaching out. Gillian or one of our team members will be in touch soon.</p>
                <button
                  onClick={() => setFormState("idle")}
                  className="text-teal-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Your Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Subject</label>
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all">
                    <option>General Inquiry</option>
                    <option>Repair Appointment</option>
                    <option>Bike Fitting</option>
                    <option>Product Question</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Your Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none"
                    placeholder="How can we help you today?"
                  />
                </div>

                <button
                  disabled={formState === "sending"}
                  type="submit"
                  className="w-full py-5 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-teal-500/30 flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70"
                >
                  {formState === "sending" ? "Sending..." : "Send Message"}
                  <Send size={20} className={formState === "sending" ? "animate-pulse" : ""} />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
