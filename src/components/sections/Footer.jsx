import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
              </div>
              <span className="font-heading font-bold text-3xl text-white">
                Chicks Play School
              </span>
            </div>
            <p className="text-white/90 leading-[1.8] mb-6 text-lg">
              Chicks Play School is a trusted preschool in Old Alwal focused on nurturing young minds through play-based learning in a safe and caring environment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent hover:bg-white hover:scale-105 transition-all">
                <Facebook size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent hover:bg-white hover:scale-105 transition-all">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent hover:bg-white hover:scale-105 transition-all">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="font-bold font-heading text-2xl mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Programs', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/90 hover:text-accent transition-colors flex items-center gap-2 group text-lg">
                    <span className="text-accent group-hover:translate-x-1 transition-transform">▸</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights Col */}
          <div>
            <h4 className="font-bold font-heading text-2xl mb-6 text-white">Why Choose Us</h4>
            <ul className="space-y-3 text-white/90 text-lg">
              <li className="flex items-center gap-2"><span className="text-accent">✦</span> Safe Environment</li>
              <li className="flex items-center gap-2"><span className="text-accent">✦</span> Activity Based Learning</li>
              <li className="flex items-center gap-2"><span className="text-accent">✦</span> Passionate Teachers</li>
              <li className="flex items-center gap-2"><span className="text-accent">✦</span> Holistic Growth</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/20 pt-8 mt-8 text-center sm:flex sm:justify-between sm:text-left text-white/70 text-sm">
          <p>© {new Date().getFullYear()} Chicks Play School. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex gap-4 justify-center sm:justify-end">
             <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
