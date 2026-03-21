import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-2xl shadow-sm">
                🐥
              </div>
              <span className="font-heading font-bold text-2xl text-text">
                Chicks Play School
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Chicks Play School is a trusted preschool in Old Alwal focused on nurturing young minds through play-based learning in a safe and caring environment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-accent hover:bg-primary transition-colors hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-accent hover:bg-primary transition-colors hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-accent hover:bg-primary transition-colors hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="font-bold font-heading text-xl mb-6 text-text">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Programs', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-600 hover:text-accent transition-colors flex items-center gap-2 group">
                    <span className="text-primary group-hover:translate-x-1 transition-transform">▸</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights Col */}
          <div>
            <h4 className="font-bold font-heading text-xl mb-6 text-text">Why Choose Us</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2"><span>✨</span> Safe Environment</li>
              <li className="flex items-center gap-2"><span>✨</span> Activity Based Learning</li>
              <li className="flex items-center gap-2"><span>✨</span> Passionate Teachers</li>
              <li className="flex items-center gap-2"><span>✨</span> Holistic Growth</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 mt-8 text-center sm:flex sm:justify-between sm:text-left text-gray-500 text-sm">
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
