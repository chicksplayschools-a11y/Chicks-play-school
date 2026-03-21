import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-secondary overflow-hidden pt-10 pb-20">
      {/* Background blobs/shapes */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-highlight/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[15%] text-4xl hidden md:block"
      >
        🌟
      </motion.div>
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-[15%] text-5xl hidden lg:block"
      >
        📚
      </motion.div>
      <motion.div 
        animate={{ y: [0, -10, 0] }} 
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-32 left-[10%] text-5xl hidden md:block"
      >
        ☁️
      </motion.div>
      <motion.div 
        animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-40 right-[10%] text-6xl hidden lg:block"
      >
        🪁
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-semibold text-accent shadow-soft mb-2 border border-accent/10">
              Trusted by parents in Old Alwal ✨
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-text leading-[1.1]">
              Learning by <span className="text-primary relative inline-block">
                Playing
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-highlight/40 pointer-events-none" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
                </svg>
              </span> <br />
              in a Safe & <br className="hidden lg:block"/> Caring Environment
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              A joyful space where your child grows with confidence, creativity, and care every single day.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button size="lg" className="w-full sm:w-auto shadow-float text-lg group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Book a Visit
                <motion.span 
                  className="ml-2 inline-block group-hover:translate-x-1 transition-transform"
                >
                  →
                </motion.span>
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto text-lg flex items-center justify-center gap-2" onClick={() => window.location.href='tel:+911234567890'}>
                <span className="text-xl">📞</span> Call Now
              </Button>
            </div>
          </motion.div>

          {/* Hero Image/Illustration Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Illustration specific to 'Chicks' theme */}
            <div className="relative w-full max-w-md mx-auto aspect-square">
              {/* Central blob backing */}
              <div className="absolute inset-0 bg-primary/30 rounded-full filter blur-xl animate-pulse flex items-center justify-center"></div>
              
              {/* 3D-style Chick Placeholder (Using large emoji + rich styling for now to emulate 'illustration', or custom CSS shapes) */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-white rounded-[40%] shadow-float overflow-hidden border-8 border-white"
                style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }} /* Custom blob shape */
              >
                 <img src="/chick.jpg" alt="Chick Character" className="w-full h-full object-cover" />
                 
                 {/* Decorative elements inside the image container */}
                 <div className="absolute top-10 right-10 text-4xl">✨</div>
                 <div className="absolute bottom-10 left-10 text-4xl">🎨</div>
              </motion.div>

              {/* Floating review card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-4 rounded-2xl shadow-float z-20 flex items-center gap-3 border border-gray-100"
              >
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-blue-600 font-bold text-xs shadow-sm">P1</div>
                  <div className="w-10 h-10 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-green-600 font-bold text-xs shadow-sm">P2</div>
                  <div className="w-10 h-10 rounded-full bg-primary-light border-2 border-white flex items-center justify-center text-text font-bold text-xs shadow-sm">+98</div>
                </div>
                <div>
                  <div className="flex text-primary text-sm">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <div className="text-xs font-semibold text-gray-600">Loved by 100+ Parents</div>
                </div>
              </motion.div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
