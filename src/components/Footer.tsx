import { Bike, Instagram, Facebook, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div style={{ width: '100%', textAlign: 'center', padding: '20px', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f1f5f9' }}>
        <p style={{ fontSize: '1rem', fontWeight: 500, color: '#1e293b' }}>
          Designed & Developed by{" "}
          <a
            href="mailto:biztechresourceanalyst@gmail.com"
            style={{ fontWeight: 700, textDecoration: 'underline', cursor: 'pointer', border: 'none', outline: 'none' }}>
            BizTech Resource Analyst
          </a>
        </p>
      </div>

      <footer className="bg-slate-900 text-white pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                  <Bike size={24} />
                </div>
                <span className="text-2xl font-bold tracking-tighter">BFF BIKES</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-8">
                Chicago's community-focused bike shop. Since 2014, we've been helping riders of all levels find their perfect bike and keep it running smoothly.
              </p>
              <div className="flex gap-4">
                {[
                  { Icon: Instagram, href: "#" },
                  { Icon: Facebook, href: "#" },
                  { Icon: Twitter, href: "#" },
                  { Icon: Mail, href: "mailto:biztechresourceanalyst@gmail.com" }
                ].map(({ Icon, href }, i) => (
                  <a key={i} href={href} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white transition-all transform hover:-translate-y-1">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="#products" className="hover:text-teal-400 transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Shop Hours</h4>
            <ul className="space-y-4 text-slate-400 text-[1.1rem] font-semibold tracking-[0.3px]">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>11am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10am - 5pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>11am - 4pm</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-6">Get updates on group rides, classes, and new gear.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-slate-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-teal-500"
              />
              <button className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold transition-all shadow-lg active:scale-95">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} BFF Bikes, LLC. All rights reserved.</p>
          <div className="flex gap-4 text-xs">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  </>
  );
}
