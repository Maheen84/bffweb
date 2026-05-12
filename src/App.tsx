/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
