import logo from "../assets/logo.png";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-emerald-700 text-white pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full"></div>
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 ml-8">
              <img src={logo} alt="logo" className="w-20 h-20 p-1" />
              <span className="font-bold text-2xl text-green-400">
                Paw <span className="text-white">Care</span>
              </span>
            </div>
            <p className="text-emerald-100/60 max-w-sm leading-relaxed text-lg">
              At PawCare, we treat every pet like family. Our dedicated team
              provides trusted, compassionate care to keep your furry companions
              healthy, happy, and full of life.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a
                  href="#"
                  key={index}
                  className="w-10 h-10 rounded-full border border-emerald-800 flex items-center justify-center 
                hover:bg-emerald-500 hover:border-emerald-500 hover:text-emerald-950 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2rem] text-emerald-400">
                Navigation
              </h4>
              <ul className="space-y-4">
                {["About Us", "Services", "Our Vets", "Booking"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group flex items-center gap-1 text-sm text-emerald-100/50 
                    hover:text-white transition-colors"
                    >
                      {link}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2rem] text-emerald-400">
                Help
              </h4>
              <ul className="space-y-4">
                {["Emergency", "FAQs", "Location", "Terms"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group flex items-center gap-1 text-sm text-emerald-100/50 
                    hover:text-white transition-colors"
                    >
                      {link}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2rem] text-emerald-400">
              Quick Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-emerald-900/30 rounded-2xl border border-emerald-800/50">
                <Mail size={16} className="text-emerald-400" />
                <span className="text-sm font-medium">+1 (555) 900 - 346</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-emerald-900/30 rounded-2xl border border-emerald-800/50">
                <Phone size={16} className="text-emerald-400" />
                <span className="text-sm font-medium">care@happypaws.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
