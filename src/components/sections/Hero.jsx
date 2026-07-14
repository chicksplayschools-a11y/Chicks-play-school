import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Video (GIF) */}
      <video
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Dark overlay to make the playful text pop professionally */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        {/* Centered Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8 flex flex-col items-center"
        >
          <div className="inline-block px-5 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-accent shadow-soft mb-2 border border-white">
            Recognized by the Government of Telangana ✨
          </div>

          <h1 className="hero-title">
            Learning begins <br />
            with play!
          </h1>

          <p className="text-xl sm:text-2xl text-white font-medium max-w-3xl mx-auto drop-shadow-md">
            Step into a magical world of giggles, games, and growth! We make learning a joyful adventure for your little ones.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto shadow-float text-xl px-10 py-4 group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Start the Adventure
              <motion.span
                className="ml-2 inline-block group-hover:translate-x-1 transition-transform"
              >
                →
              </motion.span>
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto text-xl px-10 py-4 flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm border-transparent" onClick={() => window.location.href = 'tel:+911234567890'}>
              <span className="text-2xl">✨</span> Let's Chat!
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
