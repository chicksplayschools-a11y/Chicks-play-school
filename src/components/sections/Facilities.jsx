import { motion } from 'framer-motion';
import Section from '../Section';

const facilities = [
  { icon: '🏠', text: 'Clean and child-friendly classrooms' },
  { icon: '🎠', text: 'Safe indoor & outdoor play area' },
  { icon: '📚', text: 'Learning materials designed for young minds' },
  { icon: '👩‍🏫', text: 'Caring and trained teachers' },
  { icon: '🛡️', text: 'Safe and secure environment' },
];

export default function Facilities() {
  return (
    <Section id="facilities" bg="bg-transparent" className="!overflow-visible">
      {/* Background Decor Mascots */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-100">
        <motion.img
          src="/chick-facilities-left.png"
          alt="Facilities Left Mascot"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute sm:top-0 sm:-left-4 w-24 h-24 md:-top-[200px] md:w-64 md:h-64 lg:-top-[380px] lg:-left-10 lg:w-[450px] lg:h-[450px] object-contain drop-shadow-xl hidden md:block"
          style={{ animation: 'float 2.5s ease-in-out infinite' }}
        />
        <motion.img
          src="/chick-facilities-right.png"
          alt="Facilities Right Mascot"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute left-[25%] -translate-x-1/2 -top-[200px] w-56 h-56 md:left-auto md:translate-x-0 sm:top-40 sm:-right-4 md:-top-[180px] md:-right-[60px] md:w-64 md:h-64 lg:-top-[360px] lg:-right-[120px] lg:w-[450px] lg:h-[450px] object-contain drop-shadow-xl block"
          style={{ animation: 'float 2.5s ease-in-out infinite' }}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">

        {/* Text Area */}
        <div className="w-full lg:w-1/3 space-y-6 relative">


          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold font-heading text-text leading-tight"
          >
            A Safe & Happy <br /> <span className="text-primary">Learning Environment</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            We provide world-class facilities to ensure your child grows in a safe, secure, and joy-filled atmosphere.
          </motion.p>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
          <div className="flex overflow-x-auto gap-6 pb-8 pt-4 px-4 hide-scrollbar snap-x snap-mandatory lg:px-0">
            {facilities.map((fac, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex-[0_0_80%] sm:flex-[0_0_40%] bg-white rounded-[32px] p-8 snap-center flex flex-col items-center justify-center text-center shadow-[0_15px_50px_rgba(150,115,166,0.15)] border-2 border-primary/5 hover:-translate-y-[10px] transition-all relative overflow-hidden group"
                style={{ scrollSnapAlign: 'center' }}
              >
                {/* Floating shape top right */}
                <div className="absolute top-4 right-4 opacity-50 group-hover:animate-float text-primary">
                  ✦
                </div>

                <div className="w-20 h-20 bg-secondary/30 rounded-full flex items-center justify-center text-4xl mb-6 text-accent">
                  {fac.icon}
                </div>
                <h4 className="font-semibold text-lg text-text">
                  {fac.text}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
