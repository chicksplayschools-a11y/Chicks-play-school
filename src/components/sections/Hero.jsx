import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-32 pb-20">
      {/* Background Video and Overlay Wrapper */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay to make the playful text pop professionally */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Chick Mascot positioned relative to the full screen */}
      <div className="absolute -right-10 md:-right-10 lg:right-0 -bottom-10 md:-bottom-20 lg:-bottom-24 hidden md:block z-30 pointer-events-none">
        <motion.img
          src="/chick-hero.png"
          alt="Hero Chick Mascot"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-48 h-48 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] object-contain drop-shadow-2xl"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">

        {/* Centered Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8 flex flex-col items-center"
        >
          <div className="inline-block px-3 py-1.5 sm:px-5 sm:py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-accent shadow-soft mb-2 border border-white whitespace-normal text-center max-w-[95vw]">
            Recognized by the Government of Telangana ✨
          </div>

          <h1 className="hero-title">
            Learning begins <br className="hidden sm:block" />
            with play!
          </h1>

          <p className="text-lg sm:text-2xl text-white font-medium max-w-3xl mx-auto drop-shadow-md px-2 sm:px-0">
            Step into a magical world of giggles, games, and growth! We make learning a joyful adventure for your little ones.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto shadow-float text-lg px-6 py-3 sm:text-xl sm:px-10 sm:py-4 group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Start the Adventure
              <motion.span
                className="ml-2 inline-block group-hover:translate-x-1 transition-transform"
              >
                →
              </motion.span>
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto text-lg px-6 py-3 sm:text-xl sm:px-10 sm:py-4 flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm border-transparent" onClick={() => window.location.href = 'tel:+918639851140'}>
              <span className="text-xl sm:text-2xl">✨</span> Let's Chat!
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
