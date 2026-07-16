import { motion } from 'framer-motion';
import Section from '../Section';

const points = [
  { icon: '❤️', title: 'Play-based Learning' },
  { icon: '🧠', title: 'Innovative Skills' },
  { icon: '🎨', title: 'Every week Activity' },
  { icon: '👶', title: 'Performance Hall' },
  { icon: '🏡', title: 'Safe and Secure play area' },
];

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us" bg="bg-transparent" className="!overflow-visible relative">
      {/* Background Decor Mascots */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40 lg:opacity-100">
        <motion.img
          src="/chick-whyus-left.png"
          alt="Why Choose Us Left Mascot"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute top-10 -left-4 w-24 h-24 md:-top-[200px] md:-left-10 md:w-64 md:h-64 lg:-top-[520px] lg:-left-[120px] lg:w-[600px] lg:h-[600px] object-contain drop-shadow-xl"
          style={{ animation: 'float 2.5s ease-in-out infinite' }}
        />
        <motion.img
          src="/chick-whyus-right.png"
          alt="Why Choose Us Right Mascot"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute top-40 -right-4 w-24 h-24 md:-top-[200px] md:-right-10 md:w-64 md:h-64 lg:-top-[480px] lg:-right-[110px] lg:w-[600px] lg:h-[600px] object-contain drop-shadow-xl"
          style={{ animation: 'float 2.5s ease-in-out infinite' }}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Text Area */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-highlight/10 rounded-full text-sm font-semibold text-highlight shadow-sm mb-4"
          >
            💡 Why Choose Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold font-heading text-text mb-8"
          >
            Why Parents Choose Chicks Play School
          </motion.h2>

          <div className="space-y-6">
            {points.map((pt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-2xl shadow-sm border border-transparent group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors">
                  {pt.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800">
                  {pt.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-[3rem] overflow-hidden bg-primary shadow-float aspect-square flex items-center justify-center border-8 border-white p-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent"></div>

            {/* Abstract arrangement of learning blobs */}
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute w-[120%] h-[120%] border-4 border-dashed border-white/30 rounded-full"></motion.div>

              <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 left-10 text-7xl drop-shadow-lg">🖍️</motion.div>
              <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-10 right-10 text-8xl drop-shadow-lg">🧸</motion.div>
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4.5, repeat: Infinity }} className="absolute top-1/2 right-4 text-6xl drop-shadow-lg">🧩</motion.div>

              <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-float z-10 border-4 border-primary overflow-hidden">
                <img src="/chick.jpg" alt="Chick" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
