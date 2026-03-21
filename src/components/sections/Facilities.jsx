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
    <Section id="facilities" bg="bg-white" className="overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Text Area */}
        <div className="w-full lg:w-1/3 space-y-6">
           <motion.h2 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-4xl sm:text-5xl font-bold font-heading text-text leading-tight"
           >
             A Safe & Happy <br/> <span className="text-primary">Learning Environment</span>
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
                className="flex-[0_0_80%] sm:flex-[0_0_40%] bg-secondary rounded-[2rem] p-8 snap-center flex flex-col items-center justify-center text-center shadow-soft border-2 border-white hover:border-primary/30 transition-colors"
                style={{ scrollSnapAlign: 'center' }}
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-sm mb-6">
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
